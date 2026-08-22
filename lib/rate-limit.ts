type Bucket = {
  count: number;
  windowStart: number;
};

const WINDOW_MS = 60_000;
const MAX_PER_WINDOW = 8;

const DAY_MS = 24 * 60 * 60 * 1000;
const MAX_PER_DAY = 60;

const minuteBuckets = new Map<string, Bucket>();
const dayBuckets = new Map<string, Bucket>();

function checkBucket(store: Map<string, Bucket>, key: string, windowMs: number, max: number) {
  const now = Date.now();
  const bucket = store.get(key);

  if (!bucket || now - bucket.windowStart >= windowMs) {
    store.set(key, { count: 1, windowStart: now });
    return { limited: false, retryAfterSeconds: 0 };
  }

  if (bucket.count >= max) {
    const retryAfterSeconds = Math.ceil((bucket.windowStart + windowMs - now) / 1000);
    return { limited: true, retryAfterSeconds };
  }

  bucket.count += 1;
  return { limited: false, retryAfterSeconds: 0 };
}

// Best-effort cleanup so the maps don't grow unbounded on a long-lived instance.
function sweep(store: Map<string, Bucket>, windowMs: number) {
  const now = Date.now();
  for (const [key, bucket] of store) {
    if (now - bucket.windowStart >= windowMs) store.delete(key);
  }
}

let lastSweep = 0;

export function checkRateLimit(ip: string) {
  const now = Date.now();
  if (now - lastSweep > DAY_MS) {
    sweep(minuteBuckets, WINDOW_MS);
    sweep(dayBuckets, DAY_MS);
    lastSweep = now;
  }

  const perMinute = checkBucket(minuteBuckets, ip, WINDOW_MS, MAX_PER_WINDOW);
  if (perMinute.limited) return perMinute;

  const perDay = checkBucket(dayBuckets, ip, DAY_MS, MAX_PER_DAY);
  return perDay;
}

export function getClientIp(req: Request): string {
  const forwardedFor = req.headers.get("x-forwarded-for");
  if (forwardedFor) return forwardedFor.split(",")[0]!.trim();

  const realIp = req.headers.get("x-real-ip");
  if (realIp) return realIp.trim();

  return "unknown";
}

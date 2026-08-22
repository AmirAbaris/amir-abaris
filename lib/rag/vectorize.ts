/**
 * Dependency-free TF-IDF vectorizer.
 *
 * The knowledge base is small and closed-vocabulary (a portfolio's own
 * content), so TF-IDF cosine similarity gives good enough retrieval without
 * pulling in a transformer model + native ONNX runtime — which this
 * environment can't reliably download.
 */

export type Vector = Record<string, number>;

function tokenize(text: string): string[] {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .split(/\s+/)
    .filter(Boolean);
}

function termFrequencies(tokens: string[]): Map<string, number> {
  const counts = new Map<string, number>();
  for (const token of tokens) {
    counts.set(token, (counts.get(token) ?? 0) + 1);
  }
  return counts;
}

export function buildVocabulary(documents: string[]) {
  const documentFrequency = new Map<string, number>();

  for (const doc of documents) {
    const uniqueTokens = new Set(tokenize(doc));
    for (const token of uniqueTokens) {
      documentFrequency.set(token, (documentFrequency.get(token) ?? 0) + 1);
    }
  }

  const idf = new Map<string, number>();
  const n = documents.length;
  for (const [token, df] of documentFrequency) {
    idf.set(token, Math.log((1 + n) / (1 + df)) + 1);
  }

  return idf;
}

export function vectorize(text: string, idf: Map<string, number>): Vector {
  const tokens = tokenize(text);
  const tf = termFrequencies(tokens);
  const vector: Vector = {};

  for (const [token, count] of tf) {
    const weight = idf.get(token);
    if (weight !== undefined) {
      vector[token] = (count / tokens.length) * weight;
    }
  }

  return vector;
}

export function cosineSimilarity(a: Vector, b: Vector): number {
  let dot = 0;
  let normA = 0;
  let normB = 0;

  for (const key in a) {
    normA += a[key] * a[key];
    if (key in b) dot += a[key] * b[key];
  }
  for (const key in b) {
    normB += b[key] * b[key];
  }

  if (normA === 0 || normB === 0) return 0;
  return dot / (Math.sqrt(normA) * Math.sqrt(normB));
}

export function BrandMark({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="28"
      height="28"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M20.5 16.5c0 4.1-3.1 7.2-7.1 7.2s-7.1-3.1-7.1-7.2 3.1-7.2 7.1-7.2 7.1 3.1 7.1 7.2Z"
        stroke="currentColor"
        strokeWidth="2.35"
      />
      <path d="M20.5 9.3v14.4" stroke="currentColor" strokeWidth="2.35" />
      <rect x="24" y="21.3" width="2.8" height="2.8" rx="0.3" fill="currentColor" />
    </svg>
  );
}

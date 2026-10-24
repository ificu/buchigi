import type { CSSProperties } from "react";

export function Checkmark({ size = 16, style }: { size?: number; style?: CSSProperties }) {
  return (
    <span aria-hidden="true" style={{ width: size, height: size, flex: "none", display: "inline-flex", alignItems: "center", justifyContent: "center", borderRadius: "var(--radius-full)", background: "var(--color-canvas)", color: "var(--color-semantic-success)", ...style }}>
      <svg width={size} height={size} viewBox="0 0 16 16" fill="none">
        <path d="M3.5 8.5l3 3 6-7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

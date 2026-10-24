import type { CSSProperties } from "react";

type Option = string | { value: string; label: string };

export function PillTabs({ options, value, onChange, style }: { options: Option[]; value: string; onChange?: (v: string) => void; style?: CSSProperties }) {
  return (
    <div
      role="tablist"
      style={{
        display: "inline-flex", gap: 4, padding: 4, background: "var(--color-canvas)",
        borderRadius: "var(--radius-pill)", boxShadow: "inset 0 0 0 1px var(--color-hairline)",
        maxWidth: "100%", overflowX: "auto", ...style,
      }}
    >
      {options.map((o) => {
        const opt = typeof o === "string" ? { value: o, label: o } : o;
        const sel = opt.value === value;
        return (
          <button
            key={opt.value}
            role="tab"
            aria-selected={sel}
            onClick={() => onChange?.(opt.value)}
            style={{
              border: "none", cursor: "pointer", whiteSpace: "nowrap", borderRadius: "var(--radius-pill)",
              padding: "8px 18px", fontFamily: "var(--font-sans)", fontSize: 16, fontWeight: 480,
              lineHeight: 1.4, letterSpacing: "-0.1px",
              background: sel ? "var(--color-primary)" : "transparent",
              color: sel ? "var(--color-on-primary)" : "var(--color-ink)",
              transition: "background var(--duration-base) var(--ease-standard)",
            }}
          >
            {opt.label}
          </button>
        );
      })}
    </div>
  );
}

import type { CSSProperties } from "react";

type Option = string | { value: string; label: string };

export function PillTabs({ options, value, onChange, style }: { options: Option[]; value: string; onChange?: (v: string) => void; style?: CSSProperties }) {
  return (
    <div
      role="tablist"
      style={{
        display: "inline-flex", gap: 6, padding: 6, background: "var(--color-canvas)",
        borderRadius: "var(--radius-btn)", boxShadow: "var(--elevation-1)",
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
              border: "none", cursor: "pointer", whiteSpace: "nowrap", borderRadius: "var(--radius-md)",
              padding: "10px 20px", fontFamily: "var(--font-sans)", fontSize: 16, fontWeight: sel ? 600 : 400,
              lineHeight: 1.4, letterSpacing: "-0.1px",
              background: sel ? "var(--color-primary)" : "rgba(237,237,237,0.35)",
              color: sel ? "var(--color-on-primary)" : "var(--color-roast)",
              transition: "background var(--duration-base) var(--ease-standard), color var(--duration-base)",
            }}
          >
            {opt.label}
          </button>
        );
      })}
    </div>
  );
}

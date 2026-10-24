import type { CSSProperties } from "react";

export function MarqueeStrip({ items, speed = 40, style }: { items: string[]; speed?: number; style?: CSSProperties }) {
  const row = items.concat(items);
  return (
    <div style={{ height: "var(--marquee-height)", background: "var(--color-coffee)", color: "var(--color-on-primary)", overflow: "hidden", display: "flex", alignItems: "center", ...style }}>
      <style>{"@keyframes bp-marquee{from{transform:translateX(0)}to{transform:translateX(-50%)}}"}</style>
      <div style={{ display: "flex", gap: 48, whiteSpace: "nowrap", animation: `bp-marquee ${speed}s linear infinite`, paddingLeft: 48 }}>
        {row.map((t, i) => (
          <span key={i} className="t-body-sm" style={{ fontWeight: 600, display: "inline-flex", alignItems: "center", gap: 48 }}>
            {t}<span aria-hidden="true" style={{ width: 6, height: 6, borderRadius: "50%", background: "rgba(255,255,255,.6)" }} />
          </span>
        ))}
      </div>
    </div>
  );
}

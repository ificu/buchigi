import type { CSSProperties, ReactNode } from "react";
import { Checkmark } from "./Checkmark";

interface PricingCardProps {
  tier: string;
  price: ReactNode;
  cadence?: string;
  description?: ReactNode;
  features?: string[];
  cta?: ReactNode;
  highlighted?: boolean;
  style?: CSSProperties;
}

export function PricingCard({ tier, price, cadence, description, features = [], cta, highlighted = false, style }: PricingCardProps) {
  return (
    <article style={{ background: "var(--color-canvas)", color: "var(--color-ink)", borderRadius: "var(--radius-lg)", padding: "var(--space-lg)", boxShadow: highlighted ? "inset 0 0 0 2px var(--color-coffee), var(--elevation-2)" : "var(--elevation-1)", display: "flex", flexDirection: "column", gap: "var(--space-md)", minWidth: 0, ...style }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 8 }}>
        <div className="t-card-title">{tier}</div>
        {highlighted && <span style={{ background: "var(--color-promo)", color: "#fff", borderRadius: "var(--radius-sm)", padding: "4px 10px", fontSize: 14, fontWeight: 600, lineHeight: 1.3 }}>추천</span>}
      </div>
      <div style={{ display: "flex", alignItems: "baseline", gap: 6 }}>
        <span style={{ fontSize: 42, fontWeight: 600, letterSpacing: "-1px", lineHeight: 1, color: highlighted ? "var(--color-coffee)" : undefined }}>{price}</span>
        {cadence && <span className="t-body-sm" style={{ color: "var(--text-muted)" }}>{cadence}</span>}
      </div>
      {description && <p className="t-body-sm" style={{ margin: 0, color: "var(--text-muted)" }}>{description}</p>}
      {cta}
      {features.length > 0 && (
        <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 10, borderTop: "1px solid var(--color-hairline-soft)", paddingTop: "var(--space-md)" }}>
          {features.map((f, i) => (
            <li key={i} className="t-body-sm" style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
              <Checkmark style={{ marginTop: 3 }} />{f}
            </li>
          ))}
        </ul>
      )}
    </article>
  );
}

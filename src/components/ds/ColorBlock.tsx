import type { CSSProperties, ReactNode } from "react";

export type BlockColor = "lime" | "lilac" | "cream" | "mint" | "pink" | "coral" | "navy" | "black";

interface ColorBlockProps {
  color?: BlockColor;
  eyebrow?: ReactNode;
  title?: ReactNode;
  body?: ReactNode;
  actions?: ReactNode;
  align?: "start" | "center";
  children?: ReactNode;
  style?: CSSProperties;
}

const DARK: Partial<Record<BlockColor, true>> = { navy: true, black: true };

export function ColorBlock({ color = "lime", eyebrow, title, body, actions, align = "start", children, style }: ColorBlockProps) {
  const center = align === "center";
  return (
    <section
      className="cblock"
      style={{
        background: color === "black" ? "var(--color-inverse-canvas)" : `var(--color-block-${color})`,
        color: DARK[color] ? "var(--color-inverse-ink)" : "var(--color-ink)",
        borderRadius: "var(--radius-lg)", padding: "var(--space-xxl)",
        display: "flex", flexDirection: "column", gap: "var(--space-xl)",
        alignItems: center ? "center" : "stretch", textAlign: center ? "center" : "left", ...style,
      }}
    >
      {(eyebrow || title || body || actions) && (
        <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-md)", maxWidth: 760, alignItems: center ? "center" : "flex-start" }}>
          {eyebrow && <div className="t-eyebrow">{eyebrow}</div>}
          {title && <h2 className="t-display-lg" style={{ margin: 0, textWrap: "balance" }}>{title}</h2>}
          {body && <p className="t-subhead" style={{ margin: 0, textWrap: "pretty" }}>{body}</p>}
          {actions && <div style={{ display: "flex", gap: "var(--space-sm)", flexWrap: "wrap", marginTop: "var(--space-xs)" }}>{actions}</div>}
        </div>
      )}
      {children}
    </section>
  );
}

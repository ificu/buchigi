import { useState, type ButtonHTMLAttributes, type CSSProperties, type ReactNode } from "react";

export type ButtonVariant = "primary" | "secondary" | "outline" | "tertiary" | "magenta" | "inverse";

const VARIANTS: Record<ButtonVariant, CSSProperties> = {
  primary: { background: "var(--color-primary)", color: "var(--color-on-primary)", padding: "14px 24px" },
  secondary: { background: "var(--color-coffee-soft)", color: "var(--color-coffee-strong)", padding: "14px 24px" },
  outline: { background: "var(--color-canvas)", color: "var(--color-ink)", padding: "14px 24px", boxShadow: "inset 0 0 0 1px var(--color-hairline)" },
  tertiary: { background: "transparent", color: "var(--color-ink)", padding: "var(--space-xs) var(--space-sm)", borderRadius: "var(--radius-md)" },
  magenta: { background: "var(--color-accent-magenta)", color: "var(--color-on-primary)", padding: "14px 24px" },
  inverse: { background: "var(--color-canvas)", color: "var(--color-ink)", padding: "14px 24px" },
};

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: "sm" | "md";
  fullWidth?: boolean;
  iconStart?: ReactNode;
  iconEnd?: ReactNode;
}

export function Button({ variant = "primary", size = "md", fullWidth = false, disabled = false, iconStart, iconEnd, children, style, ...rest }: ButtonProps) {
  const [pressed, setPressed] = useState(false);
  const [hover, setHover] = useState(false);
  const sm = size === "sm";
  return (
    <button
      disabled={disabled}
      onPointerDown={() => setPressed(true)}
      onPointerUp={() => setPressed(false)}
      onPointerLeave={() => { setPressed(false); setHover(false); }}
      onPointerEnter={() => setHover(true)}
      style={{
        display: fullWidth ? "flex" : "inline-flex",
        width: fullWidth ? "100%" : undefined,
        alignItems: "center", justifyContent: "center", gap: 8,
        border: "none", cursor: disabled ? "not-allowed" : "pointer",
        fontFamily: "var(--font-sans)", fontSize: sm ? 16 : "var(--button-size)",
        fontWeight: "var(--button-weight)", lineHeight: "var(--button-lh)", letterSpacing: "var(--button-ls)",
        borderRadius: sm ? "var(--radius-md)" : "var(--radius-btn)", minHeight: sm ? 40 : 56, whiteSpace: "nowrap",
        textDecoration: variant === "tertiary" && hover ? "underline" : "none", textUnderlineOffset: 4,
        opacity: disabled ? 0.35 : 1,
        transform: pressed && !disabled ? "scale(var(--press-scale))" : "none",
        transition: "transform var(--duration-fast) var(--ease-standard), background var(--duration-base), box-shadow var(--duration-base)",
        ...VARIANTS[variant],
        ...(sm && variant !== "tertiary" ? { padding: "8px 16px" } : {}),
        ...(hover && !disabled && (variant === "primary" || variant === "magenta") ? { background: "var(--color-coffee-strong)" } : {}),
        ...(hover && !disabled && variant === "secondary" ? { background: "var(--color-block-mint)" } : {}),
        ...(hover && !disabled && variant === "outline" ? { boxShadow: "inset 0 0 0 1px var(--color-coffee)", color: "var(--color-coffee-strong)" } : {}),
        ...(hover && !disabled && variant === "inverse" ? { background: "var(--color-coffee-soft)" } : {}),
        ...style,
      }}
      {...rest}
    >
      {iconStart}
      {children}
      {iconEnd}
    </button>
  );
}

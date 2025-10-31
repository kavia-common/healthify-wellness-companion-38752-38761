import theme from "../../theme/oceanTheme";

// PUBLIC_INTERFACE
export default function Button({ children, onClick, variant="primary", block=false, ...rest }) {
  /** Theme-aware button with retro outline focus. */
  const bg = variant === "secondary" ? theme.colors.secondary : theme.colors.primary;
  return (
    <button
      onClick={onClick}
      style={{
        background: bg,
        color: "#0b1220",
        padding: "10px 14px",
        borderRadius: 10,
        border: "1px solid rgba(255,255,255,0.08)",
        boxShadow: "0 6px 18px rgba(0,0,0,0.25)",
        cursor: "pointer",
        width: block ? "100%" : undefined
      }}
      onFocus={(e) => e.currentTarget.style.boxShadow = `var(--ring)`}
      onBlur={(e) => e.currentTarget.style.boxShadow = "0 6px 18px rgba(0,0,0,0.25)"}
      {...rest}
    >
      {children}
    </button>
  );
}

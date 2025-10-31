import theme from "../../theme/oceanTheme";

// PUBLIC_INTERFACE
export default function Card({ title, right, children, style }) {
  /** Surface card with subtle gradient and border. */
  return (
    <div className="card" style={{ ...style, background: `linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.00))`, border: `1px solid ${theme.colors.border}` }}>
      {(title || right) && (
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 8 }}>
          <div style={{ fontWeight: 600, color: theme.colors.text }}>{title}</div>
          <div>{right}</div>
        </div>
      )}
      {children}
    </div>
  );
}

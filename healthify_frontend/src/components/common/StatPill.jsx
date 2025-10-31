import theme from "../../theme/oceanTheme";

// PUBLIC_INTERFACE
export default function StatPill({ label, value }) {
  /** Compact stat pill. */
  return (
    <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "6px 10px", borderRadius: 999, border: `1px solid ${theme.colors.border}`, background: theme.colors.surface }}>
      <span style={{ color: theme.colors.textMuted, fontSize: 12 }}>{label}</span>
      <strong style={{ color: theme.colors.text }}>{value}</strong>
    </div>
  );
}

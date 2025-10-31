import theme from "../../theme/oceanTheme";

// PUBLIC_INTERFACE
export default function Loader({ label="Loading..." }) {
  /** Simple spinner loader. */
  return (
    <div role="status" aria-live="polite" style={{ display: "flex", alignItems: "center", gap: 8 }}>
      <div style={{ width: 14, height: 14, border: `2px solid ${theme.colors.primarySoft}`, borderTopColor: theme.colors.primary, borderRadius: "50%", animation: "spin 1s linear infinite" }} />
      <span style={{ color: theme.colors.textMuted }}>{label}</span>
      <style>{`@keyframes spin { to { transform: rotate(360deg) } }`}</style>
    </div>
  );
}

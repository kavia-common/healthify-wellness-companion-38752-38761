import theme from "../../theme/oceanTheme";

// PUBLIC_INTERFACE
export default function Toast({ message, onClose }) {
  /** Floating toast message. */
  if (!message) return null;
  return (
    <div role="status" style={{ position: "fixed", bottom: 16, right: 16, background: theme.colors.card, border: `1px solid ${theme.colors.border}`, padding: "10px 14px", borderRadius: 10, boxShadow: theme.shadows?.card || "0 10px 30px rgba(0,0,0,0.25)" }}>
      <span>{message}</span>
      <button onClick={onClose} aria-label="Close" style={{ marginLeft: 12, background: theme.colors.primary, color: "#0b1220", border: 0, borderRadius: 8, padding: "6px 10px", cursor: "pointer" }}>Close</button>
    </div>
  );
}

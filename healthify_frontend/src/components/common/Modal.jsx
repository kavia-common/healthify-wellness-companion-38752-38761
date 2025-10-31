import theme from "../../theme/oceanTheme";

// PUBLIC_INTERFACE
export default function Modal({ open, title, onClose, children }) {
  /** Basic modal dialog. */
  if (!open) return null;
  return (
    <div role="dialog" aria-modal="true" style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.5)", display: "flex", alignItems: "center", justifyContent: "center", padding: 16, zIndex: 50 }} onClick={onClose}>
      <div className="card" style={{ maxWidth: 540, width: "100%", background: theme.colors.card }} onClick={e => e.stopPropagation()}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 10 }}>
          <strong>{title}</strong>
          <button onClick={onClose} aria-label="Close" style={{ background: "transparent", color: theme.colors.text, border: 0, cursor: "pointer" }}>✕</button>
        </div>
        {children}
      </div>
    </div>
  );
}

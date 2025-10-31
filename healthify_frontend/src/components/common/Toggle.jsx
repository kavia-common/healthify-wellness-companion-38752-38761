import theme from "../../theme/oceanTheme";

// PUBLIC_INTERFACE
export default function Toggle({ checked, onChange, label }) {
  /** Accessible toggle switch. */
  return (
    <label style={{ display: "inline-flex", alignItems: "center", gap: 10, cursor: "pointer" }}>
      <input type="checkbox" checked={checked} onChange={e => onChange(e.target.checked)} className="visually-hidden" />
      <span aria-hidden style={{
        display: "inline-block", width: 44, height: 26, background: checked ? theme.colors.primary : theme.colors.border, borderRadius: 999, position: "relative", transition: "all .2s"
      }}>
        <span style={{ position: "absolute", top: 3, left: checked ? 22 : 3, width: 20, height: 20, background: "#0b1220", borderRadius: "50%", transition: "left .2s" }} />
      </span>
      {label && <span>{label}</span>}
    </label>
  );
}

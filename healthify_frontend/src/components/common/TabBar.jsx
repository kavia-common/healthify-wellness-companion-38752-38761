import { NavLink } from "react-router-dom";
import Icon from "./Icon";
import theme from "../../theme/oceanTheme";
import { tabs } from "../../config/navigation";

// PUBLIC_INTERFACE
export default function TabBar() {
  /** Bottom tab bar navigation (mobile-first). */
  return (
    <div role="navigation" aria-label="Bottom Tabs" style={{
      position: "sticky",
      bottom: 0,
      background: theme.colors.surface,
      borderTop: `1px solid ${theme.colors.border}`,
      display: "grid",
      gridTemplateColumns: `repeat(${tabs.length}, 1fr)`,
      gap: 4
    }}>
      {tabs.map(t => (
        <NavLink key={t.key} to={t.path} style={({ isActive }) => ({
          padding: "10px 4px",
          textAlign: "center",
          color: isActive ? theme.colors.primary : theme.colors.textMuted
        })}>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
            <Icon name={t.icon} />
            <span style={{ fontSize: 11 }}>{t.label}</span>
          </div>
        </NavLink>
      ))}
    </div>
  );
}

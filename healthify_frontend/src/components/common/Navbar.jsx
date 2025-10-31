import { Link, useLocation } from "react-router-dom";
import Icon from "./Icon";
import theme from "../../theme/oceanTheme";
import { APP_NAME } from "../../config/constants";

// PUBLIC_INTERFACE
export default function Navbar() {
  /** Top navbar with app title and retro accent. */
  const loc = useLocation();
  return (
    <nav className="card" aria-label="Top Navigation" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px 14px", position: "sticky", top: 0, zIndex: 10, background: theme.colors.surface }}>
      <Link to="/" style={{ display: "inline-flex", alignItems: "center", gap: 10 }}>
        <Icon name="dashboard" />
        <strong style={{ letterSpacing: 0.3 }}>{APP_NAME}</strong>
      </Link>
      <div style={{ fontSize: 12, color: theme.colors.textMuted }}>{loc.pathname}</div>
    </nav>
  );
}

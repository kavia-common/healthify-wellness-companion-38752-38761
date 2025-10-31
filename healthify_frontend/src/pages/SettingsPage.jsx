import Navbar from "../components/common/Navbar";
import TabBar from "../components/common/TabBar";
import Toggle from "../components/common/Toggle";
import { useDispatch, useSelector } from "react-redux";
import { setTheme } from "../state/slices/uiSlice";

export default function SettingsPage() {
  const dispatch = useDispatch();
  const theme = useSelector(s => s.ui.theme);
  return (
    <div>
      <Navbar />
      <main className="container" style={{ display: "grid", gap: 12 }}>
        <div className="card">
          <Toggle label="Dark theme" checked={theme === "dark"} onChange={v => dispatch(setTheme(v ? "dark" : "light"))} />
        </div>
        <div className="card">
          <div>About: Healthify - Smart Health Companion</div>
        </div>
      </main>
      <TabBar />
    </div>
  );
}

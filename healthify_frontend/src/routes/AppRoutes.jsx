import { Routes, Route } from "react-router-dom";
import DashboardPage from "../pages/DashboardPage";
import PlannerPage from "../pages/PlannerPage";
import TrackerPage from "../pages/TrackerPage";
import MindMoodPage from "../pages/MindMoodPage";
import CoachPage from "../pages/CoachPage";
import SettingsPage from "../pages/SettingsPage";
import NotFound from "../pages/NotFound";
import { ENV } from "../config/env";

// PUBLIC_INTERFACE
export default function AppRoutes() {
  /** Defines application routes including a healthcheck endpoint route. */
  const HealthRoute = () => {
    return <pre aria-label="healthcheck">{JSON.stringify({ status: "OK" })}</pre>;
  };
  return (
    <Routes>
      <Route path="/" element={<DashboardPage />} />
      <Route path="/planner" element={<PlannerPage />} />
      <Route path="/tracker" element={<TrackerPage />} />
      <Route path="/mind" element={<MindMoodPage />} />
      <Route path="/coach" element={<CoachPage />} />
      <Route path="/settings" element={<SettingsPage />} />
      <Route path={ENV.HEALTHCHECK_PATH} element={<HealthRoute />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

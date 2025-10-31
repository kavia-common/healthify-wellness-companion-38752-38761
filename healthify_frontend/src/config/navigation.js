import { ROUTES } from "./constants";

export const tabs = [
  { key: "dashboard", label: "Dashboard", path: ROUTES.dashboard, icon: "dashboard" },
  { key: "planner", label: "Planner", path: ROUTES.planner, icon: "calendar" },
  { key: "tracker", label: "Tracker", path: ROUTES.tracker, icon: "activity" },
  { key: "mind", label: "Mind & Mood", path: ROUTES.mind, icon: "mood" },
  { key: "coach", label: "Coach", path: ROUTES.coach, icon: "bot" },
  { key: "settings", label: "Settings", path: ROUTES.settings, icon: "settings" },
];

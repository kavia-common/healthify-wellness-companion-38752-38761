import { apiGet, endpoints } from "../client";
import { adaptDashboard } from "../adapters";

// PUBLIC_INTERFACE
export async function fetchDashboard() {
  /** Fetch dashboard overview data using API client wrapper (auto-mock when backend absent). */
  const res = await apiGet(endpoints.dashboard);
  const data = await res.json();
  return adaptDashboard(data);
}

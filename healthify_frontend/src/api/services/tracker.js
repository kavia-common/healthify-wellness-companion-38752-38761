import { apiGet, apiPost, endpoints } from "../client";

// PUBLIC_INTERFACE
export async function saveMetric(payload) {
  /** Save tracker metric. */
  const res = await apiPost(endpoints.tracker, payload);
  return res.json();
}

// PUBLIC_INTERFACE
export async function health() {
  /** Health check endpoint for backend. */
  const res = await apiGet(endpoints.health);
  return res.json();
}

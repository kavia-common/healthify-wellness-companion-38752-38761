import { apiPost, endpoints } from "../client";

// PUBLIC_INTERFACE
export async function askCoach(message) {
  /** Sends a prompt to AI coach; mock returns stubbed suggestion. */
  const res = await apiPost(endpoints.coach, { message });
  return res.json();
}

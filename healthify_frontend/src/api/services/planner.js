import { apiPost, endpoints } from "../client";

// PUBLIC_INTERFACE
export async function scheduleWorkout(workout) {
  /** Schedule a workout in planner. */
  const res = await apiPost(endpoints.planner, { type: "workout", workout });
  return res.json();
}

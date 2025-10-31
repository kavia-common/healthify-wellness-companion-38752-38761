import { ENV, isMockMode } from "../config/env";
import { endpoints } from "./endpoints";
import { mockFetch } from "./mockServer";

// PUBLIC_INTERFACE
export async function apiGet(path) {
  /** GET request using configured API base; falls back to mock in absence of backend URL. */
  if (isMockMode()) return mockFetch(path, { method: "GET" });
  const url = `${ENV.API_BASE}${path}`;
  return fetch(url, { method: "GET", headers: { "Content-Type": "application/json" } });
}

// PUBLIC_INTERFACE
export async function apiPost(path, body) {
  /** POST request using configured API base; falls back to mock in absence of backend URL. */
  if (isMockMode()) return mockFetch(path, { method: "POST", body: JSON.stringify(body) });
  const url = `${ENV.API_BASE}${path}`;
  return fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) });
}

export { endpoints };

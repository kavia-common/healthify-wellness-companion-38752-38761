import { ENV, isMockMode, MOCK_MODE } from "../config/env";
import { endpoints } from "./endpoints";
import { mockFetch } from "./mockServer";

// Runtime cache to avoid repeated health checks
let backendHealthy = null;

/**
 * Attempt a lightweight health check if a backend URL is configured.
 * If the check fails, mark backend as unhealthy and continue in mock mode.
 */
async function ensureHealthIfNeeded() {
  if (MOCK_MODE) {
    backendHealthy = false;
    return false;
  }
  if (backendHealthy != null) return backendHealthy;

  try {
    const url = `${ENV.API_BASE}${endpoints.health}`;
    const res = await fetch(url, { method: "GET" });
    backendHealthy = !!res?.ok;
  } catch {
    backendHealthy = false;
  }
  return backendHealthy;
}

function shouldUseMock() {
  // If in build-time mock mode, always use mock.
  if (MOCK_MODE || isMockMode()) return true;
  // If we already probed health and it's bad, use mock.
  if (backendHealthy === false) return true;
  return false;
}

// PUBLIC_INTERFACE
export async function apiGet(path) {
  /** GET request using configured API base; falls back to mock in absence of backend URL or failing healthcheck. */
  // Optionally probe backend once
  await ensureHealthIfNeeded();

  if (shouldUseMock()) return mockFetch(path, { method: "GET" });
  const base = ENV.API_BASE;
  if (!base) return mockFetch(path, { method: "GET" }); // extra guard
  const url = `${base}${path}`;
  return fetch(url, { method: "GET", headers: { "Content-Type": "application/json" } });
}

// PUBLIC_INTERFACE
export async function apiPost(path, body) {
  /** POST request using configured API base; falls back to mock in absence of backend URL or failing healthcheck. */
  // Optionally probe backend once
  await ensureHealthIfNeeded();

  if (shouldUseMock()) return mockFetch(path, { method: "POST", body: JSON.stringify(body) });
  const base = ENV.API_BASE;
  if (!base) return mockFetch(path, { method: "POST", body: JSON.stringify(body) }); // extra guard
  const url = `${base}${path}`;
  return fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) });
}

export { endpoints };

import dash from "./mockData/dashboard.json";

// small delay utility
const delay = (ms=350) => new Promise(res => setTimeout(res, ms));

// PUBLIC_INTERFACE
export async function mockFetch(path, options = {}) {
  /** Mock server: returns canned data based on path; small artificial delay. */
  await delay(300);
  if (path.endsWith("/dashboard")) return ok(dash);
  if (path.endsWith("/health")) return ok({ status: "ok" });
  if (path.endsWith("/tracker")) return ok({ saved: true });
  if (path.endsWith("/planner")) return ok({ scheduled: true });
  if (path.endsWith("/coach")) return ok({ reply: "Stay hydrated and aim for a 20-minute walk today!" });
  return notFound();
}

function ok(data) {
  return { ok: true, status: 200, json: async () => data };
}
function notFound() {
  return { ok: false, status: 404, json: async () => ({ error: "Not found" }) };
}

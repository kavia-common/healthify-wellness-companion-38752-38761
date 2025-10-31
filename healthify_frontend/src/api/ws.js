import { ENV, isMockMode } from "../config/env";

// PUBLIC_INTERFACE
export function createWSClient(path="/ws") {
  /** Creates a WebSocket client using REACT_APP_WS_URL or API_BASE; returns a stub in mock mode. */
  if (isMockMode()) {
    return { onmessage: null, send: () => {}, close: () => {}, mock: true };
  }
  const url = (ENV.WS_URL || ENV.API_BASE.replace(/^http/, "ws")) + path;
  const ws = new WebSocket(url);
  return ws;
}

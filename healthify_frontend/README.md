# Healthify Frontend

A smart health companion frontend with a retro Ocean Professional theme.

## Run

- Install dependencies: `npm install`
- Start dev server: `npm start`

The app auto-falls back to mock mode when no backend URL is provided.

## Env Variables (REACT_APP_*)

- REACT_APP_API_BASE or REACT_APP_BACKEND_URL: Backend base URL. If missing, mock mode is enabled.
  - Empty strings, the literal values `undefined`/`null`, or missing values are treated as not configured.
- REACT_APP_FRONTEND_URL: Optional public URL of the app.
- REACT_APP_WS_URL: Optional WebSocket URL.
- REACT_APP_NODE_ENV: Defaults to `development`.
- REACT_APP_ENABLE_SOURCE_MAPS: true/false.
- REACT_APP_PORT: Dev server port (CRA defaults to 3000).
- REACT_APP_TRUST_PROXY: true/false.
- REACT_APP_LOG_LEVEL: info/debug/warn/error.
- REACT_APP_HEALTHCHECK_PATH: Defaults to `/healthz`. The app serves a JSON OK at this path via the React router.
- REACT_APP_FEATURE_FLAGS: Comma-separated list, e.g. `newCharts,hydration`.
- REACT_APP_EXPERIMENTS_ENABLED: true/false.

Create an `.env.local` and set any of the above as needed.

## Mock Mode

- A build-time `MOCK_MODE` flag is exported from `src/config/env.js`. If both `REACT_APP_API_BASE` and `REACT_APP_BACKEND_URL` are falsy, `MOCK_MODE` is `true` and all API calls are routed to the in-app mock server.
- If a backend URL is provided but the runtime healthcheck fails once, the client auto-falls back to mock responses to avoid `TypeError: Failed to fetch`.
- No calls are made to an undefined or empty base URL.

When in mock mode, an in-app mock server provides demo data with a small artificial delay. Charts render demo data and Coach chat replies with a canned response.

## Routes

- `/` Dashboard
- `/planner`
- `/tracker`
- `/mind`
- `/coach`
- `/settings`
- Healthcheck: `/healthz` (configurable via env)

## Tech

- React 18
- React Router v6
- Redux Toolkit + React Redux
- Recharts
- date-fns

## Accessibility

- Keyboard focus styles
- Semantic roles for nav, dialog, status

const normalize = (v) => {
  // Ensure empty strings or 'undefined'/'null' do not count as truthy backend URL
  const s = (v || "").toString().trim();
  if (!s) return "";
  if (s.toLowerCase() === "undefined") return "";
  if (s.toLowerCase() === "null") return "";
  return s;
};

const REACT_APP_API_BASE = normalize(process.env.REACT_APP_API_BASE);
const REACT_APP_BACKEND_URL = normalize(process.env.REACT_APP_BACKEND_URL);

const API_BASE_RAW = REACT_APP_API_BASE || REACT_APP_BACKEND_URL;

// Safe normalized API_BASE (empty string when not configured)
const API_BASE = normalize(API_BASE_RAW);

const HAS_BACKEND = Boolean(API_BASE && API_BASE.length > 0);

// If no backend URLs are present, default to MOCK_MODE
const DEFAULT_MOCK_MODE = !HAS_BACKEND;

// PUBLIC_INTERFACE
export const ENV = {
  /** Public environment configuration resolved at build time. */
  API_BASE: API_BASE, // may be ""
  FRONTEND_URL: normalize(process.env.REACT_APP_FRONTEND_URL),
  WS_URL: normalize(process.env.REACT_APP_WS_URL),
  NODE_ENV: normalize(process.env.REACT_APP_NODE_ENV) || process.env.NODE_ENV || "development",
  ENABLE_SOURCE_MAPS: (normalize(process.env.REACT_APP_ENABLE_SOURCE_MAPS) || "true") === "true",
  PORT: normalize(process.env.REACT_APP_PORT) || "3000",
  TRUST_PROXY: (normalize(process.env.REACT_APP_TRUST_PROXY) || "false") === "true",
  LOG_LEVEL: normalize(process.env.REACT_APP_LOG_LEVEL) || "info",
  HEALTHCHECK_PATH: normalize(process.env.REACT_APP_HEALTHCHECK_PATH) || "/healthz",
  FEATURE_FLAGS: (normalize(process.env.REACT_APP_FEATURE_FLAGS) || "")
    .split(",")
    .map(s => s.trim())
    .filter(Boolean),
  EXPERIMENTS_ENABLED: (normalize(process.env.REACT_APP_EXPERIMENTS_ENABLED) || "false") === "true",
};

// Derived flag exported so other modules can branch on it
// PUBLIC_INTERFACE
export const MOCK_MODE = DEFAULT_MOCK_MODE;

// PUBLIC_INTERFACE
export const isMockMode = () => MOCK_MODE;

// PUBLIC_INTERFACE
export const hasFlag = (flag) => ENV.FEATURE_FLAGS.includes(flag);

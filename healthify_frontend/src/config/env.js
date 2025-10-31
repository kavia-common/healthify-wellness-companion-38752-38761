export const ENV = {
  API_BASE: process.env.REACT_APP_API_BASE || process.env.REACT_APP_BACKEND_URL || "",
  FRONTEND_URL: process.env.REACT_APP_FRONTEND_URL || "",
  WS_URL: process.env.REACT_APP_WS_URL || "",
  NODE_ENV: process.env.REACT_APP_NODE_ENV || process.env.NODE_ENV || "development",
  ENABLE_SOURCE_MAPS: (process.env.REACT_APP_ENABLE_SOURCE_MAPS || "true") === "true",
  PORT: process.env.REACT_APP_PORT || "3000",
  TRUST_PROXY: (process.env.REACT_APP_TRUST_PROXY || "false") === "true",
  LOG_LEVEL: process.env.REACT_APP_LOG_LEVEL || "info",
  HEALTHCHECK_PATH: process.env.REACT_APP_HEALTHCHECK_PATH || "/healthz",
  FEATURE_FLAGS: (process.env.REACT_APP_FEATURE_FLAGS || "").split(",").map(s => s.trim()).filter(Boolean),
  EXPERIMENTS_ENABLED: (process.env.REACT_APP_EXPERIMENTS_ENABLED || "false") === "true",
};

export const isMockMode = () => !ENV.API_BASE;

export const hasFlag = (flag) => ENV.FEATURE_FLAGS.includes(flag);

import { ENV } from "../config/env";

export const isEnabled = (flag) => ENV.FEATURE_FLAGS.includes(flag);
export const experimentsOn = () => ENV.EXPERIMENTS_ENABLED;

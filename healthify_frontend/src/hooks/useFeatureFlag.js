import { useMemo } from "react";
import { isEnabled } from "../utils/featureFlags";

export default function useFeatureFlag(flag) {
  return useMemo(() => isEnabled(flag), [flag]);
}

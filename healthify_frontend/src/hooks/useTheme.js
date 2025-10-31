import { useEffect, useState } from "react";
import { get, set } from "../utils/storage";

export default function useTheme(defaultTheme="dark") {
  const [theme, setTheme] = useState(get("theme", defaultTheme));
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    set("theme", theme);
  }, [theme]);
  return [theme, setTheme];
}

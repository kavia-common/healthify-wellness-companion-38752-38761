import React, { useEffect } from "react";
import "./App.css";
import AppRoutes from "./routes/AppRoutes";
import { useDispatch, useSelector } from "react-redux";
import { setTheme } from "./state/slices/uiSlice";

// PUBLIC_INTERFACE
function App() {
  /** Root component handling theme attribute and nested routes. */
  const dispatch = useDispatch();
  const theme = useSelector(s => s.ui.theme);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <div className="App">
      <AppRoutes />
    </div>
  );
}

export default App;

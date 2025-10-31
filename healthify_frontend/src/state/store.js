import { configureStore } from "@reduxjs/toolkit";
import user from "./slices/userSlice";
import tracker from "./slices/trackerSlice";
import planner from "./slices/plannerSlice";
import coach from "./slices/coachSlice";
import ui from "./slices/uiSlice";

const store = configureStore({
  reducer: { user, tracker, planner, coach, ui }
});

export default store;

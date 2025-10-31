import { createSlice } from "@reduxjs/toolkit";

const initial = {
  steps: 5600, calories: 1800, sleepHours: 7.2, water: 6, mood: 4,
  weeklyActivity: []
};

const trackerSlice = createSlice({
  name: "tracker",
  initialState: initial,
  reducers: {
    // PUBLIC_INTERFACE
    setMetric(state, action) {
      const { key, value } = action.payload;
      state[key] = value;
    },
    // PUBLIC_INTERFACE
    setWeeklyActivity(state, action) {
      state.weeklyActivity = action.payload || [];
    }
  }
});

export const { setMetric, setWeeklyActivity } = trackerSlice.actions;
export default trackerSlice.reducer;

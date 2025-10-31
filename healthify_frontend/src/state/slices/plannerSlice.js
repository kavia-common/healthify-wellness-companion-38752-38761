import { createSlice } from "@reduxjs/toolkit";

const initial = { workouts: [], meals: [], habits: [] };

const plannerSlice = createSlice({
  name: "planner",
  initialState: initial,
  reducers: {
    // PUBLIC_INTERFACE
    addWorkout(state, action) { state.workouts.push(action.payload); },
    // PUBLIC_INTERFACE
    addMeal(state, action) { state.meals.push(action.payload); },
    // PUBLIC_INTERFACE
    addHabit(state, action) { state.habits.push(action.payload); }
  }
});

export const { addWorkout, addMeal, addHabit } = plannerSlice.actions;
export default plannerSlice.reducer;

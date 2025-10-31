import { createSlice } from "@reduxjs/toolkit";

const initial = { id: "demo", name: "Demo User", avatar: "", goals: { steps: 8000 } };

const userSlice = createSlice({
  name: "user",
  initialState: initial,
  reducers: {
    // PUBLIC_INTERFACE
    setUser(state, action) { return { ...state, ...action.payload }; },
    // PUBLIC_INTERFACE
    updateGoals(state, action) { state.goals = { ...state.goals, ...action.payload }; }
  }
});

export const { setUser, updateGoals } = userSlice.actions;
export default userSlice.reducer;

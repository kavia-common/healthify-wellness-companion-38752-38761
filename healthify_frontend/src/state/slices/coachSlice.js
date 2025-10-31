import { createSlice } from "@reduxjs/toolkit";

const initial = { recommendations: [], messages: [{ role: "assistant", content: "Hi! I'm your AI coach. Ask me anything." }] };

const coachSlice = createSlice({
  name: "coach",
  initialState: initial,
  reducers: {
    // PUBLIC_INTERFACE
    addRecommendation(state, action) { state.recommendations.push(action.payload); },
    // PUBLIC_INTERFACE
    addMessage(state, action) { state.messages.push(action.payload); }
  }
});

export const { addRecommendation, addMessage } = coachSlice.actions;
export default coachSlice.reducer;

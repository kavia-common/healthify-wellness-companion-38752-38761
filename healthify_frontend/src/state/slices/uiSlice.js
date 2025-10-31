import { createSlice } from "@reduxjs/toolkit";

const initial = { loading: false, toast: null, modal: null, theme: "dark" };

const uiSlice = createSlice({
  name: "ui",
  initialState: initial,
  reducers: {
    // PUBLIC_INTERFACE
    setLoading(state, action) { state.loading = !!action.payload; },
    // PUBLIC_INTERFACE
    showToast(state, action) { state.toast = action.payload; },
    // PUBLIC_INTERFACE
    hideToast(state) { state.toast = null; },
    // PUBLIC_INTERFACE
    openModal(state, action) { state.modal = action.payload; },
    // PUBLIC_INTERFACE
    closeModal(state) { state.modal = null; },
    // PUBLIC_INTERFACE
    setTheme(state, action) { state.theme = action.payload || "dark"; }
  }
});

export const { setLoading, showToast, hideToast, openModal, closeModal, setTheme } = uiSlice.actions;
export default uiSlice.reducer;

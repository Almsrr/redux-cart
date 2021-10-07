import { createSlice } from "@reduxjs/toolkit";

const defaultState = { cartVisibility: false, notification: null };
const uiSlice = createSlice({
  name: "iu",
  initialState: defaultState,
  reducers: {
    toggle(state) {
      state.cartVisibility = !state.cartVisibility;
    },
    showNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice.reducer;

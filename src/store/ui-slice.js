import { createSlice } from "@reduxjs/toolkit";

const defaultState = { cartVisibility: false };
const uiSlice = createSlice({
  name: "iu",
  initialState: defaultState,
  reducers: {
    toggle(state) {
      state.cartVisibility = !state.cartVisibility;
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const defaultState = {
  items: [],
  totalQuantity: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: defaultState,
  reducers: {
    addItem(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          title: newItem.title,
          price: newItem.price,
          quantity: newItem.quantity,
          totalPrice: newItem.price,
        });
      } else {
        existingItem.quantity = existingItem.quantity + newItem.quantity;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
      }
      state.totalQuantity++;
    },
    removeItem(state, action) {
      const removeItemId = action.payload;
      const exitingItem = state.items.find((item) => item.id === removeItemId);
      if (exitingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== removeItemId);
      } else {
        exitingItem.quantity--;
        exitingItem.totalPrice -= exitingItem.price;
      }
      state.totalQuantity--;
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;

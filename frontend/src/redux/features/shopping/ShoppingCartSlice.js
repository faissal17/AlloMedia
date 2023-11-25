import { createSlice } from "@reduxjs/toolkit";

const ShoppingCartState = {
  shoppingCart: [],
};

const ShoppingCartSlice = createSlice({
  name: "ShoppingCart",
  initialState: ShoppingCartState,
  reducers: {
    addOrderInCart: (state, action) => {
      let index = state.shoppingCart.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index !== -1) {
        state.shoppingCart[index].quantity += action.payload.quantity;
      } else {
        state.shoppingCart.push(action.payload);
      }
    },
    deleteOrderInCart: (state, action) => {
      let index = state.shoppingCart.findIndex(
        (item) => item.id === action.payload
      );
      state.shoppingCart.splice(index, 1);
    },
    deleteAll: (state, action) => {
      state.shoppingCart = [];
    },
    increment: (state, action) => {
      let index = state.shoppingCart.findIndex(
        (item) => item.id === action.payload
      );
      state.shoppingCart[index].quantity += 1;
    },
    decrement: (state, action) => {
      let index = state.shoppingCart.findIndex(
        (item) => item.id === action.payload
      );

      state.shoppingCart[index].quantity -= 1;

      if (state.shoppingCart[index].quantity === 0) {
        state.shoppingCart.splice(index, 1);
      }
    },
  },
});

export const {
  addOrderInCart,
  deleteOrderInCart,
  increment,
  decrement,
  deleteAll,
} = ShoppingCartSlice.actions;

export default ShoppingCartSlice.reducer;

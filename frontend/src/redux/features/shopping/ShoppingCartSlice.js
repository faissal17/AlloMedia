import { createSlice } from "@reduxjs/toolkit";

const ShoppingCartState = {
  shoppingCart: [
    {
      id: 0,
      name: "",
      picture: "",
      price: 0,
      quantity: 0,
    },
  ],
  total: 0,
};

const ShoppingCartSlice = createSlice({
  name: "ShoppingCart",
  initialState: ShoppingCartState,
  reducers: {
    addOrderInCart: (state, action) => {
      state.shoppingCart.push(action.payload);
      state.total += 1;
    },
    deleteOrderInCart: (state, action) => {
      state.shoppingCart.splice(action.payload, 1);
    },
    setShoppingCart: (state, action) => {
      state.shoppingCart = action.payload;
    },
    setTotal: (state, action) => {
      state.total = action.payload;
    },
    increment: (state, action) => {
      state.shoppingCart[action.payload].quantity += 1;
    },
    decrement: (state, action) => {
      state.shoppingCart[action.payload].quantity -= 1;
    },
  },
});

export const {
  addOrderInCart,
  setShoppingCart,
  setTotal,
  increment,
  decrement,
} = ShoppingCartSlice.actions;

export default ShoppingCartSlice.reducer;

import { configureStore, combineReducers } from "@reduxjs/toolkit";
import authSlice from "./features/auth/authSlice";
import mapSlice from "./features/map/mapSlice";
import { authApi } from "./service/auth/authApi";
import shoppingSlice from "./features/shopping/ShoppingCartSlice";



const rootReducer = combineReducers({
  auth: authSlice,
  [authApi.reducerPath]: authApi.reducer,
  map: mapSlice,
  shoppingcart: shoppingSlice,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware),
});

export default store;

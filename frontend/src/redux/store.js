import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./features/auth/authSlice";
import mapSlice from "./features/map/mapSlice";
import { authApi } from "./service/auth/authApi";

const store = configureStore({
  reducer: {
    auth: authSlice,
    [authApi.reducerPath]: authApi.reducer,
    map: mapSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware(authApi.middleware),
});

export default store;

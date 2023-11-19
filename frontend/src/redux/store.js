import { configureStore, combineReducers } from "@reduxjs/toolkit";
import authSlice from "./features/auth/authSlice";
import mapSlice from "./features/map/mapSlice";
import { authApi } from "./service/auth/authApi";

const rootReducer = combineReducers({
  auth: authSlice,
  [authApi.reducerPath]: authApi.reducer,
  map: mapSlice,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware),
});

export default store;

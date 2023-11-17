import { configureStore } from "@reduxjs/toolkit";
// import authSlice from "./features//auth/authSlice";
// import { authApi } from "./services/auth/authApi";
// import roleSlice from "./features/roles/roleSlice";
// import { roleApi } from "./services/role/roleApi";
import { authApi } from './slice/auth/authApi';
import authSlice from "./features/auth/authSlice";



const store = configureStore({
  reducer: {
    auth: authSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(),
});

export default store;

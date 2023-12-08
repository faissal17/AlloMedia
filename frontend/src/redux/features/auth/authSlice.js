import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const AuthState = {
  address: [],
  createdAt: null,
  deletedAt: null,
  email: null,
  first_name: null,
  isBlocked: null,
  last_name: null,
  loginCount: null,
  mobile: null,
  password: null,
  picture: null,
  refreshToken: null,
  role: {},
  search: [],
  updatedAt: null,
  username: null,
  verified: null,
  wishlist: [],
  __v: null,
  _id: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState: AuthState,
  reducers: {
    setlogin: (state, action) => {
      console.log(action.payload);
      state.address = action.payload?.content?.address;
      state.createdAt = action.payload?.content?.createdAt;
      state.deletedAt = action.payload?.content?.deletedAt;
      state.email = action.payload?.content?.email;
      state.first_name = action.payload?.content?.first_name;
      state.isBlocked = action.payload?.content?.isBlocked;
      state.last_name = action.payload?.content?.last_name;
      state.loginCount = action.payload?.content?.loginCount;
      state.mobile = action.payload?.content?.mobile;
      state.picture = action.payload?.content?.picture;
      state.role = action.payload?.content?.role;
      state.search = action.payload?.content?.search;
      state.updatedAt = action.payload?.content?.updatedAt;
      state.username = action.payload?.content?.username;
      state.verified = action.payload?.content?.verified;
      state.wishlist = action.payload?.content?.wishlist;
      state.__v = action.payload?.content?.__v;
      state._id = action.payload?.content?._id;

      localStorage.setItem(
        "USER",
        JSON.stringify({
          content: {
            address: action.payload?.content?.address,
            createdAt: action.payload?.content?.createdAt,
            deletedAt: action.payload?.content?.deletedAt,
            email: action.payload?.content?.email,
            first_name: action.payload?.content?.first_name,
            isBlocked: action.payload?.content?.isBlocked,
            last_name: action.payload?.content?.last_name,
            loginCount: action.payload?.content?.loginCount,
            mobile: action.payload?.content?.mobile,
            picture: action.payload?.content?.picture,
            role: action.payload?.content?.role,
            search: action.payload?.content?.search,
            updatedAt: action.payload?.content?.updatedAt,
            username: action.payload?.content?.username,
            verified: action.payload?.content?.verified,
            wishlist: action.payload?.content?.wishlist,
            __v: action.payload?.content?.__v,
            _id: action.payload?.content?._id,
          },
        })
      );
    },
    logout: async (state) => {
      state.user = null;
      state.isAuth = false;
      console.log("logout");
      localStorage.removeItem("USER");
      await Cookies.remove("_cks_ui");
    },
    register: (state, action) => {
      state.user = action.payload;
      state.isAuth = false;
    },
    getMe: (state, action) => {
      state.user = action.payload;
      state.isAuth = true;
    },
  },
});

export const { setlogin, logout, register, getMe } = authSlice.actions;

export default authSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const MapState = {
  location: {
    lat: 0,
    lng: 0,
  },
};

const mapSlice = createSlice({
  name: "map",
  initialState: MapState,
  reducers: {
    setMap: (state, action) => {
      state.location = action.payload;
    },
  },
});

export const { setMap } = mapSlice.actions;

export default mapSlice.reducer;

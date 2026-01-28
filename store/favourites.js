import { createSlice } from "@reduxjs/toolkit";

const favouriteSlice = createSlice({
  name: "favourites",
  initialState: {
    ids: [],
    isAuthenticated: false,
    token: "",
  },
  reducers: {
    addFavourite: (state, action) => {
      state.ids.push(action.payload.id);
    },
    removeFavourite: (state, action) => {
      state.ids.splice((state.ids.indexOf(action.payload.id), 1));
    },

    addAuthentication: (state, action) => {
      state.isAuthenticated = true;
      state.token = action.payload;
    },
    removeAuthentication: (state, action) => {
      state.isAuthenticated = false;
      state.token = "";
    },
  },
});

export const {
  addFavourite,
  removeFavourite,
  addAuthentication,
  removeAuthentication,
} = favouriteSlice.actions;

export default favouriteSlice.reducer;

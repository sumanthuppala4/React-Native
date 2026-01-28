import { createSlice } from "@reduxjs/toolkit";

const favouriteSlice = createSlice({
  name: "favourites",
  initialState: {
    ids: []
  },
  reducers: {
    addFavourite: (state, action) => {
      state.ids.push(action.payload.id);
    },
    removeFavourite: (state, action) => {
      state.ids.splice((state.ids.indexOf(action.payload.id), 1));
    },
  },
});

export const { addFavourite, removeFavourite } = favouriteSlice.actions;

export default favouriteSlice.reducer;

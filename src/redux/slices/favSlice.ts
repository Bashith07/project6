// src/redux/slices/favSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface FavouriteItem {
  id: string | number;
  name: string;
  shortDesc: string;
  image?: string;
}

interface FavouritesState {
  items: FavouriteItem[];
}

const initialState: FavouritesState = {
  items: [],
};

const favSlice = createSlice({
  name: "favourites",
  initialState,
  reducers: {
    addFavourite(state, action: PayloadAction<FavouriteItem>) {
      const exists = state.items.find((i) => i.id === action.payload.id);
      if (!exists) {
        state.items.push(action.payload);
      }
    },
    removeFavourite(state, action: PayloadAction<string | number>) {
      state.items = state.items.filter((i) => i.id !== action.payload);
    },
  },
});

export const { addFavourite, removeFavourite } = favSlice.actions;
export default favSlice.reducer;

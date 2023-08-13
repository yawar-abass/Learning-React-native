import { configureStore } from "@reduxjs/toolkit";
// import { favoriteSlice } from "./favorites";
import favoritesReducer from "./favorites";

export const store = configureStore({
  reducer: {
    favoriteMeals: favoritesReducer,
  },
});

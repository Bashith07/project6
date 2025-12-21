import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import favReducer from "./slices/favSlice";
import cartReducer from "./slices/cartSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    favourites: favReducer,
    cart: cartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;

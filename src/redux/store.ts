// src/redux/store.ts
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import favReducer from "./slices/favSlice";
import cartReducer from "./slices/cartSlice";

import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

// combine reducers
const rootReducer = combineReducers({
  auth: authReducer,
  favourites: favReducer,
  cart: cartReducer,
});

// persist config
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["favourites"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// store
export const store = configureStore({
  reducer: persistedReducer,

  // 👇 THIS FIXES THE SERIALIZABLE ERROR
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

// persistor
export const persistor = persistStore(store);

// types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

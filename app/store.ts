import { configureStore } from "@reduxjs/toolkit";
import conterReducer from "./counter_slice";
import firebaseReducer from "./firebaseSlice";
export const store = configureStore({
  reducer: { counter: conterReducer, firebase: firebaseReducer },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

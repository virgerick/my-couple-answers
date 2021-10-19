import { configureStore } from "@reduxjs/toolkit";
import conterReducer from "./counter_slice";
import firebaseReducer from "./firebaseSlice";
import userReducer from "./userSlice";
export const store = configureStore({
  reducer: {
    user: userReducer,
    counter: conterReducer,
    firebase: firebaseReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

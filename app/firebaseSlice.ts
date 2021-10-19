import { createSlice } from "@reduxjs/toolkit";
import firebase from "../firebase";
interface FirebaseState {
  firebase: any;
}
const initialState: FirebaseState = {
  firebase
};
const firebaseSlice = createSlice({
  name: "firebase",
  initialState,
  reducers: {

  },
});

export default firebaseSlice.reducer;
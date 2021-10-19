import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  user: any;
}
const initialState: UserState = {
  user: null,
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state: UserState, action: PayloadAction<any>) => {
      state.user = action.payload;
    },
    cleanUser: (state: UserState) => {
      state.user = null;
    },
  },
});
export const { setUser, cleanUser } = userSlice.actions;
export default userSlice.reducer;

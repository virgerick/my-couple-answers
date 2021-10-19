// DUCKS patter
import { createSlice, PayloadAction } from "@reduxjs/toolkit"
interface CounterState {
    value: number;
  }

  const initialState: CounterState = {
    value: 5,
  };
  const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
      // increment
      incremented: (state: CounterState) => {
        // it's okay to do this because immer makes it immutable
        // under the hood
        state.value++;
      },
      amountAdded:(state,action:PayloadAction<number>)=>{
        state.value+=action.payload;
      }
      // decremente
      // reset
    },
  });

  export const {incremented,amountAdded}=counterSlice.actions;
  export default counterSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";

const initialCounter = {
  count: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounter,
  reducers: {
    increment: (state, action) => {
      state.count += 1;
    },
    decrement: (state, action) => {
      if (state.count < 1) {
        state.count = 0;
      } else {
        state.count -= 1;
      }
    },
    reset: (state, action) => {
      state.count = 0;
    },
  },
});

export const { increment, decrement, reset } = counterSlice.actions;

export default counterSlice.reducer;

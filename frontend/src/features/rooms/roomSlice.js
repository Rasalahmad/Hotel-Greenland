import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  night: 1,
};

const roomsSlice = createSlice({
  name: "rooms",
  initialState,
  reducers: {
    increment: (state) => {
      state.night += 1;
    },
    decrement: (state) => {
      state.night -= 1;
    },
  },
});

export const { increment, decrement } = roomsSlice.actions;
export default roomsSlice.reducer;

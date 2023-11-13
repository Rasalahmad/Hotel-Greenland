import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  numberOfDays: {
    night: 1,
    startDate: "",
    endDate: "",
  },
};

const roomsSlice = createSlice({
  name: "rooms",
  initialState,
  reducers: {
    BookingTime: (state, { payload }) => {
      state.numberOfDays = payload;
    },
  },
});

export const { BookingTime } = roomsSlice.actions;
export default roomsSlice.reducer;

import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../features/api/apiSlice";
import restaurantSliceReducer from "../features/restaurant/restaurantSlice";
import roomSliceReducer from "../features/rooms/roomSlice";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    room: roomSliceReducer,
    restaurant: restaurantSliceReducer,
  },
  middleware: (getDefaultMiddlewares) =>
    getDefaultMiddlewares({ serializableCheck: false }).concat(
      apiSlice.middleware
    ),
});

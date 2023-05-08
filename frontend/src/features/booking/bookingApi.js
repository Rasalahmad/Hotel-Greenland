import { apiSlice } from "../api/apiSlice";

export const bookingApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    markUnavailable: builder.mutation({
      query: ({ roomId, dates }) => ({
        url: `room/availability/${roomId}`,
        method: "PUT",
        body: { dates },
      }),
    }),
    createBooking: builder.mutation({
      query: (finalData) => ({
        url: "booking",
        method: "POST",
        body: finalData,
      }),
    }),
  }),
});

export const { useCreateBookingMutation, useMarkUnavailableMutation } =
  bookingApi;

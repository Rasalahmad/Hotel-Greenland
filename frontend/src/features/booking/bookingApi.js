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
    getSingleBooking: builder.query({
      query: (id) => `/booking/transaction/${id}`,
    }),
    getUserBooking: builder.query({
      query: ({ email, limit }) => `/booking/${email}?limit=${limit}`,
    }),
  }),
});

export const {
  useCreateBookingMutation,
  useMarkUnavailableMutation,
  useGetSingleBookingQuery,
  useGetUserBookingQuery,
} = bookingApi;

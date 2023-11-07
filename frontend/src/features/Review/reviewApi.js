import { apiSlice } from "../api/apiSlice";

export const reviewgApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createReview: builder.mutation({
      query: (finalData) => ({
        url: "review",
        method: "POST",
        body: finalData,
      }),
    }),

    getUserReview: builder.query({
      query: (bookingId) => `/review/${bookingId}`,
    }),
  }),
});

export const { useCreateReviewMutation, useGetUserReviewQuery } = reviewgApi;

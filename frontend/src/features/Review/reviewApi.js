import { apiSlice } from "../api/apiSlice";

export const reviewApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createReview: builder.mutation({
      query: (finalData) => ({
        url: "review",
        method: "POST",
        body: finalData,
      }),
    }),

    getReview: builder.query({
      query: () => `/review?limit=5&isApproved=${true}`,
    }),
  }),
});

export const { useCreateReviewMutation, useGetReviewQuery } = reviewApi;

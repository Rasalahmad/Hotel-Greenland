import { apiSlice } from "../api/apiSlice";

export const roomApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getNews: builder.query({
      query: () => "news",
    }),
  }),
});

export const { useGetNewsQuery } = roomApi;

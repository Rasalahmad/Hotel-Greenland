import { apiSlice } from "../api/apiSlice";

export const roomApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getSlider: builder.query({
      query: () => "/slider",
    }),
  }),
});

export const { useGetSliderQuery } = roomApi;

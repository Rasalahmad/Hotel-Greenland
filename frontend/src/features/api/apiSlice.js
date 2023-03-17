import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8800/api",
  }),
  endpoints: (builder) => ({
    getSingleRoom: builder.query({
      query: (params) => `/${params}`,
    }),
  }),
});

export const { useGetSingleRoomQuery } = apiSlice;

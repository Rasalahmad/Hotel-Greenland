import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8800/api",
  }),
  endpoints: (builder) => ({
    getSingleRoom: builder.query({
      query: () => "singleRooms",
    }),
  }),
});

export const { useGetSingleRoomQuery } = apiSlice;

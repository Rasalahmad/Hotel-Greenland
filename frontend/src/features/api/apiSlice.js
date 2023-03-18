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
    getDoubleRoom: builder.query({
      query: () => "doubleRooms",
    }),
    getSpecialRoom: builder.query({
      query: () => "specialRooms",
    }),
    getAllRoom: builder.query({
      query: () => "getAllRoom",
    }),
  }),
});

export const {
  useGetSingleRoomQuery,
  useGetDoubleRoomQuery,
  useGetSpecialRoomQuery,
  useGetAllRoomQuery,
} = apiSlice;

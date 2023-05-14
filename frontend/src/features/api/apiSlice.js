import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://api.hotelgreenlandbd.com/api/",
  }),
  endpoints: (builder) => ({}),
});

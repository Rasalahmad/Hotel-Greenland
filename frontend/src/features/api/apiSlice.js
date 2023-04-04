import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl:
      process.env.NODE_ENV === "production"
        ? process.env.REACT_APP_BASE_URL
        : "http://localhost:5000/api/",
  }),
  endpoints: (builder) => ({}),
});

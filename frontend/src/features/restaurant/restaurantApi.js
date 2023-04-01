import { apiSlice } from "../api/apiSlice";

export const restaurantApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getRestaurant: builder.query({
      query: () => "restaurant",
    }),
  }),
});

export const {useGetRestaurantQuery} = restaurantApi;

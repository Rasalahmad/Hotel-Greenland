import { apiSlice } from "../api/apiSlice";

export const roomApi = apiSlice.injectEndpoints({
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
    getRoom: builder.query({
      query: (roomId) => ({
        url: `getRoom/${roomId}`,
      }),
    }),
  }),
});

export const {
  useGetSingleRoomQuery,
  useGetAllRoomQuery,
  useGetDoubleRoomQuery,
  useGetRoomQuery,
  useGetSpecialRoomQuery,
} = roomApi;

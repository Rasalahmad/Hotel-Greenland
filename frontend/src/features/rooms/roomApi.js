import { apiSlice } from "../api/apiSlice";

export const roomApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getRooms: builder.query({
      query: (params) => ({
        url: `room/${params}`,
      }),
    }),
    getDoubleRoom: builder.query({
      query: () => "room/doubleRooms",
    }),
    getSpecialRoom: builder.query({
      query: () => "room/specialRooms",
    }),
    getAllRoom: builder.query({
      query: () => "room/getAllRoom",
    }),
    getRoom: builder.query({
      query: (roomId) => ({
        url: `room/getRoom/${roomId}`,
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
  useGetRoomsQuery,
} = roomApi;

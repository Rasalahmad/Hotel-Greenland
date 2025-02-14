import { apiSlice } from "../api/apiSlice";

export const roomApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getRooms: builder.query({
      query: (params) => {
        const { checkIn, checkOut, room, guests, roomType } = params;
        return {
          url:
            `room?` +
            (roomType ? `roomType=${roomType}&` : "") +
            (checkIn ? `checkIn=${checkIn}&` : "") +
            (checkOut ? `checkOut=${checkOut}&` : "") +
            (room ? `room=${room}&` : "") +
            (guests ? `guests=${guests}&` : ""),
        };
      },
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

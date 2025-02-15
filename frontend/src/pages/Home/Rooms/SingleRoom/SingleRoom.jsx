import React from "react";
import { useGetRoomsQuery } from "../../../../features/rooms/roomApi";
import RoomList from "../components/RoomList";

const SingleRoom = () => {
  const {
    data: roomData,
    isLoading,
    isError,
    error,
  } = useGetRoomsQuery({ roomType: "single_room" });

  return (
    <RoomList
      rooms={roomData?.data}
      isLoading={isLoading}
      isError={isError}
      error={error}
    />
  );
};

export default SingleRoom;

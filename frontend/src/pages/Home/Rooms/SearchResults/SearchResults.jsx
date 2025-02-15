import React from "react";
import { useGetRoomsQuery } from "../../../../features/rooms/roomApi";
import RoomList from "../components/RoomList";
import { useLocation } from "react-router-dom";

const SearchResults = () => {
  const location = useLocation();

  // Extract query parameters from the URL
  const queryParams = new URLSearchParams(location.search);
  const checkIn = queryParams.get("checkIn");
  const checkOut = queryParams.get("checkOut");
  const room = queryParams.get("room");
  const guests = queryParams.get("guests");

  const newParams = { checkIn, checkOut, room, guests };
  const {
    data: rooms,
    isLoading,
    isError,
    error,
  } = useGetRoomsQuery(newParams);

  return (
    <RoomList
      rooms={rooms?.data}
      isLoading={isLoading}
      isError={isError}
      error={error}
    />
  );
};

export default SearchResults;

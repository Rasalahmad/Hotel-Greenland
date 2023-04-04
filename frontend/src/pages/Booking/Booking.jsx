import React from "react";
import styled from "styled-components";
import Checkout from "../../component/Checkout/Checkout";
import BookingForm from "../../component/Form/BookingForm";
import { useParams } from "react-router-dom";
import { useGetRoomQuery } from "../../features/rooms/roomApi";

const Booking = () => {
  const { roomId } = useParams();
  const { data: room, isLoading, isError, error } = useGetRoomQuery(roomId);
  const {
    name,
    images,
    guests,
    price,
    night,
    weekPrice,
    desc,
    around,
    thumbnail,
  } = room?.data || {};

  let content = null;

  if (isLoading) {
    content = <p>Loading...</p>;
  } else if (!isLoading && isError) {
    content = <p>{error}</p>;
  } else {
    content = (
      <Container>
        <Checkout
          style={{ flex: "1" }}
          image={thumbnail}
          title={`YOUR RESERVATION`}
          guests={guests}
          btnText={"Total"}
          price={price}
          room={room}
          name={name}
        />
        <BookingForm style={{ flex: "4" }} price={price} />
      </Container>
    );
  }

  return content;
};

export default Booking;

const Container = styled.div`
  width: 80%;
  margin: auto;
  display: flex;
  gap: 50px;
  padding: 20px;
  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
  }
`;

import React from "react";
import styled from "styled-components";
import Checkout from "../../component/Checkout/Checkout";
import BookingForm from "../../component/Form/BookingForm";

const Booking = () => {
  return (
    <Container>
      <Checkout
        style={{ flex: "1" }}
        image={
          "http://www.nicdarkthemes.com/themes/hotel-booking/wp/demo/apartments/wp-content/uploads/sites/4/2022/05/room1-1024x664.jpeg"
        }
        title={"YOUR RESERVATION"}
        btnText={"1500 / Toal"}
      />
      <BookingForm style={{ flex: "4" }} />
    </Container>
  );
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

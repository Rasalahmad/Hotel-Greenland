import React from "react";
import styled from "styled-components";
import "../Restaurant/Restaurant.css";
import ReservationForm from "../../../Form/ReservationForm";
import book_table from "../../../../assets/Restaurant/book-table.jpg";
import headerImg from "../../../../assets/Restaurant/heading-dark.png";
const Reservation = () => {
  const banner = book_table;
  return (
    <div
      className="  bg-fixed md:bg-auto bg-cover bg-center py-20 "
      style={{ backgroundImage: `url(${banner})` }}
    >
      <div className="text-center lg:ml-24 lg:grid grid-cols-2">
        <div>
          <Title>Book a Table</Title>
          <Header1>RESERVATION</Header1>
          <ReservationForm></ReservationForm>
        </div>
      </div>
    </div>
  );
};

export default Reservation;

const Title = styled.div`
  font-size: 60px;
  font-family: "Great Vibes";
  text-align: center;
  margin-top: 60px;
`;
const Header1 = styled.div`
  background: url(${headerImg});
  background-repeat: no-repeat;
  background-position: center 80px;
  letter-spacing: 4px;
  padding: 0 0 70px 0;
  font-size: 50px;
  @media (max-width: 640px) {
    background: url(${headerImg});
    background-repeat: no-repeat;
    background-position: center 80px;
    font-size: 35px;
    letter-spacing: 0;
    margin-bottom: 50px;
  }
`;

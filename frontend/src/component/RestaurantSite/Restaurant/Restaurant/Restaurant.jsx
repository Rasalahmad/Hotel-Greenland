import React from "react";
import "./Restaurant.css";
import styled from "styled-components";
import Blog from "../../Blog/Blog";
import Introduction from "../Introduction/Introduction";
import Reservation from "../Reservation/Reservation";
import Info from "../Info/Info";
import Customers from "../../../Carousel/Customers/Customers";
const Restaurant = () => {
  return (
    <>
      <Introduction />
      <Reservation />
      <Container>
        <Blog />
        <Customers />
        <Info />
      </Container>
    </>
  );
};

export default Restaurant;
const Container = styled.div`
  width: 95%;
  margin: auto;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

import React from "react";
import "./Restaurant.css";
import styled from "styled-components";
import Customers from "../../Customers/Customers";
import Blog from "../../Blog/Blog";
import Introduction from "../Introduction/Introduction";
import Reservation from "../Reservation/Reservation";
import Info from "../Info/Info";
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



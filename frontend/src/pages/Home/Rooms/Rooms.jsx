import React from "react";
import styled from "styled-components";
import RoomCard from "../../../component/RoomCard/RoomCard";
import "./Room.css";

export const Rooms = () => {
  return (
    <Container>
      <Content>
        <Title className="stroke-2">Our Rooms</Title>
        <Description>
          A wonderful serenity has taken possession of my entire soul, like
          these sweet mornings of spring which I enjoy with my whole heart. I am
          alone, and feel the charm of existence in this spot, which was created
          for the bliss of soul.
        </Description>
      </Content>
      <Slider>
        <RoomCard />
      </Slider>
    </Container>
  );
};

const Container = styled.div`
  background-color: #f8f9fa;
  padding: 50px 0;
`;

const Title = styled.h1`
  font-size: 48px;
  font-family: "Great Vibes";
  font-weight: 600;
  color: #333;
  margin-bottom: 20px;
`;

const Description = styled.p`
  font-size: 18px;
  line-height: 1.8;
  color: #666;
  max-width: 800px;
  margin: 0 auto;
  padding: 0 20px;
`;

const Content = styled.div`
  text-align: center;
  margin-bottom: 50px;
`;

const Slider = styled.div`
  width: 90%;
  margin: 0 auto;
`;

export default Rooms;

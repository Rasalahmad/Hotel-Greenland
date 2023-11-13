import React from "react";
import styled from "styled-components";
import RoomCard from "../../../component/RoomCard/RoomCard";
import "./Room.css";
export const Rooms = () => {
  return (
    <div>
      <Content>
        <Title className="stroke-2">Our Rooms.</Title>
        <Description>
          A wonderful serenity has taken possession of my entire soul, like
          these sweet mornings of spring which I enjoy with my whole heart. I am
          alone, and feel the charm of existence in this spot, which was created
          for the bliss of soul.
        </Description>
      </Content>
      <Slider className="bg-image">
        <RoomCard />
      </Slider>
    </div>
  );
};

const Title = styled.div`
  font-size: 60px;
  font-family: "Great Vibes";
`;

const Description = styled.div`
  font-size: 23px;
  line-height: 40px;
  padding: 35px;
  color: gray;
`;

const Content = styled.div`
  max-width: 760px;
  text-align: center;
  margin: auto;
  padding-top: 100px;
`;

const Slider = styled.div`
  width: 90%;
  margin: auto;
`;

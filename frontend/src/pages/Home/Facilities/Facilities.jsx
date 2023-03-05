import React from "react";
import styled from "styled-components";
import parking from "../../../assets/icons/parking.png";
import brf from "../../../assets/icons/brf.png";
import gym from "../../../assets/icons/gym.png";
import pool from "../../../assets/icons/pool.png";
import safe from "../../../assets/icons/safe.png";
import spa from "../../../assets/icons/spa.png";
import wifi from "../../../assets/icons/wifi.png";
import workspace from "../../../assets/icons/workspace.png";

const Facilities = () => {
  const facilities = [
    {
      id: 1,
      title: "Parking",
      logo: parking,
    },
    {
      id: 2,
      title: "Safe",
      logo: safe,
    },
    {
      id: 3,
      title: "Swiming Pool",
      logo: pool,
    },
    {
      id: 4,
      title: "Spa",
      logo: spa,
    },
    {
      id: 5,
      title: "Gym",
      logo: gym,
    },
    {
      id: 7,
      title: "Free Wifi",
      logo: wifi,
    },
    {
      id: 8,
      title: "Brakfast",
      logo: brf,
    },
    {
      id: 9,
      title: "Workspace",
      logo: workspace,
    },
  ];

  return (
    <div>
      <Content>
        <Title>Hotel Facilities.</Title>
        <Description>
          A wonderful serenity has taken possession of my entire soul, like
          these sweet <br /> mornings of spring which I enjoy with my whole
          heart.
        </Description>
        <FacilitiesDiv className="">
          {facilities.map((p) => (
            <SingleFac key={p.id}>
              <Image src={p.logo} alt={p.title} />
              <p className="text-xl text-gray-500">{p.title}</p>
            </SingleFac>
          ))}
        </FacilitiesDiv>
      </Content>
      <Video
        width="90%"
        height="600px"
        src="https://www.youtube.com/embed/8dcVWVjtj-w"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></Video>
    </div>
  );
};

export default Facilities;

const Content = styled.div`
  text-align: center;
  margin: 100px;
  padding: 35px;
  @media (max-width: 768px) {
    margin: 10px;
  }
`;
const Title = styled.div`
  font-size: 60px;
  font-family: "Great Vibes";
  padding-bottom: 35px;
  @media (max-width: 768px) {
    font-size: 35px;
  }
`;

const Description = styled.div`
  font-size: 20px;
  line-height: 40px;
  color: gray;
`;

const FacilitiesDiv = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
  text-align: center;
  padding: 50px;
`;
const Image = styled.img`
  width: 100px;
  height: 80px;
`;
const SingleFac = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 40px;
`;

const Video = styled.iframe`
  margin: auto;
  border-radius: 50px 0 50px 0;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
`;

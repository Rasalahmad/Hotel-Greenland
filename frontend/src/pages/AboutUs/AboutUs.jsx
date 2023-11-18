import React from "react";
import About from "../Home/About/About";
import styled from "styled-components";

const AboutUs = () => {
  return (
    <div>
      <Title>
        About Our Oasis: <br /> Unveiling the Essence of Greenland{" "}
      </Title>
      <About />
    </div>
  );
};

export default AboutUs;
const Title = styled.div`
  text-align: center;
  font-size: 60px;
  margin-top: 60px;
  margin-bottom: -40px;
  font-family: "Great Vibes";
  padding-bottom: 35px;
  @media (max-width: 768px) {
    font-size: 35px;
  }
`;

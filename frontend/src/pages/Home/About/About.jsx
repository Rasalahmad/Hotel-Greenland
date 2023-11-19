import React from "react";
import styled from "styled-components";
import Swim from "../../../assets/images/about.jpg";
import about from "../../../assets/images/about.png";
import { BsFillCaretRightFill } from "react-icons/bs";

const About = () => {
  return (
    <>
      <Container>
        <Main>
          <TopSection>
            <span className="text-5xl font-medium mr-3 tracking-wide">4</span>
            <span className="text-2xl mr-20 tracking-widest">stars</span>
            <span className="text-5xl font-medium mr-3 tracking-wide">25</span>
            <span className="text-2xl tracking-widest">rooms</span>
          </TopSection>
          <Desription>
            Our hotel is located in the heart of the Bandarban. A Four stars
            lifestyle surrounded by the forest.
          </Desription>
          <a href="#" className="hover:underline">
            <Button className="flex items-center text-xl mt-10 cursor-pointer"></Button>
          </a>
        </Main>
        <ImageContainer>
          <Image src={Swim} alt="Swim" />
        </ImageContainer>
      </Container>
      <AboutImageContainer>
        <AboutImage className="invisible lg:visible" src={about} alt="about" />
      </AboutImageContainer>
    </>
  );
};

export default About;

const Container = styled.div`
  display: flex;
  gap: 30px;
  padding: 100px;
  @media (max-width: 768px) {
    padding: 10px;
    flex-direction: column;
  }
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const TopSection = styled.p`
  padding: 0px 20px 40px 20px;
`;

const ImageContainer = styled.div`
  flex: 1;
  max-width: 550px;
  border-radius: 100px 0px 100px 0px;
  overflow: hidden;
`;

const Desription = styled.p`
  font-size: 36px;
  letter-spacing: 6px;
  padding: 15px;
  @media (max-width: 768px) {
    font-size: 15px;
  }
`;

const Main = styled.div`
  padding-top: 30px;
  flex: 1;
`;

const Button = styled.div`
  padding: 15px;
  letter-spacing: 5px;
`;

const AboutImageContainer = styled.div`
  max-width: 1091px;
  margin: auto;
`;
const AboutImage = styled.img`
  width: 100%;
  margin-top: -150px;
`;

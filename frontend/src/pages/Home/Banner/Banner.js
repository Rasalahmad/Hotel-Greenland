import React from "react";
import { useLocation } from "react-router";
import styled from "styled-components";
import banner from "../../../assets/images/banner.jpg";
import resturantbanner from "../../../assets/images/resturantbanner.jpg";
import Filter from "../../../component/Filter";
import Navbar from "../../../component/Navbar";

const Banner = () => {
  const location = useLocation();
  const path = location.pathname.split("/")[1];
  const id = location.pathname.split("/")[2];

  return (
    <Container>
      <Navbar />
      <TopBackground path={path}>
        <Content path={path}>
          <Title>
            {path === "singleRooms"
              ? "Couple Rooms"
              : path === "doubleRooms"
              ? "Double Rooms"
              : path === "register"
              ? "Create Your Account"
              : path === "login"
              ? "Log In Greenland"
              : path === "familySpecialRoom"
              ? "Family Special"
              : path === "restaurant"
              ? "Greenland Restaurant"
              : path === "contact"
              ? "Let’s chat andquote!"
              : path === "booking" && id
              ? "Booking Form"
              : path === "booking"
              ? "Booking List"
              : path === "blog"
              ? "News & Blog"
              : "Book Your Vacation"}
          </Title>
          <SubTitle>
            Explore new experience with{" "}
            <Focus className="text-green-400">GREEN LAND</Focus>
          </SubTitle>
        </Content>
        {!path && <Filter />}
      </TopBackground>
    </Container>
  );
};

export default Banner;

const Container = styled.div`
  position: relative;
  margin: 20px;
  border-radius: 15px;
  overflow: hidden;
  @media (max-width: 768px) {
    margin: 0px;
    border-radius: 0px;
  }
`;

const TopBackground = styled.div`
  background-image: ${({ path }) =>
    `linear-gradient(to bottom, rgba(0, 0, 0, 0.5) 0%,rgba(0, 0, 0, 0.5) 100%),url(${
      path === "restaurant" ? resturantbanner : banner
    })`};
  width: 100%;
  height: ${({ path }) => (!path ? "100vh" : "60vh")};
  background-size: cover;
  background-repeat: no-repeat;
`;

const Content = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  @media (max-width: 768px) {
    width: 100%;
    top: ${({ path }) => (path ? "50%" : "25%")};
    text-align: center;
  }
`;

const Title = styled.div`
  font-family: "Great Vibes";
  color: white;
  font-size: 75px;

  @media (max-width: 768px) {
    font-size: 36px;
  }
`;
const SubTitle = styled.div`
  color: white;
  font-size: 20px;
  text-align: center;
  padding: 20px;
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const Focus = styled.b`
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(0px);
  -webkit-backdrop-filter: blur(0px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  padding: 5px;
`;

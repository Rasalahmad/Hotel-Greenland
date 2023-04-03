import React from "react";
import styled from "styled-components";
import OurStorySlider from "../../../Carousel/OurStorySlider/OurStorySlider";
import Info from "../../Restaurant/Info/Info";
import MasterChef from "./MasterChef/MasterChef";

const OurStory = () => {
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  return (
    <div>
      <Container>
        <Left>
          {isMobile ? (
            <>
              <ImageContainer>
                <img
                  className="image"
                  src="http://wahabali.com/work/pearl-demo/images/atmosphere.jpg"
                  alt=""
                />
              </ImageContainer>
              <Description className="lg:p-5">
                <Title>Traditional</Title>
                <Header>ATMOSPHERE</Header>
                <div className="flex justify-between">
                  <div>
                    <p className="text-sm md:text-xl  lg:text-xl">
                      Greenland Restaurant is a cozy, brasserie-style restaurant
                      that offers everything you love about the cuisine without
                      the attitude. Greenland Restaurant offers classic dishes
                      like beef kala bhuna and kacchi biryani, as well as fresh
                      salads made with fresh-ground beef and juicy hamburgers.
                    </p>
                  </div>
                </div>
              </Description>
            </>
          ) : (
            <>
              <Description className="lg:p-5">
                <Title>Traditional</Title>
                <Header>ATMOSPHERE</Header>
                <div className="flex justify-between mb-6">
                  <div>
                    <p className="text-sm md:text-xl lg:w-[480px] lg:text-xl">
                      Greenland Restaurant is a cozy, brasserie-style restaurant
                      that offers everything you love about the cuisine without
                      the attitude. Greenland Restaurant offers classic dishes
                      like beef kala bhuna and kacchi biryani, as well as fresh
                      salads made with fresh-ground beef and juicy hamburgers.
                    </p>
                  </div>
                </div>
              </Description>
              <ImageContainer>
                <img
                  className="image"
                  src="http://wahabali.com/work/pearl-demo/images/atmosphere.jpg"
                  alt=""
                />
              </ImageContainer>
            </>
          )}
        </Left>

        <div>
          <Description className="lg:p-5">
            <Title>Greenland Resort Tour</Title>
            <Header>THE RESTAURANT</Header>
          </Description>
          <OurStorySlider></OurStorySlider>
          <MasterChef></MasterChef>
          <Info />
        </div>
      </Container>
    </div>
  );
};

export default OurStory;

const Container = styled.div`
  width: 95%;
  margin: auto;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Title = styled.div`
  font-size: 60px;
  font-family: "Great Vibes";
  text-align: center;
  margin-top: 60px;
`;

const Left = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 40px;
  padding: 100px 50px;
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 30px 15px;
  }
`;

const Header = styled.div`
  background: url(http://wahabali.com/work/pearl-demo/images/heading-dark.png)
    no-repeat center 80px;
  letter-spacing: 4px;
  padding: 0 0 70px 0;
  margin: 40px 0 0 0;
  font-size: 50px;
  @media (max-width: 640px) {
    background: url(http://wahabali.com/work/pearl-demo/images/heading-dark.png)
      no-repeat center 80px;
    font-size: 35px;
    letter-spacing: 0;
    margin-bottom: 50px;
  }
`;

const ImageContainer = styled.div`
  flex: 1;
  width: 100%;
  .image {
    border-radius: ${({ isMobile }) =>
      isMobile ? "0px 40px 0 40px" : "40px 0 40px 0"};
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
      rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
      rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  }
`;
const Description = styled.div`
  font-size: 23px;
  line-height: 40px;
  padding: 3px 35px 35px 35px;
  text-align: center;
  color: gray;
`;

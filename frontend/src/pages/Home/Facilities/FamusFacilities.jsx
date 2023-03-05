import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import styled from "styled-components";
import resturant from "../../../assets/images/rest1.jpg";
import bar from "../../../assets/images/bar.jpg";
import spa from "../../../assets/images/spa.jpg";

const FamusFacilities = () => {
  const famusFacilities = [
    {
      id: 1,
      title: "3 Michelin Stars Restaurant, Vézère",
      desc: "A brasserie inspired by French cuisine, a fresh and modern place to visit and enjoy dishes always handmade of the best ingredients of the season.",
      img: resturant,
    },
    {
      id: 2,
      title: "The Penthouse Bar, An iconic american bar",
      desc: "The cozy bar area accompanying the Penthouse is a classic cocktail bar at it’s finest. Our experienced bartenders are here to offer you both the classic bewerages and the newest global trends.",
      img: bar,
    },
    {
      id: 3,
      title: "The Spa. Refresh Yourself",
      desc: "Whether you are in search of a well-appointed gym or a pampering moment on the massage table and inside the warm saunas, you can always find a place for yourself at our spa.",
      img: spa,
    },
  ];

  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  return (
    <Container>
      <Main className="text-center mt-28">
        <Title>Visit Our Famous Facilities</Title>
        <Description1>
          A wonderful serenity has taken possession of my entire soul, like
          these sweet mornings of spring which I enjoy with my whole heart.
        </Description1>
      </Main>
      {famusFacilities.map((item, i) => (
        <Left key={item.id}>
          {i % 2 === 0 && !isMobile ? (
            <>
              <Description className="lg:p-5">
                <h2 className="text-xl lg:text-4xl font-bold">{item?.title}</h2>
                <p className="mt-6 lg:mt-14 text-xl text-gray-400">
                  {item?.desc}
                </p>
                <a href="somewhere" className="hover:underline">
                  <Button className="flex items-center text-xl mt-10 cursor-pointer font-bold">
                    LEARN MORE
                    <IoIosArrowForward size={16} className="ml-2" />
                  </Button>
                </a>
              </Description>
              <ImageContainer>
                <img className="image" src={item?.img} alt="" />
              </ImageContainer>
            </>
          ) : (
            <>
              <ImageContainer isMobile={i % 2 === 0}>
                <img className="image" src={item?.img} alt="" />
              </ImageContainer>
              <Description className="lg:p-5">
                <h2 className="text-xl lg:text-4xl font-bold">{item?.title}</h2>
                <p className="mt-6 lg:mt-14 text-xl text-gray-400">
                  {item?.desc}
                </p>
                <a href="somewhere" className="hover:underline">
                  <Button className="flex items-center text-xl mt-10 cursor-pointer font-bold">
                    LEARN MORE
                    <IoIosArrowForward size={16} className="ml-2" />
                  </Button>
                </a>
              </Description>
            </>
          )}
        </Left>
      ))}
    </Container>
  );
};

export default FamusFacilities;

const Container = styled.div``;
const Main = styled.div`
  @media (max-width: 768px) {
    padding: 0 16px;
    margin-bottom: 30px;
  }
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

const Description = styled.div`
  flex: 1;
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

const Title = styled.div`
  font-size: 60px;
  font-family: "Great Vibes";
  padding-bottom: 35px;
  @media (max-width: 768px) {
    font-size: 35px;
  }
`;

const Description1 = styled.div`
  font-size: 20px;
  line-height: 40px;
  color: gray;
  max-width: 60%;
  margin: auto;
  @media (max-width: 768px) {
    font-size: 16px;
    max-width: 100%;
  }
`;

const Button = styled.div`
  letter-spacing: 2px;
  font-size: 16px;
`;

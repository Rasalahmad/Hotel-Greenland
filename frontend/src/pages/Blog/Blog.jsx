import React from "react";
import { useGetNewsQuery } from "../../features/news/newsApi";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";

const Blog = () => {
  const { data, isLoading, isError, error } = useGetNewsQuery();
  return (
    <Container>
      <Main className="text-center mt-28">
        <Title>Latest Updates</Title>
        <Description1>
          Stay in the know with our News & Blog. Get the latest updates and
          insightful articles in one place.
        </Description1>
      </Main>
      {data?.data?.map((item, i) => (
        <Left key={item.id}>
          {i % 2 === 0 ? (
            <>
              <Description className="lg:p-5">
                <h2 className="text-xl lg:text-4xl font-bold">{item?.title}</h2>
                <p className="mt-6 lg:mt-14 text-xl text-gray-400">
                  {item?.desc}
                </p>
                <Link to={item?.link} className="hover:underline">
                  <Button className="flex items-center text-xl mt-10 cursor-pointer font-bold">
                    SEE MORE
                    <IoIosArrowForward size={16} className="ml-2" />
                  </Button>
                </Link>
              </Description>
              <ImageContainer>
                <img className="image" src={item?.image} alt="" />
              </ImageContainer>
            </>
          ) : (
            <>
              <ImageContainer isMobile={i % 2 === 0}>
                <img className="image" src={item?.image} alt="" />
              </ImageContainer>
              <Description className="lg:p-5">
                <h2 className="text-xl lg:text-4xl font-bold">{item?.title}</h2>
                <p className="mt-6 lg:mt-14 text-xl text-gray-400">
                  {item?.desc}
                </p>
                <Link to={item?.link} className="hover:underline">
                  <Button className="flex items-center text-xl mt-10 cursor-pointer font-bold">
                    SEE MORE
                    <IoIosArrowForward size={16} className="ml-2" />
                  </Button>
                </Link>
              </Description>
            </>
          )}
        </Left>
      ))}
    </Container>
  );
};

export default Blog;

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

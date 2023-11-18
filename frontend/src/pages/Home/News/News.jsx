import React from "react";
import styled from "styled-components";
import NewsSlider from "../../../component/Carousel/News/NewsSlider";
import { useGetNewsQuery } from "../../../features/news/newsApi";
import Loader from "../../../component/Loader/Loader";

const News = () => {
  const { data, isLoading, isError, error } = useGetNewsQuery();
  let content = null;
  if (isLoading) {
    content = <Loader type={"List"} />;
  } else if (!isLoading && isError) {
    content = <p>{error}</p>;
  } else if (!isLoading && !isError && data?.data?.length === 0) {
    content = <p>No Data Found</p>;
  } else {
    content = (
      <Content>
        <Title>News & Offers</Title>
        <Description>
          A wonderful serenity has taken possession of my entire soul, like
          these sweet mornings of spring which I enjoy with my whole heart.
        </Description>
        <NewsSlider data={data?.data} />
      </Content>
    );
  }

  return content;
};

export default News;

const Title = styled.div`
  font-size: 60px;
  font-family: "Great Vibes";
`;

const Description = styled.div`
  font-size: 22px;
  line-height: 40px;
  padding: 50px;
  color: gray;
  @media (max-width: 768px) {
    font-size: 15px;
    line-height: 30px;
    padding: 10px;
  }
`;
const Content = styled.div`
  max-width: 80%;
  text-align: center;
  margin: auto;
  padding-top: 100px;
`;

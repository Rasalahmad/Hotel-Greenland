import React from "react";
import styled from "styled-components";
import TestimonialSlider from "../../../component/Carousel/Testimonial/TestimonialSlider";
import { useGetReviewQuery } from "../../../features/Review/reviewApi";

const Testimonial = () => {
  const { data: review, isLoading } = useGetReviewQuery();

  return (
    <>
      <Content>
        <Title>Testimonial</Title>
        <Description>
          A wonderful serenity has taken possession of my entire soul, like
          these sweet mornings of spring which I enjoy with my whole heart.
        </Description>
        {isLoading ? "Loading..." : <TestimonialSlider data={review?.data} />}
      </Content>
    </>
  );
};

export default Testimonial;

const Title = styled.div`
  font-size: 60px;
  font-family: "Great Vibes";
`;

const Description = styled.div`
  font-size: 23px;
  line-height: 40px;
  padding: 35px;
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

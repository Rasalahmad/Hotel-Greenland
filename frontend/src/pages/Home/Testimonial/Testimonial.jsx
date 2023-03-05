import React from "react";
import styled from "styled-components";
import TestimonialSlider from "../../../component/Carousel/Testimonial/TestimonialSlider";

const Testimonial = () => {
  const data = [
    {
      id: 1,
      name: "John Doe",
      msg: "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence.",
      image:
        "https://industrial.uii.ac.id/wp-content/uploads/2019/09/385-3856300_no-avatar-png-e1600750858753.jpg",
      title: "Solo Traveler",
    },
    {
      id: 1,
      name: "Ralph Clark",
      msg: "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence.",
      image:
        "https://industrial.uii.ac.id/wp-content/uploads/2019/09/385-3856300_no-avatar-png-e1600750858753.jpg",
      title: "Solo Traveler",
    },
    {
      id: 1,
      name: "John Doe",
      msg: "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence.",
      image:
        "https://industrial.uii.ac.id/wp-content/uploads/2019/09/385-3856300_no-avatar-png-e1600750858753.jpg",
      title: "Solo Traveler",
    },
    {
      id: 1,
      name: "William Jones",
      msg: "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence.",
      image:
        "https://industrial.uii.ac.id/wp-content/uploads/2019/09/385-3856300_no-avatar-png-e1600750858753.jpg",
      title: "Solo Traveler",
    },
  ];

  return (
    <>
      <Content>
        <Title>Testimonial</Title>
        <Description>
          A wonderful serenity has taken possession of my entire soul, like
          these sweet mornings of spring which I enjoy with my whole heart.
        </Description>
        <TestimonialSlider data={data} />
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

import React from "react";
import styled from "styled-components";
import CustomerSlider from "./CustomerSlider";
const Customers = () => {
  const data = [
    {
      id: 1,
      name: "John Doe",
      msg: "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence.",
      image: "http://wahabali.com/work/pearl-demo/images/testimonial-img2.jpg",
      title: "TV Actor",
    },
    {
      id: 1,
      name: "johny Bravo",
      msg: "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence.",
      image: "http://wahabali.com/work/pearl-demo/images/testimonial-img2.jpg",
      title: "Solo Traveler",
    },
    {
      id: 1,
      name: "Christian Stewart",
      msg: "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence.",
      image: "http://wahabali.com/work/pearl-demo/images/testimonial-img3.jpg",
      title: "Fashion Designer",
    },
    {
      id: 1,
      name: "Rubica noi",
      msg: "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence.",
      image: "http://wahabali.com/work/pearl-demo/images/testimonial-img1.jpg",
      title: "Founder Photography",
    },
  ];

  return (
    <div
      className=" bg-fixed "
      style={{
        backgroundImage: `url(http://wahabali.com/work/pearl-demo/images/testimonials-bg.jpg)`,
        backgroundColor: "",
      }}
    >
      <div className="text-center pt-5">
        {" "}
        <Title>Some Words</Title>
        <Header1>FROM CUSTOMERS</Header1>
      </div>
      <CustomerSlider data={data} />
    </div>
  );
};

export default Customers;

const Title = styled.div`
  font-size: 60px;
  font-family: "Great Vibes";
  text-align: center;
  margin-top: 60px;
  color: white;
`;

const Header1 = styled.div`
  background: url(http://wahabali.com/work/pearl-demo/images/heading-dark.png)
    no-repeat center 80px;
  letter-spacing: 4px;
  padding: 0 0 70px 0;
  font-size: 50px;
  color: white;
  @media (max-width: 640px) {
    background: url(http://wahabali.com/work/pearl-demo/images/heading-dark.png)
      no-repeat center 80px;
    font-size: 35px;
    letter-spacing: 0;
    margin-bottom: 50px;
  }
`;

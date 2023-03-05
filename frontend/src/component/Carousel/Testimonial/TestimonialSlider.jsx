import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "./slider.css";

// import required modules
import { Pagination, Autoplay } from "swiper";
import styled from "styled-components";

export default function TestimonialSlider({ data }) {
  return (
    <>
      <Swiper
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 1,
          },
          1024: {
            slidesPerView: 2,
          },
        }}
        loop
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        className="mySwiper"
      >
        {data.map((item) => (
          <SwiperSlide key={item?.id}>
            <Container>
              <Image src={item.image} alt="" />
              <Content>
                <Message>{item.msg}</Message>
                <Name>{item.name}</Name>
                <small>{item.title}</small>
              </Content>
            </Container>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

const Container = styled.div`
  width: 500px;
  box-shadow: 0 10px 45px rgb(10 10 10 / 7%);
  -moz-box-shadow: 0 10px 45px rgba(10, 10, 10, 0.07);
  -webkit-box-shadow: 0 10px 45px rgb(10 10 10 / 7%);
  border-radius: 20px;
  -moz-border-radius: 20px;
  -webkit-border-radius: 20px;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 30px;
  padding: 20px;
  text-align: left;
  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    padding: 10px;
    font-size: 16px;
  }
`;

const Content = styled.div`
  padding: 10px;
`;
const Name = styled.h3`
  font-weight: bold;
  margin-top: 20px;
`;
const Message = styled.p`
  color: gray;
`;

const Image = styled.img`
  width: 100px !important;
  height: 100px !important;
  border-radius: 50%;
  object-fit: cover;
`;

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./slider.css";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper";
import styled from "styled-components";
import bed from "../../../assets/icons/bed.png";
import grp from "../../../assets/icons/grp.png";
import { IoIosArrowForward } from "react-icons/io";

export default function HotelSlider({ data }) {
  return (
    <>
      <Swiper
        navigation={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 1,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {data.map((item) => (
          <SwiperSlide key={item?.id}>
            <Container>
              <img src={item?.images[0]} alt="" />
              <p className="-mt-11">
                <span className="bg-black text-white p-2 rounded">
                  <span className="text-xl font-bold">
                    From <span className="text-3xl">৳ {item?.price}</span>
                  </span>{" "}
                  / night
                </span>
              </p>
              <div className="p-6">
                <h3 className="text-2xl font-bold pt-10 pb-6">{item?.title}</h3>
                <InnerDiv>
                  <ImageContainer>
                    <Bed src={bed} alt="" />
                    <span className="text-lg text-gray-500">{item?.bed}</span>
                  </ImageContainer>
                  <ImageContainer>
                    <Bed src={grp} alt="" />
                    <span className="text-lg text-gray-500">
                      {item?.guests} Guests
                    </span>
                  </ImageContainer>
                </InnerDiv>
                <a href="#" className="hover:underline">
                  <Button className="flex items-center text-xl mt-10 cursor-pointer font-bold">
                    Book Now
                    <IoIosArrowForward size={16} className="ml-2" />
                  </Button>
                </a>
              </div>
            </Container>
          </SwiperSlide>
        ))}
        <a
          href="facebook"
          className="flex items-center justify-center border-b-2 w-max mx-auto -mt-7"
        >
          <Button className="flex items-center text-xl mt-10 cursor-pointer font-bold">
            VIEW ALL ROOMS
            <IoIosArrowForward size={16} className="ml-2" />
          </Button>
        </a>
      </Swiper>
    </>
  );
}

const Container = styled.div`
  width: 345px;
  box-shadow: 0 10px 45px rgb(10 10 10 / 7%);
  -moz-box-shadow: 0 10px 45px rgba(10, 10, 10, 0.07);
  -webkit-box-shadow: 0 10px 45px rgb(10 10 10 / 7%);
  border-radius: 20px;
  -moz-border-radius: 20px;
  -webkit-border-radius: 20px;
  overflow: hidden;
`;

const Bed = styled.img`
  height: 30px !important;
  width: 30px !important;
`;

const InnerDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
`;

const Button = styled.div`
  letter-spacing: 2px;
  font-size: 16px;
  margin-top: 100px;
`;

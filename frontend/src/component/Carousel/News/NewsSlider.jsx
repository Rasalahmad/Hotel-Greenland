import React from "react";
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

export default function NewsSlider({ data }) {
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
          1400: {
            slidesPerView: 3,
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
            <div class="container">
              <img src={item.image} alt="Avatar" class="image" />
              <div class="overlay-bottom">
                <div class="text">
                  <h2>{item.title.slice(0, 30)}...</h2>
                  <span>{item.date}</span>
                  <br />
                  <a className="btn m-5" target={"_blank"} href={item.link}>
                    Visit Now
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

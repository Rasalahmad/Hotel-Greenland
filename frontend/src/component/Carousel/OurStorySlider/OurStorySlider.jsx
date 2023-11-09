import React from "react";
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "./Slider.css";
import pearl1 from "../../../assets/Restaurant/pearl-tour1.jpg";
import pearl2 from "../../../assets/Restaurant/our-story.jpg";
import pearl3 from "../../../assets/Restaurant/pearl-tour3.jpg";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";

const OurStorySlider = () => {
  const data = [
    {
      id: 1,
      image: pearl1,
    },
    {
      id: 1,
      image: pearl2,
      title: "Solo Traveler",
    },
    {
      id: 1,
      image: pearl3,
    },
  ];
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
            slidesPerView: 1,
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
          <SwiperSlide className="h-full" key={item?.id}>
            <img className="image" src={item?.image} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default OurStorySlider;

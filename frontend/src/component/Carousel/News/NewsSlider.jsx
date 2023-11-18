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

export default function NewsSlider({ data }) {
  return (
    <>
      <Swiper
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
          1400: {
            slidesPerView: 3,
          },
        }}
        loop
        pagination={{
          clickable: true,
        }}
        spaceBetween={20}
        modules={[Autoplay, Pagination]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        className="mySwiper "
      >
        {data.map((item) => (
          <SwiperSlide key={item?._id}>
            <div className="container">
              <img
                src={`${process.env.REACT_APP_IMAGE_URL}/images/${item.image}`}
                alt="Avatar"
                className="image"
              />
              <div className="overlay-bottom">
                <div className="text">
                  <h2>{item?.title.slice(0, 25)}...</h2>
                  <span>
                    {item?.date
                      ?.match(/[a-zA-Z]+|[0-9]+/g)
                      .slice(0, 3)
                      .join("-")}
                  </span>
                  <br />
                  <a className="btn m-5" target={"_blank"} href={item?.link}>
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

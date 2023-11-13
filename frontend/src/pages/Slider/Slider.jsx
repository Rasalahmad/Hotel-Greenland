import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useGetSliderQuery } from "../../features/sliders/sliderApi";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "./slider.css";

// import required modules
import { Pagination, Autoplay } from "swiper";
import styled from "styled-components";

const Slider = () => {
  const { data, isLoading } = useGetSliderQuery();

  return (
    <>
      <Title className="stroke-2">Around Bandarban.</Title>
      {isLoading ? (
        "Loading..."
      ) : (
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
          {data?.data?.map((item) => (
            <SwiperSlide key={item?._id}>
              <div className="container">
                <img src={item?.image} alt="Avatar" className="image" />
                <div className="overlay-bottom">
                  <div className="text">
                    <h2>{item?.title?.slice(0, 25)}</h2>
                    <span>{item?.copyright?.slice(0, 25) || "copyright"}</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </>
  );
};

export default Slider;

const Title = styled.div`
  font-size: 60px;
  font-family: "Great Vibes";
  text-align: center;
  margin: 50px 0;
`;

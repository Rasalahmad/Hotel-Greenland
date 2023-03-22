import React from 'react';
import { Autoplay, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import './Slider.css'

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";

const OurStorySlider = () => {
    const data = [
        {
            id: 1,
            image:
                "http://wahabali.com/work/pearl-demo/images/pearl-tour1.jpg",
        },
        {
            id: 1,
            image:
                "http://wahabali.com/work/pearl-demo/images/pearl-tour2.jpg",
            title: "Solo Traveler",
        },
        {
            id: 1,
            image:
                "http://wahabali.com/work/pearl-demo/images/pearl-tour3.jpg",
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

                    <SwiperSlide className='h-full' key={item?.id} >
                        <img className='image' src={item?.image} alt="" />
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
};

export default OurStorySlider;
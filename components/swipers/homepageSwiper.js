import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";

export default function HomepageSwiper() {
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="/images/homepage/img1.JPG" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/homepage/img2.JPG"  />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/homepage/img3.JPG"  />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/homepage/img4.JPG"  />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/homepage/img5.JPG"  />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/homepage/img6.JPG"  />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";

import "./styles.css";

// import Swiper core and required modules
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper/core";

// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation]);

const Carousel = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        className="mySwiper"
      >
        <SwiperSlide><img src = " ./egghead.png"></img></SwiperSlide>
        <SwiperSlide><img src = " ./cb_grey.png"></img></SwiperSlide>
        <SwiperSlide><img src = " ./streamyard.png"></img></SwiperSlide>
        <SwiperSlide><img src = " ./dude.png"></img></SwiperSlide>

      </Swiper>
    </>
  );
};

export default Carousel;

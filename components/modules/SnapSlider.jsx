"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Keyboard } from "swiper/modules";
import Card from "../elements/Card";

export default function SnapSlider({ data }) {
  const [swiperRef, setSwiperRef] = useState(null);
  const [index, setIndex] = useState(0);

  const ratedRests = data.filter((item) => item.rate > 800);

  const prevHandler = () => {
    swiperRef.slidePrev();
  };

  const nextHandler = () => {
    swiperRef.slideNext();
  };

  return (
    <div className="relative z-0">
      <Swiper
        edgeSwipeThreshold={(res) => console.log(res)}
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          600: {
            slidesPerView: 2,
          },
          960: {
            slidesPerView: 3,
          },
          1280: {
            slidesPerView: 4,
          },
        }}
        keyboard={{
          enabled: true,
        }}
        onSwiper={(swiper) => setSwiperRef(swiper)}
        slidesPerView={3}
        spaceBetween={15}
        onSlideChange={(slide) => setIndex(slide.realIndex)}
        className="mySwiper"
        modules={[Keyboard]}
      >
        {ratedRests.map((item) => (
          <SwiperSlide key={item.id}>
            <Card inSlide={true} item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
      <button
        className={`${
          index == 0 ? "hidden" : "md:flex"
        } hidden rounded-full rotate-180  absolute top-1/2 z-50 -right-6 w-12 h-12  shadow-shadows-medium items-center justify-center`}
        onClick={prevHandler}
      >
        <img className="w-5 h-5" src="/images/slide-arrow.svg" alt="arrow" />
      </button>
      <button
        className={`${
          index == ratedRests.length - 3 ? "md:hidden" : "md:flex"
        }  ${
          index == ratedRests.length - 4 ? "lg:hidden" : "lg:flex"
        }  hidden rounded-full absolute top-1/2 z-50 -left-6 w-12 h-12 shadow-shadows-medium items-center justify-center`}
        onClick={nextHandler}
      >
        <img className="w-5 h-5" src="/images/slide-arrow.svg" alt="arrow" />
      </button>
    </div>
  );
}

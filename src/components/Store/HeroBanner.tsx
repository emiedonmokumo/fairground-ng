'use client'
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const HeroBanner = ({ slides }: { slides: any}) => {
  return (
    <Swiper
      modules={[Pagination, Autoplay]}
      pagination={{ clickable: true }}
      autoplay={{ delay: 5000, disableOnInteraction: false }}
      loop
      className="w-full rounded-md"
    >
      {slides.map((slide: any, index: any) => (
        <SwiperSlide key={index}>
          <div
            className="h-[200px] w-full flex items-center justify-start bg-cover bg-center relative"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            {/* Semi-transparent overlay */}
            <div className="absolute inset-0 bg-white bg-opacity-30"></div>

            {/* Text Overlay */}
            <div className="relative z-10 px-4">
              <div className="bg-[#7B2E50] text-white p-2 rounded-lg text-center">
                {/* <p className="text-xl uppercase font-bold">
                  {slide.primaryText}
                </p> */}
                {/* <p className="text-base md:text-lg mt-1">
                  {slide.secondaryText}
                </p> */}
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HeroBanner;

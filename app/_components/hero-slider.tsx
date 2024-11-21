"use client";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import Image from "next/image";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const HeroSlider = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={0}
      slidesPerView={1}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      navigation
      pagination={{
        clickable: true,
      }}
      // onSwiper={(swiper) => console.log(swiper)}
      // onSlideChange={() => console.log("slide change")}
    >
      <SwiperSlide>
        <div className="h-44 md:h-96">
          <Image
            src="/banner.png"
            width={2000}
            height={2000}
            alt="banner"
            className="h-full object-cover w-full"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="h-44 md:h-96">
          <Image
            src="/banner.png"
            width={2000}
            height={2000}
            alt="banner"
            className="h-full object-cover w-full"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="h-44 md:h-96">
          <Image
            src="/banner.png"
            width={2000}
            height={2000}
            alt="banner"
            className="h-full object-cover w-full"
          />
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default HeroSlider;

// import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./swiper-preview.css";
import CompaniesCard from "../companies-card";

const SwiperPreview = ({ children, className }: any) => {
  return (
    <Swiper
      slidesPerView={"auto"}
      spaceBetween={16}
      slidesOffsetAfter={70}
      pagination={{
        clickable: true,
      }}
      className={`${className} swiper-fading`}
    >
      {children}
      <SwiperSlide>
        <CompaniesCard />
      </SwiperSlide>
      <SwiperSlide>
        <CompaniesCard />
      </SwiperSlide>
      <SwiperSlide>
        <CompaniesCard />
      </SwiperSlide>
      <SwiperSlide>
        <CompaniesCard />
      </SwiperSlide>
      <SwiperSlide>
        <CompaniesCard />
      </SwiperSlide>
      <SwiperSlide>
        <CompaniesCard />
      </SwiperSlide>
      <SwiperSlide>
        <CompaniesCard />
      </SwiperSlide>
      <SwiperSlide>
        <CompaniesCard />
      </SwiperSlide>
      <SwiperSlide>
        <CompaniesCard />
      </SwiperSlide>
      <SwiperSlide>
        <CompaniesCard />
      </SwiperSlide>
    </Swiper>
  );
};

export default SwiperPreview;

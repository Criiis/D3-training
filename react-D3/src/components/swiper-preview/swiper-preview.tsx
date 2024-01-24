import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./swiper-preview.css";
import CompaniesCard from "../companies-card";
import { stocks } from "../../data/stocks";
import { useState } from "react";

interface SwiperPreviewProps {
  className?: string;
}

const SwiperPreview = ({ className }: SwiperPreviewProps) => {
  const [isEnd, setIsEnd] = useState(false);

  return (
    <Swiper
      slidesPerView={"auto"}
      spaceBetween={16}
      slidesOffsetAfter={6}
      pagination={{
        clickable: true,
      }}
      onTouchMove={(e) => {
        setIsEnd(e.isEnd);
      }}
      className={`${className} swiper-fading ${isEnd ? "swiper-fading--end" : ""}`}
    >
      {stocks?.map(({ symbol, name }) => {
        return (
          <SwiperSlide key={symbol}>
            <CompaniesCard symbol={symbol} name={name} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default SwiperPreview;

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./swiper-preview.css";
import CompaniesCard from "../companies-card";
import { stocks } from "../../data/stocks";
import { useState } from "react";
import clsx from "clsx";

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
      onTouchMove={(e) => {
        setIsEnd(e.isEnd);
      }}
      className={clsx(className, "swiper-fading", { "swiper-fading--end": isEnd })}
    >
      {stocks?.map(({ symbol, name, logo }) => {
        return (
          <SwiperSlide key={symbol}>
            <CompaniesCard symbol={symbol} name={name} logo={logo} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default SwiperPreview;

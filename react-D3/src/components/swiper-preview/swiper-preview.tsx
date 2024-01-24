import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./swiper-preview.css";
import CompaniesCard from "../companies-card";
import { stocks } from "../../data/stocks";

interface SwiperPreviewProps {
  className?: string;
}

const SwiperPreview = ({ className }: SwiperPreviewProps) => {
  return (
    <Swiper
      slidesPerView={"auto"}
      spaceBetween={16}
      slidesOffsetAfter={20}
      pagination={{
        clickable: true,
      }}
      className={`${className} swiper-fading`}
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

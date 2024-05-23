'use client'
import { FaChevronLeft } from "react-icons/fa";
import { useSwiper } from "swiper/react";

export default function LeftSliderBtn() {
  const swiper = useSwiper();

  return (
    <div className="absolute left-[0] top-[0] h-[100%] bg-white z-[100] flex items-center pr-1">
      <FaChevronLeft
        className="inline-block"
        size={25}
        color="#999"
        style={{ cursor: "pointer" }}
        onClick={()=>swiper.slidePrev()}
      />
    </div>
  );
}

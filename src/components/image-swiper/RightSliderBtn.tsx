"use client";
import { FaChevronRight } from "react-icons/fa";
import { useSwiper } from "swiper/react";

export default function RightSliderBtn() {
  const swiper = useSwiper();

  return (
    <div className="absolute right-[0] top-[0] h-[100%] bg-white z-[100] flex items-center pl-1">
      <FaChevronRight
        className="inline-block"
        size={25}
        color="#999"
        style={{ cursor: "pointer" }}
        onClick={() => swiper.slideNext()}
      />
    </div>
  );
}

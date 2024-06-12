"use client";
import React, { MutableRefObject } from "react";
import { FaChevronRight } from "react-icons/fa";
import { useSwiper } from "swiper/react";

type Props = {
  ref?: MutableRefObject<any>;
  onScroll?: () => void;
  style?: React.CSSProperties;
};

export default function RightSliderBtn({ ref, onScroll, style }: Props) {
  const swiper = useSwiper();

  return (
    <div
      className="absolute right-[0] top-[0] h-[100%] bg-white z-[100] flex items-center pl-1"
      ref={ref}
      style={style}
    >
      <FaChevronRight
        className="inline-block"
        size={25}
        color="#999"
        style={{ cursor: "pointer" }}
        onClick={() => {
          swiper.slideNext();
          if (onScroll) {
            onScroll();
          }
        }}
      />
    </div>
  );
}

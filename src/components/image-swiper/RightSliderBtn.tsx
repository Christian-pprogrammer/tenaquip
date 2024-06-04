"use client";
import { MutableRefObject } from "react";
import { FaChevronRight } from "react-icons/fa";
import { useSwiper } from "swiper/react";

type Props = {
  ref?: MutableRefObject<any>;
  onScroll?: () => void;
};

export default function RightSliderBtn({ref, onScroll}: Props) {
  const swiper = useSwiper();

  return (
    <div className="absolute right-[0] top-[0] h-[100%] bg-white z-[100] flex items-center pl-1" ref={ref}>
      <FaChevronRight
        className="inline-block"
        size={25}
        color="#999"
        style={{ cursor: "pointer" }}
        onClick={() => {
          swiper.slideNext();
          if(onScroll) {
            onScroll()
          }
        }}
      />
    </div>
  );
}

'use client'
import { MutableRefObject } from "react";
import { FaChevronLeft } from "react-icons/fa";
import { useSwiper } from "swiper/react";

type Props = {
  ref?: MutableRefObject<any>;
  onScroll?: ()=>void
}

export default function LeftSliderBtn({ref, onScroll}: Props) {
  const swiper = useSwiper();

  return (
    <div className="absolute left-[0] top-[0] h-[100%] bg-white z-[100] flex items-center pr-1" ref={ref}>
      <FaChevronLeft
        className="inline-block"
        size={25}
        color="#999"
        style={{ cursor: "pointer" }}
        onClick={()=>{
          swiper.slidePrev();
          if(onScroll) {
            onScroll();
          }
        }}
      />
    </div>
  );
}

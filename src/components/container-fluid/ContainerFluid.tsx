// 'use client'

// import Link from 'next/link';
// import React from 'react'
// import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

// import "swiper/css/navigation";
// import { Navigation } from "swiper/modules";
// import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';





// const ContainerFluid = () => {

//   return (
//     <div className="bg-[#00253e] border-4 relative w-[100%]">
//       <Swiper loop={true} slidesPerView={1} style={{}}>
//         <LeftBtn />
//         <SwiperSlide>
//           <p className="text-white">
//             FREE DELIVERY on orders <strong>$99</strong> to{" "}
//             <Link href="#" className="underline">
//               eligible locations.
//             </Link>{" "}
//           </p>
//         </SwiperSlide>
//         <SwiperSlide>
//           <p className="text-white">
//             FREE Gift with purchase of eligible Walter products. Code: WALTER.{" "}
//             <strong>$99</strong> to{" "}
//             <Link href="#" className="underline">
//               Learn More.
//             </Link>{" "}
//           </p>
//         </SwiperSlide>
//         <SwiperSlide>
//           <p className="text-white">
//             Buy Now, Split Up The Cost With Affirm.
//             <strong>$99</strong> to{" "}
//             <Link href="#" className="underline">
//               Details.
//             </Link>{" "}
//           </p>
//         </SwiperSlide>
//         <RightBtn />
//       </Swiper>
//     </div>
//   );
// }

// export default ContainerFluid

"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import "./styles.css";

// import required modules
import { Navigation } from "swiper/modules";
import { FaChevronLeft, FaChevronRight, FaTruck } from "react-icons/fa";
import Link from "next/link";

const LeftBtn = () => {
  const swiper = useSwiper();

  return (
    <FaChevronLeft
      className="inline-block absolute left-0 top-[calc((50%-12.5px))] z-10"
      size={20}
      color="#999"
      style={{ cursor: "pointer" }}
      onClick={() => swiper.slideNext()}
    />
  );
};

const RightBtn = () => {

  const swiper = useSwiper();

  return (
    <FaChevronRight
      className="inline-block absolute right-0 top-[calc((50%-12.5px))] z-10"
      size={20}
      color="#999"
      style={{ cursor: "pointer" }}
      onClick={() => swiper.slideNext()}
    />
  );
}

export default function ContainerFluid() {
  return (
    <div className="padding-horizontal bg-[#00253e] py-1">
      <div className="">
        <Swiper
          navigation={false}
          modules={[Navigation]}
          loop={true}
          className="mySwiper"
          style={{
            position: "relative",
          }}
        >
          <LeftBtn />
          {/* <SwiperSlide
            style={{
              backgroundColor: "#00253e",
              display: "flex",
              alignItems: "center",
            }}
          >
            <div>
              <span className="text-white text-[12px] md:text-[14px] leading-[-10px]">
                FREE Gift with purchase of eligible Walter products. Code:
                WALTER.
                <Link href="#" className="underline">
                  Learn More.
                </Link>
              </span>
            </div>
          </SwiperSlide> */}
          <SwiperSlide
            style={{
              backgroundColor: "#00253e",
            }}
          >
            <div className="w-[100%] h-[100%]">
              <span className="text-white text-[12px] md:text-[14px]">
                Buy Now, Split Up The Cost With Affirm.{" "}
                <Link href="#">Details.</Link>
              </span>
            </div>
          </SwiperSlide>
          <SwiperSlide
            style={{
              alignItems: "center",
              display: "flex",
              backgroundColor: "#00253e",
            }}
          >
            <div>
              <span className="text-white text-[12px] md:text-[14px]">
                <FaTruck
                  color="white"
                  size={20}
                  className="inline-block mr-1"
                />
                FREE DELIVERY on orders $99+ to{" "}
                {/* <Link href="#">eligible locations.</Link> */}
              </span>
            </div>
          </SwiperSlide>
          <RightBtn />
        </Swiper>
      </div>
    </div>
  );
}



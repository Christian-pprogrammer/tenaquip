"use client";
import Image from "next/image";
import React from "react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { FreeMode, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import LeftSliderBtn from "./LeftSliderBtn";
import RightSliderBtn from "./RightSliderBtn";
import Link from "next/link";

type Props = {
  brands: Array<Brand>;
};

const ImageSwiper = ({ brands }: Props) => {
  return (
    <div className="flex items-center relative">
      <Swiper
        slidesPerView={
          screen.width < 400
            ? 2
            : screen.width < 550
            ? 3
            : screen.width < 800
            ? 4
            : screen.width < 1000
            ? 5
            : 6
        }
        spaceBetween={30}
        navigation={false}
        mousewheel={true}
        keyboard={true}
        modules={[FreeMode, Pagination, Navigation]}
        className="mySwiper"
      >
        <LeftSliderBtn />
        {brands.map((brand, index) => {
          console.log(brand);
          return null;
        })}
        {brands.map((brand, index) => (
          <SwiperSlide
            style={{
              marginRight: index == 0 ? "50px" : "10px",
              marginLeft: index == 0 ? "40px" : "0px",
            }}
          >
            <Link
              href={`/brands/${brand?.attributes?.handle}`}
              className="flex flex-col items-center justify-center border-1 border-lightMain hover:border-mainColor text-center cursor-pointer transition-all duration-1000"
            >
              <Image
                src={`${process.env.STRAPI_UPLOADS}${brand?.attributes?.thumbnail?.data?.attributes?.url}`}
                alt={brand?.attributes?.name}
                width={90}
                height={60}
              />
            </Link>
          </SwiperSlide>
        ))}
        <RightSliderBtn />
      </Swiper>
    </div>
  );
};

export default ImageSwiper;

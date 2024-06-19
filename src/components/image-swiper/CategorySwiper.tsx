"use client";
import React, { MutableRefObject, useEffect, useRef, useState } from "react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { FreeMode, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import LeftSliderBtn from "./LeftSliderBtn";
import RightSliderBtn from "./RightSliderBtn";
import { useParams } from "next/navigation";
import SliderElement from "../slider-elemet/SliderElement";

type Props = {
  categories: Array<any>;
  type: string;
  isBrand?: Boolean;
};

const CategorySwiper = ({ categories, type, isBrand }: Props) => {
  const params = useParams();
  const thumb: MutableRefObject<any> = useRef();
  const wrapper: MutableRefObject<any> = useRef();
  const prevButtonRef: MutableRefObject<any> = useRef();
  const nextButtonRef: MutableRefObject<any> = useRef();
  const [scrollValue, setScrollValue] = useState(0);

  useEffect(() => {
    console.log(params);
  }, [params]);

  const slidesPerView =
    screen.width < 400
      ? 3
      : screen.width < 550
      ? 5
      : screen.width < 800
      ? 6
      : screen.width < 1000
      ? 9
      : 9;

  return (
    <div className="flex items-center relative my-5" ref={wrapper}>
      <Swiper
        slidesPerView={slidesPerView}
        spaceBetween={30}
        navigation={false}
        mousewheel={true}
        keyboard={true}
        modules={[FreeMode, Pagination, Navigation]}
        className="mySwiper"
        style={{
          paddingRight: "40px",
        }}
      >
        <LeftSliderBtn
          style={{
            display: slidesPerView > categories.length ? "none" : "flex",
          }}
          ref={prevButtonRef}
          onScroll={() => {
            const thumbWidth = parseFloat(
              thumb.current.style.width.replace(/%/g, "")
            );
            const remainder = 100 - thumbWidth;
            if (scrollValue > 0) {
              setScrollValue(
                (prev) => prev - remainder / (categories.length - slidesPerView)
              );
            }

            // setScrollValue((prev)=>{
            //   if(prev > 0) {
            //     const thumbWidth = (slidesPerView * 100) / categories.length
            //     const wrapperWidth = wrapper.current.style.width;
            //     const remainder = wrapperWidth - thumbWidth;
            //     alert((remainder * 100) / categories.length);
            //     return (remainder * 100 / categories.length)
            //   }else{

            //   }
            //   return 0
            // })
          }}
        />
        {categories.map((brand, index) => {
          console.log(brand);
          return null;
        })}
        {categories.map((category, index) => (
          <SwiperSlide
            style={{
              marginRight: index == 0 ? "50px" : "10px",
              marginLeft: index == 0 ? "40px" : "0px",
            }}
          >
            {type == "root-category" ? (
              <SliderElement
                image={`${process.env.STRAPI_UPLOADS}${category?.attributes?.thumbnail?.data?.attributes?.url}`}
                name={category?.attributes?.name}
                handle={`${
                  isBrand ? `/brands/${params.brand}` : ""
                }/product-category/${category?.attributes?.handle}`}
              />
            ) : type == "category" ? (
              <SliderElement
                image={`${process.env.STRAPI_UPLOADS}${category?.attributes?.thumbnail?.data?.attributes?.url}`}
                name={category?.attributes?.name}
                handle={`${
                  isBrand ? `/brands/${params.brand}` : ""
                }/product-category/${params?.category}/${
                  category?.attributes?.handle
                }`}
              />
            ) : (
              <SliderElement
                image={`${process.env.STRAPI_UPLOADS}${category?.attributes?.thumbnail?.data?.attributes?.url}`}
                name={category?.attributes?.name}
                handle={`${
                  isBrand ? `/brands/${params.brand}` : ""
                }/product-category/${params?.category}/${
                  params?.sub_category
                }/${category?.attributes?.handle}`}
              />
            )}
          </SwiperSlide>
        ))}
        <RightSliderBtn
          style={{
            display: slidesPerView > categories.length ? "none" : "flex",
          }}
          ref={nextButtonRef}
          onScroll={() => {
            const thumbWidth = parseFloat(
              thumb.current.style.width.replace(/%/g, "")
            );
            const remainder = 100 - thumbWidth;
            if (scrollValue < remainder) {
              setScrollValue(
                (prev) => prev + remainder / (categories.length - slidesPerView)
              );
            }
          }}
        />
        <div
          className="slider-scrollbar"
          style={{
            display: slidesPerView > categories.length ? "none" : "flex",
          }}
        >
          <div className="scrollbar-track">
            <div
              className="scrollbar-thumb"
              ref={thumb}
              style={{
                width: `${(slidesPerView * 100) / categories.length}%`,
                left: scrollValue + "%",
              }}
            ></div>
          </div>
        </div>
      </Swiper>
    </div>
  );
};

export default CategorySwiper;

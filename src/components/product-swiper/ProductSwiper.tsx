"use client";
import React, { MutableRefObject, useEffect, useRef, useState } from "react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { FreeMode, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useParams } from "next/navigation";
import LeftSliderBtn from "./LeftSliderBtn";
import RightSliderBtn from "./RightSliderBtn";
import ProductComponent from "../product-component/ProductComponent";

type Props = {
  products: Array<any>;
  hideAddToCart?: Boolean;
};

const ProductSwiper = ({ products, hideAddToCart }: Props) => {
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
      ? 1
      : screen.width < 550
      ? 2
      : screen.width < 800
      ? 3
      : screen.width < 1000
      ? 6
      : 5;

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
        style={{}}
      >
        <LeftSliderBtn
          style={{
            display: slidesPerView > products.length ? "none" : "flex",
          }}
          ref={prevButtonRef}
          onScroll={() => {
            const thumbWidth = parseFloat(
              thumb.current.style.width.replace(/%/g, "")
            );
            const remainder = 100 - thumbWidth;
            if (scrollValue > 0) {
              setScrollValue(
                (prev) => prev - remainder / (products.length - slidesPerView)
              );
            }
          }}
        />
        {products.map((product, index) => (
          product && 
            <SwiperSlide
              style={{
                marginRight: index == 0 ? "50px" : "10px",
                marginLeft: index == 0 ? "40px" : "0px",
                height: "100%",
              }}
            >
              <ProductComponent product={product} hideAddToCart={hideAddToCart} />
            </SwiperSlide>
        ))}
        <RightSliderBtn
          style={{
            display: slidesPerView > products.length ? "none" : "flex",
          }}
          ref={nextButtonRef}
          onScroll={() => {
            const thumbWidth = parseFloat(
              thumb.current.style.width.replace(/%/g, "")
            );
            const remainder = 100 - thumbWidth;
            if (scrollValue < remainder) {
              setScrollValue(
                (prev) => prev + remainder / (products.length - slidesPerView)
              );
            }
          }}
        />
        <div
          className="slider-scrollbar"
          style={{
            display: slidesPerView > products.length ? "none" : "flex",
          }}
        >
          <div className="scrollbar-track">
            <div
              className="scrollbar-thumb"
              ref={thumb}
              style={{
                width: `${(slidesPerView * 100) / products.length}%`,
                left: scrollValue + "%",
              }}
            ></div>
          </div>
        </div>
      </Swiper>
    </div>
  );
};

export default ProductSwiper;

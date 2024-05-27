"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { FreeMode, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import LeftSliderBtn from "./LeftSliderBtn";
import RightSliderBtn from "./RightSliderBtn";
import SubCategoryElement from "../sub-category-element/SubCategoryElement";
import { useParams } from "next/navigation";

type Props = {
  categories: Array<any>;
  type: string
};

const CategorySwiper = ({ categories, type }: Props) => {

  const params = useParams();

  useEffect(()=>{
    console.log(params)
  }, [params])

  console.log(params)

  return (
    <div className="flex items-center relative my-5">
      <Swiper
        slidesPerView={
          screen.width < 400
            ? 3
            : screen.width < 550
            ? 5
            : screen.width < 800
            ? 6
            : screen.width < 1000
            ? 8
            : 8
        }
        spaceBetween={30}
        navigation={false}
        mousewheel={true}
        keyboard={true}
        modules={[FreeMode, Pagination, Navigation]}
        className="mySwiper"
      >
        <LeftSliderBtn />
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
            {type == "category" ? (
              <SubCategoryElement
                image={`${process.env.STRAPI_UPLOADS}${category?.attributes?.thumbnail?.data?.attributes?.url}`}
                name={category?.attributes?.name}
                handle={`/product-category/${params?.category}/${category?.attributes?.handle}`}
              />
            ) : (
              <SubCategoryElement
                image={`${process.env.STRAPI_UPLOADS}${category?.attributes?.thumbnail?.data?.attributes?.url}`}
                name={category?.attributes?.name}
                handle={`/product-category/${params?.category}/${params?.sub_category}/${category?.attributes?.handle}`}
              />
            )}
          </SwiperSlide>
        ))}
        <RightSliderBtn />
      </Swiper>
    </div>
  );
};

export default CategorySwiper;

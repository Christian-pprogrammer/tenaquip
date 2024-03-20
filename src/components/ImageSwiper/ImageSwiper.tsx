"use client"
import Image from 'next/image';
import React from 'react'
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import { FreeMode, Keyboard, Mousewheel, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const ImageSwiper = () => {
  return (
    <Swiper
      slidesPerView={5}
      spaceBetween={30}
      // freeMode={true}
      // cssMode={true}
      // navigation={true}
      mousewheel={true}
      keyboard={true}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination, Navigation]}
      className="mySwiper"
    >
      <SwiperSlide>
        <div>
          <Image src="/olfa.jpeg" alt='' width={130} height={60} />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div>
          <Image src="/olfa.jpeg" alt='' width={130} height={60} />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div>
          <Image src="/olfa.jpeg" alt='' width={130} height={60} />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div>
          <Image src="/olfa.jpeg" alt='' width={130} height={60} />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div>
          <Image src="/olfa.jpeg" alt='' width={130} height={60} />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div>
          <Image src="/olfa.jpeg" alt='' width={130} height={60} />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div>
          <Image src="/olfa.jpeg" alt='' width={130} height={60} />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div>
          <Image src="/olfa.jpeg" alt='' width={130} height={60} />
        </div>
      </SwiperSlide>
    </Swiper>
  )
}

export default ImageSwiper
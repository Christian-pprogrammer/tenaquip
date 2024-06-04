"use client"

import Image from 'next/image'
import Link from 'next/link'
import React, { DetailedHTMLProps, HTMLAttributes, MutableRefObject, useRef } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

interface SliderProps {
  categories: Array<Category>
}

const Slider = ({categories}: SliderProps) => {

  const categoryListRef: MutableRefObject<any> = useRef();
  const prevButtonRef: MutableRefObject<any> = useRef();
  const nextButtonRef: MutableRefObject<any> = useRef();
  const scrollbarThumb: MutableRefObject<any> = useRef();
  const sliderScrollbar: MutableRefObject<any> = useRef();

  const scrollLeft = () => {
    const categoryListWidth = categoryListRef.current.clientWidth;
    const scrollBy = categoryListWidth * -1;
    categoryListRef.current.scrollBy({left: scrollBy, behavior: 'smooth'})
  }

  const scrollRight = () => {
    const categoryListWidth = categoryListRef.current.clientWidth;
    const scrollBy = categoryListWidth * 1;
    categoryListRef.current.scrollBy({left: scrollBy, behavior: 'smooth'})
  }

  const onScroll = () => {
    const maxScrolledLeft = categoryListRef.current.scrollWidth - categoryListRef.current.clientWidth;
    prevButtonRef.current.style.display = categoryListRef.current.scrollLeft <= 0 ? "none":"block";
    nextButtonRef.current.style.display = categoryListRef.current.scrollLeft >= maxScrolledLeft ? "none":"block";

    //update the thumb position
    const scrollPosition = categoryListRef.current.scrollLeft;
    const thumbPosition = (scrollPosition / maxScrolledLeft) * (sliderScrollbar.current.clientWidth - scrollbarThumb.current.offsetWidth);
    scrollbarThumb.current.style.left = `${thumbPosition}px`
  }

  return (
    <div className='relative'>
      <div className="slider-wrapper mt-3">
        <button id='prev-slide' 
          className="slide-button material-symbols-rounded" onClick={()=>scrollLeft()} ref={prevButtonRef}>
          <FaChevronLeft 
            size={27}
            color='#4c4c4e'
          />
        </button>
        <div className="category-list" ref={categoryListRef} style={{
          display: "grid",
          gridTemplateColumns: `repeat(${categories.length},1fr)`,
          overflowX: "auto",
          scrollbarWidth: "none",
          marginBottom: "10px"
        }}
        onScroll={()=>onScroll()}
        >
          {
            categories.map((category, index) => (
              <Link href={`/product-category/`} key={index} className='md:w-[165px] w-[110px] flex flex-col items-center gap-3'>
                <Image 
                  src={category.metadata.image}
                  alt=''
                  width={100}
                  height={100}
                />

                <div className='text-[14px] leading-[1.4rem] px-[3px] py-[5px] text-center'>
                  <Link href={`/`} className='text-mainColor block no-underline'>
                    {category.name}
                  </Link>
                </div>

              </Link>
            ))
          }
        </div>
        <button id='next-slide' className="slide-button material-symbols-rounded" onClick={()=>scrollRight()} ref={nextButtonRef}>
          <FaChevronRight 
            size={27}
            color='#4c4c4e'
          />
        </button>
      </div>
      <div className="slider-scrollbar" ref={sliderScrollbar}>
        <div className="scrollbar-track">
          <div className="scrollbar-thumb" ref={scrollbarThumb}>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Slider
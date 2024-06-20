"use client"
import { useAppSelector } from '@/hooks'
import Image from 'next/image'
import React from 'react'

const ReviewForm = () => {

  const review = useAppSelector(state=>state.review);

  let img = review?.thumbnail?.includes("localhost") ? review.thumbnail.replace("localhost", "127.0.0.1"):review.thumbnail

  return (
    <div>
      <div className='flex justify-center gap-3'>
        <Image 
          src={img}
          height={100}
          width={100}
          alt=''
        />

        <p>{review.product_name}</p>
      </div>

      <h2>form</h2>
    </div>
  )
}

export default ReviewForm
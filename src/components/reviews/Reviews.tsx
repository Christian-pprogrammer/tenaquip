"use client"

import { setModalContent, setShowModal } from '@/Store/slices/modal'
import { setReviewData } from '@/Store/slices/review'
import { writeReview } from '@/services/product-service'
import React from 'react'
import { useDispatch } from 'react-redux'

type Props = {
  product_id: number;
  product_name: string;
  thumbnail: string;
  reviews: Array<Review>;
};

const Reviews = ({product_id, reviews, product_name, thumbnail}: Props) => {

  console.log("data product", product_id, product_name, thumbnail)

  const dispatch = useDispatch();

  const newReview = async () => {
    dispatch(setReviewData({ product_id, product_name, thumbnail }));
    dispatch(setShowModal(true))
    dispatch(setModalContent({
      title: "Write review",
      content: "write-review"
    }))
    
  }

  return (
    <div>
      <h2 className="text-Gray text-[22px] mt-4 mb-2">Reviews</h2>
      <hr className="my-[15px] w-[100%] border-t-[#ddd]" />
      <div>
        <button className="block py-[10px] px-[30px] border-1 border-[#272727] cursor-pointer bg-lightBlue text-white rounded-[50px] text-sm" onClick={newReview}>
          Write a review
        </button>
        <div className="mt-4">
          {!reviews || reviews?.length == 0 ? (
            <p className="text-Gray text-sm">No Reviews to show</p>
          ) : (
            <p>{reviews.length}</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Reviews
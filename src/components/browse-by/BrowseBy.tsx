'use client'

import React from 'react'

type Props = {
  title: string
}

const BrowseBy = ({title}: Props) => {

  return (
    <div className="flex items-center justify-between">
      <h2 className="font-semibold text-[24px] text-Gray my-2">{title}</h2>
      <div>
        <p></p>
        <button className="text-[13px] text-[#fff] mr-[10px] bg-[#00497d] p-2 rounded-[20px] inline-block font-bold">
          Categories
        </button>
        <button className="text-[13px] text-Gray mr-[10px] bg-lightMain p-2 rounded-[20px] inline-block font-bold">
          Product Listings
        </button>
      </div>
    </div>
  );
}

export default BrowseBy
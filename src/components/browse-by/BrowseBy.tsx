"use client";

import React from "react";

type Props = {
  title: string;
  browseBy: string;
  toggleBrowseBy: (by: string)=>void
};

const BrowseBy = ({ title, browseBy, toggleBrowseBy }: Props) => {
  return (
    <div className="flex items-center justify-between">
      <h2 className="font-semibold text-[24px] text-Gray my-2">{title}</h2>
      <div className="flex items-center gap-3">
        <p className="text-[13px] font-bold text-Gray">Browse by:</p>
        <button
          className={`text-[13px] p-2 rounded-[20px] inline-block font-bold ${
            browseBy == "Categories"
              ? "text-[rgb(255,255,255)] bg-[#00497d]"
              : "text-Gray bg-lightMain"
          }`}
          onClick={() => toggleBrowseBy("Categories")}
        >
          Categories
        </button>
        <button
          className={`text-[13px] p-2 rounded-[20px] inline-block font-bold ${
            browseBy == "Product Listings"
              ? "text-[rgb(255,255,255)] bg-[#00497d]"
              : "text-Gray bg-lightMain"
          }`}
          onClick={() => toggleBrowseBy("Product Listings")}
        >
          Product Listings
        </button>
      </div>
    </div>
  );
};

export default BrowseBy;

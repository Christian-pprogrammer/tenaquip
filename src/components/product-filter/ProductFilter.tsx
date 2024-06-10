"use client";

import React, { useState } from "react";
import FilterDropdown from "../filter-drop-down/FilterDropdown";
import { FaChevronDown, FaChevronLeft } from "react-icons/fa";
import COLORS from "@/config/colors";
import Link from "next/link";

const ProductFilter = ({ subCategories }: { subCategories?: Array<any> }) => {
  console.log(subCategories);

  const [toogleId, setToggleId] = useState(0);

  const toggleDropdown = (id: number) => {
    if (toogleId != id) {
      setToggleId(id);
    } else {
      setToggleId(0);
    }
  };

  return (
    <div className="bg-lightMain p-2 pb-4 mt-2 mb-4 flex justify-between">
      <div className="filters flex gap-x-1">
        <button className="text-mainGreen font-bold text-[13px] rounded-[3px] border-lineGray border-1 bg-white py-[10px] px-2 cursor-pointer">
          In Stock (3000)
        </button>
        <button className="text-Gray text-[13px] rounded-[3px] border-lineGray border-1 bg-white py-[10px] px-2 cursor-pointer">
          Liquidation
        </button>
        <button className="text-Gray text-[13px] rounded-[3px] border-lineGray border-1 bg-white py-[10px] px-2 cursor-pointer">
          Sale Items
        </button>
        {subCategories && (
          <div className="text-Gray text-[13px] rounded-[3px] border-lineGray border-1 bg-white relative">
            <div
              className="flex items-center justify-between w-[100%] h-[100%] px-2 gap-x-2 cursor-pointer"
              onClick={() => toggleDropdown(1)}
            >
              <span>Category</span>
              <FaChevronDown
                size={12}
                color={COLORS.GRAY}
                className={
                  toogleId != 1
                    ? "rotate-0 transition-all duration-[0.2s]"
                    : "rotate-180 duration-[0.2s]"
                }
              />
            </div>
            <ul
              className={`absolute top-full bg-white border-none shadow-xl left-0 mt-2 ${
                toogleId != 1 && "hidden"
              } min-w-64 px-3 z-50 max-h-96 overflow-y-auto`}
            >
              {subCategories.map((sub, index) => (
                <Link
                  className="block text-Gray text-sm my-3"
                  href={`${sub.attributes?.handle}`}
                  key={index}
                >
                  <span className="whitespace-nowrap">
                    {`${sub.attributes?.name}`}
                  </span>
                </Link>
              ))}

              {/* Add other menu items here */}
            </ul>
          </div>
        )}
        <div className="text-Gray text-[13px] rounded-[3px] border-lineGray border-1 bg-white relative">
          <div
            className="flex items-center justify-between w-[100%] h-[100%] px-2 gap-x-2 cursor-pointer"
            onClick={() => toggleDropdown(2)}
          >
            <span>Manufacturer</span>
            <FaChevronDown
              size={12}
              color={COLORS.GRAY}
              className={
                toogleId != 2
                  ? "rotate-0 transition-all duration-[0.2s]"
                  : "rotate-180 duration-[0.2s]"
              }
            />
          </div>
          <ul
            className={`absolute top-full bg-white border-none shadow-xl left-0 mt-2 ${
              toogleId != 2 && "hidden"
            } min-w-64 px-3 z-50`}
          >
            {subCategories && subCategories.map((sub, index) => (
              <Link
                className="block text-Gray text-sm my-3"
                href={`${sub.handle}`}
                key={index}
              >
                <span className="whitespace-nowrap">{"Hello"}</span>
              </Link>
            ))}
          </ul>
        </div>
      </div>
      <div className="sorts">
        <div className="flex h-[100%] items-center gap-1">
          <p className="text-Gray text-[13px]">Sort by: </p>
          <div className="text-Gray text-[13px] rounded-[3px] border-lineGray border-1 bg-white relative h-[100%]">
            <div
              className="flex items-center justify-between w-[100%] h-[100%] px-2 gap-x-2 cursor-pointer"
              onClick={() => toggleDropdown(3)}
            >
              <span>Most Relevant</span>
              <FaChevronDown
                size={12}
                color={COLORS.GRAY}
                className={
                  toogleId != 3
                    ? "rotate-0 transition-all duration-[0.2s]"
                    : "rotate-180 duration-[0.2s]"
                }
              />
            </div>
            <ul
              className={`absolute top-full bg-white border-none shadow-xl left-0 mt-2 ${
                toogleId != 3 && "hidden"
              } min-w-64 px-3 z-50 max-h-96 overflow-y-auto`}
            >
              {subCategories && subCategories.map((sub, index) => (
                <Link
                  className="block text-Gray text-sm my-3"
                  href={`${sub.attributes?.handle}`}
                  key={index}
                >
                  <span className="whitespace-nowrap">
                    {`${sub.attributes?.name}`}
                  </span>
                </Link>
              ))}

              {/* Add other menu items here */}
            </ul>
          </div>
          <div className="text-Gray text-[13px] rounded-[3px] border-lineGray border-1 relative h-[100%]">
            <div
              className="flex items-center justify-between w-[100%] h-[100%] px-2 gap-x-2 cursor-pointer bg-white"
              onClick={() => toggleDropdown(4)}
            >
              <span>Per Page</span>
              <FaChevronDown
                size={12}
                color={COLORS.GRAY}
                className={
                  toogleId != 4
                    ? "rotate-0 transition-all duration-[0.2s]"
                    : "rotate-180 duration-[0.2s]"
                }
              />
            </div>
            <ul
              className={`absolute top-full bg-white border-none shadow-xl right-0 mt-2 h-[100%] ${
                toogleId != 4 && "hidden"
              } min-w-64 px-3 z-50 max-h-96 overflow-y-auto`}
            >
              {subCategories && subCategories.map((sub, index) => (
                <Link
                  className="block text-Gray text-sm my-3"
                  href={`${sub.attributes?.handle}`}
                  key={index}
                >
                  <span className="whitespace-nowrap">
                    {`${sub.attributes?.name}`}
                  </span>
                </Link>
              ))}

              {/* Add other menu items here */}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductFilter;

"use client"

import React, { useState } from "react";
import FilterDropdown from "../filter-drop-down/FilterDropdown";
import { FaChevronDown } from "react-icons/fa";
import COLORS from "@/config/colors";
import Link from "next/link";


const CategoryFilter = ({subCategories}: {subCategories: Array<any>}) => {

  console.log(subCategories)

  const [toogleId, setToggleId] = useState(0);

  const toggleDropdown = (id: number) => {
    if(toogleId != id) {
      setToggleId(id);
    }else{
      setToggleId(0)
    }
    
  };

  return (
    <div className="bg-lightMain p-2 pb-4 mt-2 mb-4">
      <div className="filters flex gap-x-1">
        <button className="text-mainGreen font-bold text-[13px] rounded-[3px] border-lineGray border-1 bg-white py-[10px] px-2 cursor-pointer">
          In Stock
        </button>
        <button className="text-Gray text-[13px] rounded-[3px] border-lineGray border-1 bg-white py-[10px] px-2 cursor-pointer">
          Liquidation
        </button>
        <button className="text-Gray text-[13px] rounded-[3px] border-lineGray border-1 bg-white py-[10px] px-2 cursor-pointer">
          Sale Items
        </button>
        <button className="text-Gray text-[13px] rounded-[3px] border-lineGray border-1 bg-white py-[10px] px-2 cursor-pointer">
          Green Edge
        </button>
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
            {subCategories.map((sub, index) => (
              <Link
                className="block text-Gray text-sm my-3"
                href={`${sub.handle}`}
                key={index}
              >
                <span className="whitespace-nowrap">{"Hello"}</span>
              </Link>
            ))}

            {/* Add other menu items here */}
          </ul>
        </div>
        {/* <FilterDropdown
          title="Manufacturer"
          elements={[
            {
              itemName: "Black on Orange (1)",
            },
            {
              itemName: "Black on White (1)",
            },
            {
              itemName: "Black on Yellow (44)",
            },
            {
              itemName: "White on Blue (5)",
            },
          ]}
        ></FilterDropdown>
        <br />
        <button className="custom-btn font-bold">View All Filters</button> */}
      </div>
      <div className="sorts"></div>
    </div>
  );
};

export default CategoryFilter;

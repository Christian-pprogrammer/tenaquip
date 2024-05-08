"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

type FilterElement = {
  itemName: string;
};

type Props = {
  title: string;
  elements: Array<FilterElement>;
};

function FilterDropdown({ title, elements }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative w-fit inline-block">
      <ul className="items-center font-medium text-sm h-[100%]">
        <li className="relative items-center h-[100%]">
          <button
            className="custom-btn text-mainGreen mr-1 flex items-center gap-2"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            style={{
              display: "flex !important",
            }}
          >
            <span className="block">{title}</span>

            {!open ? <FaChevronDown size={12} /> : <FaChevronUp size={12} />}
          </button>
          {/* 2nd level menu */}
          <ul
            className={`absolute top-full bg-white border-none shadow-xl ${
              !open && "hidden"
            } min-w-64 px-3`}
          >
            {elements.map((element, index) => (
              <div className="campaigns flex gap-1 text-sm my-5" key={index}>
                <input id={`${index}`} type="checkbox" value="campaigns" />
                <label
                  htmlFor={`${index}`}
                  className="custom-no-margin-label"
                  style={{
                    marginTop: "0px !important",
                  }}
                >
                  {element.itemName}
                </label>
              </div>
            ))}

          <button className="blue-btn mb-4">
            Refine
          </button>
          </ul>
        </li>
      </ul>
    </div>
  );
}

export default FilterDropdown;

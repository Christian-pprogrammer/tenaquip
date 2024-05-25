"use client";
import COLORS from "@/config/colors";
import Link from "next/link";
import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

type LinkElement = {
  title: string;
  linkUrl: string;
};

type Props = {
  title: string;
  links: Array<LinkElement>;
  toggleDropdown: (id: number) => void;
  id: number;
  isOpen: Boolean
};

function Dropdown({ title, links, toggleDropdown, id, isOpen }: Props) {
  return (
    <div className="relative bg-white border-b-1 border-lineGray">
      <div
        className="header flex items-center justify-between padding-horizontal py-[16px]"
        onClick={() => toggleDropdown(id)}
      >
        <p className="text-[16px] text-mainColor font-bold">{title}</p>
        <FaChevronDown size={12} color={COLORS.MAIN_COLOR} className={!isOpen ? 'rotate-0 transition-all duration-[0.5s]':'rotate-180 duration-[0.5s]'} />
      </div>
      <div className={!isOpen ? `body bg-lightMain h-0 overflow-hidden transition-all duration-[0.4s]` : `h-auto duration-[0.3s]`}>
        {links.map((link, index: number) => (
          <Link
            className="block text-Gray text-sm py-[10px] padding-horizontal bg-transparent"
            href={`/${link.linkUrl}`}
            key={index}
          >
            <span className="whitespace-nowrap text-Gray">{link.title}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Dropdown;

"use client"
import Link from 'next/link';
import React, { useState } from 'react';

type LinkElement = {
  title: string,
  linkUrl: string
}

type Props = {
  title: string,
  links: Array<LinkElement>
}

function HoverDropdown({title, links}: Props) {
  const [open, setOpen] = useState(false);


  return (
    <div className="relative">
      <ul className="flex flex-wrap items-center font-medium text-sm h-[100%]">
        <li className="relative flex items-center h-[100%]" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
          <a className="text-white text-sm font-medium flex items-center hover:bg-darkMain px-[20px] h-[100%]" href="#0" aria-expanded={open}>
            {title}
          </a>
          {/* 2nd level menu */}
          <ul className={`absolute top-full bg-white border-none shadow-xl ${!open && 'hidden'} min-w-64 px-3 z-50`} 
            onMouseEnter={() => setOpen(true)} 
            onMouseLeave={() => setOpen(false)}>

              {
                links.map((link, index) => (
                    <Link className="block text-Gray text-sm my-3" href={`/product-category/${link.linkUrl}`} key={index}>
                      <span className="whitespace-nowrap">{link.title}</span>
                    </Link>
                ))
              }
            
            {/* Add other menu items here */}
          </ul>
        </li>
      </ul>
    </div>
  );
}

export default HoverDropdown;

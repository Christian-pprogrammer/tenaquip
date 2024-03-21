"use client"
import Link from 'next/link';
import React, { useState } from 'react';

type FilterElement = {
  itemName: string
}

type Props = {
  title: string,
  elements: Array<FilterElement>
}

function FilterDropdown({title, elements}: Props) {
  const [open, setOpen] = useState(false);


  return (
    <div className="relative">
      <ul className="items-center font-medium text-sm h-[100%]">
        <li className="relative flex items-center h-[100%]">
          <button className="custom-btn text-mainGreen mr-1" onClick={()=>setOpen((value)=>!value)} aria-expanded={open}>
            {title}
          </button>
          {/* 2nd level menu */}
          <ul className={`absolute top-full bg-white border-none shadow-xl ${!open && 'hidden'} min-w-64 px-3`} >

              {
                elements.map((element, index) => (
                  <div className="campaigns flex gap-1" key={index}>
                    <input type="checkbox" value="campaigns" />
                    <label htmlFor="" className='custom-no-margin-label' style={{
                      marginTop: '0px !important'
                    }}>
                      {element.itemName}
                    </label>
                  </div>
                ))
              }
            
            {/* Add other menu items here */}
          </ul>
        </li>
      </ul>
    </div>
  );
}

export default FilterDropdown;

"use client"

import React from 'react'


type Option = {
  name: string,
  id: string
}
type Props = {
  option: Option;
  checked: boolean;
  onChange: (id: string) => any;
}

const ShippingOption = ({option, checked, onChange}: Props) => {
  return (
    <label htmlFor="" className='text-[14px] font-[400] text-Gray flex items-center gap-1' onClick={()=>onChange(option.id)}>
      <div className='border-mainColor border-1 rounded-full w-[15px] h-[15px] p-[2px] flex items-center justify-center bg-white'>
        <div className={`border-mainColor rounded-full w-full h-full flex-1 ${checked ? 'bg-[#3273F6] ':''}`}>
          
        </div>
      </div>

      <span className='block'>
        {option.name}
      </span>
    </label> 
  )
}

export default ShippingOption
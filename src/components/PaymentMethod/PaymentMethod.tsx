"use client"

import Image from 'next/image'
import React, { useState } from 'react'

type Props = {
  title: string,
  images: Array<string>,
  checked: boolean,
  onChange: (checked: boolean)=>any
}
const PaymentMethod = ({ title, images, checked, onChange }: Props) => {

  return (
    <div className='rounded-[5px] p-[15px] pt-[5px] border-1 border-lineGray' onClick={()=>onChange(!checked)}>
      <label htmlFor="" className='text-[14px] font-[400] text-Gray flex items-center gap-1'>
        {/* <input className='outline-none' type="radio" checked={checked} onChange={(e)=>{
          onChange(e.target.checked)
        }} /> */}
        
        {/* Something like radio */}
        <div className='border-mainColor border-1 rounded-full w-[15px] h-[15px] p-[2px] flex items-center justify-center bg-white'>
          <div className={`border-mainColor rounded-full w-full h-full flex-1 ${checked ? 'bg-[#3273F6] ':''}`}>
            
          </div>
        </div>

        <span className='block'>
          {title}
        </span>
      </label> 
      <div className='flex' style={{
        width: '120px'
      }}>
        {
          images.map((image: string)=>(
            <Image 
              src={image}
              height={100}
              width={100}
              alt=''
              objectFit='fit'
            />
          ))
        }
      </div>

      
    </div>
  )
}

export default PaymentMethod
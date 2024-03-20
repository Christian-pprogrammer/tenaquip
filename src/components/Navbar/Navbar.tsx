import COLORS from '@/config/colors'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaSearch, FaUser } from 'react-icons/fa'
import { FaBagShopping } from 'react-icons/fa6'

export const Navbar = () => {
  return (
    <div className='flex px-32 justify-between items-center bg-white py-4'>
      <div>
        <Image src='/logo.svg' alt='' width={250} height={65} />
      </div>
      <div className='flex'>
        <Image src='/100canadian.svg' alt='' width={50} height={50} />
        <Image src='/55years.svg' alt='' width={50} height={50} />
        <Image src='/bestmanaged.svg' alt='' width={100} height={50} />
      </div>
      <div className=''>
        <div className='w-100% h-10 flex flex-row border-mainColor' style={{border: '1px solid'}}>
          <input type="text" className='w-96 h-[100%] outline-none px-3' />
          <div className='bg-mainColor flex justify-center items-center px-5'>
            <FaSearch color='white' size={20} />
          </div>
        </div>
      </div>
      <div className='flex items-center justify-center gap-4'>
        <div className='flex items-center gap-2'>
          <FaUser color={COLORS.MAIN_COLOR} size={25} />
          <div className='flex flex-col'> 
            <Link href="" className='text-mainColor text-sm font-bold'>Login</Link>
            <Link href="/account/register" className='text-mainColor text-[12px] '>Register</Link>
          </div>
        </div>
        <div className='flex items-center gap-2'>
          <FaBagShopping color={COLORS.MAIN_COLOR} size={25} />
          <div className="flex flex-col">
            <Link href="/account/cart" className='text-mainColor text-sm font-bold'>Cart</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
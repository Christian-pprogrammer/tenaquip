import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const MenuNavbar = () => {
  return (
    <div className='flex px-32 justify-between items-center bg-mainColor'>
      <div className='flex'>
        <Link href="/" className='text-white text-[12px] font-medium flex items-center hover:bg-darkMain py-[13px] px-[20px]'>Products</Link>
        <Link href="/" className='text-white text-[12px] font-medium flex items-center hover:bg-darkMain py-[13px] px-[20px]'>Services</Link>
        <Link href="/" className='text-white text-[12px] font-medium flex items-center hover:bg-darkMain py-[13px] px-[20px]'>Company</Link>
        <Link href="/" className='text-white text-[12px] font-medium flex items-center hover:bg-darkMain py-[13px] px-[20px]'>Resource Centre</Link>
        <Link href="/" className='text-white text-[12px] font-medium flex items-center hover:bg-darkMain py-[13px] px-[20px]'>Deals</Link>
        <Link href="/" className='px-[20px] hover:bg-darkMain'>
          <Image src='/Shoppe.png' alt='' width={200} height={50} className='py-2' />
        </Link>
      </div>
      
      <Link href="/" className='px-[20px] hover:bg-darkMain'>
        <Image src='/Shoppe.png' alt='' width={200} height={50} className='py-2' />
      </Link>
    </div>
  )
}

export default MenuNavbar
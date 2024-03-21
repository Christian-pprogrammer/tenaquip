import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import HoverDropdown from '../HoverDropdown/HoverDropdown'
import { title } from 'process'

const MenuNavbar = () => {

  const productCategories = [
    {
      title: "Safety",
      linkUrl: "safety"
    },
    {
      title: "Tools",
      linkUrl: "tools"
    },
    {
      title: "Material handling & Storage",
      linkUrl: "material-handling_and_storage"
    },
    {
      title: "Facility Maintainance",
      linkUrl: "facility_maintainance"
    },
    {
      title: "Welding",
      linkUrl: "welding"
    },
    {
      title: "Electrical",
      linkUrl: "electrical"
    },
    {
      title: "Office",
      linkUrl: "office"
    },
    {
      title: "Fleet & Automotive",
      linkUrl: "fleet_and_automotive"
    },
    {
      title: "Instruments",
      linkUrl: "instruments"
    },
    {
      title: "Plumbing Equipment & Supplies",
      linkUrl: "plumbing_equipment_and_supplies"
    },
    {
      title: "Packaging & Shipping",
      linkUrl: "packaging_and_shipping"
    }
  ]

  return (
    <div className='flex px-32 justify-between items-center bg-mainColor'>
      <div className='flex'>
        {/* <Link href="/" className='text-white text-[12px] font-medium flex items-center hover:bg-darkMain py-[13px] px-[20px]'>Products</Link> */}
        <HoverDropdown 
          title='Products'
          links={productCategories}
        />
        <HoverDropdown 
          title='Services'
          links={productCategories}
        />
        <HoverDropdown 
          title='Company'
          links={productCategories}
        />
        
        <HoverDropdown 
          title='Resource centre'
          links={productCategories}
        />
        <HoverDropdown 
          title='Deals'
          links={productCategories}
        />
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
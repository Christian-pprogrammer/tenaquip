"use client"

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import HoverDropdown from "../hover-drop-down/HoverDropdown";
import { PiTruckDuotone } from "react-icons/pi";
import { fetchCategories as fetchProductCategories } from "@/services/category-service";
import { company, resourceCentre, serviceCategories } from "@/data/navbar-data";

const MenuNavbar = () => {

  let [categories, setCategories] = useState([]);

  useEffect(()=>{
    const fetchCategories = async () => {
      let mainCategories = [];
      try {
        console.log("fetch categoriess...")
        console.log("my env.sdafdsafd", process.env.STRAPI_API)
        mainCategories = await fetchProductCategories();
        console.log(mainCategories)

        let categoryLinks = mainCategories.map((category: any)=>{
          return {
            title: category?.attributes?.name,
            linkUrl: `product-category/${category?.attributes?.handle}`
          }
        })
        setCategories(categoryLinks);
      }catch (err) {
    
      }
    }
    fetchCategories();
  }, [])

  return (
    <div className="hidden md:flex padding-horizontal justify-between items-stretch bg-mainColor">
      <div className="flex h-[100%]">
        {/* <Link href="/" className='text-white text-[12px] font-medium flex items-center hover:bg-darkMain py-[13px] px-[20px]'>Products</Link> */}
        <HoverDropdown title="Products" links={categories} />
        <HoverDropdown title="Services" links={serviceCategories} />
        <HoverDropdown title="Company" links={company} />

        <HoverDropdown title="Resource centre" links={resourceCentre} />
        <Link href="/campaign/sale-items" className="px-[20px] hover:bg-darkMain flex items-center">
          <p className="text-sm font-medium text-yellow-400">Deals</p>
        </Link>
        <Link href="/" className="px-[20px] hover:bg-darkMain">
          <Image
            src="/Shoppe.png"
            alt=""
            width={200}
            height={50}
            className="py-2"
          />
        </Link>
      </div>
      <div>
        <Link href="/" className="px-[20px] hover:bg-darkMain flex items-center gap-x-2 h-[100%]">
          <PiTruckDuotone 
            size={25}
            color="white"
          />
          <span className="text-white">Delivery to: <span className="font-bold">H9X 3L7</span></span>
        </Link>
      </div>
      
    </div>
  );
};

export default MenuNavbar;

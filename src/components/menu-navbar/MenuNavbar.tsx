"use client"

import Image from "next/image";
import Link from "next/link";
import React from "react";
import HoverDropdown from "../hover-drop-down/HoverDropdown";
import { title } from "process";
import { useAppSelector } from "@/hooks";
import { PiTruckDuotone } from "react-icons/pi";

const MenuNavbar = () => {

  const productCategories = useAppSelector((state)=>state.product.productCategories);
  const productCategoriesLinks = productCategories.map((category)=>{
    return {
      title: category.name,
      linkUrl: `product-category/${category.handle}`
    }
  })

  const serviceCategories = [
    {
      title: "Buy Now, Split Up the cost",
      linkUrl: "services/plumbing-equipment"
    },
    {
      title: "Tools",
      linkUrl: "services/plumbing-equipment"
    },
    {
      title: "Material handling & Storage",
      linkUrl: "services/plumbing-equipment"
    },
    {
      title: "Facility Maintainance",
      linkUrl: "services/plumbing-equipment"
    },
    {
      title: "Welding",
      linkUrl: "services/plumbing-equipment"
    },
    {
      title: "Electrical",
      linkUrl: "services/plumbing-equipment"
    },
    {
      title: "Office",
      linkUrl: "services/plumbing-equipment"
    },
    {
      title: "Fleet & Automotive",
      linkUrl: "services/plumbing-equipment"
    },
    {
      title: "Instruments",
      linkUrl: "services/plumbing-equipment"
    },
    {
      title: "Plumbing Equipment & Supplies",
      linkUrl: "services/plumbing-equipment"
    },
    {
      title: "Packaging & Shipping",
      linkUrl: "services/plumbing-equipment"
    },
  ];

  const productSubCategories = [
    {
      title: "Buy Now, Split Up the cost",
      linkUrl: "product-category/plumbing/supplies"
    },
    {
      title: "Tools",
      linkUrl: "product-category/plumbing/supplies"
    },
    {
      title: "Material handling & Storage",
      linkUrl: "product-category/plumbing/supplies"
    },
    {
      title: "Facility Maintainance",
      linkUrl: "product-category/plumbing/supplies"
    },
    {
      title: "Welding",
      linkUrl: "product-category/plumbing/supplies"
    },
    {
      title: "Electrical",
      linkUrl: "product-category/plumbing/supplies"
    },
    {
      title: "Office",
      linkUrl: "product-category/plumbing/supplies"
    },
    {
      title: "Fleet & Automotive",
      linkUrl: "product-category/plumbing/supplies"
    },
    {
      title: "Instruments",
      linkUrl: "product-category/plumbing/supplies"
    },
    {
      title: "Plumbing Equipment & Supplies",
      linkUrl: "product-category/plumbing/supplies"
    },
    {
      title: "Packaging & Shipping",
      linkUrl: "product-category/plumbing/supplies"
    },
  ];

  const company = [
    {
      title: "Buy Now, Split Up the cost",
      linkUrl: "company/about-us"
    },
    {
      title: "Tools",
      linkUrl: "company/careers"
    },
    {
      title: "Material handling & Storage",
      linkUrl: "company/about-us"
    },
    {
      title: "Facility Maintainance",
      linkUrl: "company/careers"
    },
    {
      title: "Welding",
      linkUrl: "company/about-us"
    },
    {
      title: "Electrical",
      linkUrl: "company/careers"
    },
    {
      title: "Office",
      linkUrl: "company/about-us"
    },
    {
      title: "Fleet & Automotive",
      linkUrl: "company/careers"
    },
    {
      title: "Instruments",
      linkUrl: "company/about-us"
    },
    {
      title: "Plumbing Equipment & Supplies",
      linkUrl: "company/careers"
    },
    {
      title: "Packaging & Shipping",
      linkUrl: "company/about-us"
    },
  ];

  const resourceCentre = [
    {
      title: "Buy Now, Split Up the cost",
      linkUrl: "resource-center/emergency"
    },
    {
      title: "Tools",
      linkUrl: "resource-center/emergency"
    },
    {
      title: "Material handling & Storage",
      linkUrl: "resource-center/emergency"
    },
    {
      title: "Facility Maintainance",
      linkUrl: "resource-center/emergency"
    },
    {
      title: "Welding",
      linkUrl: "resource-center/emergency"
    },
    {
      title: "Electrical",
      linkUrl: "resource-center/emergency"
    },
    {
      title: "Office",
      linkUrl: "resource-center/emergency"
    },
    {
      title: "Fleet & Automotive",
      linkUrl: "resource-center/emergency"
    },
    {
      title: "Instruments",
      linkUrl: "resource-center/emergency"
    },
    {
      title: "Plumbing Equipment & Supplies",
      linkUrl: "resource-center/emergency"
    },
    {
      title: "Packaging & Shipping",
      linkUrl: "resource-center/emergency"
    },
  ];
  

  return (
    <div className="flex px-32 justify-between items-stretch bg-mainColor">
      <div className="flex h-[100%]">
        {/* <Link href="/" className='text-white text-[12px] font-medium flex items-center hover:bg-darkMain py-[13px] px-[20px]'>Products</Link> */}
        <HoverDropdown title="Products" links={productCategoriesLinks} />
        <HoverDropdown title="Services" links={serviceCategories} />
        <HoverDropdown title="Company" links={company} />

        <HoverDropdown title="Resource centre" links={resourceCentre} />
        <HoverDropdown title="Deals" links={productSubCategories} />
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

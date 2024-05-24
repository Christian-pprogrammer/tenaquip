"use client"

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import HoverDropdown from "../hover-drop-down/HoverDropdown";
import { PiTruckDuotone } from "react-icons/pi";
import { fetchCategories as fetchProductCategories } from "@/services/category-service";

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


  const serviceCategories = [
    {
      title: "Buy Now, Split Up the cost",
      linkUrl: "services/buy-now-split-cost"
    },
    {
      title: "Courses, Seminars, & Surveys",
      linkUrl: "services/courses-seminars-surveys"
    },
    {
      title: "Free Delivery",
      linkUrl: "services/free-delivery"
    },
    {
      title: "Government Relations",
      linkUrl: "services/government-relations"
    },
    {
      title: "Hunter Group",
      linkUrl: "services/hunter-group"
    },
    {
      title: "Instrument Calibration",
      linkUrl: "services/plumbing-equipment"
    },
    {
      title: "Key Accounts & Corporate Accounts",
      linkUrl: "services/plumbing-equipment"
    },
    {
      title: "Maintenance Shutdown Program",
      linkUrl: "services/plumbing-equipment"
    },
    {
      title: "Vendor Managed Inventory",
      linkUrl: "services/plumbing-equipment"
    },
    {
      title: "Order Lookup",
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
      title: "About us",
      linkUrl: "company/about-us"
    },
    {
      title: "Careers",
      linkUrl: "company/careers"
    },
    {
      title: "Contact us",
      linkUrl: "company/contact-us"
    },
    {
      title: "Global Sourcing Group",
      linkUrl: "company/global-sourcing-group"
    },
    {
      title: "Members of",
      linkUrl: "company/members-of"
    },
    {
      title: "NMSO",
      linkUrl: "company/nmso"
    },
    {
      title: "Our Locations",
      linkUrl: "company/locations"
    },
    {
      title: "Recognitions",
      linkUrl: "company/recognitions"
    },
    {
      title: "Satisfaction Guarantee",
      linkUrl: "company/satisfaction-guarantee"
    },
    {
      title: "Sustainability",
      linkUrl: "company/sustainability"
    },
    {
      title: "The TENAQUIP Foundation",
      linkUrl: "company/the-tenaquip-foundation"
    },
    {
      title: "The TENAQUIP Way",
      linkUrl: "company/the-tenaquip-way"
    },
  ];

  const resourceCentre = [
    {
      title: "Emergency Preparedness",
      linkUrl: "resource-center/emergency-preparedness"
    },
    {
      title: "Electrical",
      linkUrl: "resource-center/electrical"
    },
    {
      title: "Facility Maintenance",
      linkUrl: "resource-center/facility-maintenance"
    },
    {
      title: "Material Handling & Storage",
      linkUrl: "resource-center/material-handling-storage"
    },
    {
      title: "Office",
      linkUrl: "resource-center/office"
    },
    {
      title: "Safety",
      linkUrl: "resource-center/safety"
    },
    {
      title: "Tools",
      linkUrl: "resource-center/tools"
    },
    {
      title: "Fleet",
      linkUrl: "resource-center/fleet"
    },
    {
      title: "Line Card",
      linkUrl: "resource-center/line-cards"
    },
  ];
  

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

import React, { useEffect, useState } from 'react'
import { fetchCategories as fetchProductCategories } from "@/services/category-service";
import Dropdown from '../dropdown/Dropdown';
import { company, resourceCentre, serviceCategories } from '@/data/navbar-data';
import Link from 'next/link';

const NavbarDropdown = () => {

  let [categories, setCategories] = useState([]);

  const [isDrpOpen, setDrpOpen] = useState(false);

  const [openId, setOpenId] = useState(0);

  useEffect(() => {
    const fetchCategories = async () => {
      let mainCategories = [];
      try {
        console.log("fetch categoriess...");
        console.log("my env.sdafdsafd", process.env.STRAPI_API);
        mainCategories = await fetchProductCategories();
        console.log(mainCategories);

        let categoryLinks = mainCategories.map((category: any) => {
          return {
            title: category?.attributes?.name,
            linkUrl: `product-category/${category?.attributes?.handle}`,
          };
        });
        setCategories(categoryLinks);
      } catch (err) {}
    };
    fetchCategories();
  }, []);

  const toggleDropdown = (id: number) => {
    if(isDrpOpen) {
      setDrpOpen(false);
      setOpenId(0)
    }else{
      setDrpOpen(true);
      setOpenId(id);
    }
  }

  return (
    <div>
      <Dropdown
        title="Products"
        links={categories}
        toggleDropdown={toggleDropdown}
        id={1}
        isOpen={openId == 1}
      />
      <Dropdown
        title="Services"
        links={serviceCategories}
        toggleDropdown={toggleDropdown}
        id={2}
        isOpen={openId == 2}
      />
      <Dropdown
        title="Company"
        links={company}
        toggleDropdown={toggleDropdown}
        id={3}
        isOpen={openId == 3}
      />
      <Dropdown
        title="Resource centre"
        links={resourceCentre}
        toggleDropdown={toggleDropdown}
        id={4}
        isOpen={openId == 4}
      />
      <Link
        href="/campaign/sale-items"
        className="padding-horizontal py-[16px] block bg-white border-b-1 border-lineGray"
      >
        <span className="whitespace-nowrap text-yellow-400 ">Deals</span>
      </Link>
    </div>
  );
}

export default NavbarDropdown
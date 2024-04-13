import Breadcrump from "@/components/Breadcrump/Breadcrump";
import Slider from "@/components/Slider/Slider";
import { fetchByHandle } from "@/services/category-service";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductCategory = async (props: any) => {
  
  //fetch by it's handle
  
  let category: MainCategory | null = null;
  let childCategories: Array<Category> = [];

  try {
    const categories = await fetchByHandle(props.params.category);
    category = categories[0];
    childCategories = categories[0].category_children
  }catch (err) {

  }

  return (
    <div className="px-32">
      <div className="">
        <Breadcrump
          links={[
            {
              toUrl: "/",
              title: "Home",
            },
            {
              toUrl: `/product-category/${category?.handle}`,
              title: `${category?.name}`
            },
          ]}
        />
        <h2 className="font-semibold text-[24px] text-Gray my-2">
          {category?.name}
        </h2>
        <p className="text-Gray text-sm">Showing 1 - 20 of 34176 listing(s)</p>
      </div>

      <Slider 
        categories={childCategories}
      />       
    </div>
  );
};

export default ProductCategory;

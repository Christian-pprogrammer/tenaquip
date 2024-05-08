import Breadcrump from "@/components/bread-crump/Breadcrump";
import ProductComponent from "@/components/product-component/ProductComponent";
import Slider from "@/components/slider/Slider";
import { fetchByHandle } from "@/services/category-service";
import { fetchProductsByCategory } from "@/services/product-service";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductCategory = async (props: any) => {
  
  //fetch by it's handle
  
  let category: MainCategory | null = null;
  let childCategories: Array<Category> = [];


  let products: Array<Product> = [];

  try {
    const categories = await fetchByHandle(props.params.category);
    category = categories[0];
    childCategories = categories[0].category_children
  }catch (err) {

  }

  try {
    //fetch products
    const productsRes = await fetchProductsByCategory(category?.id || '');
    console.log(productsRes)
    products = productsRes;
    console.log("products array", JSON.stringify(productsRes))
  }catch(err) {

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




      {/* filter */}

      <div className="grid md:grid-cols-3 xl:grid-cols-4 my-4">
        
      {
        products.map((product)=>(
          <ProductComponent product={product} />
        ))
      }

      </div>
    </div>
  );
};

export default ProductCategory;

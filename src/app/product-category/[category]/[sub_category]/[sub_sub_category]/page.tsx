import Breadcrumb from "@/components/bread-crumb/Breadcrumb";
import FilterDropdown from "@/components/filter-drop-down/FilterDropdown";
import ProductComponent from "@/components/product-component/ProductComponent";
import { fetchSubSubCategoryByHandle } from "@/services/category-service";
import { fetchProductsByCategory } from "@/services/product-service";
import React from "react";

const SubSubCategory = async (props: any) => {
  
    //fetch products

    let products:any = [];

    let subSubCategory: any = null;

    try {
      const subSubCategoryRes = await fetchSubSubCategoryByHandle(props.params.sub_sub_category);
      subSubCategory = subSubCategoryRes;
      console.log("my sub sub cat", subSubCategory)
      let productsRes = await fetchProductsByCategory(subSubCategory.attributes?.category_id);
      console.log("my products....", productsRes)
      products = productsRes;
    } catch (err) {}

  return (
    <div className="mx-32">

      <div className="">
        <h2 className="font-semibold text-2xl text-Gray my-2">Pipe Marker</h2>
        <p className="my-2 text-Gray text-sm">
          Showing 1 - 20 of 3832 listing(s)
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 my-6">
        {products?.map((product:any, index: number) => (
          <ProductComponent key={index} product={product} />
        ))}
      </div>

    </div>
  );
};

export default SubSubCategory;

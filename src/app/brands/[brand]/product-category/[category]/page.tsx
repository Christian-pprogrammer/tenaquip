import Breadcrumb from "@/components/bread-crumb/Breadcrumb";
import ProductComponent from "@/components/product-component/ProductComponent";
import ProductFilter from "@/components/product-filter/ProductFilter";
import { fetchBrandByHandle } from "@/services/brand-service";
import { fetchByHandle, fetchSubSubCategoryByHandle } from "@/services/category-service";
import { fetchProductsByBrand, fetchProductsByBrandAndSubSubCategory } from "@/services/product-service";
import React from "react";

const page = async (props: any) => {
  let products = [];
  let category = null;
  try {
    const categoryRes = await fetchSubSubCategoryByHandle(
      props.params.category
    );
    category = categoryRes;
    console.log("MY cat...", category)

    const brand = await fetchBrandByHandle(props.params.brand);

    console.log(brand);

    const productsRes = await fetchProductsByBrandAndSubSubCategory(
      brand?.attributes?.brand_id,
      category?.attributes?.category_id
    );

    products = productsRes;

  } catch (err) {}


  return (
    <div className="padding-horizontal">
      <Breadcrumb
        step="category"
        title={category?.attributes?.name}
        handle={category?.attributes?.handle}
        isBrand={true}
      />

      <div className="">
        <h2 className="font-semibold text-2xl text-Gray my-2">Pipe Marker</h2>
        <p className="my-2 text-Gray text-sm">
          Showing 1 - 20 of 3832 listing(s)
        </p>
      </div>
      <ProductFilter />
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 my-6">
        {products?.map((product: any, index: number) => (
          product && <ProductComponent key={index} product={product} />
        ))}
      </div>
    </div>
  );
};

export default page;

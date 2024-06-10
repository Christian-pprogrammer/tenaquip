import Breadcrumb from "@/components/bread-crumb/Breadcrumb";
import CategoryComponent from "@/components/category-component/category-component";
import CategorySwiper from "@/components/image-swiper/CategorySwiper";
import ProductComponent from "@/components/product-component/ProductComponent";
import ProductFilter from "@/components/product-filter/ProductFilter";
import { fetchBrandByHandle } from "@/services/brand-service";
import { fetchCategoriesByBrand, fetchCategoriesByIdsList } from "@/services/category-service";
import { fetchProductsByBrand } from "@/services/product-service";
import { getRootCategoriesFromProducts } from "@/util/getRootCategoriesFromProducts";
import React from "react";

const page = async (props: any) => {
  let products = [];
  let categories: Array<any> = [];
  let brand = null;

  try {
    const handle = props.params?.brand;
    const brandData = await fetchBrandByHandle(handle);
    console.log("brand data...", brandData)
    brand = brandData;
    if (brand?.id) {
      const categoryRes = await fetchCategoriesByBrand(brand.id);
      console.log("res...", categoryRes)
      categories = categoryRes;
      products = await fetchProductsByBrand(brand.attributes.brand_id);
      console.log("products....",products)
      // const categoryIds = getRootCategoriesFromProducts(products);
      // let categoryRes = await fetchCategoriesByIdsList(categoryIds);
      // categories = categoryRes;
      // console.log("my cat...", categories);
    }
  } catch (err) {}

  return (
    <div className="padding-horizontal">
      <Breadcrumb
        step="brand"
        title={brand?.attributes?.name}
        handle={brand?.attributes?.handle}
        isBrand={true}
      />
      <CategorySwiper
        categories={categories}
        type="root-category"
        isBrand={true}
      />
      <ProductFilter subCategories={categories} />
      {products && (
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 my-6">
          {products?.map(
            (product: any, index: number) =>
              product && <ProductComponent key={index} product={product} />
          )}
        </div>
      )}
    </div>
  );
};

export default page;

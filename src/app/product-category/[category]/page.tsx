import Breadcrumb from "@/components/bread-crumb/Breadcrumb";
import BrowseBy from "@/components/browse-by/BrowseBy";
import SubCategoryElement from "@/components/sub-category-element/SubCategoryElement";
import { fetchByHandle, fetchSubCategories } from "@/services/category-service";
import React from "react";

const ProductCategory = async (props: any) => {
  //fetch by it's handle

  let category: any = null;
  let subCategories: Array<any> = [];

  try {
    const categoryRes = await fetchByHandle(props.params.category);
    category = categoryRes;
  } catch (err) {}

  //fetch sub categories

  try {
    const subCategoriesRes = await fetchSubCategories(props.params.category);
    subCategories = subCategoriesRes;
  } catch (err) {}

  return (
    <div className="padding-horizontal">
      <Breadcrumb
        step="category"
        title={category?.attributes?.name}
        handle={category?.attributes?.handle}
      />

      <BrowseBy title={category?.attributes?.name} />

      

      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 my-6 gap-7">
        {subCategories?.map((subcategory, index: number) => (
          <SubCategoryElement
            key={index}
            name={subcategory?.attributes?.name}
            handle={`/product-category/${props.params.category}/${subcategory?.attributes?.handle}`}
            image={`${process.env.STRAPI_UPLOADS}${subcategory?.attributes?.thumbnail?.data?.attributes?.url}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductCategory;

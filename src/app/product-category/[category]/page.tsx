import Breadcrumb from "@/components/bread-crumb/Breadcrumb";
import CategoryComponent from "@/components/category-component/category-component";
import CategoryFilter from "@/components/category-filter/CategoryFilter";
import { fetchByHandle, fetchSubCategories } from "@/services/category-service";
import React, { useState } from "react";

const ProductCategory = async (props: any) => {
  //fetch by it's handle

  let category: any = null;
  let subCategories: Array<any> = [];
  // const [browseBy, setBrowseBy] = useState('Categories');

  try {
    const categoryRes = await fetchByHandle(props.params.category);
    category = categoryRes;
  } catch (err) {}

  //fetch sub categories

  try {
    const subCategoriesRes = await fetchSubCategories(
      props.params.category,
      1,
      5
    );
    subCategories = subCategoriesRes;
  } catch (err) {}

  return (
    <div className="padding-horizontal">
      <Breadcrumb
        step="category"
        title={category?.attributes?.name}
        handle={category?.attributes?.handle}
      />
      <CategoryComponent
        id={category?.attributes?.category_id}
        title={category?.attributes?.name}
        subCategories={subCategories}
        handle={props.params.category}
      />
    </div>
  );
};

export default ProductCategory;

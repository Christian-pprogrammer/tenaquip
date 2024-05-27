import Breadcrumb from "@/components/bread-crumb/Breadcrumb";
import CategoryComponent from "@/components/category-component/category-component";
import SubCategoryElement from "@/components/sub-category-element/SubCategoryElement";
import {
  fetchSubCategoryByHandle,
  fetchSubSubCategories,
} from "@/services/category-service";
import React from "react";

const SubCategory = async (props: any) => {
  //fetch sub sub-categories

  let subSubCategories: any[] = [];
  let subCategory: any = null;

  try {
    const categoryRes = await fetchSubCategoryByHandle(
      props.params.sub_category
    );
    console.log("we gonna fetch...");
    console.log(categoryRes);
    subCategory = categoryRes;
  } catch (err) {}

  try {
    const subSubCategoriesRes = await fetchSubSubCategories(
      props.params.sub_category
    );
    subSubCategories = subSubCategoriesRes;
  } catch (err) {}

  return (
    <div className="padding-horizontal">
      <Breadcrumb
        step="sub-category"
        title={subCategory?.attributes?.name}
        handle={subCategory?.attributes?.handle}
      />
      <CategoryComponent
        subCategories={subSubCategories}
        handle={props.params.category}
        title={subCategory?.attributes?.name}
        isSubCategory={true}
        subHandle={props.params.sub_category}
        id={subCategory?.attributes?.category_id}
      />
    </div>
  );
};

export default SubCategory;

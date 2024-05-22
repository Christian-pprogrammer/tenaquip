import Breadcrumb from "@/components/bread-crumb/Breadcrumb";
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
    <div className="mx-32">
      <Breadcrumb
        step="sub-category"
        title={subCategory?.attributes?.name}
        handle={subCategory?.attributes?.handle}
      />

      <div className="">
        <h2 className="font-semibold text-[24px] text-Gray my-2">
          {subCategory?.attributes?.name}
        </h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 my-6 gap-7">
        {subSubCategories?.map((subcategory, index: number) => (
          <SubCategoryElement
            key={index}
            name={subcategory?.attributes?.name}
            handle={`/product-category/${props.params.category}/${props.params.sub_category}/${subcategory?.attributes?.handle}/`}
            image={`${process.env.STRAPI_UPLOADS}${subcategory?.attributes?.thumbnail?.data?.attributes?.url}`}
          />
        ))}
      </div>
    </div>
  );
};

export default SubCategory;

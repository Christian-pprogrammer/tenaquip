import Breadcrump from "@/components/bread-crump/Breadcrump";
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
    <div className="px-32">
      <div className="">
        <Breadcrump
          links={[
            {
              toUrl: "/",
              title: "Home",
            },
            {
              toUrl: `/product-category/${category?.attributes?.handle}`,
              title: `${category?.attributes?.name}`,
            },
          ]}
        />
        <h2 className="font-semibold text-[24px] text-Gray my-2">
          {category?.name}
        </h2>
        {/* <p className="text-Gray text-sm">Showing 1 - 20 of 34176 listing(s)</p> */}
      </div>

      {/* filter */}

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

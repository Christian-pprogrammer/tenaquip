import Breadcrump from "@/components/bread-crump/Breadcrump";
import FilterDropdown from "@/components/filter-drop-down/FilterDropdown";
import ProductComponent from "@/components/product-component/ProductComponent";
import SubCategoryElement from "@/components/sub-category-element/SubCategoryElement";
import { fetchSubSubCategories } from "@/services/category-service";
import React from "react";

const SubCategory = async (props: any) => {
  
    //fetch sub sub-categories

    let subSubCategories:any[] = [];

    try {
      const subSubCategoriesRes = await fetchSubSubCategories(props.params.sub_category);
      subSubCategories = subSubCategoriesRes;
    } catch (err) {}

  return (
    <div className="mx-32">
      <Breadcrump
        links={[
          {
            toUrl: "",
            title: "Home",
          },
          {
            toUrl: "safety",
            title: "Safety",
          },
          {
            toUrl: "pipe_marking_identification",
            title: "Pipe Marking Identification",
          },
          {
            toUrl: "pipe_maker",
            title: "Pipe maker",
          },
        ]}
      />

      <div className="">
        <h2 className="font-semibold text-2xl text-Gray my-2">Pipe Marker</h2>
        <p className="my-2 text-Gray text-sm">
          Showing 1 - 20 of 3832 listing(s)
        </p>
      </div>

      <div className="bg-lightMain p-2">
        <div className="filters">
          <FilterDropdown
            title="Manufacturer"
            elements={[
              {
                itemName: "Black on Orange (1)",
              },
              {
                itemName: "Black on White (1)",
              },
              {
                itemName: "Black on Yellow (44)",
              },
              {
                itemName: "White on Blue (5)",
              },
            ]}
          ></FilterDropdown>

          <FilterDropdown
            title="Manufacturer"
            elements={[
              {
                itemName: "Black on Orange (1)",
              },
              {
                itemName: "Black on White (1)",
              },
              {
                itemName: "Black on Yellow (44)",
              },
              {
                itemName: "White on Blue (5)",
              },
            ]}
          ></FilterDropdown>
          <FilterDropdown
            title="Manufacturer"
            elements={[
              {
                itemName: "Black on Orange (1)",
              },
              {
                itemName: "Black on White (1)",
              },
              {
                itemName: "Black on Yellow (44)",
              },
              {
                itemName: "White on Blue (5)",
              },
            ]}
          ></FilterDropdown>
          <FilterDropdown
            title="Manufacturer"
            elements={[
              {
                itemName: "Black on Orange (1)",
              },
              {
                itemName: "Black on White (1)",
              },
              {
                itemName: "Black on Yellow (44)",
              },
              {
                itemName: "White on Blue (5)",
              },
            ]}
          ></FilterDropdown>
          <FilterDropdown
            title="Manufacturer"
            elements={[
              {
                itemName: "Black on Orange (1)",
              },
              {
                itemName: "Black on White (1)",
              },
              {
                itemName: "Black on Yellow (44)",
              },
              {
                itemName: "White on Blue (5)",
              },
            ]}
          ></FilterDropdown>
          <br />
          <button className="custom-btn font-bold">View All Filters</button>
        </div>
        <div className="sorts"></div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 my-6 gap-7">
        {subSubCategories?.map((subcategory, index: number) => (
          <SubCategoryElement key={index} name={subcategory?.attributes?.name} handle={`/product-category/${props.params.category}/${props.params.sub_category}/${subcategory?.attributes?.handle}/`} image={`${process.env.STRAPI_UPLOADS}${subcategory?.attributes?.thumbnail?.data?.attributes?.url}`} />
        ))}
      </div>

    </div>
  );
};

export default SubCategory;

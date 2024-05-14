import Link from "next/link";
import React from "react";

type ResourceCategory = {
  title: string;
  slug: string;
};

type Props = {
  resourceCategories: Array<ResourceCategory>;
  active: string;
};

const ResourceNavigator = ({ active, resourceCategories }: Props) => {
  return (
    <div className="inline-block md:flex my-3">
      {resourceCategories.map((category, index) => (
        <Link
          className={`p-3 text-Gray text-sm font-semibold rounded-t-sm 
          border-transparent border-t-1 border-l-1 border-r-1 
          hover:border-[#ddd]
          ${active !== category.slug && "border-b-1 border-b-[#ddd] "}
          
          ${active === category.slug && "bg-lightMain text-mainColor"}`}
          href={`/resource-center/${category.slug}`}
        >
          {category.title}
        </Link>
      ))}
    </div>
  );
};

export default ResourceNavigator;

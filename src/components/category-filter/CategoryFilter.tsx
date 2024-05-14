import React from "react";
import FilterDropdown from "../filter-drop-down/FilterDropdown";

const CategoryFilter = () => {
  return (
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
        <br />
        <button className="custom-btn font-bold">View All Filters</button>
      </div>
      <div className="sorts"></div>
    </div>
  );
};

export default CategoryFilter;

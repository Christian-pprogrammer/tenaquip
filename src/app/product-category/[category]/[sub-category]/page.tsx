import Breadcrump from "@/components/Breadcrump/Breadcrump";
import DropdownComponent from "@/components/DropdownComponent/DropdownComponent";
import FilterDropdown from "@/components/FilterDropdown/FilterDropdown";
import React from "react";

const SubCategory = () => {
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
        <h2 className="font-semibold text-2xl text-Gray my-2">Register</h2>
        <p className="my-2 text-Gray text-sm">
          Showing 1 - 20 of 3832 listing(s)
        </p>
      </div>

      <div className="bg-lightMain p-2">
        <div className="filters">
          
          <FilterDropdown title="Manufacturer" elements={[
            {
              itemName: "Black on Orange (1)"
            },
            {
              itemName: "Black on White (1)"
            },
            {
              itemName: "Black on Yellow (44)"
            },
            {
              itemName: "White on Blue (5)"
            }
            
          ]}>

          </FilterDropdown>

          <FilterDropdown title="Manufacturer" elements={[
            {
              itemName: "Black on Orange (1)"
            },
            {
              itemName: "Black on White (1)"
            },
            {
              itemName: "Black on Yellow (44)"
            },
            {
              itemName: "White on Blue (5)"
            }
            
          ]}>

          </FilterDropdown>
          <FilterDropdown title="Manufacturer" elements={[
            {
              itemName: "Black on Orange (1)"
            },
            {
              itemName: "Black on White (1)"
            },
            {
              itemName: "Black on Yellow (44)"
            },
            {
              itemName: "White on Blue (5)"
            }
            
          ]}>

          </FilterDropdown><FilterDropdown title="Manufacturer" elements={[
            {
              itemName: "Black on Orange (1)"
            },
            {
              itemName: "Black on White (1)"
            },
            {
              itemName: "Black on Yellow (44)"
            },
            {
              itemName: "White on Blue (5)"
            }
            
          ]}>

          </FilterDropdown><FilterDropdown title="Manufacturer" elements={[
            {
              itemName: "Black on Orange (1)"
            },
            {
              itemName: "Black on White (1)"
            },
            {
              itemName: "Black on Yellow (44)"
            },
            {
              itemName: "White on Blue (5)"
            }
            
          ]}>

          </FilterDropdown>
          <button className="custom-btn font-bold">View All Filters</button>
        </div>
        <div className="sorts"></div>
      </div>
    </div>
  );
};

export default SubCategory;

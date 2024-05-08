import Breadcrump from "@/components/Breadcrump/Breadcrump";
import DropdownComponent from "@/components/DropdownComponent/DropdownComponent";
import FilterDropdown from "@/components/FilterDropdown/FilterDropdown";
import ProductComponent from "@/components/ProductComponent/ProductComponent";
import React from "react";

const SubCategory = () => {
  const categoryProducts = [

    {
      imageUrl: "https://www.tenaquip.com/images/medium/s/sae731_ad.webp?1631622771",
      manufacturer: "Brady",
      productName: "Water Pipe Marker, Snap-On, 7/8 H x 7/8 W, White on Green",
      model: "SAE731",
      manufacturerModelNo: "4155-B",
      unitPrice: "10",
      shipsIn: "3",
      bonusNumber: 5,
      bonus: 10,
    },
    {
      imageUrl: "https://www.tenaquip.com/images/medium/s/sae731_ad.webp?1631622771",
      manufacturer: "Brady",
      productName: "Water Pipe Marker, Snap-On, 7/8 H x 7/8 W, White on Green",
      model: "SAE731",
      manufacturerModelNo: "4155-B",
      unitPrice: "10",
      shipsIn: "3",
      bonusNumber: 5,
      bonus: 10,
    },
    {
      imageUrl: "https://www.tenaquip.com/images/medium/s/sae731_ad.webp?1631622771",
      manufacturer: "Brady",
      productName: "Water Pipe Marker, Snap-On, 7/8 H x 7/8 W, White on Green",
      model: "SAE731",
      manufacturerModelNo: "4155-B",
      unitPrice: "10",
      shipsIn: "3",
      bonusNumber: 5,
      bonus: 10,
    },
    {
      imageUrl: "https://www.tenaquip.com/images/medium/s/sae731_ad.webp?1631622771",
      manufacturer: "Brady",
      productName: "Water Pipe Marker, Snap-On, 7/8 H x 7/8 W, White on Green",
      model: "SAE731",
      manufacturerModelNo: "4155-B",
      unitPrice: "10",
      shipsIn: "3",
      bonusNumber: 5,
      bonus: 10,
    },
    {
      imageUrl: "https://www.tenaquip.com/images/medium/s/sae731_ad.webp?1631622771",
      manufacturer: "Brady",
      productName: "Water Pipe Marker, Snap-On, 7/8 H x 7/8 W, White on Green",
      model: "SAE731",
      manufacturerModelNo: "4155-B",
      unitPrice: "10",
      shipsIn: "3",
      bonusNumber: 5,
      bonus: 10,
    },
    {
      imageUrl: "https://www.tenaquip.com/images/medium/s/sae731_ad.webp?1631622771",
      manufacturer: "Brady",
      productName: "Water Pipe Marker, Snap-On, 7/8 H x 7/8 W, White on Green",
      model: "SAE731",
      manufacturerModelNo: "4155-B",
      unitPrice: "10",
      shipsIn: "3",
      bonusNumber: 5,
      bonus: 10,
    },
    {
      imageUrl: "https://www.tenaquip.com/images/medium/s/sae731_ad.webp?1631622771",
      manufacturer: "Brady",
      productName: "Water Pipe Marker, Snap-On, 7/8 H x 7/8 W, White on Green",
      model: "SAE731",
      manufacturerModelNo: "4155-B",
      unitPrice: "10",
      shipsIn: "3",
      bonusNumber: 5,
      bonus: 10,
    },
    {
      imageUrl: "https://www.tenaquip.com/images/medium/s/sae731_ad.webp?1631622771",
      manufacturer: "Brady",
      productName: "Water Pipe Marker, Snap-On, 7/8 H x 7/8 W, White on Green",
      model: "SAE731",
      manufacturerModelNo: "4155-B",
      unitPrice: "10",
      shipsIn: "3",
      bonusNumber: 5,
      bonus: 10,
    },
    {
      imageUrl: "https://www.tenaquip.com/images/medium/s/sae731_ad.webp?1631622771",
      manufacturer: "Brady",
      productName: "Water Pipe Marker, Snap-On, 7/8 H x 7/8 W, White on Green",
      model: "SAE731",
      manufacturerModelNo: "4155-B",
      unitPrice: "10",
      shipsIn: "3",
      bonusNumber: 5,
      bonus: 10,
    },
    {
      imageUrl: "https://www.tenaquip.com/images/medium/s/sae731_ad.webp?1631622771",
      manufacturer: "Brady",
      productName: "Water Pipe Marker, Snap-On, 7/8 H x 7/8 W, White on Green",
      model: "SAE731",
      manufacturerModelNo: "4155-B",
      unitPrice: "10",
      shipsIn: "3",
      bonusNumber: 5,
      bonus: 10,
    },
  ];

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

      <div className="grid md:grid-cols-4">
        {
          categoryProducts.map((product, index)=>(
            <ProductComponent  
              key={index}
              product={product}
            />
          ))
        }
      </div>
    </div>
  );
};

export default SubCategory;

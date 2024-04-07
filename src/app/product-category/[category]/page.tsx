import Breadcrump from "@/components/Breadcrump/Breadcrump";
import Slider from "@/components/Slider/Slider";
import { fetchByHandle } from "@/services/category-service";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductCategory = async (props: any) => {
  
  //fetch by it's handle
  
  let category: MainCategory | null = null;
  let childCategories: Array<Category> = [];

  try {
    const categories = await fetchByHandle(props.params.category);
    childCategories = categories[0].category_children
  }catch (err) {

  }


  console.log(props.params.category)
  const categories = [
    {
      title: "Pipe Marking Identification (3923)",
      linkTo: "safety/pipe-marking-identification",
      imageUrl:
        "https://www.tenaquip.com/images/medium/s/saz982.webp?1631622263",
    },
    {
      title: "Pipe Marking Identification (3923)",
      linkTo: "safety/pipe-marking-identification",
      imageUrl:
        "https://www.tenaquip.com/images/medium/s/sax504.webp?1631622298",
    },
    {
      title: "Pipe Marking Identification (3923)",
      linkTo: "safety/pipe-marking-identification",
      imageUrl: "https://tenaquip.com/images/medium/s/sc743.webp?1631622239",
    },
    {
      title: "Pipe Marking Identification (3923)",
      linkTo: "safety/pipe-marking-identification",
      imageUrl:
        "https://www.tenaquip.com/images/medium/s/sax694.webp?1631622295",
    },
    {
      title: "Pipe Marking Identification (3923)",
      linkTo: "safety/pipe-marking-identification",
      imageUrl:
        "https://www.tenaquip.com/images/medium/n/nh534.webp?1631623901",
    },
    {
      title: "Pipe Marking Identification (3923)",
      linkTo: "safety/pipe-marking-identification",
      imageUrl:
        "https://www.tenaquip.com/images/medium/s/sau632.webp?1631622350",
    },
    {
      title: "Pipe Marking Identification (3923)",
      linkTo: "safety/pipe-marking-identification",
      imageUrl:
        "https://www.tenaquip.com/images/medium/s/seh651.webp?1631622000",
    },
    {
      title: "Pipe Marking Identification (3923)",
      linkTo: "safety/pipe-marking-identification",
      imageUrl:
        "https://www.tenaquip.com/images/medium/s/se558.webp?1631622138",
    },
    {
      title: "Pipe Marking Identification (3923)",
      linkTo: "safety/pipe-marking-identification",
      imageUrl:
        "https://www.tenaquip.com/images/medium/s/sas229.webp?1631622376",
    },
    {
      title: "Pipe Marking Identification (3923)",
      linkTo: "safety/pipe-marking-identification",
      imageUrl:
        "https://www.tenaquip.com/images/medium/s/saz982.webp?1631622263",
    },
    {
      title: "Pipe Marking Identification (3923)",
      linkTo: "safety/pipe-marking-identification",
      imageUrl:
        "https://www.tenaquip.com/images/medium/s/sal224.webp?1631622545",
    },
    {
      title: "Pipe Marking Identification (3923)",
      linkTo: "safety/pipe-marking-identification",
      imageUrl:
        "https://www.tenaquip.com/images/medium/s/see207.webp?1631622051",
    },
    {
      title: "Pipe Marking Identification (3923)",
      linkTo: "safety/pipe-marking-identification",
      imageUrl:
        "https://www.tenaquip.com/images/medium/s/saz982.webp?1631622263",
    },
    {
      title: "Pipe Marking Identification (3923)",
      linkTo: "safety/pipe-marking-identification",
      imageUrl:
        "https://www.tenaquip.com/images/medium/s/saz982.webp?1631622263",
    },
    {
      title: "Pipe Marking Identification (3923)",
      linkTo: "safety/pipe-marking-identification",
      imageUrl:
        "https://www.tenaquip.com/images/medium/s/saz982.webp?1631622263",
    },
    {
      title: "Pipe Marking Identification (3923)",
      linkTo: "safety/pipe-marking-identification",
      imageUrl:
        "https://www.tenaquip.com/images/medium/s/saz982.webp?1631622263",
    },
  ];

  return (
    <div className="px-32">
      <div className="">
        <Breadcrump
          links={[
            {
              toUrl: "",
              title: "Home",
            },
            {
              toUrl: "",
              title: "",
            },
          ]}
        />
        <h2 className="font-semibold text-2xl text-Gray my-2">Safety</h2>
      </div>

      <Slider 
        categories={childCategories}
      />       
    </div>
  );
};

export default ProductCategory;

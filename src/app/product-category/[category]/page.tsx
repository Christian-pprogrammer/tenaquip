import Breadcrump from "@/components/Breadcrump/Breadcrump";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductCategory = () => {
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
              toUrl: "safety",
              title: "Safety",
            },
          ]}
        />
        <h2 className="font-semibold text-2xl text-Gray my-2">Safety</h2>
      </div>

      <div className="grid md:grid-cols-5 justify-between gap-3">
        {categories.map((category, index) => (
          <Link 
          href={category.linkTo}>
            <div className="flex flex-col items-center">
              <Image
                src={category.imageUrl}
                width={130}
                height={130}
                objectFit="contain"
                alt=""
              />

              <Link
                href={category.linkTo}
                className="text-sm font-bold text-mainColor text-center block my-3"
              >
                {category.title}
              </Link>
              
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductCategory;

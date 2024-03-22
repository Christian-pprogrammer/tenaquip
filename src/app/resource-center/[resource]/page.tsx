import ResourceElementComponent from "@/components/ResourceElementComponent/ResourceElementComponent";
import ResourceNavigator from "@/components/ResourceNavigator/ResourceNavigator";
import { title } from "process";
import React from "react";

const Resouce = () => {
  //fetch the resource
  const resouce = {
    mainImage:
      "https://www.tenaquip.com/tenaquip/images/banner/pages/emergency-preparedness-resources.jpg",
    h1: "EMERGENCY PREPAREDNESS",
    h2: "Tips & information on how to stay prepared ahead of disaster.",
  };

  const resourceCategories = [
    {
      title: "Emergency preparedness",
      slug: "emergency-preparedness",
    },
    {
      title: "Electrical",
      slug: "emergency-preparedness",
    },
    {
      title: "Facility Maintenance",
      slug: "emergency-preparedness",
    },
    {
      title: "Material Handling & Storage",
      slug: "emergency-preparedness",
    },
    {
      title: "Office",
      slug: "emergency-preparedness",
    },
    {
      title: "Safety",
      slug: "emergency-preparedness",
    },
    {
      title: "Tools",
      slug: "emergency-preparedness",
    },
    {
      title: "Fleet",
      slug: "emergency-preparedness",
    },
  ];

  const resourcePages = [
    {
      title: "Snowstorm Emergency Response Guide",
      description:
        "Winter weather conditions in Canada can escalate to dangerous levels quickly and without warning.",
      slug: "snowstorm-emergency-response-guide",
    },
    {
      title: "KN95/N95 Masks In Stock Today!",
      description:
        "Tenaquip has a variety of Health Canada Approved N95 & KN95 face masks in a variety of options, IN STOCK today!",
      slug: "masks-in-stock-today",
    },
    {
      title: "Snowstorm Emergency Response Guide",
      description:
        "Winter weather conditions in Canada can escalate to dangerous levels quickly and without warning.",
      slug: "snowstorm-emergency-response-guide",
    },
    {
      title: "KN95/N95 Masks In Stock Today!",
      description:
        "Tenaquip has a variety of Health Canada Approved N95 & KN95 face masks in a variety of options, IN STOCK today!",
      slug: "masks-in-stock-today",
    },
    {
      title: "Snowstorm Emergency Response Guide",
      description:
        "Winter weather conditions in Canada can escalate to dangerous levels quickly and without warning.",
      slug: "snowstorm-emergency-response-guide",
    },
    {
      title: "KN95/N95 Masks In Stock Today!",
      description:
        "Tenaquip has a variety of Health Canada Approved N95 & KN95 face masks in a variety of options, IN STOCK today!",
      slug: "masks-in-stock-today",
    },
    {
      title: "KN95/N95 Masks In Stock Today!",
      description:
        "Tenaquip has a variety of Health Canada Approved N95 & KN95 face masks in a variety of options, IN STOCK today!",
      slug: "masks-in-stock-today",
    },
    {
      title: "Snowstorm Emergency Response Guide",
      description:
        "Winter weather conditions in Canada can escalate to dangerous levels quickly and without warning.",
      slug: "snowstorm-emergency-response-guide",
    },
    {
      title: "KN95/N95 Masks In Stock Today!",
      description:
        "Tenaquip has a variety of Health Canada Approved N95 & KN95 face masks in a variety of options, IN STOCK today!",
      slug: "masks-in-stock-today",
    },
  ];
  return (
    <div>
      <div
        className="bg-cover bg-center bg-no-repeat px-32 min-h-96 flex flex-col justify-center"
        style={{
          backgroundImage: `url(${resouce.mainImage})`,
          backgroundPosition: "center",
        }}
      >
        <h1 className="text-white text-3xl font-bold ">{resouce.h1}</h1>
        <h2 className="text-white text-2xl font-semibold">{resouce.h2}</h2>
      </div>

      <div className="mx-32">
        <h2 className="text-mainColor font-normal text-2xl my-4 pt-4">
          Resource Pages
        </h2>
        <ResourceNavigator active={1} resourceCategories={resourceCategories} />
        <div className="grid md:grid-cols-3 gap-x-4 gap-y-8 my-12">
          {resourcePages.map((page, index) => (
            <ResourceElementComponent
              key={index}
              title={page.title}
              description={page.description}
              slug={page.slug}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Resouce;

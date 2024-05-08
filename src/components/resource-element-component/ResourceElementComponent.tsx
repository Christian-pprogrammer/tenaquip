import React from "react";

type Props = {
  title: string;
  description: string;
  slug: string;
};
const ResourceElementComponent = ({ title, description, slug }: Props) => {
  return (
    <div className="border-[#ddd] border-1 py-4 px-4 flex flex-col justify-between">
      <h2 className="text-2xl font-normal text-mainColor ">{title}</h2>
      <p className="text-mainGray text-sm mt-2">{description}</p>
      <button className="text-white bg-mainColor text-sm rounded-sm px-3 py-2 inline-block max-w-28 mt-5">
        Read More
      </button>
    </div>
  );
};

export default ResourceElementComponent;

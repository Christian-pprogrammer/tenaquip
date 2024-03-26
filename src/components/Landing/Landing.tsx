import Image from "next/image";
import React from "react";

export type LandingProps = {
    title: string, 
    imageUrl: string, 
}

const Landing = ({title,imageUrl}: LandingProps)=> {
  return (
      <div className="relative h-[70vh]">
        <Image
          src={imageUrl}
          alt=""
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute inset-0 flex items-center px-16">
          <h1 className="text-white text-5xl font-semibold text-shadow-lg shadow-black">{title}</h1>
        </div>
      </div>
  );
};

export default Landing;

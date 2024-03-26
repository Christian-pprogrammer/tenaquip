import React from "react";

export type TenaProps = {
    title: string, 
    paragraph: string, 
}

const Tenaway = ({title,paragraph}: TenaProps)=> {
  return (
    <div className="w-[29vw] h-[44vh] border border-gray-300 p-5 mb-6 mr-4">
      <h2 className="text-mainColor text-2xl mb-4">{title}</h2>
      <p>{paragraph}</p>
  </div>
  );
};

export default Tenaway;

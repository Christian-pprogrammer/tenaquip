'use client'
import React, {useEffect, useState} from "react";
import axios from 'axios';
const endpoint = process.env.STRAPI_API;
import Image from "next/image";

const GlobalSourcingGroup = () => {
  const [data, setData] = useState([{Ptext: '' , __component: '' , Title: ''}]);
  const [LandingData, setLandingData] = useState({title: '',imageUrl: ''});

  useEffect(() => {
    axios.get(`${endpoint}/global-sourcing?populate=*`)
        .then(response => {
            setLandingData(response.data.data.attributes.PageContent[0]);
            setData(response.data.data.attributes.PageContent);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
  }, []);
  return (
    <div className="relative">
      <div className="relative h-[70vh]">
        <Image
          src={LandingData?.imageUrl}
          alt="Careers"
          fill
          sizes="100vw"
          style={{
            objectFit: "cover"
          }} />
        <div className="absolute inset-0 flex items-center px-16">
          <h1 className="text-white text-5xl font-semibold text-shadow-lg shadow-black">
            {LandingData?.title}
          </h1>
        </div>
      </div>

      <div className="mt-16 px-16 w-[80vw] mb-8">
        {
          data.slice(1).map((item, index) => (
          <h2 className={item.__component === "components.main-title" ? `text-mainColor text-3xl mb-5` : `text-black mb-3`}>
            {item.__component === "components.main-title" ? item?.Title : item?.Ptext}
          </h2>
          )
        )
        }
      </div>
    </div>
  );
};

export default GlobalSourcingGroup;

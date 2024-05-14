'use client'
import Image from "next/image";
import Link from "next/link";
import React, {useEffect, useState} from "react";
import axios from 'axios';
const endpoint = process.env.STRAPI_API;

const Nmso = () => {
  const [data, setData] = useState([{__component: '', Title: '', LinkText: '', linkUrl: '', imageUrl: ''}]);
  const [LandingData, setLandingData] = useState({title: '',imageUrl: ''});

  useEffect(() => {
    axios.get(`${endpoint}/nmso?populate=*`)
        .then(response => {
            console.log(response.data.data.attributes.nmsoPage,"nmso")
            setLandingData(response.data.data.attributes.nmsoPage[0]);
            setData(response.data.data.attributes.nmsoPage);
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
            <h2 className={item.__component === "components.main-title" ? `text-gray-700 text-3xl mb-5` : `mb-3`}>{item?.Title}
              {item.__component === "components.single-title" && <Link
                  href={item?.linkUrl}
                  className="font-bold text-mainColor hover:underline"
              > {" "}{item.LinkText}</Link>}
            </h2>
            )
          )
        }
    </div>
      </div>
  );
};

export default Nmso;

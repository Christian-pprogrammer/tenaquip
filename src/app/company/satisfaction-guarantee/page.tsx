'use client'
import React, {useEffect, useState} from "react";
import axios from 'axios';
import Landing from "@/components/landing/Landing";
const endpoint = process.env.STRAPI_API;

const SatisfactionGuarantee = () => {
  const [data, setData] = useState([{Ptext: '' , __component: '' , Title: ''}]);
    const [LandingData, setLandingData] = useState({title: '',imageUrl: ''});

    useEffect(() => {
        axios.get(`${endpoint}/satisfaction-guarantee?populate=*`)
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
      <Landing
        title={LandingData?.title}
        imageUrl={LandingData?.imageUrl}
      />

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

export default SatisfactionGuarantee;

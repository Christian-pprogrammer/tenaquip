'use client'
import React, {useEffect, useState} from "react";
import axios from 'axios';
import Landing from "@/components/landing/Landing";
import Tenaway from "@/components/tenaway/Tenaway";
const endpoint = process.env.STRAPI_API;

const TenaquipWay = () => {
    const [data, setData] = useState([{title: '',description: ''}]);
    const [desc, setDesc] = useState({Ptext: ''});
    const [LandingData, setLandingData] = useState({title: '',imageUrl: ''});

    useEffect(() => {
        axios.get(`${endpoint}/tenaquip-way?populate=*`)
            .then(response => {
                setLandingData(response.data.data.attributes.PageContent[0]);
                setDesc(response.data.data.attributes.PageContent[1]);
                setData(response.data.data.attributes.PageContent);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);
  return (
    <div className="relative">
      <Landing title={LandingData.title} imageUrl={LandingData.imageUrl}/>

      <div className="mt-16 px-16 w-[90vw] bg-gray-100 mx-auto py-4 mb-12">
        <p className="text-black mb-3 text-center">
          {desc.Ptext}
        </p>
      </div>

      <div className="px-16 mb-5 flex flex-wrap">
        {
          data.slice(2).map((item, index) => (
          <Tenaway key={index} title={item.title} paragraph={item.description} />
          )
        )
        }
      </div>
      
    </div>
  );
};

export default TenaquipWay;

'use client'
import React, {useEffect, useState} from "react";
import axios from 'axios';
import Landing from "@/components/landing/Landing";
const endpoint = process.env.STRAPI_API;

const Recognitions = () => {
  const [data, setData] = useState([{year: '', title: '', description: ''}]);
    const [LandingData, setLandingData] = useState({title: '',imageUrl: ''});

    useEffect(() => {
        axios.get(`${endpoint}/recognition?populate=*`)
            .then(response => {
                setLandingData(response.data.data.attributes.PageContent[0]);
                setData(response.data.data.attributes.PageContent);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);
  return (
    <div className="relative mb-8">
      <Landing title={LandingData?.title} imageUrl={LandingData?.imageUrl}/>
      <div className="px-16 flex flex-wrap">
      {
        data.slice(1).map((item, index) => (
        <div className="w-[30%] mt-12 flex flex-col mr-8 space-y-3">
            <div className="border-b-4 py-6 text-center text-3xl">{item?.year}</div>
            <h2 className="text-gray-600 text-xl font-semibold text-center">{item?.title}</h2>
            <p className="text-black text-center">
                {item?.description}
            </p> 
        </div>
        )
      )}
      </div>
    </div>
  );
};

export default Recognitions;

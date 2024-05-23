'use client'
import React, {useEffect, useState} from "react";
import axios from 'axios';
const endpoint = process.env.STRAPI_API;
import { useParams } from 'next/navigation';
import ResourceNavigator from "@/components/resource-navigator/ResourceNavigator";
import ResourceElementComponent from "@/components/resource-element-component/ResourceElementComponent";

const Resouce = () => {
  const [data, setData] = useState([{title: '', year: '', description: ''}]);
    const [LandingData, setLandingData] = useState({title: '',imageUrl: '',subTitle: ''});
    const [resourceCategories, setResourcesCategories] = useState([]);
    const { resource } = useParams();

    useEffect(() => {
        axios.get(`${endpoint}/resource-categories?populate=*`)
          .then(response => {
            setResourcesCategories(response.data.data[0].attributes.PageContent);
          })
          .catch(error => {
              console.error('Error fetching data:', error);
          });
        axios.get(`${endpoint}/${resource}?populate=*`)
          .then(response => {
              setLandingData(response.data.data.attributes.PageContent[0]);
              setData(response.data.data.attributes.PageContent);
          })
          .catch(error => {
              console.error('Error fetching data:', error);
          });
    }, []);

  return (
    <div>
      <div
        className="bg-cover bg-center bg-no-repeat padding-horizontal min-h-96 flex flex-col justify-center"
        style={{
          backgroundImage: `url(${LandingData?.imageUrl})`,
          backgroundPosition: "center",
        }}
      >
        <h1 className="text-white text-3xl font-bold ">{LandingData?.title}</h1>
        <h2 className="text-white text-2xl font-semibold">{LandingData?.subTitle}</h2>
      </div>

      <div className="mx-32">
        <h2 className="text-mainColor font-normal text-2xl my-4 pt-4">
          Resource Pages
        </h2>

        <ResourceNavigator active={resource as string} resourceCategories={resourceCategories} />

        <div className="grid md:grid-cols-3 gap-x-4 gap-y-8 my-12">
          {data.slice(1).map((page, index) => (
            <ResourceElementComponent
              key={index}
              title={page.title}
              description={page.description}
              slug={page.year}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Resouce;

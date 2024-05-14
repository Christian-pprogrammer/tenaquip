'use client'
import React, {useEffect, useState} from "react";
import axios from 'axios';
const endpoint = process.env.STRAPI_API;
import Image from "next/image";
import Landing from "@/components/landing/Landing";
import HeadingAndParagraphs from "@/components/heading-and-paragraphs/HeadingAndParagraphs";

const TenaquipFoundation = () => {
  const [mediaLinks, setMediaLinks] = useState({videoLink: '', imageLink: ''});
  const [tenaProject, setTenaProject] = useState({title: '',paragraph: ''});
    const [foundationwebsite, setWebsiteFoundation] = useState({title: '',paragraph: '',buttonTitle: '',buttonLink: ''});
    const [LandingData, setLandingData] = useState({title: '',imageUrl: ''});

    useEffect(() => {
        axios.get(`${endpoint}/tenaquip-foundation?populate=*`)
            .then(response => {
                setLandingData(response.data.data.attributes.PageContent[0]);
                setWebsiteFoundation(response.data.data.attributes.PageContent[1]);
                setMediaLinks(response.data.data.attributes.PageContent[2]);
                setTenaProject(response.data.data.attributes.PageContent[3]);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);
  return (
    <div className="relative mb-8">
      <Landing title={LandingData.title} imageUrl={LandingData.imageUrl}/>
      <div className="px-16 w-[80vw] mt-16">
        <HeadingAndParagraphs title={foundationwebsite.title} paragraph={foundationwebsite.paragraph} buttonTitle={foundationwebsite.buttonTitle} buttonLink={foundationwebsite.buttonLink}/>
      </div>
      
      <div className="border border-gray-200 px-16 w-[91vw] mx-auto mt-5 mb-3"></div>

      <div className="flex px-16">
        <video controls className="w-[50vw] h-[50vh]">
          <source src={mediaLinks.videoLink} type="video/mp4" />
        </video>
        <div className="flex flex-col w-[50vw]">
          <div className="px-5 py-6">
            <HeadingAndParagraphs title={tenaProject.title} paragraph={tenaProject.paragraph}/>
            
            <div className="relative w-full h-[20vh]">
              <Image
                src={mediaLinks.imageLink}
                alt=""
                fill
                sizes="100vw"
                style={{
                  objectFit: "contain"
                }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TenaquipFoundation;

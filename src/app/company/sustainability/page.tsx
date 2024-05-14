'use client'
import React, {useEffect, useState} from "react";
import axios from 'axios';
const endpoint = process.env.STRAPI_API;
import Image from "next/image";
import Landing from "@/components/landing/Landing";

const Sustainability = () => {
    const [headingAndParagraphData, setData] = useState([{title: '',paragraph: ''}]);
    const [desc, setDesc] = useState({Ptext: ''});
    const [LandingData, setLandingData] = useState({title: '',imageUrl: ''});
    const [firstCards, setFirstCards] = useState([{Description: '', imageUrl: ''}]);
    const [secondCards, setSecondCards] = useState([{title: '', description: '', optionalImageUrl: ''}]);

    useEffect(() => {
        axios.get(`${endpoint}/sustainability?populate=*`)
            .then(response => {
                setLandingData(response.data.data.attributes.PageContent[0]);
                setDesc(response.data.data.attributes.PageContent[1]);
                const hpData = response.data.data.attributes.PageContent.filter((item: { __component: string; }) => item.__component === "components.heading-and-paragraph");
                setData(hpData);
                const newCardsData = response.data.data.attributes.PageContent.filter((item: { __component: string; }) => item.__component === "components.finalmember");
                setFirstCards(newCardsData);
                const newSecondCardsData = response.data.data.attributes.PageContent.filter((item: { __component: string; }) => item.__component === "components.recognition-comp");
                setSecondCards(newSecondCardsData);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);
  return (
      <div className="relative">
        <Landing title="" imageUrl={LandingData.imageUrl}/>

        <div className="mt-4 px-16 w-[60vw] mx-auto py-4 mb-5">
          <h2 className="text-2xl font-semibold text-center mb-4">{LandingData.title}</h2>
          <p className="text-black mb-3 text-center">
            {desc.Ptext}
          </p>
        </div>

          <div className="mb-5 flex flex-wrap justify-center">
              {firstCards.map((item, index) => (
                  <div className="max-w-[23vw] h-[74vh] min-w-fit min-h-fit border border-gray-200 mt-6 mr-8 py-4 px-5">
                      <div style={{width: "90%",height: "60%"}} className="relative mx-auto mb-4">
                          <Image src={item?.imageUrl} alt='' fill sizes="100vw" />
                      </div>
                      <div style={{width: "100%"}} className='mt-2 px-2'>
                          <div className="flex px-2 max-w-[23vw]">
                              <p>{item?.Description}</p>
                          </div>
                      </div>
                  </div>                   
              ))}
          </div>

          <div className="w-[100%] px-16 mt-12 flex h-[30vh] bg-gray-100 p-5 mb-8">
              <div className="flex flex-col justify-evenly w-[100%]">
                  <h2 className="text-3xl">{secondCards[0].title}</h2>
                  <p className="w-full">
                  {secondCards[0].description}
                  </p>
              </div>
              <div className="min-w-[20%] relative h-full mr-5">
                  <Image
                      src={secondCards[0]?.optionalImageUrl}
                      alt=""
                      fill
                      sizes="100vw"
                      style={{
                          objectFit: "contain"
                      }} />
              </div>
          </div>
          {headingAndParagraphData.map((item, index) => (
              <div className="px-16 mb-5">
              <h2 className="text-3xl">{item?.title}</h2>
              <p className="my-3">{item?.paragraph}</p>
              </div>
          ))}
          <div className="w-[100%] px-4 flex h-fit p-5 mb-8">
              <div className="min-w-[20%] relative h-[30vh] mr-5">
                <Image
                    src={secondCards[1]?.optionalImageUrl}
                    alt=""
                    fill
                    sizes="100vw"
                    style={{
                        objectFit: "contain"
                    }} />
              </div>
              <div className="flex flex-col">
                  <h2 className="text-xl font-semibold mb-4">{secondCards[1]?.title}</h2>
                  <p className="max-w-[93%]">{secondCards[1]?.description}</p>
              </div>
          </div>
      </div>
  );
};

export default Sustainability;

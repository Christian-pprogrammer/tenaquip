'use client'
import React, {useEffect, useState} from "react";
import axios from 'axios';
const endpoint = process.env.STRAPI_API;
import Image from "next/image";
import Link from "next/link";
import Landing from "@/components/landing/Landing";

const Careers = () => {
  const [data, setData] = useState([{title: '',paragraph: '',mediaLink: ''}]);
    const [LandingData, setLandingData] = useState({title: '',imageUrl: ''});
    const [mainTitle, setMainTitle] = useState('')
    const [cardsData, setCardsData] = useState([{Title: '', Description: '', imageUrl: ''}])
    const [videoLink, setVideoLink] = useState('')
    const [aboutParagraphsData, setAboutParagraphsData] = useState([{Ptext: ''}])

    useEffect(() => {
        axios.get(`${endpoint}/about?populate=*`)
            .then(response => {
                setLandingData(response.data.data.attributes.PageContent[0]);
                setData(response.data.data.attributes.PageContent);
                const newCardsData = response.data.data.attributes.PageContent.filter((item: { __component: string; }) => item.__component === "components.finalmember");
                setCardsData(newCardsData);
                const aboutParagraphs = response.data.data.attributes.PageContent.filter((item: { __component: string; }) => item.__component === "components.paragraph");
                setAboutParagraphsData(aboutParagraphs);
                response.data.data.attributes.PageContent.map((item: any) => {
                    if(item.__component === "components.main-title") {
                        setMainTitle(item.Title)
                    }
                    if(item.__component === "components.media") {
                        setVideoLink(item.videoLink)
                    }
                })
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);
  return (
      <div className="relative">
        <Landing title={LandingData.title} imageUrl={LandingData.imageUrl}/>

      <div className="flex px-16">
        <div className="mt-16 w-[70vw]">
          {
            data.slice(1).map((item, index) => (
              <div>
              <h2 className="text-mainColor text-3xl mb-5">{item.title}</h2>
              <p className="text-black mb-8">
                  {item.paragraph}
              </p>
              {item.mediaLink && <div className="relative">
                  <div className="h-[70vh]">
                      <Image
                          src={item.mediaLink}
                          alt="Careers"
                          fill
                          sizes="100vw"
                          style={{
                              objectFit: "contain"
                          }} />
                  </div>
              </div>}
              </div>
            ))
          }
      </div>

        <div className="mt-16 w-[30vw] px-2">
          <div className="bg-gray-200 p-2">
              <video controls className="w-full">
                  <source src={videoLink} type="video/mp4" />
              </video>
              <Link href={videoLink} className="block text-mainColor mt-2 hover:underline font-semibold" download>Download video</Link>
              <div className="text-left mt-4 mb-3 space-y-3">
                  {aboutParagraphsData.map((item) => (
                      <p>{item.Ptext}</p>
                  ))}
              </div>
          </div>
        </div>
      </div>

      <div className="mb-12 px-24">
          <h2 className="text-center text-mainColor text-3xl mb-4">{mainTitle}</h2>
          <div className="grid space-x-8 md:grid-cols-4 min-h-fit py-4">
              {cardsData.map((card) => (
                  <div className="mx-auto mb-5 sm:w-[60vw] md:w-[20vw] md:min-h-[43vh]">
                      <div style={{width: "100%"}} className="relative">
                          <Image
                              src={card.imageUrl}
                              alt=''
                              width={463} height={233}
                            />
                      </div>
                      <div style={{width: "100%"}} className='mt-2'>
                          <p className="text-center text-lg mb-2">{card.Title}</p>
                          <p className="text-center text-md">{card.Description}</p>
                      </div>
                  </div>
              ))}
              
          </div>
      </div>

      </div>
  );
};

export default Careers;

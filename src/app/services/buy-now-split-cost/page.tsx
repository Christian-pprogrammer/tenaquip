'use client'
import React, {useEffect, useState} from "react";
import axios from 'axios';
const endpoint = process.env.STRAPI_API;
import Image from "next/image";
import HeadingAndParagraphs from "@/components/heading-and-paragraphs/HeadingAndParagraphs";

const page = () => {

  const [LandingData, setLandingData] = useState({title: '',imageUrl: ''});
  const [mediaData, setMedia] = useState([{imageLink: ''}]);
  const [cardsData, setCards] = useState([{Title: '',imageUrl: ''}]);
  const [faqsData, setFaqs] = useState([{title: '',paragraph: ''}]);

    useEffect(() => {
        axios.get(`${endpoint}/buynow-splitcost?populate=*`)
            .then(response => {
                setLandingData(response.data.data.attributes.PageContent[0]);
                const cards = response.data.data.attributes.PageContent.filter((item: { __component: string; }) => item.__component === "components.finalmember");
                const media = response.data.data.attributes.PageContent.filter((item: { __component: string; }) => item.__component === "components.media");
                const faqs = response.data.data.attributes.PageContent.filter((item: { __component: string; }) => item.__component === "components.heading-and-paragraph");
                setCards(cards);
                setMedia(media);
                setFaqs(faqs);
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
        </div>

        <div className="px-40">
          <h2 className="text-3xl text-center mt-5 text-mainColor text-bold">Buying With Affirm is Simple</h2>
              <div className="flex flex-wrap justify-evenly">
                  {cardsData.map((item, index) => (
                      <div className="w-[20vw] h-[74vh] min-w-fit min-h-fit mt-6 mr-8">
                          <div style={{width: "100%"}} className='mt-2 px-2'>
                              <p className="text-2xl text-mainColor mb-3 mt-3 text-bold">{item?.Title}</p>
                          </div>
                          <div style={{width: "100%",height: "80%"}} className="relative">          
                              <Image src={item?.imageUrl} alt='' fill sizes="100vw" />
                          </div>
                      </div>                                                             
                  ))}
              </div>
              <div className="relative mb-8">
                  <div className="h-[35vh]">
                      <Image
                          src={mediaData[0]?.imageLink}
                          alt="Careers"
                          fill
                          sizes="100vw"
                          style={{
                              objectFit: "contain"
                          }} />
                  </div>
              </div>

              <h2 className="text-3xl text-center mt-5 text-mainColor text-bold mb-16">Frequently Asked Questions</h2>
              {/* heading and paragraphs */}
              <div className="space-y-8 mb-8">
              {faqsData.map((item, index) => (
                  <HeadingAndParagraphs title={item?.title} paragraph={item?.paragraph} />
              ))}
              </div>
        </div>
      </div>
  );
};

export default page;

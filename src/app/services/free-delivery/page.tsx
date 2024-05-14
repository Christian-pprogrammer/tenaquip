'use client'
import React, {useEffect, useState} from "react";
import axios from 'axios';
const endpoint = process.env.STRAPI_API;
import Image from "next/image";
import HeadingAndParagraphs from "@/components/heading-and-paragraphs/HeadingAndParagraphs";

const page = () => {

  const [LandingData, setLandingData] = useState({title: '',imageUrl: ''});
  const [mediaData, setMedia] = useState([{imageLink: ''}]);
  const [faqsData, setFaqs] = useState([{title: '',paragraph: ''}]);

    useEffect(() => {
        axios.get(`${endpoint}/free-delivery?populate=*`)
            .then(response => {
                setLandingData(response.data.data.attributes.PageContent[0]);
                const media = response.data.data.attributes.PageContent.filter((item: { __component: string; }) => item.__component === "components.media");
                const faqs = response.data.data.attributes.PageContent.filter((item: { __component: string; }) => item.__component === "components.heading-and-paragraph");
                setMedia(media);
                setFaqs(faqs);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

  return (
      <div className="mb-8">
        <div
          className="bg-cover bg-center bg-no-repeat px-32 min-h-96 flex flex-col justify-center"
          style={{
            backgroundImage: `url(${LandingData?.imageUrl})`,
            backgroundPosition: "center",
          }}
        >
          <h1 className="text-white text-3xl font-bold ">{LandingData?.title}</h1>
        </div>

        <div className="px-16 mt-8">
          <div className="space-y-8 mb-8">
              {faqsData.map((item, index) => (
                  <HeadingAndParagraphs title={item?.title} paragraph={item?.paragraph} />
              ))}
          </div>

          <div className="w-[100%] mt-12 flex h-[70vh] bg-gray-100">
              <div className="w-[55%] relative h-full">
                  <Image
                      src={mediaData[0]?.imageLink}
                      alt=""
                      fill
                      sizes="100vw"
                      style={{
                          objectFit: "cover"
                      }} />
              </div>
              <div className="flex flex-col py-12 space-y-4 px-8">
                  <h2 className="text-xl">Enter a postal code to check if you qualify for Free Delivery</h2>
                  <form>
                      <div className="flex space-x-3">
                          <input
                          type="text"
                          id="company"
                          className="border border-gray-300 rounded"
                          placeholder="Postal Code"
                          />
                          <button type="submit" className="bg-mainColor text-white py-2 px-2 rounded w-40">
                              Submit
                          </button>
                      </div>
                  </form>
              </div>
          </div>
        </div>
      </div>
  );
};

export default page;

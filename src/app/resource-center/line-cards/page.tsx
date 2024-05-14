'use client'
import React, {useEffect, useState} from "react";
import axios from 'axios';
const endpoint = process.env.STRAPI_API;
import Image from "next/image";
import Link from "next/link";

const LineCards = () => {
  const [data, setData] = useState([{Title: '', ImageUrl: '', pdfLink: '', button1Text: '', button1Link: '', button2Text: '', button2Link: ''}]);

    useEffect(() => {
        axios.get(`${endpoint}/line-card?populate=*`)
            .then(response => {
                setData(response.data.data.attributes.PageContent);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);
  return (
      <div className="relative mb-8">
        <div className="px-16">
          <h2 className="text-2xl mt-5 text-gray-600">Line Cards</h2>
          <div className="border border-gray-200 px-16 w-[91vw] mx-auto mt-5 mb-2"></div>
              <div className="flex flex-wrap">
                  {data.map((item, index) => (
                      <div className="w-[20vw] h-[74vh] min-w-fit min-h-fit bg-gray-200 mt-6 mr-8">
                          <div style={{width: "100%",height: "80%"}} className="relative">
                              <Link target="blank" href={item.pdfLink}>
                                  <Image src={item.ImageUrl} alt='' fill sizes="100vw" />
                              </Link>
                          </div>
                          <div style={{width: "100%"}} className='mt-2 px-2'>
                              <p className="text-md mb-3 mt-3">{item.Title}</p>
                              <div className="flex px-2">
                                  <button type="button" className="bg-mainColor text-white py-2 px-3 rounded mr-3 min-w-fit text-sm">
                                      <Link href={item.button1Link} className="text-white">
                                      {item.button1Text}
                                      </Link>
                                  </button>
                                  <button type="button" className="bg-mainColor text-white py-2 px-3 rounded min-w-fit text-sm">
                                      <Link href={item.button2Link} target="blank" className="text-white">
                                      {item.button2Text}
                                      </Link>
                                  </button>
                              </div>
                          </div>
                      </div>                   
                  ))}
              </div>
        </div>
      </div>
  );
};

export default LineCards;

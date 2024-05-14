'use client'
import React, {useEffect, useState} from "react";
import axios from 'axios';
const endpoint = process.env.STRAPI_API;
import Link from "next/link";
import Image from "next/image";

const Careers = () => {
  const [data, setData] = useState([{Ptext: '' , __component: '' , Title: '' , linkUrl: '', linkTitle: ''}]);
  const [LandingData, setLandingData] = useState({title: '',imageUrl: ''});
  const [sampleRows, setSampleRows] = useState([ {jobTitle: '', city: '', employmentLevel: '', JobLink: '', jobId: ''}]);

  useEffect(() => {
      axios.get(`${endpoint}/career?populate=*`)
        .then(response => {
            setLandingData(response.data.data.attributes.PageContent[0]);
            setData(response.data.data.attributes.PageContent);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });

      axios.get(`${endpoint}/job?populate=*`)
        .then(response => {
          setSampleRows(response.data.data.attributes.PageContent);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        }); 
  }, []);

  return (
    <div className="relative">
      <div className="relative h-[70vh]">
        <Image
          src={LandingData?.imageUrl}
          alt="Careers"
          fill
          sizes="100vw"
          style={{
            objectFit: "cover"
          }} />
        <div className="absolute inset-0 flex items-center px-16">
          <h1 className="text-white text-5xl font-semibold text-shadow-lg shadow-black">{LandingData?.title}</h1>
        </div>
      </div>

      <div className="mt-16 px-16 w-[80vw]">
        {
            data.slice(1).map((item, index) => (
            <h2 className={item.__component === "components.main-title" ? `text-mainColor text-3xl mb-5` : `text-black mb-3`}>
              {item.__component === "components.main-title" ? item?.Title : ( item.__component === "components.p-link" ? <Link
                  href={item?.linkUrl}
                  className="font-bold text-mainColor hover:underline"
                  >
                  {item.linkTitle}
                </Link> : item?.Ptext)}
            </h2>
            )
          )
        }

        {/* table */}
        <div className="mt-16 w-full mb-8">
            <table className="w-full table-auto">
            <thead className="border-b-2">
                <tr>
                <th className="text-left pb-2">Job Title</th>
                <th className="text-left pb-2">City</th>
                <th className="text-left pb-2">Employment Level</th>
                </tr>
            </thead>
            <tbody>
                {sampleRows.map(row => (
                <tr key={row.jobId} className="border-b-2 h-16">
                    <td className="pb-2">
                    <Link href={row.JobLink} className="text-mainColor underline font-bold">
                        {row.jobTitle}
                    </Link>
                    </td>
                    <td className="pb-2">{row.city}</td>
                    <td className="pb-2">{row.employmentLevel}</td>
                </tr>
                ))}
            </tbody>
            </table>
        </div>

      </div>
      
    </div>
  );
};

export default Careers;

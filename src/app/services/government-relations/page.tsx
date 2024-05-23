'use client'
import React, {useEffect, useState} from "react";
import axios from 'axios';
const endpoint = process.env.STRAPI_API;

const page = () => {

  const [desc, setDesc] = useState({title: '',paragraph: ''});
  const [LandingData, setLandingData] = useState({title: '',imageUrl: ''});
  const [facts, setFacts] = useState([{Ptext: ''}]);
  const [mainTitle, setMainTitle] = useState([{Title: ''}]);
  const [agenciesMainTitle, setAgenciesMainTitle] = useState([{Title: ''}]);
  const [agencies, setAgencies] = useState([{agencyName: ''}]);

    useEffect(() => {
        axios.get(`${endpoint}/government-relation?populate=*`)
            .then(response => {
                setLandingData(response.data.data.attributes.PageContent[0]);
                setDesc(response.data.data.attributes.PageContent[1]);
                const title = response.data.data.attributes.PageContent.filter((item: { __component: string; }) => item.__component === "components.main-title");
                const newfacts = response.data.data.attributes.PageContent.filter((item: { __component: string; }) => item.__component === "components.paragraph");
                setMainTitle(title);
                setFacts(newfacts);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });

        axios.get(`${endpoint}/agency?populate=*`)
            .then(response => {
                const newAgencyTitle = response.data.data.attributes.PageContent.filter((item: { __component: string; }) => item.__component === "components.main-title");
                const newAgency = response.data.data.attributes.PageContent.filter((item: { __component: string; }) => item.__component === "components.agencies");
                setAgencies(newAgency);
                setAgenciesMainTitle(newAgencyTitle);
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

      <div className="mx-32">
        <h1 className="text-2xl text-mainColor mt-8 mb-4">
          {desc.title}
        </h1>
        <p className="text-sm text-Gray my-3">
          {desc.paragraph}
        </p>

        <div className="grid md:grid-cols-2 mb-8">
          <div>
            <h1 className="text-2xl text-mainColor block mt-8 mb-4">
              {mainTitle[0]?.Title}
            </h1>
            <ul className=" list-disc block ml-4">
              {
                facts.map((fact, index) => (
                  <li className="text-sm text-Gray" key={index}>{fact?.Ptext}</li>
                ))
              }
              
            </ul>
          </div>

          <div>
            <h1 className="text-2xl text-mainColor block mt-8 mb-4">{agenciesMainTitle[0]?.Title}</h1>
            <ul className=" list-disc block ml-4">
              {
                agencies.map((agency, index) => (
                  <li className="text-sm text-Gray" key={index}>{agency?.agencyName}</li>
                ))
              }
              
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;

'use client'
import React, {useEffect, useState} from "react";
import axios from 'axios';
const endpoint = process.env.STRAPI_API;
import Link from "next/link";
import HeadingAndParagraphs from "@/components/heading-and-paragraphs/HeadingAndParagraphs";
import Landing from "@/components/landing/Landing";

const page = () => {

  const [LandingData, setLandingData] = useState({title: '',imageUrl: ''});
  const [facts, setFacts] = useState([{Ptext: '', optionalLink: ''}]);
  const [mainTitle, setMainTitle] = useState([{Title: ''}]);
  const [agenciesMainTitle, setAgenciesMainTitle] = useState([{Title: ''}]);
  const [agencies, setAgencies] = useState([{agencyName: ''}]);

    useEffect(() => {
        axios.get(`${endpoint}/courses-seminars-survey?populate=*`)
            .then(response => {
                setLandingData(response.data.data.attributes.PageContent[0]);
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
    <div className="relative">
      <Landing title={LandingData.title} imageUrl={LandingData.imageUrl}/>

      <div className="mx-32">
        <h1 className="text-2xl text-mainColor mt-8 mb-4">
          {mainTitle[0]?.Title}
        </h1>

        <div className="grid md:grid-cols-2 mb-8">
          <div>
            <h1 className="text-2xl text-mainColor block mt-8 mb-4">
            {mainTitle[1]?.Title}
            </h1>
            <ul className=" list-disc block ml-4">
              {
                facts.map((fact, index) => (
                  <div>
                    {!fact.optionalLink && <li className="text-sm text-Gray" key={index}>{fact?.Ptext}</li>}
                    {
                      fact.optionalLink &&
                      <button type="button" className="bg-mainColor text-white py-2 px-4 rounded mt-4">
                          <Link href={fact?.optionalLink} className="text-white">
                          {fact?.Ptext}
                          </Link>
                      </button>
                    }
                  </div>
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

      {/* the form */}
      <div className="bg-lightMain py-20">
        <form className="flex flex-col space-y-4 w-[40vw] mx-auto">
          <HeadingAndParagraphs title="Can't find what you are looking for?" paragraph="E-mail our Safety Specialists and let us see what we can do for you!"/>
            <div className="flex flex-col flex-1">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  className="rounded border border-gray-300"
                />
              </div>
              <div className="flex flex-col flex-1">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  className="rounded border border-gray-300"
                />
              </div>
              <div className="flex flex-col flex-1">
                <label htmlFor="phone">Phone</label>
                <input
                  type="text"
                  id="phone"
                  className="rounded border border-gray-300"
                />
              </div>
            <div className="flex flex-col">
              <label htmlFor="city">City</label>
              <input
                type="text"
                id="city"
                className="rounded border border-gray-300"
              />
            </div>
            <div className="flex flex-col flex-1">
                <label htmlFor="company">Company</label>
                <input
                  type="text"
                  id="company"
                  className="border border-gray-300 rounded"
                />
              </div>
            <div className="flex flex-col">
              <label htmlFor="message">Describe the training you're looking for</label>
              <textarea
                id="message"
                rows={4}
                className="rounded border border-gray-300"
              />
            </div>
            <button
              type="submit"
              className="bg-mainColor text-white py-2 px-4 rounded w-48"
            >
              Submit
            </button>
        </form>
      </div>
    </div>
  );
};

export default page;

'use client'
import React, {useEffect, useState} from "react";
import axios from 'axios';
import Landing from "@/components/landing/Landing";
import HeadingAndParagraphs from "@/components/heading-and-paragraphs/HeadingAndParagraphs";
const endpoint = process.env.STRAPI_API;

const page = () => {

  const [LandingData, setLandingData] = useState({title: '',imageUrl: ''});
  const [facts, setFacts] = useState([{title: '', paragraph: ''}]);

    useEffect(() => {
        axios.get(`${endpoint}/hunter-group?populate=*`)
            .then(response => {
                setLandingData(response.data.data.attributes.PageContent[0]);
                const newfacts = response.data.data.attributes.PageContent.filter((item: { __component: string; }) => item.__component === "components.heading-and-paragraph");
                setFacts(newfacts);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

  return (
    <div className="relative">
      <Landing title={LandingData.title} imageUrl={LandingData.imageUrl}/>
        <div className="px-16 py-8">
        <HeadingAndParagraphs title={facts[0]?.title} paragraph={facts[0]?.paragraph}/>

        {/* the form */}
        <div className="bg-lightMain p-8 w-[40vw]">
            <form className="flex flex-col space-y-4 mx-auto">
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
    </div>
  );
};

export default page;

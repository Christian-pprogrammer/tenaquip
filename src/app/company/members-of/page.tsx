'use client'
import React, {useEffect, useState} from "react";
import axios from 'axios';
const endpoint = process.env.STRAPI_API;
import Image from "next/image";
import Landing from "@/components/landing/Landing";

const Members = () => {
    const [members, setMembers] = useState([{Title: '', Year: '', Description: '', imageUrl: ''}]);
    const [LandingData, setLandingData] = useState({title: '',imageUrl: ''});

    useEffect(() => {
        axios.get(`${endpoint}/members-of?populate=*`)
            .then(response => {
                setLandingData(response.data.data.attributes.PageContent[0]);
                setMembers(response.data.data.attributes.PageContent);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);
  return (
      <div className="relative mb-8">
        <Landing title={LandingData?.title} imageUrl={LandingData?.imageUrl}/>
          {
              members.slice(1).map((member, index) => (
                  <div className="w-[100%] px-16 mt-12 flex h-[30vh]">
                      <div className="min-w-[20%] relative h-full mr-5">
                          <Image
                              src={member.imageUrl}
                              alt=""
                              fill
                              sizes="100vw"
                              style={{
                                  objectFit: "contain"
                              }} />
                      </div>
                      <div className="flex flex-col justify-evenly">
                          <h2 className="text-mainColor text-3xl">{member.Title}</h2>
                          <p className="text-black">
                              {member.Year}
                          </p>
                          <p>
                          {member.Description}
                          </p>
                      </div>
                  </div>
          ))}
      </div>
  );
};

export default Members;

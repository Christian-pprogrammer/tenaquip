import React from "react";

const page = () => {
  const serviceInfo = {
    mainImage:
      "https://www.tenaquip.com/tenaquip/images/banner/pages/gov-relations.jpg",
    h1: "GOVERNMENT RELATIONS",
  };

  const agencies = [
    "Department of National Defense",
    "Environment Canada",
    "Natural Resources",
    "Transport Canada",
    "PWGSC",
    "Correctional Services of Canada",
    "Statistics Canada",
    "Natural Resources Canada",
  ];

  const facts = [
    "ISO 9001:2015 certified",
    "NMSO Fire, Safety, and Rescue Equipment: E60HN-20FSRE/013/HN",
    "NMSO Hand Tools: E60HP-21TOOL/010/HP",
    "Registered in over 1600 GSIN categories in Supplier Registration Index",
    "400,000 different sku's and 30,000 stock products",
    "250,000 sq. ft. of warehouse space nationally",
    "Teaming with over 3000 suppliers",
    "16 locations and growing",
    "Procurement (Visa/MC) cards accepted",
    "Real-time on-line inventory"
  ]

  return (
    <div>
      <div
        className="bg-cover bg-center bg-no-repeat px-32 min-h-96 flex flex-col justify-center"
        style={{
          backgroundImage: `url(${serviceInfo.mainImage})`,
          backgroundPosition: "center",
        }}
      >
        <h1 className="text-white text-3xl font-bold ">{serviceInfo.h1}</h1>
      </div>

      <div className="mx-32">
        <h1 className="text-2xl text-mainColor mt-8 mb-4">
          A dedicated Government team trained in both NMSO and local procurement
          policies.
        </h1>
        <p className="text-sm text-Gray my-3">
          TENAQUIP has always emphasized that people are our most important
          assets! Through an open and adaptive management style, our corporate
          philosophy fosters innovation, initiative and creativity in order to
          maintain our high work standards. Through this effort, TENAQUIP has
          become a leader in the industrial and safety markets across Canada.
        </p>
        <p className="text-sm text-Gray my-3">
          Our sales department consists of product specialists with technical
          expertise in all locations including a dedicated Government team
          trained in both NMSO and local procurement policies. This ensures that
          you receive the same high quality service in all your dealings with
          TENAQUIP.
        </p>

        <div className="grid md:grid-cols-2 mb-8">
          <div>
            <h1 className="text-2xl text-mainColor block mt-8 mb-4">
              Examples of Agencies Currently Serving:
            </h1>
            <ul className=" list-disc block ml-4">
              {
                facts.map((fact, index) => (
                  <li className="text-sm text-Gray" key={index}>{fact}</li>
                ))
              }
              
            </ul>
          </div>

          <div>
            <h1 className="text-2xl text-mainColor block mt-8 mb-4">Examples of Agencies Currently Serving</h1>
            <ul className=" list-disc block ml-4">
              {
                agencies.map((agency, index) => (
                  <li className="text-sm text-Gray" key={index}>{agency}</li>
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

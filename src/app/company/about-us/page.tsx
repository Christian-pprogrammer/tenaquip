import Breadcrump from "@/components/bread-crump/Breadcrump";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Careers = () => {
  const aboutUs = {
    mainImage:
      "https://www.tenaquip.com/tenaquip/images/banner/pages/about-us.jpg",
    h1: "About us",
  };

  const sampleRows = [
    {
      id: 1,
      jobTitle: "Software Engineer",
      city: "New York",
      employmentLevel: "Mid-Level",
    },
    {
      id: 2,
      jobTitle: "Data Analyst",
      city: "San Francisco",
      employmentLevel: "Entry-Level",
    },
    {
      id: 3,
      jobTitle: "Product Manager",
      city: "Seattle",
      employmentLevel: "Senior-Level",
    },
  ];
  return (
    <div className="relative">
      <div
        className="bg-cover bg-center bg-no-repeat px-32 min-h-96 flex flex-col justify-center"
        style={{
          backgroundImage: `url(${aboutUs.mainImage})`,
          backgroundPosition: "center",
        }}
      >
        <h1 className="text-white text-3xl font-bold ">{aboutUs.h1}</h1>
      </div>

      <div className="mb-10 flex px-16">
        <div className="mt-16 w-[70vw]">
          <h2 className="text-mainColor text-3xl mb-5">
            Founded in 1968 by Ken Reed. Ken had one vision for his life's
            passion: to take the customer's procurement experience to a higher
            level.
          </h2>
          <p className="text-black mb-8">
            TENAQUIP has proudly served Canadian businesses with this model for
            55 years offering state-of-the-art Industrial and Occupational
            Health & Safety products sourced from around the globe.
          </p>
          <h2 className="text-mainColor text-3xl mb-5">
            Proudly 100% CANADIAN Owned and Operated
          </h2>
          <p className="text-black mb-3">
            TENAQUIP continues to be a 100% CANADIAN owned and operated
            organization. Our dedicated team of 750 employees are proud to work
            in and support the communities in which we live. It is this pride
            that drives our commitment to serve you, our customers.
          </p>
          <p className="text-black mb-8">
            Every day, TENAQUIP brings to you New and Exciting Products and
            Services. We deliver innovation, excellence and quality in
            everything we offer.
          </p>
          <h2 className="text-mainColor text-3xl mb-5">Quality Policy</h2>
          <p className="text-black mb-8">
            TENAQUIP Limited, seller and distributor of industrial supplies, is
            committed to continuous improvement of our quality management system
            and satisfying the applicable requirements, thereby providing our
            customers exceptional service and quality products that meet or
            exceed their needs
          </p>
          <h2 className="text-mainColor text-3xl">ESG Policy</h2>
          <div className="relative">
            <div className="h-[70vh]">
              <Image
                src="https://www.tenaquip.com/tenaquip/images/banner/pages/ESG_Tena_WEB-ENG.jpg"
                alt="Careers"
                layout="fill"
                objectFit="contain"
              />
            </div>
          </div>
        </div>
        <div className="mt-16 w-[30vw] px-2">
          <div className="bg-gray-200 p-2">
            <video controls className="w-full">
              <source
                src="https://www.tenaquip.com/tenaquip/videos/corporate/50th_anniversary_video_eng.mp4"
                type="video/mp4"
              />
            </video>
            <Link
              href="#"
              className="block text-mainColor mt-2 hover:underline font-semibold"
            >
              Download video
            </Link>
            <div className="text-left mt-4 mb-3 space-y-3">
              <p>One of Canada's Best Managed Companies</p>
              <p>ISO 9001:2015 certified</p>
              <p>Over 400,000 skus, over 40,000 stock products</p>
              <p>RF technology allowing for 99.7% order picking accuracy</p>
              <p>Solutions-based team of experts</p>
              <p>Serving Canadian industry coast to coast</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-16 px-24">
        <h2 className="text-center text-mainColor text-3xl mb-4">
          This unique approach was achieved over the years with:
        </h2>
        <div className="flex space-x-8">
          <div className="w-[20vw] h-[43vh]">
            <div style={{ width: "100%", height: "80%" }}>
              <Image
                src="https://www.tenaquip.com/tenaquip/images/mini-banner/catalogue.jpg?1527076329"
                alt=""
                width={463}
                height={233}
              />
            </div>
            <div style={{ width: "100%" }} className="">
              <p className="text-center text-lg mb-2">
                Comprehensive Buyers' Guide
              </p>
              <p className="text-center text-md">
                Thousands of pages of state-of-the-art products sourced from
                around the globe.
              </p>
            </div>
          </div>

          <div className="cursor-pointer w-[20vw] h-[43vh]">
            <div style={{ width: "100%", height: "80%" }}>
              <Image
                src="https://www.tenaquip.com/tenaquip/images/mini-banner/catalogue.jpg?1527076329"
                alt=""
                width={463}
                height={233}
              />
            </div>
            <div style={{ width: "100%" }} className="">
              <p className="text-center text-lg mb-2">Interactive Website</p>
              <p className="text-center text-md">
                Be first to view limited time special offers, new products,
                regulatory seminars & more!
              </p>
            </div>
          </div>

          <div className="cursor-pointer w-[20vw] h-[43vh]">
            <div style={{ width: "100%", height: "80%" }}>
              <Image
                src="https://www.tenaquip.com/tenaquip/images/mini-banner/catalogue.jpg?1527076329"
                alt=""
                width={463}
                height={233}
              />
            </div>
            <div style={{ width: "100%" }} className="">
              <p className="text-center text-lg mb-2">Big Warehouse</p>
              <p className="text-center text-md">
                Over 500,000 Sq Ft. of warehouse space nationally.
              </p>
            </div>
          </div>

          <div className="cursor-pointer w-[20vw] h-[43vh]">
            <div style={{ width: "100%", height: "80%" }}>
              <Image
                src="https://www.tenaquip.com/tenaquip/images/mini-banner/catalogue.jpg?1527076329"
                alt=""
                width={463}
                height={233}
              />
            </div>
            <div style={{ width: "100%" }} className="">
              <p className="text-center text-lg mb-2">
                TENAQUIP Signature Service
              </p>
              <p className="text-center text-md">
                Our goal is to meet and exceed our customers expectations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Careers;

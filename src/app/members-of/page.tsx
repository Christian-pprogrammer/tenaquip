import Breadcrump from "@/components/Breadcrump/Breadcrump";
import HeadingAndParagraphs from "@/components/HeadingAndParagraphs/HeadingAndParagraphs";
import Landing from "@/components/Landing/Landing";
import React from "react";
import Image from "next/image";

const Members = () => {
  return (
    <div className="relative mb-8">
      <Landing title="MEMBERS OF" imageUrl="https://www.tenaquip.com/tenaquip/images/banner/pages/members-of.jpg"/>
        <div className="w-[100%] px-16 mt-12 flex h-[30vh]">
            <div className="w-[30%] relative h-full mr-5">
                <Image
                    src="https://www.tenaquip.com/tenaquip/images/logo/member-of/affiliated-distributors-canada.jpg?1527473887"
                    alt=""
                    layout="fill"
                    objectFit="contain"
                />
            </div>
            <div className="flex flex-col justify-evenly">
                <h2 className="text-mainColor text-3xl">Affiliated Distributors (AD)</h2>
                <p className="text-black">
                    Member since 1998
                </p>
                <p>
                Affiliated Distributors is the largest wholesale buying and marketing group in North America. They are comprised of over 370 independent distributor companies with over 3,000 locations in the U.S. and Canada. By combining buying power of distributors, TENAQUIP is able to pass some cost advantages on to our customers.
                </p>
            </div>
        </div>
        
        <div className="w-[100%] px-16 mt-12 flex h-[30vh]">
            <div className="w-[30%] relative h-full mr-5">
                <Image
                    src="https://www.tenaquip.com/tenaquip/images/logo/member-of/affiliated-distributors-canada.jpg?1527473887"
                    alt=""
                    layout="fill"
                    objectFit="contain"
                />
            </div>
            <div className="flex flex-col justify-evenly">
                <h2 className="text-mainColor text-3xl">Affiliated Distributors (AD)</h2>
                <p className="text-black">
                    Member since 1998
                </p>
                <p>
                Affiliated Distributors is the largest wholesale buying and marketing group in North America. They are comprised of over 370 independent distributor companies with over 3,000 locations in the U.S. and Canada. By combining buying power of distributors, TENAQUIP is able to pass some cost advantages on to our customers.
                </p>
            </div>
        </div>
    </div>
  );
};

export default Members;

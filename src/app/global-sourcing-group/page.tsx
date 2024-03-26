import Breadcrump from "@/components/Breadcrump/Breadcrump";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const GlobalSourcingGroup = () => {
  return (
    <div className="relative">
      <div className="relative h-[70vh]">
        <Image
          src="https://www.tenaquip.com/tenaquip/images/banner/pages/global-sourcing.jpg"
          alt="Careers"
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute inset-0 flex items-center px-16">
          <h1 className="text-white text-5xl font-semibold text-shadow-lg shadow-black">
            TENAQUIP GLOBAL SOURCING GROUP
          </h1>
        </div>
      </div>

      <div className="mt-16 px-16 w-[80vw]">
        <h2 className="text-mainColor text-3xl mb-5">
          At TENAQUIP, we listen!
        </h2>
        <p className="text-black mb-3">
          You have told us that in these increasingly challenging times you need
          products and services that offer even MORE value than ever before!
          With this as our goal, we have travelled throughout the globe in
          search of solutions that will meet and exceed your expectations!
        </p>
        <p className="text-black mb-3">
          In our search, we soon realized that the most effective way to meet
          and exceed our customers' expectations for MORE value was to establish
          a TENAQUIP Global Sourcing Group. In this way TENAQUIP is able to
          ensure the high standards of quality, service and innovation that
          TENAQUIP has become known for throughout Canada, will continue to be
          upheld and grow!
        </p>
        <p className="text-black mb-3">
          Our TENAQUIP Global Sourcing Group was established in 2007, beginning
          its operations with a complement of just 600 sku's. Today, products
          sourced through this group's operation exceed 3000 sku's and represent
          the fastest growing segment of our total TENAQUIP product offering.
        </p>
        <p className="text-black mb-8">
          To ensure the highest quality standards are met, products sourced
          through our Global Sourcing Group are first evaluated to ensure they
          are compliant with applicable Canadian regulations. They are then
          quality checked at the factory before shipping and as a final measure,
          they are quality checked once again at our facilities in Canada before
          being released to you, our valued customer!
        </p>
      </div>
    </div>
  );
};

export default GlobalSourcingGroup;

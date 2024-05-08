import Breadcrump from "@/components/bread-crump/Breadcrump";
import HeadingAndParagraphs from "@/components/heading-and-paragraphs/HeadingAndParagraphs";
import Landing from "@/components/landing/Landing";
import React from "react";

const SatisfactionGuarantee = () => {
  return (
    <div className="relative mb-5">
      <Landing title="THE TENAQUIP FOUNDATION" imageUrl="https://www.tenaquip.com/tenaquip/images/banner/pages/tenaquip-foundation.jpg"/>
      <HeadingAndParagraphs title="A word from The Reed Family" paragraph="TENAQUIP prides itself on giving back to the communities we are involved in!" buttonTitle="Visit the TENAQUIP Foundation Website" buttonLink="http://thetenaquipfoundation.ca/"/>

    </div>
  );
};

export default SatisfactionGuarantee;

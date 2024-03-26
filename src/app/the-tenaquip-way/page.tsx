import Breadcrump from "@/components/Breadcrump/Breadcrump";
import Landing from "@/components/Landing/Landing";
import Tenaway from "@/components/Tenaway/Tenaway";
import React from "react";

const SatisfactionGuarantee = () => {
  return (
    <div className="relative">
      <Landing title="THE TENAQUIP WAY" imageUrl="https://www.tenaquip.com/tenaquip/images/pages/company/thetenaquipway/banner.jpg"/>

      <div className="mt-16 px-16 w-[90vw] bg-gray-100 mx-auto py-4 mb-12">
        <p className="text-black mb-3 text-center">
        Tenaquip has always strived to differentiate itself from other companies. We believe that these 29 carefully crafted fundamentals perfectly encapsulate the essence of our unique culture. These fundamentals act as a roadmap, guiding all members of the Tenaquip family towards the goal of exceeding our customers’ expectations. They provide insight into the standard we set – a standard built on strengthening customer relationships, fostering a positive and engaging work environment, and empowering both employees and partners to achieve the best results. We call it, the Tenaquip Way.
        </p>
      </div>

      <div className="px-16 mb-5 flex flex-wrap">
        <Tenaway title="1. FOCUS ON THE CUSTOMER." 
        paragraph="Do what’s best for the customer, even if it’s harder for us in the short run. Put their needs ahead of our own and remember that there’s no greater way to build a reputation than to steadfastly do what’s right for others. Learn to think from others’ perspectives and find a way to help them meet their needs while also fulfilling our own."
        />
        <Tenaway title="1. FOCUS ON THE CUSTOMER." 
        paragraph="Do what’s best for the customer, even if it’s harder for us in the short run. Put their needs ahead of our own and remember that there’s no greater way to build a reputation than to steadfastly do what’s right for others. Learn to think from others’ perspectives and find a way to help them meet their needs while also fulfilling our own."
        />
        <Tenaway title="1. FOCUS ON THE CUSTOMER." 
        paragraph="Do what’s best for the customer, even if it’s harder for us in the short run. Put their needs ahead of our own and remember that there’s no greater way to build a reputation than to steadfastly do what’s right for others. Learn to think from others’ perspectives and find a way to help them meet their needs while also fulfilling our own."
        />
        <Tenaway title="1. FOCUS ON THE CUSTOMER." 
        paragraph="Do what’s best for the customer, even if it’s harder for us in the short run. Put their needs ahead of our own and remember that there’s no greater way to build a reputation than to steadfastly do what’s right for others. Learn to think from others’ perspectives and find a way to help them meet their needs while also fulfilling our own."
        />
        <Tenaway title="1. FOCUS ON THE CUSTOMER." 
        paragraph="Do what’s best for the customer, even if it’s harder for us in the short run. Put their needs ahead of our own and remember that there’s no greater way to build a reputation than to steadfastly do what’s right for others. Learn to think from others’ perspectives and find a way to help them meet their needs while also fulfilling our own."
        />
        <Tenaway title="1. FOCUS ON THE CUSTOMER." 
        paragraph="Do what’s best for the customer, even if it’s harder for us in the short run. Put their needs ahead of our own and remember that there’s no greater way to build a reputation than to steadfastly do what’s right for others. Learn to think from others’ perspectives and find a way to help them meet their needs while also fulfilling our own."
        />
      </div>
      
    </div>
  );
};

export default SatisfactionGuarantee;

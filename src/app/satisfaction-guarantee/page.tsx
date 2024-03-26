import Breadcrump from "@/components/Breadcrump/Breadcrump";
import Landing from "@/components/Landing/Landing";
import React from "react";

const SatisfactionGuarantee = () => {
  return (
    <div className="relative">
      <Landing
        title="SATISFACTION GUARANTEE"
        imageUrl="https://www.tenaquip.com/tenaquip/images/banner/pages/satisfaction_guarantee.jpg"
      />

      <div className="mt-16 px-16 w-[80vw]">
        <h2 className="text-mainColor text-3xl mb-5">
          Not satisfied with a product?
        </h2>
        <p className="text-black mb-3">
          We offer a choice of full credit, equal exchange, or your money back
          without restocking fees for all regular stock items.
        </p>
        <p className="text-black mb-3">
          If for any reason you are not 100% satisfied with a stock product you
          receive from TENAQUIP, you may return the product within 45 days from
          the time of receipt, for a full refund or exchange of the product you
          purchased. Within this time products may be returned, freight prepaid,
          and must be in their original packaging and in resalable condition.
        </p>
        <p className="text-black mb-3">
          Shipping errors, missing items or damages must be reported to TENAQUIP
          immediately. (Damages should be accompanied by a signed bill of lading
          acknowledging the damage.)
        </p>
        <p className="text-black mb-8">
          Items returned will be inspected for damage or misuse at which time
          they may be subject to restocking fees, other fees or refused, prior
          to the issuance of any credit.
        </p>
      </div>
    </div>
  );
};

export default SatisfactionGuarantee;

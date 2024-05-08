import Breadcrump from "@/components/bread-crump/Breadcrump";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Nmso = () => {
  return (
    <div className="relative">
      <div className="relative h-[70vh]">
        <Image
          src="https://www.tenaquip.com/tenaquip/images/banner/pages/nmso.jpg"
          alt="Careers"
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute inset-0 flex items-center px-16">
          <h1 className="text-white text-5xl font-semibold text-shadow-lg shadow-black">
            NMSO
          </h1>
        </div>
      </div>

      <div className="mt-16 px-16 w-[80vw]">
        <h2 className="text-gray-700 text-3xl mb-5">NMSO</h2>
        <p className="mb-3">
          NMSO Fire, Safety, and Rescue Equipment:{" "}
          <Link
            href="https://www.tenaquip.com/tenaquip/pdfs/E60HN-20FSRE013HN.pdf?1707920460"
            className="font-bold text-mainColor hover:underline"
          >
            E60HN-20FSRE/013/HN
          </Link>
        </p>
        <p className="mb-8">
          NMSO Hand Tools:{" "}
          <Link
            href="https://www.tenaquip.com/tenaquip/pdfs/E60HP-21TOOL_010_HP.pdf?1689600175"
            className="font-bold text-mainColor hover:underline"
          >
            {" "}
            E60HP-21TOOL/010/HP
          </Link>
        </p>
        <h2 className="text-gray-700 text-3xl mb-5">Line Cards</h2>
        <p className="mb-3">
          <Link
            href="https://www.tenaquip.com/tenaquip/pdfs/resources/6034_NMSO_LineCards_Safety_Eng.pdf?1677862260"
            className="font-bold text-mainColor hover:underline"
          >
            NMSO Fire, Safety, and Rescue Equipment
          </Link>
        </p>
        <p className="mb-8">
          <Link
            href="https://www.tenaquip.com/tenaquip/pdfs/resources/6034_NMSO_LineCards_Tools_Eng.pdf?1677870720"
            className="font-bold text-mainColor hover:underline"
          >
            {" "}
            NMSO Hand Tools
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Nmso;

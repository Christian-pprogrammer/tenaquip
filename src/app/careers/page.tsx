import Breadcrump from "@/components/Breadcrump/Breadcrump";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Careers = () => {
    const sampleRows = [
        { id: 1, jobTitle: "Software Engineer", city: "New York", employmentLevel: "Mid-Level" },
        { id: 2, jobTitle: "Data Analyst", city: "San Francisco", employmentLevel: "Entry-Level" },
        { id: 3, jobTitle: "Product Manager", city: "Seattle", employmentLevel: "Senior-Level" },
      ];
  return (
    <div className="relative">
      <div className="relative h-[70vh]">
        <Image
          src="https://www.tenaquip.com/tenaquip/images/banner/pages/careers.jpg"
          alt="Careers"
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute inset-0 flex items-center px-16">
          <h1 className="text-white text-5xl font-semibold text-shadow-lg shadow-black">CAREERS</h1>
        </div>
      </div>

      <div className="mt-16 px-16 w-[80vw]">
        <h2 className="text-mainColor text-3xl mb-5">Join our team!</h2>
        <p className="text-black mb-3">
          TENAQUIP is a 100% Canadian company named one of "Canada's Best Managed Companies" for 16 consecutive years. As a national leader in the Canadian industrial marketplace, TENAQUIP takes on the challenge of transforming the way people and organizations tackle their procurement processes by helping them achieve efficiencies, savings and gain better control over their total spend.
        </p>
        <p className="text-black mb-3">
        We’re committed to extending the same unmatched support to every employee. At TENAQUIP, you are empowered with the ability to influence the outcome, no matter what your job. You will help shape our future growth, not just follow it from the sidelines.
        </p>

        <Link
            href="/"
            className="font-bold text-mainColor hover:underline"
            >
            Please refer to our Confidentiality Privacy Policy for more information
        </Link>

        {/* table */}
        <div className="mt-16 w-full mb-8">
            <table className="w-full table-auto">
            <thead className="border-b-2">
                <tr>
                <th className="text-left pb-2">Job Title</th>
                <th className="text-left pb-2">City</th>
                <th className="text-left pb-2">Employment Level</th>
                </tr>
            </thead>
            <tbody>
                {sampleRows.map(row => (
                <tr key={row.id} className="border-b-2 h-16">
                    <td className="pb-2">
                    <Link href="/" className="text-mainColor underline font-bold">
                        {row.jobTitle}
                    </Link>
                    </td>
                    <td className="pb-2">{row.city}</td>
                    <td className="pb-2">{row.employmentLevel}</td>
                </tr>
                ))}
            </tbody>
            </table>
        </div>

      </div>
      
    </div>
  );
};

export default Careers;

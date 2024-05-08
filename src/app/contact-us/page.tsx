"use client";
import Breadcrump from "@/components/bread-crump/Breadcrump";
import Image from "next/image";
import Link from "next/link";
import { useState, ChangeEvent } from "react";

const Contact = () => {
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files ? event.target.files[0] : null;
    if (selectedFile && selectedFile.size <= 2 * 1024 * 1024) {
      // Check if file size is less than or equal to 2MB
      setFile(selectedFile);
    } else {
      alert("File size should be less than or equal to 2MB.");
    }
  };

  const handleRemoveFile = () => {
    setFile(null);
  };
  return (
    <div className="relative">
      <div className="relative h-[70vh]">
        <Image
          src="https://www.tenaquip.com/tenaquip/images/banner/pages/contact-us.jpg"
          alt="Careers"
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute inset-0 flex items-center px-16">
          <h1 className="text-white text-5xl font-semibold text-shadow-lg shadow-black">
            CONTACT US
          </h1>
        </div>
      </div>

      <div className="mt-16 px-16 w-[90vw] bg-gray-100 mx-auto py-4 mb-12">
        <h2 className="text-mainColor text-3xl mb-5 text-center">
          Product Inquiry, Questions & Comments
        </h2>
        <p className="text-black mb-3 text-center">
          Questions, comments, suggestions, ideas, complaints and compliments...
          anything. We believe that any information is good information.
          <br />
          So tell us what you think. One of our representatives is waiting to
          hear from you.
        </p>
      </div>

      <div className="flex px-16 space-x-48 mb-12">
        <div className="space-y-3">
          <h2 className="text-mainColor text-3xl mb-5">Contact Information</h2>
          <p>Customer Service: Monday – Friday: 7:30 a.m. – 5:00 p.m.</p>
          <p>
            Email:{" "}
            <Link href="/" className="font-bold text-mainColor hover:underline">
              info@tenaquip.com
            </Link>
          </p>
          <p>
            Phone:{" "}
            <Link href="/" className="font-bold text-mainColor hover:underline">
              514-457-7800
            </Link>
          </p>
          <p>Fax: 1 800 661-2212</p>
        </div>

        <div className="px-8">
          <form className="flex flex-col space-y-4">
            <div className="flex flex-col md:flex-row md:space-x-4">
              <div className="flex flex-col flex-1">
                <label htmlFor="company">Company</label>
                <input
                  type="text"
                  id="company"
                  className="border border-gray-300 rounded"
                />
              </div>
              <div className="flex flex-col flex-1">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  className="rounded border border-gray-300"
                />
              </div>
            </div>
            <div className="flex flex-col md:flex-row md:space-x-4">
              <div className="flex flex-col flex-1 w-[50%]">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  className="rounded border border-gray-300"
                />
              </div>
              <div className="flex flex-1 w-[50%] space-x-3">
                <div className="flex flex-col flex-1 w-[20%]">
                  <label htmlFor="phone">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    className="rounded border border-gray-300"
                  />
                </div>
                <div className="flex flex-col flex-1 w-[20%]">
                  <label htmlFor="extension">Extension</label>
                  <input
                    type="text"
                    id="extension"
                    className="rounded border border-gray-300"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <label htmlFor="province">Province</label>
              <input
                type="text"
                id="province"
                className="w-[48%] rounded border border-gray-300"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                rows={4}
                className="rounded border border-gray-300"
              />
            </div>
            <div className="border border-gray-300 p-4 rounded">
              <div className="border-2 border-dashed border-gray-300 p-4 text-center rounded h-48 flex items-center justify-center mb-3">
                <div className="text-lg text-gray-400">
                  Drag & drop files here …
                </div>
                <input type="file" className="hidden" />
              </div>
              <div className="flex flex-col md:flex-row md:items-center md:space-x-4">
                {file ? (
                  <div className="relative">
                    <button
                      className="absolute top-0 right-0 bg-gray-500 text-white px-2 py-1 rounded"
                      onClick={handleRemoveFile}
                    >
                      Remove
                    </button>
                    <div className="w-full md:w-auto border border-gray-300 p-4 rounded">
                      {file && (
                        <div className="flex items-center space-x-2">
                          <p>{file?.name}</p>
                          <img
                            src={URL.createObjectURL(file)}
                            className="h-10"
                          />
                        </div>
                      )}
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col md:flex-row md:items-center md:space-x-4">
                    <input
                      type="file"
                      id="file"
                      onChange={handleFileChange}
                      className="hidden"
                    />
                    <label
                      htmlFor="file"
                      className="w-full md:w-auto bg-blue-500 text-white py-2 px-4 rounded cursor-pointer text-center"
                    >
                      Browse ...
                    </label>
                  </div>
                )}
              </div>
            </div>
            <p className="mt-2">
              Please upload your files. Required file formats: .pdf, .png or
              .jpg
            </p>
            <p className="text-red-700 font-bold">
              Maximum upload file size: 2MB
            </p>
            <button
              type="submit"
              className="bg-mainColor text-white py-2 px-4 rounded w-48"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      <div className="flex justify-between px-20 py-16 bg-gray-100">
        <div className="w-[30vw]">
          <h2 className="text-mainColor text-3xl mb-5">
            International Requests
          </h2>
          <div>
            <p className="text-md mb-4">
              Not from Canada but still want to order from us? <br />
              We'll be glad to serve you.
            </p>
            <button
              type="submit"
              className="bg-mainColor text-white py-2 px-4 rounded w-[23vw]"
            >
              <Link href="/" className="font-bold text-white">
                Fill out this form to get in touch with us
              </Link>
            </button>
          </div>
        </div>
        <div className="w-[40vw]">
          <h2 className="text-mainColor text-3xl mb-5">Hunter Group</h2>
          <div>
            <p className="text-md mb-4">
              Having trouble sourcing a product? <br />
              Their job is to hunt down the product you are looking for. "If it
              exists, they'll find it."
            </p>
            <button
              type="submit"
              className="bg-mainColor text-white py-2 px-4 rounded w-[19vw]"
            >
              <Link href="/" className="font-bold text-white">
                Contact our Hunter Group
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

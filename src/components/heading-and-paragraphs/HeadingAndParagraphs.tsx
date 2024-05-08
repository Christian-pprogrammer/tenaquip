import Image from "next/image";
import React from "react";
import Link from "next/link";

export type HeadingAndParagraphsProps = {
  title?: string;
  paragraph?: string;
  buttonTitle?: string;
  buttonLink?: string;
};

const HeadingAndParagraphs = ({
  title,
  paragraph,
  buttonTitle,
  buttonLink,
}: HeadingAndParagraphsProps) => {
  return (
    <div className="mt-16 px-16 w-[80vw]">
      <h2 className="text-mainColor text-3xl mb-5">{title}</h2>
      <p className="text-black mb-3">{paragraph}</p>
      {buttonLink ? (
        <button
          type="button"
          className="bg-mainColor text-white py-2 px-4 rounded w-[23vw]"
        >
          <Link href={new URL(buttonLink)} className="font-bold text-white">
            {buttonTitle}
          </Link>
        </button>
      ) : null}
    </div>
  );
};

export default HeadingAndParagraphs;

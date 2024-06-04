import React from "react";
import Image from "next/image";
import Link from "next/link";

type Props = {
  name: string;
  handle: string;
  image: string;
};

const SliderElement = ({ name, handle, image }: Props) => {
  return (
    <Link href={handle} className="flex flex-col items-center gap-3">
      <Image src={image} alt="" width={100} height={100} style={{
        padding: '10px'
      }} />
      <span className="hover:underline text-sm text-mainColor">
        {name}
      </span>
    </Link>
  );
};

export default SliderElement;

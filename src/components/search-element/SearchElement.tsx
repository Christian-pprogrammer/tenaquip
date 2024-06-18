import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {
  product: {
    id: string,
    title: string,
    handle: string,
    thumbnail: string,
    objectID: string,

  }
}

const SearchElement = ({product}: Props) => {
  return (
    <Link
      href={`/product/${product?.handle}`}
      className="flex items-center w-[100%] gap-4 p-3"
      style={{
        border: "1px solid rgba(34,36,38,.1)",
      }}
    >
      <Image
        src={product?.thumbnail}
        alt=""
        width={60}
        height={60}
        objectFit="cover"
      />
      <p className="model text-Gray capitalize text-sm my-2 font-[700]">
        {product?.title}
      </p>
    </Link>
  );
}

export default SearchElement
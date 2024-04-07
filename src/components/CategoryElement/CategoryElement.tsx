import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {
  imageSrc: string,
  categoryName: string,
  handle: string
}

const CategoryElement = ({imageSrc, categoryName, handle}: Props) => {
  return (
    <div>
      <Link href={`/product-category/${handle}`} className='py-2 flex flex-col items-center justify-center gap-5 border-1 border-lightMain hover:border-mainColor text-center cursor-pointer'>
        <Image src={imageSrc} width={130} height={130} alt='' />
        <p className='text-mainColor'>{categoryName}</p>
      </Link>
    </div>
  )
}

export default CategoryElement
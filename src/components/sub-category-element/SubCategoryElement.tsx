import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {
  name: string,
  handle: string,
  image: string,
  numberOfProducts: number
}

const SubCategoryElement = ({name, handle, image, numberOfProducts}: Props) => {
  return (
    <Link href={handle} className='flex flex-col items-center gap-3'>
      <Image src={image} alt='' width={130} height={130} />
      <span className='hover:underline text-sm font-bold text-mainColor'>
        {name}({numberOfProducts})
      </span>
    </Link>
  )
}

export default SubCategoryElement
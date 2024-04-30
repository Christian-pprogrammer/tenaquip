import Image from 'next/image'
import React from 'react'

type Props = {
  product: Product
}

function Product({product}: Props) {
  return (
    <div className=''>
      <Image 
        src={product.thumbnail}
        alt={product.title}
        width={200}
        height={200}
        
      />
    </div>
  )
}

export default Product
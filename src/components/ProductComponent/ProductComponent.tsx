import Image from 'next/image'
import React from 'react'


type Props = {
  product: {
    imageUrl: string,
    manufacturer: string,
    productName: string,
    model: string,
    manufacturerModelNo: string,
    unitPrice: string,
    shipsIn: string,
    bonusNumber: number,
    bonus: number
  }
}

const ProductComponent = ({product: {imageUrl, model, productName, manufacturer, unitPrice, shipsIn}}: Props) => {
  return (
    <div className='border-[1px] border-lightMain rounded-sm p-4'>
      <div className='flex justify-center'>
        <Image src={imageUrl} alt='' width={200} height={100} objectFit='contain' />
      </div>

      <div>
        <p className="model text-Gray capitalize text-sm my-2">{manufacturer}</p>
        <p className='productName text-mainColor my-2 text-sm'>{productName}</p>

        <div className="my-3">
          <p className='text-Gray'>Model: <span className='text-Gray font-semibold'>{model}</span></p>
          <p className='text-Gray'>Manufacturer Model No: <span className='text-Gray'>{model}</span></p>
        </div>

        <p className='text-Gray my-2'>
          <span className='font-semibold'>${unitPrice}</span> / Each
        </p>

        <p className="text-Gray font-semibold my-2">Ships in {shipsIn} days</p>

        <p className="text-xs text-Gray">Buy More, Save More</p>
      </div>

      <div className="flex gap-1 my-2">
        <button className='border-[1px] border-lightMain px-5 py-2 text-Gray inline-block'>
          1
        </button>

        <button className='text-white bg-mainColor rounded-sm border-none outline-none block w-full'>Add to Cart</button>
      </div>
    </div>
  )
}

export default ProductComponent
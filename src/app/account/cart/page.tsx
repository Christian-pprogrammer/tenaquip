import Checkout from '@/components/Checkout/Checkout'
import React from 'react'

const Cart = () => {
  return (
    <div className='px-32'>
      <h1 className='text-2xl font-semibold text-Gray mt-4'>Cart</h1>
      <div>
        <hr className="my-[15px] w-[100%] border-t-[#ddd]" />
      </div>

      <div className='md:flex justify-between'>
        <h2 className='text-xl font-semibold text-Gray mt-4'>Your cart is currently empty</h2>
        <Checkout />
      </div>
    </div>
  )
}

export default Cart
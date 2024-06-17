"use client"

import { clearCart, setCart } from '@/Store/slices/cart';
import { setLoading } from '@/Store/slices/loading';
import { setShowModal } from '@/Store/slices/modal';
import Progress from '@/components/progress/Progress'
import COLORS from '@/config/colors';
import { useAppDispatch, useAppSelector } from '@/hooks';
import axios from 'axios';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import { FaTruck } from 'react-icons/fa';

const OrderPlaced = () => {

  const cart = useAppSelector(state => state.cart.cart);
  const [total, setTotal] = useState(0);
  const [quantity, setQuantity] = useState<any>({});
  const dispatch = useAppDispatch();


  useEffect(()=>{
    function update() {
      let currentQuantity: any;

      let currentTotal: number = 0;

      cart?.items?.map((item: any) => {
        currentQuantity = {
          ...currentQuantity,
          [item.id]: item.quantity
        }
        currentTotal = currentTotal + (item.total / 100);

      })

      setTotal(currentTotal)
      setQuantity(currentQuantity)
    }

    update();

  }, [cart])

  //complete cart
  useEffect(()=> {
    const completeCart = async () => {
      try{
        await axios.post(`${process.env.MEDUSA_BACKEND_API}/store/carts/${cart.id}/complete`, {})
        console.log("completed...")
        dispatch(clearCart())
      }catch(err) {
        console.log("my err...", err);
      }
      document.body.style.overflow = "auto";
    }
    completeCart();
  }, [])

  return (
    <div className='padding-horizontal py-6'>
      <h2 className="heading mb-4" style={{
        fontWeight: '600'
      }}>Checkout</h2>
      <Progress step={3} />
      <div className='flex'>
        <p className="text-[16px] text-Gray flex-1 text-center">Address</p>
        <p className="text-[16px] text-Gray flex-1 text-center">Review & Pay</p>
        <p className="text-[16px] text-Gray flex-1 text-center">Order Placed</p>
      </div>
      <hr className="my-[15px] w-[100%] border-t-[#ddd]" />
      <div className="md:flex gap-6">

        <div className='flex-1'>
          <h3 className='text-Gray text-lg font-semibold'>Thank you for your purchase!</h3>

          {/* {
            cart?.billing_address && (
              <>
                <h3 className='text-Gray text-lg font-semibold mt-4 mb-2'>Billing Address</h3>
                <p className='text-Gray text-sm'>Address: {cart?.billing_address?.address_1}</p>
                <p className='text-Gray text-sm'>Address 2: {cart?.billing_address?.address_2}</p>
                <p className='text-Gray text-sm'>Postal code: {cart?.billing_address?.postal_code}</p>
                <p className='text-Gray text-sm'>Phone: {cart?.billing_address?.phone}</p>
              </>
            )
          } */}

          <p className="text-Gray text-sm mt-5">
            For support, call <span className='font-bold'>250 103 134</span>
          </p>

        </div>
      </div>
    </div>
  )
}

export default OrderPlaced
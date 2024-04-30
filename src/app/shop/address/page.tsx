"use client"

import { setCart } from '@/Store/slices/cart'
import { setLoading } from '@/Store/slices/loading'
import { setShowModal } from '@/Store/slices/modal'
import Progress from '@/components/Progress/Progress'
import COLORS from '@/config/colors'
import { useAppDispatch, useAppSelector } from '@/hooks'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { FaTruck } from 'react-icons/fa'

const page = () => {

  const cart = useAppSelector((state) => state.cart.cart);
  const dispatch = useAppDispatch();

  const [total, setTotal] = useState(0);
  const [quantity, setQuantity] = useState<any>({});

  console.log("cart...", cart);

  useEffect(()=>{
    if(!cart) {
      dispatch(setShowModal(true))
      dispatch(setLoading(true))
  
      const fetchCart = async () => {
  
        document.body.style.overflow = "hidden"
  
        const cartId = localStorage.getItem("cart_id");
  
        let currentCart = null;
  
        if(!cartId) {
  
        }else{
          const id = localStorage.getItem("cart_id")
          const response = await fetch(`${process.env.MEDUSA_BACKEND_API}/store/carts/${id}`, {
              credentials: "include",
          })
          const resJson = await response.json();
          const {cart} = resJson;
          dispatch(setCart({cart: cart, cartType: 'unauthenticated_cart'}));
          console.log("my cart", cart);
          currentCart = cart;
          setCart(cart);   
        }
  
        let currentQuantity: any;
  
        let currentTotal: number = 0;
  
        currentCart?.items?.map((item: any) => {
          currentQuantity = {
            ...currentQuantity,
            [item.id]: item.quantity
          }
  
          currentTotal = currentTotal + (item.total / 100);
  
        })
  
        setTotal(currentTotal)
        setQuantity(currentQuantity)
  
        dispatch(setShowModal(false));
        dispatch(setLoading(false));
        document.body.style.overflow = "auto"
      }
  
      fetchCart()
    }
  }, [cart])

  return (
    <div className='px-32 py-6'>
      <h2 className="heading mb-4" style={{
        fontWeight: '600'
      }}>Checkout</h2>
      <Progress step={1} />

      <div className='flex'>
        <p className="text-[16px] text-Gray flex-1 text-center">Address</p>
        <p className="text-[16px] text-Gray flex-1 text-center">Review & Pay</p>
        <p className="text-[16px] text-Gray flex-1 text-center">Order Placed</p>
      </div>
      <hr className="my-[15px] w-[100%] border-t-[#ddd]" />

      <div className='md:flex'>
        <div className="flex-1">

        </div>
        <div className="flex-1">
          <div className='bg-lightMain border-[#ddd] border-[1px] p-[10px] flex flex-col gap-y-3'>
            <h3 className='text-Gray text-lg font-semibold'>Order Summary</h3>
            <div className='flex justify-between'>
              <p className='text-Gray text-sm'>Subtotal</p>
              <p className='text-Gray text-sm'>${total}</p>
            </div>
            <div className='leading-5 text-sm p-2'>
              <p className='text-mainColor'>
                <FaTruck color={COLORS.MAIN_COLOR} className='inline mr-2' size={20} />
                FREE delivery on all orders over <span className='font-[700]'>$99</span> when shipping to an <span className='font-[700] underline'>eligible location.</span>
              </p>
            </div>
          </div>

          <div className='bg-lightMain border-[#ddd] border-[1px] p-[10px] flex flex-col gap-y-3 mt-4'>
            <div>
              <h3 className='text-Gray text-lg font-semibold' style={{
                display: 'inline-block'
              }}>Cart Summary</h3> &nbsp; &nbsp;
              <button className='bg-transparent text-[13px] text-mainColor underline'>
                Edit
              </button>
            </div>
              {
                cart?.items?.map((item: any)=>{
                  let image:string = item.thumbnail;
                  if(image.includes("localhost")) {
                    image = image.replace("localhost", "127.0.0.1");
                  }

                  return (
                    <>
                      <hr className="w-[100%] border-t-[#ddd]" />
                      <div className='flex flex-1 py-2'>
                        <div>
                          <Image src={image} alt='' width={80} height={50} />
                        </div>
                        <div className='ml-3 flex flex-1 justify-between'>
                          <div>
                            <p className='text-sm leading-[1.25em] text-Gray font-[700] mb-2'>Brady</p>

                            <p className='text-sm leading-[1.25em] text-mainColor font-[700] mb-2'>
                              {item.title}
                            </p>
                            <ul>
                              {
                                [1,2,3,4].map((item)=>(
                                  <li className='text-[13px] text-Gray list-disc ml-4 leading-[19px]'>Material: Plastic</li>
                                ))
                              }
                            </ul>

                            <div className="mt-[5px]">
                              <p className='text-Gray text-[13px]'>Model: <span className='text-Gray font-semibold'>MDSDI</span></p>
                              <p className='text-Gray text-sm text-[13px]'>Manufacturer Model No: <span className='text-Gray'></span></p>
                            </div>
                          </div>

                          <div className='flex flex-col justify-between'>
                            <div className='flex flex-col gap-y-1 text-right'>
                              <div className='flex gap-x-14 items-end'>
                                <div>
                                  <p className='text-sm leading-[1.25em] text-Gray font-[700] mb-2'>Price: $30.57 <span className='font-[400]'> / Each</span></p>

                                  <p className='text-sm leading-[1.25em] text-Gray font-[700] mb-2'>Qty.: {quantity[item.id]}</p>

                                  <p className='text-sm leading-[1.25em] text-Gray font-[700] mb-2'>Subtotal: ${item.total/100}</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  )
                })
              }
          </div>
        </div>
      </div>
    </div>
  )
}

export default page
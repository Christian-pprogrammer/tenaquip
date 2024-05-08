'use client'
import { setCart, setRecentCartItem } from '@/Store/slices/cart';
import { setLoading } from '@/Store/slices/loading';
import { setModalContent, setShowModal } from '@/Store/slices/modal';
import product from '@/Store/slices/product';
import { useAppDispatch, useAppSelector } from '@/hooks';
import axios from 'axios';
import { cookies } from 'next/headers';
import Image from 'next/image'
import React from 'react'


type Props = {
  product: {
    id: string;
    title: string;
    handle: string;
    thumbnail?: string;
    variants: Array<{
      id: string,
      title: string,
      options: Array<{
        id: string,
        value: string
      }>,
      prices: Array<{
        id: string,
        currency_code: string,
        amount: string
      }>
    }>
  }
}

const ProductComponent = ({product: {id, title, handle, thumbnail, variants}}: Props) => {

  if(thumbnail?.startsWith("http://localhost")) {
    thumbnail = thumbnail.replace("localhost", "127.0.0.1");
  }

  if(!thumbnail) {
    thumbnail = ''
  }

  const dispatch = useAppDispatch();

  const user = useAppSelector(state => state.user.user)

  const cart = useAppSelector(state => state.cart.cart)
  

  const addOrSetCart = async () => {

    dispatch(setShowModal(true))
    document.body.style.overflow = "hidden"

    dispatch(setModalContent({
      title: "Just Added to Your Cart",
      content:"cart"
    }))

    // return;
    let userCart;
    let cartId;

    if(!localStorage.getItem("cart_id")) {
      //create a cart
      const response = await fetch(`${process.env.MEDUSA_BACKEND_API}/store/carts`, {
        method: "POST",
        credentials: "include",
      })
      console.log(response)
      const resJson = await response.json();
      const { cart } = resJson;
      localStorage.setItem("cart_id", cart.id);
      dispatch(setCart({cart: cart, cartType: 'unauthenticated_cart'}));
      userCart = cart;
      cartId = cart.id;
    }else {
      const id = localStorage.getItem("cart_id")
      const response = await fetch(`${process.env.MEDUSA_BACKEND_API}/store/carts/${id}`, {
          credentials: "include",
      })
      const resJson = await response.json();
      const {cart} = resJson;
      dispatch(setCart({cart: cart, cartType: 'unauthenticated_cart'}));
      userCart = cart
      cartId = cart.id;
    }   

    //add item to cart

    const response = await fetch(`${process.env.MEDUSA_BACKEND_API}/store/carts/${cartId}/line-items`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        variant_id: variants[0].id,
        quantity: 1,
      }),
    })

    const resJson = await response.json();

    console.log("resjson", resJson)
    
    dispatch(setCart({cart: resJson.cart, cartType: 'unauthenticated_cart'}));

    dispatch(setRecentCartItem({
      title,
      model: variants[0].options[0].value,
      thumbnail,
    }))

  }

  return (
    <div className='border-[1px] border-lightMain rounded-sm px-4 pt-5 flex flex-col justify-end'>
      <div className='flex justify-center'>
        <Image src={thumbnail} alt='' width={200} height={100} objectFit='contain' />
      </div>

      <div>
        <p className="model text-Gray capitalize text-sm my-2">Bradly</p>
        <p className='productName text-mainColor my-2 text-sm'>{title}</p>

        <div className="my-3">
          <p className='text-Gray'>Model: <span className='text-Gray font-semibold'>{variants[0].options[0].value}</span></p>
          <p className='text-Gray'>Manufacturer Model No: <span className='text-Gray'></span></p>
        </div>

        <p className='text-Gray my-2'>
          <span className='font-semibold'>$ {Number(variants[0].prices[0].amount) /100 }</span> / Each
        </p>

        <p className="text-Gray font-semibold my-2">Ships in 3-6 days</p>

        <p className="text-xs text-Gray">Buy More, Save More</p>
      </div>

      <div className="flex gap-1 my-2 mt-4">
        <button className='border-[1px] border-lightMain px-5 py-[6px] text-sm text-Gray inline-block'>
          1
        </button>

        <button 
          className='text-white bg-mainColor rounded-sm border-none outline-none block w-full text-sm'
          onClick={addOrSetCart}
        >Add to Cart</button>
      </div>
    </div>
  )
}

export default ProductComponent
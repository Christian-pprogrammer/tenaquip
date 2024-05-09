"use client"

import PaymentMethod from '@/components/payment-method/PaymentMethod'
import Progress from '@/components/progress/Progress'
import { useAppDispatch, useAppSelector } from '@/hooks'
import axios from 'axios'
import { Accordion } from 'flowbite-react'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { loadStripe } from "@stripe/stripe-js"
import { Elements } from "@stripe/react-stripe-js"
import Form from '@/components/payment-form/PaymentForm'
import { setCart } from '@/Store/slices/cart'

const stripePromise = loadStripe("pk_test_51JFxudBy7J9W92jTmsSCvnTdcD9NNq72zIyx7OYEWiHEoRvqP5Dmn6v80ZAqIQomXf45bcT58f2h024uQuzDR4UO00QUKCbj2a")


const Review = () => {

  const cart = useAppSelector(state => state.cart.cart);
  const [quantity, setQuantity] = useState<any>({});
  const [total, setTotal] = useState<any>();
  const [currentPaymentMethod, setCurrentPaymentMethod] = useState('Credit Card');
  const [clientSecret, setClientSecret] = useState()
  const dispatch = useAppDispatch();
  const [shippingOptions, setShippingOptions] = useState([]);


  const paymentMethods: Array<{title: string, images: Array<string>}> = [
    {
      title: 'Credit Card',
      images: [
        'https://www.tenaquip.com/images/icon/amex_en.png?1708981900',
        'https://www.tenaquip.com/images/icon/mc_en.png?1708981900',
        'https://www.tenaquip.com/images/icon/visa_en.png?1708981900'
      ]
    },
    {
      title: 'PayPal',
      images: [
        'https://www.tenaquip.com/images/icon/pp-logo-100px.png'
      ]
    }
  ]

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

  useEffect(()=>{

    //by default we create a stripe payment session

    async function createStripePaymentSession() {

      try{

        const payment_sessions = await axios.post(`${process.env.MEDUSA_BACKEND_API}/store/carts/${cart.id}/payment-sessions`, {})
        console.log(payment_sessions);

        //select stripe payment session
        const res = await axios.post(`${process.env.MEDUSA_BACKEND_API}/store/carts/${cart.id}/payment-session`, {
          provider_id: "stripe"
        })

        setClientSecret(res.data?.cart?.payment_session?.data?.client_secret)

        dispatch(setCart(res.data))

      }catch(err) {
        console.log(err);
      }
    }

    createStripePaymentSession();
  }, [])

  useEffect(()=>{
    //get shipping options
    const getShippingOptions = async () => {
      try{
        const res = await axios.get(`${process.env.MEDUSA_BACKEND_API}/store/shipping-options/${cart?.id}`)
        setShippingOptions(res?.data?.shipping_options)
        alert(res?.data?.shipping_options?.length)
        console.log(res)
      }catch(err) {
        console.log(err);
      }
    }

    getShippingOptions();

  }, [cart])

  return (
    <div className='px-32 py-6'>
        <h2 className="heading mb-4" style={{
            fontWeight: '600'
        }}>Checkout</h2>
        <Progress step={2} />
        <div className='flex'>
            <p className="text-[16px] text-Gray flex-1 text-center">Address</p>
            <p className="text-[16px] text-Gray flex-1 text-center">Review & Pay</p>
            <p className="text-[16px] text-Gray flex-1 text-center">Order Placed</p>
        </div>
        <hr className="my-[15px] w-[100%] border-t-[#ddd]" />

        <div className='md:flex gap-6'>


          <div className="flex-1">
            <div>
              <h3 className='text-Gray text-lg font-semibold'>Review & pay</h3>
              <h3 className='text-Gray text-lg font-semibold my-3'>Contact Information</h3>

              <p className='text-Gray my-[10px] text-[14px] leading-[1.5em]'>
                {
                  cart?.shipping_address?.first_name + " " + cart?.shipping_address?.last_name
                }
                <br />
                {
                  cart?.shipping_address?.phone 
                }
              </p>

              <button className='bg-transparent text-[13px] text-mainColor underline'>
                Modify
              </button>
            </div>

            <hr className="w-[100%] border-t-[#ddd] mt-6" />

            <div>
              <h3 className='text-Gray text-lg font-semibold my-3'>Delivery Address</h3>

              <p className='text-Gray my-[10px] text-[14px] leading-[1.5em]'>
                {
                  cart?.shipping_address?.address_1
                }
                <br />
                {
                  cart?.shipping_address?.address_2
                }
                <br />
                {
                  cart?.shipping_address?.postal_code
                }
              </p>

              <button className='bg-transparent text-[13px] text-mainColor underline'>
                Modify
              </button>
            </div>

            <hr className="w-[100%] border-t-[#ddd] mt-6" />
            
            <h3 className='text-Gray text-lg font-semibold my-3'>Shipping Method</h3>

            {
              shippingOptions.map((option) => (
                <p>option</p>
              ))
            }


            <hr className="w-[100%] border-t-[#ddd] mt-6" />

            <div className='payment'>

              <h3 className='text-Gray text-lg font-semibold my-3'>Payment Method</h3>

              <div className='grid md:grid-cols-3 sm:grid-cols-2 gap-2'>
                {
                  paymentMethods.map((method: any, i: number) => (
                    <PaymentMethod 
                      title={method.title}
                      images={method.images}
                      checked={currentPaymentMethod == method.title ? true:false}
                      onChange={(checked: boolean) => {
                        if(checked) {
                          setCurrentPaymentMethod(method.title)
                        }
                      }}
                    />
                  ))
                }
              </div>

              {
                currentPaymentMethod == 'Credit Card' && !!cart?.id && (
                  <div className='mt-4'>
                    {clientSecret && (
                      <Elements stripe={stripePromise} options={{
                        clientSecret,
                      }}>
                        <Form clientSecret={clientSecret} cartId={cart.id}  />
                      </Elements>
                    )}
                  </div>
                )
              }
              
            
            </div>
          </div>

          <div className="flex-1">

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
                cart?.items?.map((item: any) => {
                  let image: string = item.thumbnail;
                  if (image.includes("localhost")) {
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
                                [1, 2, 3, 4].map((item) => (
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

                                  <p className='text-sm leading-[1.25em] text-Gray font-[700] mb-2'>Subtotal: ${item.total / 100}</p>
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


            <div className='mt-4'>
              <Accordion className='rounded-none' collapseAll>
                <Accordion.Panel>
                  <Accordion.Title className='bg-lightMain w-full outline-none border-none focus:ring-0 py-2 px-[10px]'>
                    <h2 className='text-Gray text-lg font-semibold text-left'>Promo Code</h2>
                  </Accordion.Title>
                  <Accordion.Content className='px-[10px]'>
                    <p className='text-[12px] text-Gray font-normal'>If you have a promo code, enter it here.</p>
                    <div className="flex items-stretch gap-2">
                      <input type="text" className="custom-input" />
                      <button className="block bg-[#868688] text-white px-2 mb-[5px] rounded-sm cursor-pointer">
                        Apply
                      </button>
                    </div>

                  </Accordion.Content>
                </Accordion.Panel>
              </Accordion>
            </div>
          </div>

        </div>

        
    </div>
  )
}

export default Review
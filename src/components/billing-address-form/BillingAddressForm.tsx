"use client"
import { canadaProvinces, usStates } from '@/Store/hard-coded';
import { useAppSelector } from '@/hooks';
import React, { useState } from 'react'

type Props = {
  formik: any,
  useDeliveryAddress: boolean,
  setUseDeliveryAddress: React.Dispatch<React.SetStateAction<boolean>>
}

const BillingAddressForm = ({formik, useDeliveryAddress, setUseDeliveryAddress}: Props) => {

  const cart = useAppSelector((state)=>state.cart.cart);

  return (
    <div>
      <h3 className='text-Gray text-lg font-semibold my-3'>Billing Address</h3>
        <div className='leading-[2px] mb-6' onClick={()=>setUseDeliveryAddress(true)}>
          <label htmlFor="" className='custom-label gap-2' style={{
            display: 'flex',
            lineHeight: '12px'
          }}>
            {/* <input className='outline-none' type="radio" checked={checked} onChange={(e)=>{
              onChange(e.target.checked)
            }} /> */}
            
            {/* Something like radio */}
            <div className='border-mainColor border-1 rounded-full w-[15px] h-[15px] p-[2px] flex items-center justify-center bg-white'>
              <div className={`border-mainColor rounded-full w-full h-full flex-1 ${useDeliveryAddress ? 'bg-[#3273F6] ':''}`}>
                
              </div>
            </div>

            <span className='block'>
              Use my delivery address
            </span>
          </label> 
          <div className="custom-label ml-[23px] block leading-3">
            {cart.shipping_address.address_1} {` `} {cart.shipping_address.address_2} {` `} {cart.shipping_address.postal_code}
          </div>
        </div>

        <label onClick={()=>setUseDeliveryAddress(false)} className='custom-label flex gap-2 items-center' style={{
          display: 'flex'
        }}>
          {/* <input className='outline-none' type="radio" checked={checked} onChange={(e)=>{
            onChange(e.target.checked)
          }} /> */}
          
          {/* Something like radio */}
          <div className='border-mainColor border-1 rounded-full w-[15px] h-[15px] p-[2px] flex items-center justify-center bg-white'>
            <div className={`border-mainColor rounded-full w-full h-full flex-1 ${!useDeliveryAddress ? 'bg-[#3273F6] ':''}`}>
              
            </div>
          </div>

          <span className='block text-Gray'>
            Use a different billing address
          </span>
        </label> 

        {
          !useDeliveryAddress && (
            <div className="grid md:grid-cols-2 gap-x-6">
              <div className="company">
                <label htmlFor="company" className="custom-label">
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  className={`custom-input ${formik.touched.company &&
                    formik.errors.company &&
                    "error-input"
                    }`}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.company}
                />
                {formik.touched.company && formik.errors.company && (
                  <span className="error">{formik.errors.company}</span>
                )}
              </div>

              <div></div>
              <div className="address_1 col-span-2">
                <label htmlFor="address_1" className="custom-label">
                  Address
                </label>
                <input
                  type="text"
                  id="address_1"
                  name="address_1"
                  className={`custom-input ${formik.touched.address_1 && formik.errors.address_1 && "error-input"
                    }`}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.address_1}
                />
                {formik.touched.address_1 && formik.errors.address_1 && (
                  <span className="error">{formik.errors.address_1}</span>
                )}
              </div>

              <div className="address_2 col-span-2">
                <label htmlFor="address_2" className="custom-label">
                  Address 2
                </label>
                <input
                  type="text"
                  id="address_2"
                  name="address_2"
                  className={`custom-input ${formik.touched.address_2 && formik.errors.address_2 && "error-input"
                    }`}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.address_2}
                />
                {formik.touched.address_2 && formik.errors.address_2 && (
                  <span className="error">{formik.errors.address_2}</span>
                )}
              </div>

              <div className="city">
                <label htmlFor="city" className="custom-label">
                  City
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  className={`custom-input ${formik.touched.city && formik.errors.city && "error-input"
                    }`}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.city}
                />
                {formik.touched.city && formik.errors.city && (
                  <span className="error">{formik.errors.city}</span>
                )}
              </div>

              <div className="country_code">
                <label htmlFor="country_code" className="custom-label">
                  Country
                </label>
                <select
                  name="country_code"
                  id="country_code"
                  className={`custom-input ${formik.touched.country_code && formik.errors.country_code && "error-input"
                    }`}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.country_code}
                >
                  <option value="">Select Country</option>
                  <option value="Canada">Canada</option>
                  <option value="United States">United States</option>
                </select>
                {formik.touched.country_code && formik.errors.country_code && (
                  <span className="error">{formik.errors.country_code}</span>
                )}
              </div>

              <div className="province">
                <label htmlFor="province" className="custom-label">
                  Province/State
                </label>
                <select
                  name="province"
                  id="province"
                  className={`custom-input ${formik.touched.province && formik.errors.province && "error-input"
                    }`}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.province}
                >
                  <option value="">Select a Province/State</option>
                  {formik.values.country_code && formik.values.country_code == "Canada" && (
                    <>
                      {canadaProvinces.map((province, index) => (
                        <option value={province} key={index}>
                          {province}
                        </option>
                      ))}
                    </>
                  )}
                  {formik.values.country_code &&
                    formik.values.country_code == "United States" && (
                      <>
                        {usStates.map((state, index) => (
                          <option value={state} key={index}>
                            {state}
                          </option>
                        ))}
                      </>
                    )}
                </select>
                {formik.touched.province && formik.errors.province && (
                  <span className="error">{formik.errors.province}</span>
                )}
              </div>
              <div className="postal_code">
                <label htmlFor="postal_code" className="custom-label">
                  Postal/ZIP Code
                </label>
                <input
                  type="text"
                  id="postal_code"
                  name="postal_code"
                  className={`custom-input ${formik.touched.postal_code && formik.errors.postal_code && "error-input"
                    }`}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.postal_code}
                />
                {formik.touched.postal_code && formik.errors.postal_code && (
                  <span className="error">{formik.errors.postal_code}</span>
                )}
              </div>

            </div>
          )
        }
        <div>

        </div>
    </div>
  )
}

export default BillingAddressForm
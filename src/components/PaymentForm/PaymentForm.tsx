"use client"

import { useAppSelector } from "@/hooks"
import {
    PaymentElement,
    useElements,
    useStripe,
} from "@stripe/react-stripe-js"
import BillingAddressForm from "../BillingAddressForm/BillingAddressForm"
import { useFormik } from "formik"
import { addressSchema } from "@/util/addressSchema"
import { useState } from "react"


export default function Form({ clientSecret, cartId }: any) {
    const stripe: any = useStripe()
    const elements: any = useElements()

    const [useDeliveryAddress, setUseDeliveryAddress] = useState(true);
    const cart = useAppSelector((state)=>state.cart.cart);

    async function handlePayment(data: any) {
        const result = await stripe.confirmPayment({
            //`Elements` instance that was used to create the Payment Element
            elements,
            confirmParams: {
              return_url: "http://localhost:3000/success",
            },
          });

          console.log(result)
      
      
          if (result.error) {
            // Show error to your customer (for example, payment details incomplete)
            console.log(result.error.message);
          } else {
            // Your customer will be redirected to your `return_url`. For some payment
            // methods like iDEAL, your customer will be redirected to an intermediate
            // site first to authorize the payment, then redirected to the `return_url`.
          }
    }

    const initialAddressValues: AddressInterface = {
        first_name: cart?.shipping_address?.first_name,
        last_name: cart?.shipping_address?.last_name,
        phone: cart?.shipping_address?.phone,
        email: "",
        company: "",
        address_1: "",
        address_2: "",
        city: "",
        country_code: "",
        province: "",
        postal_code: ""
    };


    const formik = useFormik({
        initialValues: initialAddressValues,
        onSubmit: (data) => {
            handlePayment(data);
        },
        validationSchema: addressSchema,
        
    })

    return (
        <form>
            <PaymentElement />
            <BillingAddressForm
                formik={formik}
                setUseDeliveryAddress={setUseDeliveryAddress}
                useDeliveryAddress={useDeliveryAddress}
            />
            <button onClick={(e: any)=>{
                alert("helloworld")
                e.preventDefault()
                if(!useDeliveryAddress) {
                    alert("hellowolrdafsdsdaf")
                    formik.handleSubmit(e);                    
                }else{
                    alert("handle")
                    handlePayment({
                        first_name: cart?.shipping_address?.first_name,
                        last_name: cart?.shipping_address?.last_name,
                        phone: cart?.shipping_address?.phone,
                        email: cart?.shipping_address?.email,
                        company: cart?.shipping_address?.company,
                        address_1: cart?.shipping_address?.address_1,
                        address_2: cart?.shipping_address?.address_2,
                        city: cart?.shipping_address?.city,
                        country_code: cart?.shipping_address?.country_code,
                        province: cart?.shipping_address?.province,
                        postal_code: cart?.shipping_address?.postal_code
                    })
                }
            }} type="button" className="blue-btn mt-6">Complete Order</button>
        </form>
    )
};
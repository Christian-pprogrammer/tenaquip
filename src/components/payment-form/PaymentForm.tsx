"use client";

import { useAppDispatch, useAppSelector } from "@/hooks";
import {
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import BillingAddressForm from "../billing-address-form/BillingAddressForm";
import { useFormik } from "formik";
import { addressNoUserInfoSchema } from "@/util/addressSchema";
import { useState } from "react";
import axios from "axios";
import { setCart } from "@/Store/slices/cart";

export default function Form({ clientSecret, cartId }: any) {
  const stripe: any = useStripe();
  const elements: any = useElements();

  const [useDeliveryAddress, setUseDeliveryAddress] = useState(true);
  const cart = useAppSelector((state) => state.cart.cart);
  const dispatch = useAppDispatch();

  async function handlePayment(data: any) {
    //set the billing address
    try {
      const res = await axios.post(
        `${process.env.MEDUSA_BACKEND_API}/store/carts/${cart.id}`,
        {
          billing_address: {
            first_name: data.first_name,
            last_name: data.last_name,
            phone: data.phone,
            address_1: data.address_1,
            address_2: data.address_2,
            postal_code: data.postal_code,
            city: data.city,
            province: data.province,
          },
        }
      );

      dispatch(
        setCart({ cart: res?.data?.cart, cartType: "unauthenticated_cart" })
      );
      const result = await stripe.confirmPayment({
        //`Elements` instance that was used to create the Payment Element
        elements,
        confirmParams: {
          return_url: "http://localhost:3000/shop/order-placed",
        },
      });

      if (result.error) {
        console.log(result.error.message);
      } else {
        //complete cart and redirect user to success page
        // Your customer will be redirected to your `return_url`. For some payment
        // methods like iDEAL, your customer will be redirected to an intermediate
        // site first to authorize the payment, then redirected to the `return_url`.
      }
    } catch (err) {
      console.log(err);
    }
  }

  const initialAddressValues: AddressNoUserInfoInterface = {
    company: "",
    address_1: "",
    address_2: "",
    city: "",
    country_code: "",
    province: "",
    postal_code: "",
  };

  const formik = useFormik({
    initialValues: initialAddressValues,
    onSubmit: (data) => {
      handlePayment(data);
    },
    validationSchema: addressNoUserInfoSchema,
  });

  return (
    <form>
      <PaymentElement />
      <BillingAddressForm
        formik={formik}
        setUseDeliveryAddress={setUseDeliveryAddress}
        useDeliveryAddress={useDeliveryAddress}
      />
      <button
        onClick={(e: any) => {
          e.preventDefault();
          if (!useDeliveryAddress) {
            formik.handleSubmit(e);
          } else {
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
              postal_code: cart?.shipping_address?.postal_code,
            });
          }
        }}
        type="button"
        className="blue-btn mt-6"
      >
        Complete Order
      </button>
    </form>
  );
}

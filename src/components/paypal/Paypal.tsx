"use client";

import { useAppDispatch, useAppSelector } from "@/hooks";
import { addressNoUserInfoSchema, addressSchema } from "@/util/addressSchema";
import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
import axios from "axios";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import BillingAddressForm from "../billing-address-form/BillingAddressForm";
import { delay } from "@/util/delay";
import { setShowModal } from "@/Store/slices/modal";
import { setLoading } from "@/Store/slices/loading";

export function Paypal() {
  const [errorMessage, setErrorMessage] = useState("");
  const [processing, setProcessing] = useState(false);
  const cart = useAppSelector((state) => state.cart?.cart);
  const router = useRouter();
  const [billingAddress, setBillingAddress] = useState<any>(null);
  const [useDeliveryAddress, setUseDeliveryAddress] = useState(true);
  const dispatch = useAppDispatch();

  const handlePayment = (data: any, actions: any) => {
    return actions.order.capture().then(async function (details: any) {
      console.log(details)
      if (details.status !== "COMPLETED") {
        setErrorMessage(`An error occurred, status: ${details.status}`);
        setProcessing(false);
        return;
      }
      // update payment session

      const res = await axios.post(
        `${process.env.MEDUSA_BACKEND_API}/store/carts/${cart.id}/payment-sessions/paypal`,
        {
          data: {
            ...details
          },
        }
      );
      console.log(res.data);
      router.push("/shop/order-placed");
    })
  };

  const initialAddressValues: AddressInterface = {
    first_name: "firs",
    last_name: "dadf",
    phone: "dsaf",
    email: cart?.shipping_address?.email,
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
    onSubmit: async (data) => {
      dispatch(setShowModal(true));
      dispatch(setLoading(true));
      document.body.style.overflow = "hidden";

      await delay(1000);
      setBillingAddress({
        first_name: cart?.shipping_address?.first_name,
        last_name: cart?.shipping_address?.last_name,
        phone: cart?.shipping_address?.phone,
        address_1: data.address_1,
        address_2: data.address_2,
        postal_code: data.postal_code,
        city: data.city,
        province: data.province,
      });

      dispatch(setShowModal(false));
      dispatch(setLoading(false));
      document.body.style.overflow = "auto";

      // alert(data.address_1);
    },
    validationSchema: addressNoUserInfoSchema,
  });

  useEffect(() => {
    const updateShippingAddress = () => {
      if (useDeliveryAddress) {
        setTimeout(() => {
          setBillingAddress({
            first_name: cart?.shipping_address?.first_name,
            last_name: cart?.shipping_address?.last_name,
            phone: cart?.shipping_address?.phone,
            address_1: cart?.shipping_address?.address_1,
            address_2: cart?.shipping_address?.address_2,
            postal_code: cart?.shipping_address?.postal_code,
            city: cart?.shipping_address?.city,
            province: cart?.shipping_address?.province,
          });
        }, 1000);
      } else {
        setBillingAddress(null);
      }
    };
    updateShippingAddress();
  }, [useDeliveryAddress, cart?.shipping_address]);

  return (
    <div style={{ marginTop: "10px", marginLeft: "10px" }}>
      {/* check using billingAddress.first_name because I'm setting whole address at once, so
        if it's available, means all other values are available too
      */}
      <form>
        <BillingAddressForm
          formik={formik}
          setUseDeliveryAddress={setUseDeliveryAddress}
          useDeliveryAddress={useDeliveryAddress}
        />

        {!useDeliveryAddress && (
          <button
            className="blue-btn mt-3 mb-5"
            type="submit"
            onClick={(e: any) => {
              formik.handleSubmit(e);
            }}
          >
            Submit Address
          </button>
        )}
      </form>

      {cart !== undefined &&
        process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID &&
        billingAddress?.address_1 && (
          <PayPalScriptProvider
            options={{
              clientId: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID,
              currency: "USD",
              intent: "capture"
            }}
          >
            {errorMessage && (
              <span className="text-rose-500 mt-4">{errorMessage}</span>
            )}
            <PayPalButtons
              style={{ layout: "horizontal" }}
              createOrder={async () => cart.payment_session.data.id as string}
              onApprove={handlePayment}
              disabled={processing}
            />
          </PayPalScriptProvider>
        )}
    </div>
  );
}

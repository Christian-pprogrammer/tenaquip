"use client"

import { useAppSelector } from "@/hooks"
import {
    PaymentElement,
    useElements,
    useStripe,
} from "@stripe/react-stripe-js"
import BillingAddressForm from "../BillingAddressForm/BillingAddressForm"


export default function Form({ clientSecret, cartId }: any) {
    const stripe: any = useStripe()
    const elements: any = useElements()

    const cart = useAppSelector((state)=>state.cart.cart);

    async function handlePayment(e: any) {
        e.preventDefault()
        // return stripe.confirmCardPayment(clientSecret, {
        //     payment_method: {
        //       card: elements.getElement(CardElement),
        //       billing_details: {
        //         name,
        //         email,
        //         phone,
        //         address: {
        //           city,
        //           country,
        //           line1,
        //           line2,
        //           postal_code,
        //         },
        //       },
        //     },
        //   }).then(({ error, paymentIntent }: any) => {
        //     // TODO handle errors
        //     client.carts.complete(cartId).then(
        //       (resp) => console.log(resp)
        //     )
        //   })
    }

    return (
        <form>
            <PaymentElement />
            <BillingAddressForm />
            <button onClick={handlePayment} className="blue-btn mt-6">Complete Order</button>
        </form>
    )
};
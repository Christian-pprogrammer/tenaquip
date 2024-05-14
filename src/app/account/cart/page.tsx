"use client";

import Checkout from "@/components/checkout/Checkout";
import React, { ChangeEvent, useEffect, useState } from "react";
import { setCart as setAppCart } from "@/Store/slices/cart";
import { setShowModal } from "@/Store/slices/modal";
import { setLoading } from "@/Store/slices/loading";
import Image from "next/image";
import { useAppDispatch, useAppSelector } from "@/hooks";
import axios from "axios";
import { getError } from "@/util/getError";

const Cart = () => {
  const [cart, setCart] = useState<any>();

  const [quantity, setQuantity] = useState<any>({});

  const [total, setTotal] = useState(0);

  const dispatch = useAppDispatch();

  const user = useAppSelector((state) => state.user?.user);

  const appCart = useAppSelector((state) => state.cart?.cart);

  useEffect(() => {
    dispatch(setShowModal(true));
    dispatch(setLoading(true));

    const fetchCart = async () => {
      document.body.style.overflow = "hidden";

      const cartId = localStorage.getItem("cart_id");

      let currentCart = null;

      if (cartId) {
        const id = localStorage.getItem("cart_id");
        try {
          const response = await axios.get(
            `${process.env.MEDUSA_BACKEND_API}/store/carts/${id}`
          );
          const resJson = await response?.data;
          let cartType = user ? "authenticated_cart" : "unauthenticated_cart";
          dispatch(setAppCart({ cart: resJson?.cart, cartType }));
          currentCart = resJson?.cart;
          setCart(resJson?.cart);
        } catch (err) {
          //if we can't fetch, use the current cart in the store
          let cartType = user ? "authenticated_cart" : "unauthenticated_cart";
          dispatch(setAppCart({ cart: appCart, cartType }));
          currentCart = cart;
          setCart(appCart);
        }
      }

      let currentQuantity: any;

      let currentTotal: number = 0;

      currentCart?.items?.map((item: any) => {
        currentQuantity = {
          ...currentQuantity,
          [item.id]: item.quantity,
        };

        currentTotal = currentTotal + item.total / 100;
      });

      setTotal(currentTotal);
      setQuantity(currentQuantity);

      dispatch(setShowModal(false));
      dispatch(setLoading(false));
      document.body.style.overflow = "auto";
    };

    fetchCart();
  }, []);

  const updateLineItem = async (e: any, itemId: string) => {
    dispatch(setShowModal(true));
    dispatch(setLoading(true));
    document.body.style.overflow = "hidden";
    let currentCart = null;

    const newQuantity = quantity[itemId];

    const cartId = cart?.id ? cart.id : localStorage.getItem("cart_id");

    fetch(
      `${process.env.MEDUSA_BACKEND_API}/store/carts/${cartId}/line-items/${itemId}`,
      {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          quantity: Number(newQuantity),
        }),
      }
    )
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then(({ cart }) => {
        let cartType = user ? "authenticated_cart" : "unauthenticated_cart";
        dispatch(setAppCart({ cart: cart, cartType }));
        setCart(cart);
        currentCart = cart;
        let currentQuantity: any;

        let currentTotal: number = 0;

        currentCart?.items?.map((item: any) => {
          currentQuantity = {
            ...currentQuantity,
            [item.id]: item.quantity,
          };

          currentTotal = currentTotal + item.total / 100;
        });

        setTotal(currentTotal);
        setQuantity(currentQuantity);
      })
      .catch((err: any) => {
        alert(getError(err));
      });

    dispatch(setShowModal(false));
    dispatch(setLoading(false));
    document.body.style.overflow = "auto";
  };

  const deleteCartItem = async (e: any, itemId: string) => {
    dispatch(setShowModal(true));
    dispatch(setLoading(true));
    document.body.style.overflow = "hidden";
    let currentCart = null;

    const newQuantity = quantity[itemId];

    const cartId = cart?.id ? cart.id : localStorage.getItem("cart_id");
    fetch(
      `${process.env.MEDUSA_BACKEND_API}/store/carts/${cartId}/line-items/${itemId}`,
      {
        method: "DELETE",
        credentials: "include",
      }
    )
      .then((response) => response.json())
      .then(({ cart }) => {
        dispatch(setAppCart({ cart: cart, cartType: "unauthenticated_cart" }));
        setCart(cart);
        currentCart = cart;
        let currentQuantity: any;

        let currentTotal: number = 0;

        currentCart?.items?.map((item: any) => {
          currentQuantity = {
            ...currentQuantity,
            [item.id]: item.quantity,
          };

          currentTotal = currentTotal + item.total / 100;
        });

        setTotal(currentTotal);
        setQuantity(currentQuantity);
      })
      .catch((err: any) => {
        alert(getError(err));
      });

    dispatch(setShowModal(false));
    dispatch(setLoading(false));
    document.body.style.overflow = "auto";
  };

  return (
    <div className="px-32 pb-5">
      <h1 className="text-2xl font-semibold text-Gray mt-4">Cart</h1>
      <div>
        <hr className="my-[15px] w-[100%] border-t-[#ddd]" />
      </div>

      <div className="lg:flex justify-between relative gap-3">
        <div className="flex-1">
          {cart?.items ? (
            <div>
              {cart?.items?.map((item: any) => {
                let image: string = item.thumbnail;
                if (image.includes("localhost")) {
                  image = image.replace("localhost", "127.0.0.1");
                }

                return (
                  <>
                    <div className="flex flex-1 py-2">
                      <div>
                        <Image src={image} alt="" width={120} height={60} />
                      </div>
                      <div className="ml-3 flex flex-1 justify-between">
                        <div>
                          <p className="text-sm leading-[1.25em] text-Gray font-[700] mb-2">
                            Brady
                          </p>

                          <p className="text-sm leading-[1.25em] text-mainColor font-[700] mb-2">
                            {item.title}
                          </p>
                          <ul>
                            {[1, 2, 3, 4].map((item) => (
                              <li className="text-[13px] text-Gray list-disc ml-4 leading-[19px]">
                                Material: Plastic
                              </li>
                            ))}
                          </ul>

                          <div className="mt-[5px]">
                            <p className="text-Gray text-[13px]">
                              Model:{" "}
                              <span className="text-Gray font-semibold">
                                MDSDI
                              </span>
                            </p>
                            <p className="text-Gray text-sm text-[13px]">
                              Manufacturer Model No:{" "}
                              <span className="text-Gray"></span>
                            </p>
                          </div>
                        </div>

                        <div className="flex flex-col justify-between">
                          <div className="flex flex-col gap-y-1 text-right">
                            <div className="flex gap-x-14 items-end">
                              <div className="flex items-center">
                                <div className="flex items-center">
                                  <p className="text-sm leading-[1.25em] text-Gray font-[700] mb-2">
                                    Qty.:
                                  </p>
                                  <input
                                    type="text"
                                    className="border-1 text-[12px] text-center w-[45px] h-[35px] outline-none rounded border-[#ddd] mx-2 qty-input"
                                    style={{
                                      outline: "none",
                                      padding: 0,
                                    }}
                                    value={quantity[item.id]}
                                    onChange={(
                                      e: ChangeEvent<HTMLInputElement>
                                    ) => {
                                      setQuantity({
                                        ...quantity,
                                        [item.id]: e.target.value,
                                      });
                                    }}
                                    // onChange={()=>}
                                  />

                                  <button
                                    className="bg-transparent text-[13px] text-mainColor"
                                    onClick={(e: any) =>
                                      updateLineItem(e, item.id)
                                    }
                                  >
                                    Update
                                  </button>
                                </div>
                              </div>
                              <div>
                                <p className="text-sm leading-[1.25em] text-Gray font-[700] mb-2">
                                  Price: $30.57{" "}
                                  <span className="font-[400]"> / Each</span>
                                </p>

                                <p className="text-sm leading-[1.25em] text-Gray font-[700] mb-2">
                                  Ships in 7-10 days
                                </p>

                                <p className="text-sm leading-[1.25em] text-Gray font-[700] mb-2">
                                  Subtotal: ${item.total / 100}
                                </p>
                              </div>
                            </div>
                          </div>
                          <button
                            className="underline bg-transparent text-[13px] text-mainColor float-right bg-black text-right"
                            onClick={(e: any) => deleteCartItem(e, item?.id)}
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                    <hr className="my-[15px] w-[100%] border-t-[#ddd]" />
                  </>
                );
              })}
            </div>
          ) : (
            <h2 className="text-xl font-semibold text-Gray mt-4">
              Your cart is currently empty
            </h2>
          )}
        </div>

        <Checkout total={total} />
      </div>
    </div>
  );
};

export default Cart;

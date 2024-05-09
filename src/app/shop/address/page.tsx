"use client";

import { canadaProvinces, usStates } from "@/Store/hard-coded";
import { setCart } from "@/Store/slices/cart";
import { setLoading } from "@/Store/slices/loading";
import { setShowModal } from "@/Store/slices/modal";
import Progress from "@/components/progress/Progress";
import COLORS from "@/config/colors";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { addressSchema } from "@/util/addressSchema";
import axios from "axios";
import { Accordion } from "flowbite-react";
import { useFormik } from "formik";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FaTruck } from "react-icons/fa";

const page = () => {
  const cart = useAppSelector((state) => state.cart.cart);
  const dispatch = useAppDispatch();

  const [total, setTotal] = useState(0);
  const [quantity, setQuantity] = useState<any>({});

  const router = useRouter();

  const initialValues: AddressInterface = {
    first_name: "",
    last_name: "",
    phone: "",
    email: "",
    company: "",
    address_1: "",
    address_2: "",
    city: "",
    country_code: "",
    province: "",
    postal_code: "",
  };

  const formik = useFormik({
    initialValues,
    onSubmit: async (data) => {
      dispatch(setLoading(true));
      dispatch(setShowModal(true));
      document.body.style.overflow = "hidden";

      const cartId = cart.id ? cart.id : localStorage.getItem("cart_id");

      try {
        //associate guest customer with the cart
        await axios.post(
          `${process.env.MEDUSA_BACKEND_API}/store/carts/${cartId}`,
          {
            email: data.email,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        const res: any = await axios.post(
          `${process.env.MEDUSA_BACKEND_API}/store/carts/${cartId}`,
          {
            shipping_address: {
              address_1: data.address_1,
              address_2: data.address_2,
              city: data.city,
              company: data.company,
              first_name: data.first_name,
              last_name: data.last_name,
              phone: data.phone,
              postal_code: data.postal_code,
              province: data.province,
            },
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        const { cart } = res;
        dispatch(setCart({ cart: cart, cartType: "unauthenticated_cart" }));
        setCart(cart);

        console.log(".cart", cart);

        router.push("/shop/review");
      } catch (err: any) {
        console.log("there was ane rroor...");
        console.log(err);
        if (err?.response?.data?.type === "duplicate_error") {
          alert("Email already exist");
        }
      }
      dispatch(setLoading(false));
      dispatch(setShowModal(false));
      document.body.style.overflow = "auto";
    },
    validationSchema: addressSchema,
  });

  useEffect(() => {
    if (!cart) {
      dispatch(setShowModal(true));
      dispatch(setLoading(true));

      const fetchCart = async () => {
        document.body.style.overflow = "hidden";

        const cartId = localStorage.getItem("cart_id");

        let currentCart = null;

        if (!cartId) {
        } else {
          const id = localStorage.getItem("cart_id");
          const response = await fetch(
            `${process.env.MEDUSA_BACKEND_API}/store/carts/${id}`,
            {
              credentials: "include",
            }
          );
          const resJson = await response.json();
          const { cart } = resJson;
          dispatch(setCart({ cart: cart, cartType: "unauthenticated_cart" }));
          console.log("my cart", cart);
          currentCart = cart;
          setCart(cart);
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
    }
  }, [cart]);

  return (
    <div className="px-32 py-6">
      <h2
        className="heading mb-4"
        style={{
          fontWeight: "600",
        }}
      >
        Checkout
      </h2>
      <Progress step={1} />

      <div className="flex">
        <p className="text-[16px] text-Gray flex-1 text-center">Address</p>
        <p className="text-[16px] text-Gray flex-1 text-center">Review & Pay</p>
        <p className="text-[16px] text-Gray flex-1 text-center">Order Placed</p>
      </div>
      <hr className="my-[15px] w-[100%] border-t-[#ddd]" />

      <div className="md:flex gap-6">
        <div className="flex-1">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              formik.handleSubmit(e);
            }}
          >
            <h3 className="text-Gray text-lg font-semibold">
              Your Contact information
            </h3>

            <div className="grid md:grid-cols-2 gap-x-6">
              <div className="first_name">
                <label htmlFor="first_name" className="custom-label">
                  First Name
                </label>
                <input
                  type="text"
                  id="first_name"
                  name="first_name"
                  className={`custom-input ${
                    formik.touched.first_name &&
                    formik.errors.first_name &&
                    "error-input"
                  }`}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.first_name}
                />
                {formik.touched.first_name && formik.errors.first_name && (
                  <span className="error">{formik.errors.first_name}</span>
                )}
              </div>
              <div className="last_name">
                <label htmlFor="last_name" className="custom-label">
                  Last Name
                </label>
                <input
                  type="text"
                  id="last_name"
                  name="last_name"
                  className={`custom-input ${
                    formik.touched.last_name &&
                    formik.errors.last_name &&
                    "error-input"
                  }`}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.last_name}
                />
                {formik.touched.last_name && formik.errors.last_name && (
                  <span className="error">{formik.errors.last_name}</span>
                )}
              </div>

              <div className="phone">
                <label htmlFor="phone" className="custom-label">
                  Phone
                </label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  className={`custom-input ${
                    formik.touched.phone && formik.errors.phone && "error-input"
                  }`}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.phone}
                />
                {formik.touched.phone && formik.errors.phone && (
                  <span className="error">{formik.errors.phone}</span>
                )}
              </div>
              <div className="email">
                <label htmlFor="email" className="custom-label">
                  Email
                </label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  className={`custom-input ${
                    formik.touched.email && formik.errors.email && "error-input"
                  }`}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.email}
                />
                {formik.touched.email && formik.errors.email && (
                  <span className="error">{formik.errors.email}</span>
                )}
              </div>
            </div>

            <hr className="w-[100%] border-t-[#ddd] my-6" />

            <h3 className="text-Gray text-lg font-semibold">
              Delivery Address
            </h3>

            <Link
              href="#"
              className="text-[13px] text-mainColor hover:underline"
            >
              Not located in Canada or USA? Click here.
            </Link>

            <div className="grid md:grid-cols-2 gap-x-6">
              <div className="company">
                <label htmlFor="company" className="custom-label">
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  className={`custom-input ${
                    formik.touched.company &&
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
                  className={`custom-input ${
                    formik.touched.address_1 &&
                    formik.errors.address_1 &&
                    "error-input"
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
                  className={`custom-input ${
                    formik.touched.address_2 &&
                    formik.errors.address_2 &&
                    "error-input"
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
                  className={`custom-input ${
                    formik.touched.city && formik.errors.city && "error-input"
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
                  className={`custom-input ${
                    formik.touched.country_code &&
                    formik.errors.country_code &&
                    "error-input"
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
                  className={`custom-input ${
                    formik.touched.province &&
                    formik.errors.province &&
                    "error-input"
                  }`}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.province}
                >
                  <option value="">Select a Province/State</option>
                  {formik.values.country_code &&
                    formik.values.country_code == "Canada" && (
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
                  className={`custom-input ${
                    formik.touched.postal_code &&
                    formik.errors.postal_code &&
                    "error-input"
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

            <div className="col-span-2 mt-4">
              <button
                type="submit"
                className="inline-block bg-mainColor text-white text-center w-[100%] rounded-sm text-sm p-4"
              >
                Next
              </button>
            </div>
          </form>
        </div>
        <div className="flex-1">
          <div className="bg-lightMain border-[#ddd] border-[1px] p-[10px] flex flex-col gap-y-3">
            <h3 className="text-Gray text-lg font-semibold">Order Summary</h3>
            <div className="flex justify-between">
              <p className="text-Gray text-sm">Subtotal</p>
              <p className="text-Gray text-sm">${total}</p>
            </div>
            <div className="leading-5 text-sm p-2">
              <p className="text-mainColor">
                <FaTruck
                  color={COLORS.MAIN_COLOR}
                  className="inline mr-2"
                  size={20}
                />
                FREE delivery on all orders over{" "}
                <span className="font-[700]">$99</span> when shipping to an{" "}
                <span className="font-[700] underline">eligible location.</span>
              </p>
            </div>
          </div>

          <div className="bg-lightMain border-[#ddd] border-[1px] p-[10px] flex flex-col gap-y-3 mt-4">
            <div>
              <h3
                className="text-Gray text-lg font-semibold"
                style={{
                  display: "inline-block",
                }}
              >
                Cart Summary
              </h3>{" "}
              &nbsp; &nbsp;
              <button className="bg-transparent text-[13px] text-mainColor underline">
                Edit
              </button>
            </div>
            {cart?.items?.map((item: any) => {
              let image: string = item.thumbnail;
              if (image.includes("localhost")) {
                image = image.replace("localhost", "127.0.0.1");
              }

              return (
                <>
                  <hr className="w-[100%] border-t-[#ddd]" />
                  <div className="flex flex-1 py-2">
                    <div>
                      <Image src={image} alt="" width={80} height={50} />
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
                            <div>
                              <p className="text-sm leading-[1.25em] text-Gray font-[700] mb-2">
                                Price: $30.57{" "}
                                <span className="font-[400]"> / Each</span>
                              </p>

                              <p className="text-sm leading-[1.25em] text-Gray font-[700] mb-2">
                                Qty.: {quantity[item.id]}
                              </p>

                              <p className="text-sm leading-[1.25em] text-Gray font-[700] mb-2">
                                Subtotal: ${item.total / 100}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>

          <div className="mt-4">
            <Accordion className="rounded-none" collapseAll>
              <Accordion.Panel>
                <Accordion.Title className="bg-lightMain w-full outline-none border-none focus:ring-0 py-2 px-[10px]">
                  <h2 className="text-Gray text-lg font-semibold text-left">
                    Promo Code
                  </h2>
                </Accordion.Title>
                <Accordion.Content className="px-[10px]">
                  <p className="text-[12px] text-Gray font-normal">
                    If you have a promo code, enter it here.
                  </p>
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
  );
};

export default page;

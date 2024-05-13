"use client";

import cart, { setCart } from "@/Store/slices/cart";
import { setLoading } from "@/Store/slices/loading";
import { setModalContent, setShowModal } from "@/Store/slices/modal";
import { setToken, setUser } from "@/Store/slices/user";
import COLORS from "@/config/colors";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { loginSchema } from "@/util/loginSchema";
import axios from "axios";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import jwt from 'jsonwebtoken';
import { getError } from "@/util/getError";

const LoginForm = () => {
  const dispatch = useAppDispatch();

  const cart = useAppSelector(state => state.cart?.cart);

  const router = useRouter();

  const [error, setError] = useState('');

  const initialValues: LoginInterface = {
    email: "",
    password: "",
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: loginSchema,
    onSubmit: async (data) => {
      dispatch(setLoading(true));
      try {
        const res = await axios.post(
          `${process.env.MEDUSA_BACKEND_API}/store/auth/token`,
          data
        );
    
        const customerRes = await axios.get(
          `${process.env.MEDUSA_BACKEND_API}/store/customers/me`,
          {
            headers: {
              Authorization: `Bearer ${res.data.access_token}`
            }
          }
        )

        const customer = customerRes?.data?.customer;

        dispatch(setToken(res.data.access_token));
        dispatch(setUser(customer));
        dispatch(setModalContent({
          title: '',
          content: 'empty'
        }))      
        document.body.style.overflow = "auto"
        setError('')
        //set user cookie

        //if we already have cart, associate it with current logged in user
        if(cart?.id) {
          const res = await axios.post(`${process.env.MEDUSA_BACKEND_API}/store/carts/${cart.id}`, {
            customer_id: customer?.id
          })
          dispatch(setCart({cart: res.data?.cart, cartType: 'authenticated_cart'}))
        }
        router.push("/");
      } catch (err: any) {
        setError(getError(err));
      }

      dispatch(setShowModal(false))
      dispatch(setLoading(false));
    },
  });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        formik.handleSubmit(e);
      }}
    >
      {
        error && (
          <div className="text-[#a94442] bg-[#f2dede] border-1 border-[#ebccd1] my-[10px] p-[15px] rounded-[4px]">
            {error}
          </div>
        )
      }
      <div className="email">
        <label htmlFor="email" className="custom-label">
          Email
        </label>
        <input
          type="text"
          id="email"
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

      <div className="password">
        <label htmlFor="password" className="custom-label">
          Password
        </label>
        <input
          type="password"
          id="password"
          className={`custom-input ${
            formik.touched.password && formik.errors.password && "error-input"
          }`}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        {formik.touched.password && formik.errors.password && (
          <span className="error">{formik.errors.password}</span>
        )}
      </div>

      <div>
        <button
          className="custom-label"
          style={{
            width: "fit-content",
            cursor: "pointer",
          }}
        >
          Forgot your passoword?
        </button>
      </div>

      <div className="mt-4">
        <button
          type="submit"
          className="custom-btn text-white mt-2 font-semibold text-lg"
          style={{
            width: "100%",
            backgroundColor: COLORS.MAIN_COLOR,
            color: "white",
            borderRadius: "6px",
          }}
        >
          Sign In
        </button>
      </div>
      <div className="mt-3">
        <p className="custom-label text-center block">
          Don't have a login?{" "}
          <span
            className="cursor-pointer underline"
            style={{
              color: COLORS.MAIN_COLOR,
            }}
            onClick={()=>{
              router.push('/account/register')
              dispatch(setShowModal(false));
              setModalContent({
                title: '',
                content: 'empty'
              })
            }}
          >
            Register here.
          </span>
        </p>
      </div>
    </form>
  );
};

export default LoginForm;

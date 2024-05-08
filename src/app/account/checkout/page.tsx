"use client";

import COLORS from "@/config/colors";
import React from "react";
import { useFormik } from "formik";
import { useAppDispatch } from "@/hooks";
import { useRouter } from "next/navigation";
import { loginSchema } from "@/util/loginSchema";
import { setLoading } from "@/Store/slices/loading";
import { setModalContent, setShowModal } from "@/Store/slices/modal";
import axios from "axios";
import { setUser } from "@/Store/slices/user";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  const dispatch = useAppDispatch();

  const router = useRouter();

  const initialValues: LoginInterface = {
    email: "",
    password: "",
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: loginSchema,
    onSubmit: async (data) => {
      dispatch(setShowModal(true));
      dispatch(setLoading(true));
      try {
        const res = await axios.post(
          `${process.env.MEDUSA_BACKEND_API}/store/auth`,
          data
        );
        console.log(res);
        dispatch(setUser(res?.data?.customer));
        dispatch(setShowModal(false));
        dispatch(setLoading(false));
        dispatch(
          setModalContent({
            title: "",
            content: "empty",
          })
        );
        document.body.style.overflow = "auto";

        //set user cookie
        router.push("/");
      } catch (err: any) {
        console.log(err);
      }

      dispatch(setShowModal(false));
      dispatch(setLoading(false));
      dispatch(
        setModalContent({
          title: "",
          content: "empty",
        })
      );
      document.body.style.overflow = "auto";
    },
  });

  return (
    <div className="flex justify-between px-32 py-10">
      <div className="flex flex-col gap-4">
        <h2 className="heading">Guest Checkout</h2>
        <p className="custom-text">Checkout now and register later</p>
        <Link
          href="/shop/address"
          className="custom-btn no-underline"
          style={{
            backgroundColor: COLORS.MAIN_COLOR,
            color: "#fff",
            border: "none",
          }}
        >
          Checkout as Guest
        </Link>
        <div className="flex gap-1">
          <button className="bg-white rounded rounded-xs border-none outline-none py-[2px] text-xs">
            <img
              src="https://www.tenaquip.com/images/icon/amex_en.png?1708981900"
              alt=""
              style={{ maxWidth: "40px" }}
            />
          </button>
          <button className="bg-white rounded rounded-xs border-none outline-none px-[10px] text-xs">
            <img
              src="https://www.tenaquip.com/images/icon/mc_en.png?1708981900"
              alt=""
              style={{ maxWidth: "50px" }}
            />
          </button>
          <button className="bg-white rounded rounded-xs border-none outline-none px-[10px] text-xs">
            <Image
              src="https://www.tenaquip.com/images/icon/visa_en.png?1708981900"
              alt=""
              width={60}
              height={60}
            />
            {/* <img 
              src="https://www.tenaquip.com/images/icon/visa_en.png?1708981900"
              alt=''
              style={{maxWidth: "60px"}}
            /> */}
          </button>
          <button className="bg-white rounded rounded-xs border-none outline-none px-[10px] text-xs">
            <Image
              src="https://www.tenaquip.com/images/icon/pp-logo-100px.png"
              alt=""
              width={80}
              height={80}
              objectFit="cover"
            />
          </button>
          <button className="bg-white rounded rounded-xs border-none outline-none px-[10px] text-xs">
            <img
              src="https://www.tenaquip.com/images/icon/affirm_black_logo-transparent_bg.svg?1700507594"
              alt=""
              style={{ maxWidth: "60px" }}
            />
          </button>
        </div>
      </div>

      <div className="login-form">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            formik.handleSubmit(e);
          }}
        >
          <h2 className="heading">Sign in</h2>
          <p className="custom-text my-4">
            Sign in for fast checkout, shopping lists, order history, and more!
          </p>
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
                formik.touched.password &&
                formik.errors.password &&
                "error-input"
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
                color: COLORS.MAIN_COLOR,
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
                backgroundColor: COLORS.MAIN_COLOR,
                color: "white",
                borderRadius: "6px",
                border: "none",
                padding: "12px 20px",
              }}
            >
              Sign In
            </button>
          </div>
          <div className="mt-3">
            <p className="custom-label block">
              Don't have a login?{" "}
              <span
                className="cursor-pointer underline"
                style={{
                  color: COLORS.MAIN_COLOR,
                }}
              >
                Register here.
              </span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default page;
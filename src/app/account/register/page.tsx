"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useFormik } from "formik";
import { registerSchema } from "@/util/registerSchema";
import { canadaProvinces, usStates } from "@/Store/hard-coded";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { setLoading } from "@/Store/slices/loading";
import { setToken, setUser } from "@/Store/slices/user";
import { useRouter } from "next/navigation";
import { setShowModal } from "@/Store/slices/modal";
import { getError } from "@/util/getError";

const Register = () => {
  const dispatch = useAppDispatch();

  const router = useRouter();

  const [error, setError] = useState("");

  const initialValues: RegisterInterface = {
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    repeatPassword: "",
    jobTitle: "",
    resetQuestion: "",
    resetQuestionAnswer: "",
    companyName: "",
    address: "",
    address2: "",
    city: "",
    country: "",
    province: "",
    zipCode: "",
    phone: "",
    correspondence: "",
    receiveEmails: false,
  };

  const formik = useFormik({
    initialValues,
    onSubmit: async (data) => {
      dispatch(setLoading(true));
      dispatch(setShowModal(true));
      document.body.style.overflow = "hidden";
      let customer = {
        first_name: data.first_name,
        last_name: data.last_name,
        phone: data.phone,
        email: data.email,
        password: data.password,
        resetQuestion: data.resetQuestion,
        resetQuestionAnswer: data.resetQuestionAnswer,
        correspondence: data.correspondence,
        receiveEmails: data.receiveEmails,
        jobTitle: data.jobTitle,
      };
      try {
        const res: any = await axios.post(
          `${process.env.MEDUSA_BACKEND_API}/store/customers`,
          customer
        );
        console.log(res?.data?.customer);

        dispatch(setUser(res?.data?.customer));

        const token = await loginUser({
          email: customer.email,
          password: customer.password,
        });

        await addShippingAddress(
          {
            first_name: data.first_name,
            last_name: data.last_name,
            address_1: data.address,
            city: data.city,
            country_code: data.country,
            postal_code: data.zipCode,
            phone: data.phone,
            company: data.companyName,
            province: data.province,
          },
          token
        );
        router.push("/");
      } catch (err: any) {
        console.log(err);
        alert(getError(err));
        setError(getError(err));
      }
      dispatch(setLoading(false));
      dispatch(setShowModal(false));
      document.body.style.overflow = "auto";
    },
    validationSchema: registerSchema,
  });

  const loginUser = async ({ email, password }: any) => {
    try {
      const res = await axios.post(
        `${process.env.MEDUSA_BACKEND_API}/store/auth/token`,
        { email, password }
      );

      const token = res.data.access_token;

      dispatch(setToken(token));

      return token;
    } catch (err: any) {
      console.log(err);
    }
  };

  const addShippingAddress = async (address: any, token: string) => {
    if (!!token) {
      try {
        await axios.post(
          `${process.env.MEDUSA_BACKEND_API}/store/customers/me/addresses`,
          {
            address: {
              ...address,
            },
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
      } catch (err) {
        console.log(err);
      }
    } else {
      console.log("no token");
    }
  };

  return (
    <form
      className="padding-horizontal mt-4 mb-11"
      onSubmit={(e) => {
        e.preventDefault();
        formik.handleSubmit(e);
      }}
    >
      <div className="">
        <h2 className="font-semibold text-2xl text-Gray my-2">Register</h2>
        <p className="my-2 text-Gray text-sm">
          Already registered? Sign in for fast checkout, shopping lists, order
          history, and more!
        </p>
      </div>
      <div>
        <hr className="my-[15px] w-[100%] border-t-[#ddd]" />
      </div>
      {error && (
        <div className="text-[#a94442] bg-[#f2dede] border-1 border-[#ebccd1] my-[10px] p-[15px] rounded-[4px] max-w-[700px]">
          {error}
        </div>
      )}
      <div>
        <h3 className="font-semibold text-xl text-Gray my-2">
          Your Information
        </h3>

        <div className="grid md:grid-cols-2 max-w-[700px] gap-x-6">
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
          <div className="jobTitle">
            <label htmlFor="jobTitle" className="custom-label">
              Job Title
            </label>
            <input
              type="text"
              id="jobTitle"
              name="jobTitle"
              className={`custom-input ${
                formik.touched.jobTitle &&
                formik.errors.jobTitle &&
                "error-input"
              }`}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.jobTitle}
            />
            {formik.touched.jobTitle && formik.errors.jobTitle && (
              <span className="error">{formik.errors.jobTitle}</span>
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
          <div className="password">
            <label htmlFor="password" className="custom-label">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
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

            <p className="font-semibold text-[12px] text-Gray">
              Password Requirements
            </p>
            <ul className="list-none">
              <li className="text-[12px] text-[#777]">
                Must be at least 8 characters
              </li>
              <li className="text-[12px] text-[#777]">
                Must containt at least 1 number
              </li>
              <li className="text-[12px] text-[#777]">
                Must contain at least 1 letter
              </li>
              <li className="text-[12px] text-[#777]">
                Must contain at least 1 special character [~!@#$%^&*()_+]
              </li>
            </ul>
            {/**password requirements */}
          </div>
          <div className="repeatPassword">
            <label htmlFor="repeatPassword" className="custom-label">
              Repeat Password
            </label>
            <input
              type="password"
              id="repeatPassword"
              name="repeatPassword"
              className={`custom-input ${
                formik.touched.repeatPassword &&
                formik.errors.repeatPassword &&
                "error-input"
              }`}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.repeatPassword}
            />
            {formik.touched.repeatPassword && formik.errors.repeatPassword && (
              <span className="error">{formik.errors.repeatPassword}</span>
            )}
          </div>
          <div className="resetQuestion">
            <label htmlFor="resetQuestion" className="custom-label">
              Password Reset Question
            </label>
            <select
              id="resetQuestion"
              name="resetQuestion"
              className={`custom-input ${
                formik.touched.resetQuestion &&
                formik.errors.resetQuestion &&
                "error-input"
              }`}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.resetQuestion}
            >
              <option value="">Select a Password Reset Question</option>
              <option value="What is your mother's maiden name?">
                What is your mother's maiden name?
              </option>
              <option value="What is street did you grow up on?">
                What is street did you grow up on?
              </option>
              <option value="What is your best friend's name?">
                What is your best friend's name?
              </option>
              <option value="What is the name of your elementary school?">
                What is the name of your elementary school?
              </option>
            </select>
            {formik.touched.resetQuestion && formik.errors.resetQuestion && (
              <span className="error">{formik.errors.resetQuestion}</span>
            )}
          </div>
          <div className="resetQuestionAnswer">
            <label htmlFor="resetQuestionAnswer" className="custom-label">
              Password Reset Question Answer
            </label>
            <input
              type="text"
              id="resetQuestionAnswer"
              name="resetQuestionAnswer"
              className={`custom-input ${
                formik.touched.resetQuestionAnswer &&
                formik.errors.resetQuestionAnswer &&
                "error-input"
              }`}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.resetQuestionAnswer}
            />
            {formik.touched.resetQuestionAnswer &&
              formik.errors.resetQuestionAnswer && (
                <span className="error">
                  {formik.errors.resetQuestionAnswer}
                </span>
              )}
          </div>
        </div>
      </div>
      <div>
        <hr className="my-[15px] w-[100%] border-t-[#ddd]" />
      </div>
      <h3 className="font-semibold text-xl text-Gray my-2">
        Your Company Information
      </h3>
      <div className="grid gap-x-6 md:grid-cols-2 max-w-[700px]">
        <div className="firstName">
          <label htmlFor="companyName" className="custom-label">
            Company Name
          </label>
          <input
            type="text"
            id="companyName"
            name="companyName"
            className={`custom-input ${
              formik.touched.companyName &&
              formik.errors.companyName &&
              "error-input"
            }`}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.companyName}
          />
          {formik.touched.companyName && formik.errors.companyName && (
            <span className="error">{formik.errors.companyName}</span>
          )}
        </div>

        <div></div>

        <div className="address1 col-span-2">
          <label htmlFor="address1" className="custom-label">
            Address
          </label>
          <input
            type="text"
            id="address"
            name="address"
            className={`custom-input ${
              formik.touched.address && formik.errors.address && "error-input"
            }`}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.address}
          />
          {formik.touched.address && formik.errors.address && (
            <span className="error">{formik.errors.address}</span>
          )}
        </div>
        <div className="address2 col-span-2">
          <label htmlFor="address2" className="custom-label">
            Address 2
          </label>
          <input
            type="text"
            id="address2"
            name="address2"
            className={`custom-input ${
              formik.touched.address2 && formik.errors.address2 && "error-input"
            }`}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.address2}
          />
          {formik.touched.address2 && formik.errors.address2 && (
            <span className="error">{formik.errors.address2}</span>
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

        <div className="country">
          <label htmlFor="country" className="custom-label">
            Country
          </label>
          <select
            name="country"
            id="country"
            className={`custom-input ${
              formik.touched.country && formik.errors.country && "error-input"
            }`}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.country}
          >
            <option value="">Select Country</option>
            <option value="CA">Canada</option>
            <option value="US">United States</option>
          </select>
          {formik.touched.country && formik.errors.country && (
            <span className="error">{formik.errors.country}</span>
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
              formik.touched.province && formik.errors.province && "error-input"
            }`}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.province}
          >
            <option value="">Select a Province/State</option>
            {formik.values.country && formik.values.country == "CA" && (
              <>
                {canadaProvinces.map((province, index) => (
                  <option value={province} key={index}>
                    {province}
                  </option>
                ))}
              </>
            )}
            {formik.values.country && formik.values.country == "US" && (
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
        <div className="zipCode">
          <label htmlFor="zipCode" className="custom-label">
            Postal/ZIP Code
          </label>
          <input
            type="text"
            id="zipCode"
            name="zipCode"
            className={`custom-input ${
              formik.touched.zipCode && formik.errors.zipCode && "error-input"
            }`}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.zipCode}
          />
          {formik.touched.zipCode && formik.errors.zipCode && (
            <span className="error">{formik.errors.zipCode}</span>
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
        <div className="col-span-2">
          <hr className="my-[15px] w-[100%] border-t-[#ddd]" />
        </div>
        <div className="col-span-2">
          <label htmlFor="correspondance" className="custom-label">
            Correspondance
          </label>

          <div className="english flex items-center gap-1 my-1">
            <input
              type="radio"
              value="English"
              name="correspondence"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />{" "}
            <label
              htmlFor="English"
              className="english custom-label"
              style={{
                marginTop: "0px !important",
              }}
            >
              English
            </label>
          </div>

          <div className="english flex items-center gap-1 my-1">
            <input
              type="radio"
              value="French"
              name="correspondence"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />{" "}
            <label
              htmlFor="French"
              className="french custom-label"
              style={{
                marginTop: "0px !important",
              }}
            >
              French
            </label>
          </div>
          {formik.touched.correspondence && formik.errors.correspondence && (
            <span className="error ">{formik.errors.correspondence}</span>
          )}
        </div>
        <div className="campaigns flex my-2 col-span-2">
          <label
            htmlFor="campaigns"
            className="block custom-label"
            style={{
              marginTop: "0px !important",
            }}
          >
            <input
              type="checkbox"
              name="receiveEmails"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              checked={formik.values.receiveEmails}
            />{" "}
            I Want to Receive TENAQUIP Email Campaigns
          </label>
        </div>
        <div className="col-span-2">
          <button
            type="submit"
            className="inline-block bg-mainColor text-white text-center w-[100%] rounded-sm text-sm p-4"
          >
            Register
          </button>
        </div>
      </div>
    </form>
  );
};

export default Register;

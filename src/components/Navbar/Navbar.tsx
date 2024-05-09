"use client";

import { setCart } from "@/Store/slices/cart";
import { setModalContent, setShowModal } from "@/Store/slices/modal";
import { setToken, setUser } from "@/Store/slices/user";
import COLORS from "@/config/colors";
import { useAppDispatch, useAppSelector } from "@/hooks";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import { FaBagShopping } from "react-icons/fa6";

export const Navbar = () => {
  const dispatch = useAppDispatch();

  const router = useRouter();

  const openModal = () => {
    dispatch(setModalContent({
      title: "Sign in",
      content: "auth"
    }));
    dispatch(setShowModal(true));
    document.body.style.overflow = "hidden"
  };

  const user = useAppSelector((state) => state.user.user);
  const cart = useAppSelector((state) => state.cart.cart);

  const items = cart?.items;

  const logout = () => {
    dispatch(setUser(null));
    dispatch(setToken(''));
    localStorage.clear();
    router.push('/account/register');
  }

  return (
    <div className="flex px-32 justify-between items-center bg-white py-4">
      <div className="flex w-56">
        <Link href='/' className="block">
          <Image src="/logo.svg" alt="" width={220} height={65} />
        </Link>
      </div>
      <div className="hidden lg:flex">
        <Image src="/100canadian.svg" alt="" width={50} height={50} />
        <Image src="/55years.svg" alt="" width={50} height={50} />
        <Image src="/bestmanaged.svg" alt="" width={100} height={50} />
      </div>
      <div className="">
        <div className="w-100% h-[42px] flex flex-row border-1 border-solid border-[#003f67]">
          <input type="text" className="w-64 xl:w-96 h-[100%] outline-none px-3 border-none text-[14px] placeholder:text-[#333333]" placeholder="Search Catalog/Products" />
          <div className="bg-mainColor flex justify-center items-center px-5">
            <FaSearch color="white" size={20} />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center gap-4">
        <div className="flex items-center gap-2">
          <FaUser color={COLORS.MAIN_COLOR} size={25} />

          {user ? (
            <div className="flex flex-col">
              <span className="text-mainColor text-sm font-bold cursor-pointer">
                {user.last_name}
              </span>
              <button className="text-mainColor text-[12px]" onClick={()=>logout()}>
                Logout
              </button>
            </div>
          ) : (
            <div className="flex flex-col">
              <span
                className="text-mainColor text-sm font-bold cursor-pointer"
                onClick={openModal}
              >
                Sign In
              </span>
              <Link
                href="/account/register"
                className="text-mainColor text-[12px] "
              >
                Register
              </Link>
            </div>
          )}
        </div>

        <Link href='/account/cart' className="flex items-center gap-2 relative">
          <span className="bg-[#faa33b] text-white text-[14px] absolute left-[15px] top-[-12px] rounded-full w-fit text-center block min-w-[22px] h-[22px]">
            {items ? items.length : 0}
          </span>
          <FaShoppingCart color={COLORS.MAIN_COLOR} size={25} />
          <div className="flex flex-col">
            <span
              className="text-mainColor text-sm font-bold relative"
            >
              Cart
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

"use client";

import { setModalContent, setShowModal } from "@/Store/slices/modal";
import COLORS from "@/config/colors";
import { useAppDispatch, useAppSelector } from "@/hooks";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import { FaBagShopping } from "react-icons/fa6";

export const Navbar = () => {
  const dispatch = useAppDispatch();

  const productCategories = useAppSelector((state)=>state.product.productCategories);

  const openModal = () => {
    dispatch(setModalContent("auth"));
    dispatch(setShowModal(true));
  };

  const user = useAppSelector((state) => state.user.user);

  return (
    <div className="flex px-32 justify-between items-center bg-white py-4">
      <div>
        <Link href='/'>
          <Image src="/logo.svg" alt="" width={220} height={65} />
        </Link>
      </div>
      <div className="flex">
        <Image src="/100canadian.svg" alt="" width={50} height={50} />
        <Image src="/55years.svg" alt="" width={50} height={50} />
        <Image src="/bestmanaged.svg" alt="" width={100} height={50} />
      </div>
      <div className="">
        <div className="w-100% h-[42px] flex flex-row border-1 border-solid border-[#003f67]">
          <input type="text" className="w-96 h-[100%] outline-none px-3 border-none text-[14px] placeholder:text-[#333333]" placeholder="Search Catalog/Products" />
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
              <Link
                href="/account/register"
                className="text-mainColor text-[12px] "
              >
                Logout
              </Link>
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
        <div className="flex items-center gap-2">
          <FaShoppingCart color={COLORS.MAIN_COLOR} size={25} />
          <div className="flex flex-col">
            <Link
              href="/account/cart"
              className="text-mainColor text-sm font-bold"
            >
              Cart
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

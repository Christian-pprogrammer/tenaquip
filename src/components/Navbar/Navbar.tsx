"use client";

import { setCart } from "@/Store/slices/cart";
import { setModalContent, setShowModal } from "@/Store/slices/modal";
import { setToken, setUser } from "@/Store/slices/user";
import COLORS from "@/config/colors";
import { useAppDispatch, useAppSelector } from "@/hooks";
import useDebounce from "@/hooks/useDebounce";
import { searchProducts } from "@/services/product-service";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { ChangeEvent, useEffect, useState } from "react";
import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import SearchElement from "../search-element/SearchElement";

export const Navbar = () => {

  const [inputValue, setInputValue] = useState("");
  const debouncedSearchTerm = useDebounce(inputValue, 500); // 500ms delay
  const [searchResults, setSearchResults] = useState([]);
  const pathname = usePathname();

  useEffect(() => {
    const resetOpen = () => {
      setSearchResults([]);
    };
    resetOpen();
  }, [pathname]);

  useEffect(() => {
    const search = async () => {
      if(inputValue == '') {
        setSearchResults([]);
      }else{
        if (debouncedSearchTerm) {
          console.log("Search for:", debouncedSearchTerm);
          try {
            const prods = await searchProducts(debouncedSearchTerm);
            setSearchResults(prods);
          } catch (err) {}
        }
      }
    }
    search();
  }, [debouncedSearchTerm]);

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
    <div className="hidden md:flex gap-x-5 lg:gap-x-20 padding-horizontal items-center bg-white py-3">
      <div className="lg:col-span-2 md:col-span-3 sm:col-span-3 flex w-[auto] max-w-56">
        <Link href="/" className="block">
          <Image src="/logo.svg" alt="" width={200} height={65} />
        </Link>
      </div>
      <div className="hidden lg:flex lg:col-span-2 md:col-span-3">
        <Image src="/100canadian.svg" alt="" width={50} height={50} />
        <Image src="/55years.svg" alt="" width={50} height={50} />
        <Image src="/bestmanaged.svg" alt="" width={100} height={50} />
      </div>
      <div className="flex-1 col-sm-7 bg-gray-300 relative">
        <div className="w-100% h-[42px] flex flex-row border-1 border-solid border-[#003f67]">
          <input
            type="text"
            className="ring-0 focus:ring-transparent w-64 flex-1 h-[100%] outline-none px-3 border-none text-[14px] placeholder:text-darkCharcoal"
            style={{
              outline: "none",
              border: "none",
            }}
            value={inputValue}
            placeholder="Search Catalog/Products"
            onChange={(e) => setInputValue(e.target.value)}
          />

          <div className="bg-mainColor flex justify-center items-center px-5">
            <FaSearch color="white" size={20} />
          </div>
        </div>

        {searchResults?.length > 0 && (
          <div className="relative w-[100%] bg-white shadow-md">
            <div className="bg-white absolute top-0 left-0 w-[100%] z-[100]">
              <>
                {searchResults.map((prod: any) => {
                  let image: string = prod?.thumbnail;
                  if (image.includes("localhost")) {
                    image = image.replace("localhost", "127.0.0.1");
                    prod.thumbnail = image;
                  }

                  return <SearchElement product={prod} />;
                })}
              </>
            </div>
          </div>
        )}
      </div>
      <div className="flex items-center justify-center gap-4 md:col-span-2">
        <div className="flex items-center gap-2">
          <FaUser color={COLORS.MAIN_COLOR} size={25} />

          {user ? (
            <div className="flex flex-col">
              <span className="text-mainColor text-sm font-bold cursor-pointer">
                {user.last_name}
              </span>
              <button
                className="text-mainColor text-[12px]"
                onClick={() => logout()}
              >
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

        <Link href="/account/cart" className="flex items-center gap-2 relative">
          {items && (
            <span className="bg-[#faa33b] text-white text-[14px] absolute left-[15px] top-[-12px] rounded-full w-fit text-center block min-w-[22px] h-[22px]">
              {items.length}
            </span>
          )}
          <FaShoppingCart color={COLORS.MAIN_COLOR} size={25} />
          <div className="flex flex-col">
            <span className="text-mainColor text-sm font-bold relative">
              Cart
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

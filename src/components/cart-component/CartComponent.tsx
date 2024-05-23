"use client";

import COLORS from "@/config/colors";
import { useAppSelector } from "@/hooks";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

import React from "react";
import { FaTruck } from "react-icons/fa";

const CartComponent = () => {
  const router = useRouter();

  const recentItem = useAppSelector((state) => state.cart.recentCartItem);
  console.log(recentItem);

  let image: string = recentItem?.thumbnail;
  if (image?.includes("localhost")) {
    image = image.replace("localhost", "127.0.0.1");
  }

  return (
    <div>
      <div className="flex pt-3 pb-5 border-b-1 border-b-lineGray gap-2">
        <div className="col-sm-2 col-xs-3 ">
          <Image src={image} alt="" width={70} height={70} />
        </div>
        <div className="flex justify-between flex-1">
          <div>
            <h3 className="text-Gray font-[700] mx-[3px] leading-5 text-sm">
              Bradly
            </h3>
            <p className="leading-5 mx-[3px] font-[700] text-mainColor text-sm">
              {recentItem?.title}
            </p>

            <div className="mt-2">
              <p className="text-Gray text-sm leading-5 mx-[3px]">
                Model: <span className="font-[700]">SAE731</span>
              </p>
              <p className="text-Gray text-sm leading-5 mx-[3px]">
                Mfr. Model No.: 4155-B
              </p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-Gray font-[700] mx-[3px] leading-5 text-sm">
              $10.59 / Each
            </p>
            <p className="text-Gray font-[700] mx-[3px] leading-5 text-sm mt-2">
              Qty.: 1
            </p>
          </div>
        </div>
      </div>

      <div className="py-4">
        <p className="text-sm text-Gray leading-6 text-right">
          7 item(s) in your cart.
        </p>
        <p className="text-sm text-Gray leading-6 text-right">
          <strong className="font-[700]">Subtotal: $61,235.29</strong>
        </p>
      </div>

      <div className="bg-lightMain text-center text-mainColor leading-5 text-sm p-2">
        <p>
          <FaTruck
            color={COLORS.MAIN_COLOR}
            className="inline mr-2"
            size={20}
          />
          FREE delivery on all orders over{" "}
          <span className="font-[700]">$99</span> when shipping to an <br />{" "}
          <span className="font-[700] underline">eligible location.</span>
        </p>
      </div>

      <Link href="/account/cart" className="blue-btn mt-4">
        View Cart
      </Link>

      <div className="text-[#428bca] leading-5 text-[12px] p-2 border-l-4 border-l-[#428bca] bg-[#f0f7fd] mt-4">
        FREE gift on orders of $499+. Code: APRIL24. <br />{" "}
        <span className="font-[700] underline">Learn more</span>
      </div>
    </div>
  );
};

export default CartComponent;

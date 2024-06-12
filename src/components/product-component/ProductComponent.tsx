"use client";
import { setCart, setRecentCartItem } from "@/Store/slices/cart";
import { setModalContent, setShowModal } from "@/Store/slices/modal";
import product from "@/Store/slices/product";
import { useAppDispatch, useAppSelector } from "@/hooks";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  hideAddToCart?: Boolean;
  product: {
    id: string;
    title: string;
    handle: string;
    thumbnail?: string;
    variants: Array<{
      id: string;
      title: string;
      options: Array<{
        id: string;
        value: string;
      }>;
      prices: Array<{
        id: string;
        currency_code: string;
        amount: string;
      }>;
    }>;
    model: string;
    manufacturer_model_no: string;
    ships_in: string;
    brand: {
      data: {
        id: number;
        attributes: {
          name: string;
          handle: string;
        };
      };
    };
  };
};

const ProductComponent = ({
  hideAddToCart,
  product: {
    id,
    title,
    handle,
    thumbnail,
    variants,
    model,
    manufacturer_model_no,
    ships_in,
    brand,
  },
}: Props) => {
  if (thumbnail?.startsWith("http://localhost")) {
    thumbnail = thumbnail.replace("localhost", "127.0.0.1");
  }

  if (!thumbnail) {
    thumbnail = "";
  }

  const dispatch = useAppDispatch();

  const user = useAppSelector((state) => state.user.user);

  const cart = useAppSelector((state) => state.cart.cart);

  const addOrSetCart = async () => {
    dispatch(setShowModal(true));
    document.body.style.overflow = "hidden";

    dispatch(
      setModalContent({
        title: "Just Added to Your Cart",
        content: "cart",
      })
    );

    // return;
    let userCart;
    let cartId;

    if (!localStorage.getItem("cart_id")) {
      //create a cart
      const response = await fetch(
        `${process.env.MEDUSA_BACKEND_API}/store/carts`,
        {
          method: "POST",
          credentials: "include",
        }
      );
      console.log(response);
      const resJson = await response.json();
      const { cart } = resJson;
      localStorage.setItem("cart_id", cart.id);
      dispatch(setCart({ cart: cart, cartType: "unauthenticated_cart" }));
      userCart = cart;
      cartId = cart.id;
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
      userCart = cart;
      cartId = cart.id;
    }

    //add item to cart

    const response = await fetch(
      `${process.env.MEDUSA_BACKEND_API}/store/carts/${cartId}/line-items`,
      {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          variant_id: variants[0].id,
          quantity: 1,
        }),
      }
    );

    const resJson = await response.json();

    console.log("resjson", resJson);

    dispatch(setCart({ cart: resJson.cart, cartType: "unauthenticated_cart" }));

    dispatch(
      setRecentCartItem({
        title,
        model: variants[0].options[0].value,
        thumbnail,
      })
    );
  };

  return (
    <div className="lg:border-[1px] lg:border-lightMain rounded-sm px-4 pt-5 flex flex-col justify-end overflow-hidden gap-y-4 lg:min-h-[500px]">
      <div className="flex justify-center">
        <Link href={`/product/${handle}`}>
          <Image
            src={thumbnail}
            alt=""
            width={150}
            height={100}
            objectFit="cover"
          />
        </Link>
      </div>

      <div>
        <p className="model text-Gray capitalize text-sm my-2 font-[700]">
          {brand?.data.attributes.name}
        </p>
        <p className="productName text-mainColor my-2 text-sm font-[700]">
          {title}
        </p>

        <div className="my-3">
          <p className="text-Gray text-sm">
            Model: <span className="text-Gray font-semibold">{model}</span>
          </p>
          <p className="text-Gray text-sm">
            Manufacturer Model No:{" "}
            <span className="text-Gray">{manufacturer_model_no}</span>
          </p>
        </div>

        <p className="text-Gray my-2 text-sm">
          <span className="font-semibold">
            $ {Number(variants[0]?.prices[0]?.amount) / 100}
          </span>{" "}
          / Each
        </p>

        <p className="text-Gray font-semibold my-2 text-sm">
          Ships in {ships_in}
        </p>

        <p className="text-Gray text-sm">Buy More, Save More</p>
      </div>

      {!hideAddToCart && (
        <div className="flex gap-1 my-2 mt-4">
          <button className="border-[1px] border-lightMain px-5 py-[6px] text-sm text-Gray inline-block">
            1
          </button>

          <button
            className="text-white bg-mainColor rounded-sm border-none outline-none block w-full text-sm"
            onClick={addOrSetCart}
          >
            Add to Cart
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductComponent;

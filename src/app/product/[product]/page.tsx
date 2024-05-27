import Breadcrumb from "@/components/bread-crumb/Breadcrumb";
import COLORS from "@/config/colors";
import { fetchProductByHandle } from "@/services/product-service";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaTruck } from "react-icons/fa";

const page = async (props: any) => {
  //fetch product
  let product: any;
  let image: string = '';


  try {
    console.log("fetch... helloworld");
    console.log("my params...", props.params);
    console.log(props.params);
    let productRes: any = await fetchProductByHandle(props.params.product);
    product = productRes[0];
    console.log(JSON.stringify(product))
    
    console.log(product.thumbnail)
    if(product.thumbnail?.includes("localhost")) {
      image = product.thumbnail.replace("localhost", "127.0.0.1")
    }else{
      image = product.thumbnail;
    }

  } catch (err) {}

  return (
    <div className="padding-horizontal mb-14">
      <Breadcrumb />
      <div className="flex gap-10">
        <div className="">
          <Image
            alt={product?.title}
            src={image && image}
            width={500}
            height={500}
          />
        </div>
        <div className="mt-5 flex-1">
          <h3 className="text-[15px] font-bold uppercase text-mainColor">
            {product.brand?.data?.attributes?.name}
          </h3>
          <h2 className={`text-[22px] md:text-[24px] text-Gray`}>
            {product.title}
          </h2>
          <div className="mt-2 flex gap-4">
            <p className="text-Gray text-sm leading-5 mx-[3px]">
              Model: <span className="font-[700]">{product?.model}</span>
            </p>
            <p className="text-Gray text-sm leading-5 mx-[3px]">
              Mfr. Model No.: {product?.manufacturer_model_no}
            </p>
          </div>
          <Link href="#" className="text-mainColor text-[14px]">
            See Product Details
          </Link>

          <p className="text-Gray mx-[3px] leading-5 md:text-[24px] sm:text-[22px] mt-8 mb-6">
            <span className="font-[700]">$10.59</span>
            <span> / Each</span>
          </p>

          <p className="font-[700] text-Gray text-[16px] leading-[1.5em]">
            Ships in {product?.ships_in}
          </p>

          <div className="flex gap-1 my-2 mt-4">
            <input className="border-[1px] border-lightMain px-5 py-[6px] text-sm text-Gray inline-block w-16 rounded-md" />
            <button
              className="text-white bg-mainColor rounded-md border-none outline-none block px-40 text-sm py-5"
              // onClick={addOrSetCart}
            >
              Add to Cart
            </button>
          </div>
          <hr className="my-[15px] w-[100%] border-t-[#ddd]" />
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
        </div>
      </div>
      <hr className="my-[15px] w-[100%] border-t-[#ddd]" />
      <h2 className="text-Gray text-[22px] mt-4 mb-2">Description</h2>
      <ul className="block">
        {product.description?.map((desc: any) => (
          <li className="text-[15px] text-Gray list-disc ml-4 leading-[19px]">
            {desc.descriptionTitle}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default page;

"use client";

import { setBreadcrumb } from "@/Store/slices/product";
import { useAppDispatch, useAppSelector } from "@/hooks";
import Link from "next/link";
import React, { useEffect, useState } from "react";

type Props = {
  step: string;
  title: string;
  handle: string;
};

const Breadcrumb = ({ step, title, handle }: Props) => {
  const breadcrumb = useAppSelector((state) => state.product.breadcrumb);

  const dispatch = useAppDispatch();

  const [newBreadcrumb, setNewBreadcrumb] = useState<any>({});

  useEffect(() => {
    const updateBreadcrumb = () => {
      console.log(breadcrumb);
      if (step && title && handle) {
        if (step == "category") {
          setNewBreadcrumb({
            category: {
              title: title,
              handle: `/product-category/${handle}`,
            },
          });
          dispatch(
            setBreadcrumb({
              category: {
                title: title,
                handle: `/product-category/${handle}`,
              },
            })
          );
        } else if (step == "sub-category") {

          let obj: any = Object.fromEntries(
            Object.entries(breadcrumb)
              .filter(([key]) => key !== "subSubCategory")
          );
          setNewBreadcrumb({
            ...obj,
            subCategory: {
              title: title,
              handle: `${obj?.category?.handle}/${handle}`,
            },
          });
          dispatch(
            setBreadcrumb({
              ...obj,
              subCategory: {
                title: title,
                handle: `${obj?.category?.handle}/${handle}`
              },
            })
          );
        } else if (step == "sub-sub-category") {
          let obj = breadcrumb;
          setNewBreadcrumb({
            ...obj,
            subSubCategory: {
              title: title,
              handle: `${obj?.subCategory?.handle}/${handle}`,
            },
          });
          dispatch(
            setBreadcrumb({
              ...obj,
              subSubCategory: {
                title: title,
                handle: `${obj?.subCategory?.handle}/${handle}`,
              },
            })
          );
        }
      }
    };
    updateBreadcrumb();
  }, []);

  return (
    <div className="mt-3">
      {newBreadcrumb && (
        <>
          <Link href={"/"} className="text-Gray text-sm hover:underline">
            Home
          </Link>
          {Object.entries(newBreadcrumb).map(([key, value], index) => (
            <>
              <span> &gt; </span>
              <Link
                href={newBreadcrumb[key].handle}
                className="text-Gray text-sm hover:underline"
              >
                {newBreadcrumb[key].title}
              </Link>
            </>
          ))}
        </>
      )}
    </div>
  );
};

export default Breadcrumb;

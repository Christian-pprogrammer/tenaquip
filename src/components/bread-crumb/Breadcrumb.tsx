"use client";

import { setBreadcrumb } from "@/Store/slices/product";
import { useAppDispatch, useAppSelector } from "@/hooks";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

type Props = {
  step?: string;
  title?: string;
  handle?: string;
  isBrand?: Boolean;
};

const Breadcrumb = ({ step, title, handle, isBrand }: Props) => {
  const breadcrumb = useAppSelector((state) => state.product.breadcrumb);

  const dispatch = useAppDispatch();

  const [newBreadcrumb, setNewBreadcrumb] = useState<any>({});

  const params = useParams();

  useEffect(() => {
    const updateBreadcrumb = () => {
      setNewBreadcrumb(breadcrumb);
      if (step && title && handle) {
        if (step == "brand") {
          setNewBreadcrumb({
            brand: {
              title: title,
              handle: ``,
            },
          });
          dispatch(
            setBreadcrumb({
              brand: {
                title: title,
                handle: ``,
              },
            })
          );
        } else if (step == "category") {
          if (isBrand) {
            setNewBreadcrumb({
              brand: breadcrumb.brand,
              category: {
                title: title,
                handle: `/product-category/${handle}`,
              },
            });
            dispatch(
              setBreadcrumb({
                brand: breadcrumb.brand,
                category: {
                  title: title,
                  handle: `/product-category/${handle}`,
                },
              })
            );
          }else{
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
          }
        } else if (step == "sub-category") {
          let obj: any = Object.fromEntries(
            Object.entries(breadcrumb).filter(
              ([key]) => key !== "subSubCategory"
            )
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
                handle: `${obj?.category?.handle}/${handle}`,
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
              <span className="text-Gray text-sm mx-2 inline-block">
                {" "}
                &gt;{" "}
              </span>
              <Link
                href={`${isBrand ? `/brands/${params.brand}` : ``}${newBreadcrumb[key]?.handle}`}
                className="text-Gray text-sm hover:underline"
              >
                {newBreadcrumb[key]?.title}
              </Link>
            </>
          ))}
        </>
      )}
    </div>
  );
};

export default Breadcrumb;

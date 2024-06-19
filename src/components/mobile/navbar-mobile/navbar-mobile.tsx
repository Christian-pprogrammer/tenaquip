'use client'

import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { Squash as Hamburger } from "hamburger-react";
import COLORS from '@/config/colors';
import { FaSearch, FaShoppingCart, FaUser } from 'react-icons/fa';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { setModalContent, setShowModal } from '@/Store/slices/modal';
import { fetchCategories as fetchProductCategories } from "@/services/category-service";
import NavbarDropdown from '../navbar-dropdown/navbar-dropdown';
import { usePathname } from 'next/navigation';
import useDebounce from '@/hooks/useDebounce';
import { searchProducts } from '@/services/product-service';
import SearchElement from '@/components/search-element/SearchElement';

const NavbarMobile = () => {
  
  const [isOpen, setOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const debouncedSearchTerm = useDebounce(inputValue, 500); // 500ms delay
  const [searchResults, setSearchResults] = useState([]);

  const cart = useAppSelector((state) => state?.cart?.cart);
  const dispatch = useAppDispatch();

  let [categories, setCategories] = useState([]);

  const pathname = usePathname()

  useEffect(()=>{
    const resetOpen = () => {
      setOpen(false);
      setSearchResults([]);
    }
    resetOpen();
  }, [pathname])

    useEffect(() => {
      const fetchCategories = async () => {
        let mainCategories = [];
        try {
          console.log("fetch categoriess...");
          console.log("my env.sdafdsafd", process.env.STRAPI_API);
          mainCategories = await fetchProductCategories();
          console.log(mainCategories);

          let categoryLinks = mainCategories.map((category: any) => {
            return {
              title: category?.attributes?.name,
              linkUrl: `product-category/${category?.attributes?.handle}`,
            };
          });
          setCategories(categoryLinks);
        } catch (err) {}
      };
      fetchCategories();
    }, []);


      useEffect(() => {
        const search = async () => {
          if (inputValue == "") {
            setSearchResults([]);
          } else {
            if (debouncedSearchTerm) {
              console.log("Search for:", debouncedSearchTerm);
              try {
                const prods = await searchProducts(debouncedSearchTerm);
                setSearchResults(prods);
              } catch (err) {}
            }
          }
        };
        search();
      }, [debouncedSearchTerm]);

      const serviceCategories = [
        {
          title: "Buy Now, Split Up the cost",
          linkUrl: "services/buy-now-split-cost",
        },
        {
          title: "Courses, Seminars, & Surveys",
          linkUrl: "services/courses-seminars-surveys",
        },
        {
          title: "Free Delivery",
          linkUrl: "services/free-delivery",
        },
        {
          title: "Government Relations",
          linkUrl: "services/government-relations",
        },
        {
          title: "Hunter Group",
          linkUrl: "services/hunter-group",
        },
        {
          title: "Instrument Calibration",
          linkUrl: "services/plumbing-equipment",
        },
        {
          title: "Key Accounts & Corporate Accounts",
          linkUrl: "services/plumbing-equipment",
        },
        {
          title: "Maintenance Shutdown Program",
          linkUrl: "services/plumbing-equipment",
        },
        {
          title: "Vendor Managed Inventory",
          linkUrl: "services/plumbing-equipment",
        },
        {
          title: "Order Lookup",
          linkUrl: "services/plumbing-equipment",
        },
      ];

      const company = [
        {
          title: "About us",
          linkUrl: "company/about-us",
        },
        {
          title: "Careers",
          linkUrl: "company/careers",
        },
        {
          title: "Contact us",
          linkUrl: "company/contact-us",
        },
        {
          title: "Global Sourcing Group",
          linkUrl: "company/global-sourcing-group",
        },
        {
          title: "Members of",
          linkUrl: "company/members-of",
        },
        {
          title: "NMSO",
          linkUrl: "company/nmso",
        },
        {
          title: "Our Locations",
          linkUrl: "company/locations",
        },
        {
          title: "Recognitions",
          linkUrl: "company/recognitions",
        },
        {
          title: "Satisfaction Guarantee",
          linkUrl: "company/satisfaction-guarantee",
        },
        {
          title: "Sustainability",
          linkUrl: "company/sustainability",
        },
        {
          title: "The TENAQUIP Foundation",
          linkUrl: "company/the-tenaquip-foundation",
        },
        {
          title: "The TENAQUIP Way",
          linkUrl: "company/the-tenaquip-way",
        },
      ];

      const resourceCentre = [
        {
          title: "Emergency Preparedness",
          linkUrl: "resource-center/emergency-preparedness",
        },
        {
          title: "Electrical",
          linkUrl: "resource-center/electrical",
        },
        {
          title: "Facility Maintenance",
          linkUrl: "resource-center/facility-maintenance",
        },
        {
          title: "Material Handling & Storage",
          linkUrl: "resource-center/material-handling-storage",
        },
        {
          title: "Office",
          linkUrl: "resource-center/office",
        },
        {
          title: "Safety",
          linkUrl: "resource-center/safety",
        },
        {
          title: "Tools",
          linkUrl: "resource-center/tools",
        },
        {
          title: "Fleet",
          linkUrl: "resource-center/fleet",
        },
        {
          title: "Line Card",
          linkUrl: "resource-center/line-cards",
        },
      ];
  


  const items = cart?.items;

  const openModal = () => {
    dispatch(
      setModalContent({
        title: "Sign in",
        content: "auth",
      })
    );
    dispatch(setShowModal(true));
    document.body.style.overflow = "hidden";
  };

  const toggle = () => {
    if(!isOpen) {
      setOpen(true);
    }else{
      setOpen(false)
    }
    
  }

  return (
    <div className="block md:hidden">
      <div className="header flex items-center py-1">
        <div className="">
          <Hamburger
            toggled={isOpen}
            size={20}
            toggle={() => toggle()}
            color="#004990"
          />
        </div>
        <div className="lg:col-span-2 md:col-span-3 sm:col-span-3 flex w-[auto] max-w-56">
          <Link href="/" className="block">
            <Image
              src="/logo.svg"
              alt=""
              width={130}
              height={65}
              style={{
                width: "auto",
                maxWidth: "130px",
              }}
            />
          </Link>
        </div>
        <div className="text-[12px]">
          <p className="text-mainColor">Deliverry to:</p>
          <Link href="#" className="font-bold underline text-mainColor">
            H9X 3L7
          </Link>
        </div>
        <div className="flex-1 flex justify-end padding-horizontal gap-2">
          <FaUser color={COLORS.MAIN_COLOR} size={25} onClick={openModal} />
          <Link href="/account/cart" className="relative">
            {items && (
              <span className="bg-[#faa33b] text-white text-[14px] absolute left-[15px] top-[-12px] rounded-full w-fit text-center block min-w-[22px] h-[22px]">
                {items.length}
              </span>
            )}
            <FaShoppingCart color={COLORS.MAIN_COLOR} size={25} />
          </Link>
        </div>
      </div>

      <div className="relative">
        <div
          className={
            isOpen
              ? `absolute border-t-1 border-t-[#004990] z-[20] bg-mainColor h-[100vh] w-[100vw] overflow-y-auto transition-all duration-[0.5s]`
              : `h-0 duration-[0.3s] overflow-y-hidden`
          }
        >
          <NavbarDropdown />
        </div>
      </div>

      <div className="flex-1 col-sm-7 padding-horizontal pb-4 pt-1">
        <div className="w-100% h-[42px] flex flex-row border-1 border-solid border-[#003f67]">
          <input
            type="text"
            className="ring-0 focus:ring-transparent w-64 flex-1 h-[100%] outline-none px-3 border-none text-[14px] placeholder:text-darkCharcoal"
            style={{
              outline: "none",
              border: "none",
            }}
            placeholder="Search Catalog/Products"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <div className="bg-mainColor flex justify-center items-center px-5">
            <FaSearch color="white" size={20} />
          </div>
        </div>
        {searchResults?.length > 0 && (
          <div className="relative w-[100%] bg-white shadow-md">
            <div
              className="bg-white absolute top-0 left-0 w-[100%] z-[100] max-h-[400px] overflow-y-scroll"
              style={{
                boxShadow:
                  "0 2px 4px 0 rgba(34,36,38,.12),0 2px 10px 0 rgba(34,36,38,.15)",
                border: "1px solid #d4d4d5",
              }}
            >
              <>
                <h2 className="text-mainColor text-[18px] m-[10px] font-bold">
                  Top Product Results For "{debouncedSearchTerm}"
                </h2>
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
    </div>
  );
}

export default NavbarMobile
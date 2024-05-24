'use client'

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'
import { Squash as Hamburger } from "hamburger-react";
import COLORS from '@/config/colors';
import { FaShoppingCart, FaUser } from 'react-icons/fa';

const NavbarMobile = () => {
  
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="block md:hidden">
      <div className="header flex items-center">
        <div className="">
          <Hamburger
            toggled={isOpen}
            size={20}
            toggle={setOpen}
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
          <FaUser color={COLORS.MAIN_COLOR} size={25} />
          <Link href="#" className="relative">
            <FaShoppingCart color={COLORS.MAIN_COLOR} size={25} />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NavbarMobile
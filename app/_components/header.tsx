"use client";

import React from "react";
import { Paragraph } from "./shared/paragraph-item";
import Link from "next/link";

const Header = () => {
  return (
    <div className="bg-muted">
      <div className="container py-1.5">
        <div className="flex w-full items-center justify-between gap-3 flex-wrap">
          <div className="flex items-center gap-6 ">
            {/* language dropdown */}
            <div className="flex items-center  group transition-all duration-300 cursor-pointer">
              <Paragraph className="text-xs font-medium text-orange-500">
                English
              </Paragraph>

              <div className="w-3 ml-2 aspect-square fill-orange-500 group-hover:rotate-180 transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z" />
                </svg>
              </div>
            </div>
            <Link href="/">
              <Paragraph>Help Center</Paragraph>
            </Link>
            <Paragraph>
              Helpline: <a href="tel:+0964781656">0964781656</a>
            </Paragraph>
          </div>

          <div className="flex items-center gap-6 ">
            <Link href="/">
              <Paragraph>Become a Seller</Paragraph>
            </Link>

            <Link href="/">
              <Paragraph>Order Track</Paragraph>
            </Link>

            <Link href="/">
              <Paragraph className="text-orange-500">Sign Up / Login</Paragraph>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

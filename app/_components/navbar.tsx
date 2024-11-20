"use client";

import { ClassValue } from "clsx";
import { Heart, ShoppingCart, User, X } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { cn } from "../lib/utils";

const Navbar = () => {
  const [isSuggestionVisible, setIsSuggestionVisible] =
    useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      wrapperRef.current &&
      !wrapperRef.current.contains(event.target as Node)
    ) {
      setIsSuggestionVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div>
      <div className="container">
        <div className="flex items-center justify-between gap-6 py-2">
          <Image src="logo.svg" alt="Logo" width={100} height={100} />

          <div
            ref={wrapperRef}
            className="h-[44px] hover:shadow-xl duration-300
           transition-all bg-muted rounded-lg w-full relative"
          >
            <input
              type="search"
              className="w-full focus:[+div]:bg-red-800 px-4 py-2 rounded-md text-sm text-gray-600 focus:outline-none bg-transparent h-full pr-10"
              placeholder="Search..."
              onFocus={() => setIsSuggestionVisible(true)}
              onChange={(e) => setSearchQuery(e.target.value)}
              value={searchQuery}
            />

            <button
              onClick={() => setIsSuggestionVisible(false)}
              className="border-none rounded-lg flex items-center justify-center bg-orange-500 absolute right-0 top-0 h-full aspect-square"
            >
              <Image
                src="search.svg"
                width={50}
                height={50}
                alt="search"
                className="w-5"
              />
            </button>

            {/* suggetion */}
            {isSuggestionVisible && (
              <div className="w-full absolute top-14 border left-0 rounded bg-white shadow-lg z-50 pt-2">
                <div className="flex border-b items-center justify-between gap-3 px-2 pb-2">
                  <p className="text-sm font-semibold text-zinc-500">
                    Serach History
                  </p>
                  <p className="text-sm font-medium cursor-pointer text-zinc-500">
                    Clear All
                  </p>
                </div>
                <ul className="max-h-44 overflow-y-auto">
                  <li className="relative w-full text-zinc-600 px-3 cursor-pointer py-1 hover:bg-muted pr-10 text-sm">
                    Lorem ipsum dolor sit amet.
                    <X className="absolute right-2 top-1/2 -translate-y-1/2 text-zinc-500 size-4 hover:text-orange-500" />
                  </li>
                  <li className="relative w-full text-zinc-600 px-3 cursor-pointer py-1 hover:bg-muted pr-10 text-sm">
                    Lorem ipsum dolor sit amet.
                    <X className="absolute right-2 top-1/2 -translate-y-1/2 text-zinc-500 size-4 hover:text-orange-500" />
                  </li>
                  <li className="relative w-full text-zinc-600 px-3 cursor-pointer py-1 hover:bg-muted pr-10 text-sm">
                    Lorem ipsum dolor sit amet.
                    <X className="absolute right-2 top-1/2 -translate-y-1/2 text-zinc-500 size-4 hover:text-orange-500" />
                  </li>
                  <li className="relative w-full text-zinc-600 px-3 cursor-pointer py-1 hover:bg-muted pr-10 text-sm">
                    Lorem ipsum dolor sit amet.
                    <X className="absolute right-2 top-1/2 -translate-y-1/2 text-zinc-500 size-4 hover:text-orange-500" />
                  </li>
                  <li className="relative w-full text-zinc-600 px-3 cursor-pointer py-1 hover:bg-muted pr-10 text-sm">
                    Lorem ipsum dolor sit amet.
                    <X className="absolute right-2 top-1/2 -translate-y-1/2 text-zinc-500 size-4 hover:text-orange-500" />
                  </li>
                  <li className="relative w-full text-zinc-600 px-3 cursor-pointer py-1 hover:bg-muted pr-10 text-sm">
                    Lorem ipsum dolor sit amet.
                    <X className="absolute right-2 top-1/2 -translate-y-1/2 text-zinc-500 size-4 hover:text-orange-500" />
                  </li>
                  <li className="relative w-full text-zinc-600 px-3 cursor-pointer py-1 hover:bg-muted pr-10 text-sm">
                    Lorem ipsum dolor sit amet.
                    <X className="absolute right-2 top-1/2 -translate-y-1/2 text-zinc-500 size-4 hover:text-orange-500" />
                  </li>
                  <li className="relative w-full text-zinc-600 px-3 cursor-pointer py-1 hover:bg-muted pr-10 text-sm">
                    Lorem ipsum dolor sit amet.
                    <X className="absolute right-2 top-1/2 -translate-y-1/2 text-zinc-500 size-4 hover:text-orange-500" />
                  </li>
                  <li className="relative w-full text-zinc-600 px-3 cursor-pointer py-1 hover:bg-muted pr-10 text-sm">
                    Lorem ipsum dolor sit amet.
                    <X className="absolute right-2 top-1/2 -translate-y-1/2 text-zinc-500 size-4 hover:text-orange-500" />
                  </li>
                  <li className="relative w-full text-zinc-600 px-3 cursor-pointer py-1 hover:bg-muted pr-10 text-sm">
                    Lorem ipsum dolor sit amet.
                    <X className="absolute right-2 top-1/2 -translate-y-1/2 text-zinc-500 size-4 hover:text-orange-500" />
                  </li>
                  <li className="relative w-full text-zinc-600 px-3 cursor-pointer py-1 hover:bg-muted pr-10 text-sm">
                    Lorem ipsum dolor sit amet.
                    <X className="absolute right-2 top-1/2 -translate-y-1/2 text-zinc-500 size-4 hover:text-orange-500" />
                  </li>
                </ul>
              </div>
            )}
          </div>

          <div className="flex items-center gap-2">
            <IconWithBadge
              icon={
                <User
                  className="size-4 text-zinc-500 group-hover:text-white"
                  strokeWidth={2}
                />
              }
            />
            <IconWithBadge
              icon={
                <Heart
                  className="size-4 text-zinc-500 group-hover:text-white"
                  strokeWidth={2}
                />
              }
              badge="2"
            />
            <IconWithBadge
              icon={
                <ShoppingCart
                  className="size-4 text-zinc-500 group-hover:text-white"
                  strokeWidth={2}
                />
              }
              badge="2"
            />
          </div>

          <div className="h-[55px] flex items-center justify-center">
            <button>
              <Image
                src="/cloud.png"
                width={200}
                height={100}
                alt="cloud"
                className="h-full object-contain scale-110"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

interface IconWithBadgeProps {
  className?: ClassValue;
  badge?: string;
  icon: React.ReactNode;
}

const IconWithBadge = ({ badge, className, icon }: IconWithBadgeProps) => {
  return (
    <div
      className={cn(
        "rounded-lg bg-muted flex items-center group justify-center cursor-pointer relative w-9 aspect-square hover:bg-orange-500",
        className
      )}
    >
      {icon}

      {badge && (
        <div className="absolute right-0 -top-2.5 rounded-full flex items-center justify-center text-wrap p-0.5 font-semibold text-xs bg-orange-500 text-white px-1 aspect-square w-5">
          {badge}
        </div>
      )}
    </div>
  );
};

"use client";

import { ChevronDown } from "lucide-react";
import Image from "next/image";
import React from "react";
import { cn } from "../lib/utils";
import { Category } from "./categories/categories";
import { Paragraph } from "./shared/paragraph-item";

const MenusOnMobile = ({ categories }: { categories: Category[] }) => {
  return (
    <div className="p-3 ">
      {/* logo */}

      <div className="w-20 mt-3">
        <Image src="/logo.svg" alt="Alzaf Logo" width={100} height={100} />
      </div>

      <div className="h-[calc(100vh-70px)] mt-5 overflow-y-auto">
        {categories?.length &&
          categories?.map((category) => (
            <MenuAccordion key={category.id} category={category} />
          ))}
      </div>
    </div>
  );
};

export default MenusOnMobile;

const MenuAccordion = ({ category }: { category: Category }) => {
  const [activeMenu, setActiveMenu] = React.useState<string | null>();

  return (
    <div className="w-full relative">
      {/* menu item*/}
      <div
        className="flex items-center justify-between w-full relative px-3 py-2 hover:bg-gray-100"
        onClick={() => {
          setActiveMenu(
            activeMenu === category?.title ? null : category?.title
          );
        }}
      >
        <Paragraph className="w-full cursor-pointer text-sm font-semibold hover:text-orange-500">
          {category.title}
        </Paragraph>

        {category?.childrens?.length ? (
          <div className="absolute right-1 top-2 z-30 w-4 aspect-square flex items-center justify-center">
            <ChevronDown
              size={15}
              className={cn(
                " transition-all duration-300",
                activeMenu === category?.title && "rotate-180"
              )}
            />
          </div>
        ) : null}
      </div>

      {/* Accordion details */}
      {category?.childrens?.length &&
        category.childrens?.map((child) => (
          <div
            className={cn(
              "max-h-0 border ml-5 bg-gray-200 overflow-hidden transition-all duration-300",
              activeMenu === category.title && "max-h-full"
            )}
            key={child.title}
          >
            <MenuAccordion category={child} />
          </div>
        ))}
    </div>
  );
};

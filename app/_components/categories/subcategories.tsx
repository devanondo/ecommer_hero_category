"use client";

import { ChevronRight } from "lucide-react";
import React from "react";
import "./categories.css";
import { Category } from "./categories";

const SubMenus = ({ categories }: { categories: Category[] }) => {
  return (
    <div className="w-full relative flex flex-col gap-2  h-96 py-3">
      {categories?.length &&
        categories?.map((category) => (
          <HeroMenus key={category.id} category={category} />
        ))}
    </div>
  );
};

export default SubMenus;

const HeroMenus = ({ category }: { category: Category }) => {
  return (
    <div className="w-full categorie_item">
      {/* menu item*/}
      <div className="flex items-center justify-between w-full relative px-3  hover:text-orange-500 cursor-pointer">
        <p className="text-nowrap text-xs">{category?.title}</p>

        {category?.childrens?.length ? (
          <ChevronRight
            className="size-3 chev_right text-zinc-500"
            strokeWidth={3}
          />
        ) : null}
      </div>

      {category?.childrens?.length ? (
        <div className="border-r left-full top-0 absolute w-full bg-background submenus flex flex-col gap-1  h-96 py-3">
          {category.childrens?.map((child) => (
            <React.Fragment key={child.title}>
              <HeroMenus category={child} />
            </React.Fragment>
          ))}
        </div>
      ) : null}
    </div>
  );
};

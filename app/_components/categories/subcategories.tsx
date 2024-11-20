"use client";

import { ChevronRight } from "lucide-react";
import React from "react";
import { Category } from "./categories";
import "./categories.scss";

const Subcategories = ({ categories }: { categories: Category[] }) => {
  const showMenus = (category: Category) => {
    return (
      <div className="left-[100%] border-l submenus  max-w-60 w-full h-96 bg-white absolute top-0">
        <div className="relative">
          <div
            key={category?.id}
            className="flex categorie_item px-3 pt-3 items-center justify-between group cursor-pointer"
          >
            <p className="text-nowrap text-xs text-orange-500">
              {category?.title}
            </p>

            {category?.childrens?.length && category?.childrens?.length > 0 ? (
              <ChevronRight
                className="size-3 chev_right text-zinc-500"
                strokeWidth={3}
              />
            ) : null}

            {category?.childrens?.length && category?.childrens?.length > 0
              ? category?.childrens?.map((child) => (
                  <React.Fragment key={child.id}>
                    {showMenus(child)}
                  </React.Fragment>
                ))
              : null}
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      {categories?.map((category) => (
        <div
          key={category?.id}
          className="flex categorie_item px-3  items-center justify-between group cursor-pointer"
        >
          <p className="text-xs">{category?.title}</p>

          {category?.childrens?.length && category?.childrens?.length > 0 ? (
            <ChevronRight
              className="size-3 chev_right text-zinc-500"
              strokeWidth={3}
            />
          ) : null}

          {category?.childrens?.length ? showMenus(category) : null}
        </div>
      ))}
    </>
  );
};

export default Subcategories;

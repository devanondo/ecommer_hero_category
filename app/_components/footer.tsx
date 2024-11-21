"use client";

import {
  House,
  LayoutGrid,
  MessageSquareText,
  ShoppingCart,
  UserRound,
} from "lucide-react";
import { useEffect } from "react";
import { useMediaQuery } from "../hooks/useMediaQuery";
import { useModal } from "../hooks/useModal";
import { cn } from "../lib/utils";
import MenusOnMobile from "./menus-on-mobile";
import Sheet from "./shared/sheet";
import { Category } from "./categories/categories";

const Footer = ({ categories }: { categories: Category[] }) => {
  const { type, isOpen, onOpen, onClose } = useModal();
  const isModalOpen = isOpen && type === "mobile_sidebar";
  const isMobile = useMediaQuery({
    query: "maxWidth",
    value: 640,
  });

  const handleClose = () => {
    onClose();
  };

  useEffect(() => {
    if (!isMobile) {
      handleClose();
    }
  }, [isMobile]);

  const menus = [
    {
      label: "Category",
      icon: LayoutGrid,
      onclick: () => {
        onOpen({
          type: "mobile_sidebar",
        });

        console.log("clicking");
      },
    },
    {
      label: "Message",
      icon: MessageSquareText,
    },
    {
      label: "Home",
      icon: House,
    },
    {
      label: "Cart",
      icon: ShoppingCart,
    },
    {
      label: "Account",
      icon: UserRound,
    },
  ];

  return (
    <>
      <div className="hidden max-sm:flex w-full bottom-0 left-0 fixed py-2 bg-white z-[112] items-center justify-center gap-6 shadow-md ">
        {menus.map((menu, index) => (
          <div
            key={index}
            className={cn(
              "flex items-center flex-col justify-center text-gray-400  hover:text-orange-500 cursor-pointer",
              menu.label === "Home" &&
                "p-3 mb-5 rounded-full bg-orange-500 h-full aspect-square"
            )}
            onClick={() => (menu.onclick ? menu.onclick() : {})}
          >
            <menu.icon
              className={cn("size-6", menu.label === "Home" && "text-white")}
            />
            {menu.label !== "Home" ? (
              <p className="text-[10px] font-medium">{menu.label}</p>
            ) : null}
          </div>
        ))}
      </div>

      <Sheet className="max-w-80" open={isModalOpen} onOpenChange={handleClose}>
        <MenusOnMobile categories={categories} />
      </Sheet>
    </>
  );
};

export default Footer;

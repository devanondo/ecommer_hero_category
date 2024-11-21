"use client";

import { cn } from "@/app/lib/utils";
import { ClassValue } from "clsx";
import { X } from "lucide-react";
import React, { useEffect, useState } from "react";

interface SheetProps {
  open: boolean;
  onOpenChange?: () => void;
  children: React.ReactNode;
  className?: ClassValue;
}
const Sheet = ({ open, onOpenChange, children, className }: SheetProps) => {
  const [showSheed, setShowSheed] = useState(open);

  useEffect(() => {
    setShowSheed(open);
  }, [open]);

  return (
    <>
      <div
        className={cn(
          "max-w-64 w-full h-screen left-0 top-0 fixed z-[115] bg-white -translate-x-full transition-all duration-300 border-r rounded-tr-md rounded-br-md",
          showSheed &&
            "max-w-64 w-full translate-x-0 transition-all duration-300",
          className
        )}
      >
        <div className="relative h-full w-full">
          <div
            onClick={() => {
              setShowSheed(false);
              if (onOpenChange) {
                onOpenChange();
              }
            }}
            className="right-1 border w-6 aspect-square top-2 absolute rounded-lg flex items-center justify-center text-zinc-600 hover:text-zinc-800 cursor-pointer"
          >
            <X size={16} className="" strokeWidth={3} />
          </div>
          {children}
        </div>
      </div>

      {/* overlay */}
      <div
        onClick={() => {
          if (onOpenChange) {
            onOpenChange();
          }
        }}
        className={cn(
          "w-full h-screen fixed top-0 left-0  transition-all duration-300 opacity-0 z-[-114] ",
          showSheed && "z-[114] bg-black opacity-50 visible"
        )}
      />
    </>
  );
};

export default Sheet;

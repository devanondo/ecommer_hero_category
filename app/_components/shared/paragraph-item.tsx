"use client";

import { cn } from "@/app/lib/utils";
import React from "react";

export interface ParagraphProps
  extends React.HTMLAttributes<HTMLParagraphElement> {
  asChild?: boolean;
}

const Paragraph = React.forwardRef<HTMLParagraphElement, ParagraphProps>(
  ({ className, ...props }, ref) => {
    const Comp = "p";
    return (
      <Comp
        className={cn(
          "text-xs font-medium text-foreground hover:text-orange-500 transition-all duration-300",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

Paragraph.displayName = "Paragraph";

export { Paragraph };

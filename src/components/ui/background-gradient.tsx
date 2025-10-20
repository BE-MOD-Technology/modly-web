"use client";
import React from "react";
import { cn } from "@/utils/Helpers";

export const BackgroundGradient = ({
  children,
  className,
  containerClassName,
  animate = true,
}: {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  animate?: boolean;
}) => {
  return (
    <div className={cn("relative p-[4px] group", containerClassName)}>
      <div
        className={cn(
          "absolute inset-0 rounded-3xl z-[1] opacity-40 group-hover:opacity-100 blur-xl transition duration-500",
          "bg-gradient-to-br from-[#676767]/40 via-[#828387]/40 to-[#32527B]/40",
          animate ? "animate-pulse" : ""
        )}
      ></div>

      <div
        className={cn(
          "relative z-10 flex flex-col flex-1 h-full",
          className
        )}
      >
        {children}
      </div>
    </div>
  );
};

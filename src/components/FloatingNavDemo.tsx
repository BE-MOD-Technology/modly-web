"use client";
import React from "react";
import { FloatingNav } from "./ui/floating-navbar";
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";

export function FloatingNavDemo() {
  const navItems = [
    {
      name: "Ana Sayfa",
      link: "/",
      icon: <IconHome className="h-4 w-4 text-white" />,
    },
    {
      name: "Özellikler",
      link: "#features",
      icon: <IconUser className="h-4 w-4 text-white" />,
    },
    {
      name: "İletişim",
      link: "#contact",
      icon: <IconMessage className="h-4 w-4 text-white" />,
    },
  ];
  return (
    <div className="relative w-full">
      <FloatingNav 
        navItems={navItems} 
        className="bg-black/80 border border-white/20 backdrop-blur-md"
      />
    </div>
  );
}

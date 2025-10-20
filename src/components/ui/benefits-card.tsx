"use client";
import React from "react";
import { cn } from "@/utils/Helpers";

interface BenefitsCardProps {
  children: React.ReactNode;
  className?: string;
  index?: number;
}

export const BenefitsCard = ({ 
  children, 
  className, 
  index = 0 
}: BenefitsCardProps) => {
  const colors = [
    "from-[#676767]/40 to-[#828387]/40",
    "from-[#828387]/40 to-[#95999E]/40", 
    "from-[#95999E]/40 to-[#7588A1]/40",
    "from-[#7588A1]/40 to-[#4E6D96]/40",
    "from-[#4E6D96]/40 to-[#32527B]/40",
    "from-[#32527B]/40 to-[#676767]/40"
  ];

  const borderColors = [
    "border-[#676767]/30",
    "border-[#828387]/30",
    "border-[#95999E]/30", 
    "border-[#7588A1]/30",
    "border-[#4E6D96]/30",
    "border-[#32527B]/30"
  ];

  const icons = [
    // Efficiency icon
    <svg key="efficiency" className="w-6 h-6 text-[#7588A1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>,
    // Shield icon
    <svg key="shield" className="w-6 h-6 text-[#7588A1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>,
    // Target icon
    <svg key="target" className="w-6 h-6 text-[#7588A1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>,
    // Globe icon
    <svg key="globe" className="w-6 h-6 text-[#7588A1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9m0 9c-5 0-9-4-9-9s4-9 9-9" />
    </svg>,
    // Automation icon
    <svg key="automation" className="w-6 h-6 text-[#7588A1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
    </svg>,
    // Focus icon
    <svg key="focus" className="w-6 h-6 text-[#7588A1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
    </svg>
  ];

  return (
    <div className={cn(
      "group relative overflow-hidden rounded-2xl border-2 p-6 transition-all duration-300 hover:scale-105 hover:shadow-xl",
      "bg-gradient-to-br from-zinc-900/90 to-zinc-800/70",
      "backdrop-blur-sm",
      borderColors[index % borderColors.length],
      className
    )}>
      {/* Gradient Background */}
      <div className={cn(
        "absolute inset-0 opacity-30 transition-opacity duration-300 group-hover:opacity-100 rounded-2xl",
        `bg-gradient-to-br ${colors[index % colors.length]}`
      )} />
      
      {/* Content */}
      <div className="relative z-10">
        <div className="mb-4 flex items-center gap-3">
          <div className="flex items-center justify-center">{icons[index % icons.length]}</div>
          <div className="h-1 w-8 rounded-full bg-gradient-to-r from-[#676767] to-[#32527B]" />
        </div>
        {children}
      </div>
      
      {/* Shine Effect */}
      <div className="absolute top-0 left-0 h-20 w-20 rounded-full bg-white/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
    </div>
  );
};

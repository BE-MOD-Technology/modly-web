'use client';
import React from 'react';

import { cn } from '@/utils/Helpers';

type AudienceCardProps = {
  children: React.ReactNode;
  className?: string;
  index?: number;
};

export const AudienceCard = ({
  children,
  className,
  index = 0,
}: AudienceCardProps) => {
  const colors = [
    'from-[#676767]/40 to-[#828387]/40',
    'from-[#828387]/40 to-[#95999E]/40',
    'from-[#95999E]/40 to-[#7588A1]/40',
    'from-[#7588A1]/40 to-[#4E6D96]/40',
  ];

  const borderColors = [
    'border-[#676767]/30',
    'border-[#828387]/30',
    'border-[#95999E]/30',
    'border-[#7588A1]/30',
  ];

  const icons = [
    // Building icon - Agencies
    <svg key="building" className="size-6 text-[#7588A1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>,
    // User icon - Brand managers
    <svg key="user" className="size-6 text-[#7588A1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    </svg>,
    // Chart icon - Marketing professionals
    <svg key="chart" className="size-6 text-[#7588A1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>,
    // Shield icon - Media teams
    <svg key="shield" className="size-6 text-[#7588A1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>,
  ];

  const accentColors = [
    'from-[#676767] to-[#828387]',
    'from-[#828387] to-[#95999E]',
    'from-[#95999E] to-[#7588A1]',
    'from-[#7588A1] to-[#4E6D96]',
  ];

  return (
    <div className={cn(
      'group relative overflow-hidden rounded-2xl border-2 p-6 transition-all duration-300 hover:scale-105 hover:shadow-xl',
      'bg-gradient-to-br from-zinc-900/90 to-zinc-800/70',
      'backdrop-blur-sm',
      borderColors[index % borderColors.length],
      className,
    )}
    >
      {/* Gradient Background */}
      <div className={cn(
        'absolute inset-0 opacity-30 transition-opacity duration-300 group-hover:opacity-100 rounded-2xl',
        `bg-gradient-to-br ${colors[index % colors.length]}`,
      )}
      />

      {/* Content */}
      <div className="relative z-10">
        <div className="mb-4 flex items-center gap-3">
          <div className="flex items-center justify-center">{icons[index % icons.length]}</div>
          <div className={cn(
            'h-1 w-8 rounded-full bg-gradient-to-r',
            accentColors[index % accentColors.length],
          )}
          />
        </div>
        {children}
      </div>

      {/* Shine Effect */}
      <div className="absolute left-0 top-0 size-20 rounded-full bg-white/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      {/* Corner Accent */}
      <div className={cn(
        'absolute top-0 right-0 h-16 w-16 rounded-bl-full opacity-20 transition-opacity duration-300 group-hover:opacity-40',
        `bg-gradient-to-br ${accentColors[index % accentColors.length]}`,
      )}
      />
    </div>
  );
};

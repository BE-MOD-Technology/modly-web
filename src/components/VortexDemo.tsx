'use client';

import { useTranslations } from 'next-intl';
import React from 'react';

import { Vortex } from './ui/vortex';

export function VortexDemo() {
  const t = useTranslations('Hero');

  return (
    <div className="min-h-screen w-full overflow-hidden">
      <Vortex
        backgroundColor="black"
        rangeY={800}
        particleCount={700}
        baseHue={200}
        baseSpeed={0.2}
        rangeSpeed={1.2}
        baseRadius={1.2}
        rangeRadius={2.0}
        className="flex size-full flex-col items-center justify-center px-2 py-4 md:px-10"
      >
        <h1 className="mt-20 max-w-4xl text-center text-3xl font-bold text-white md:mt-32 md:text-6xl">
          {t('title')}
        </h1>
        <p className="mt-6 max-w-2xl text-center text-sm text-gray-200 md:text-xl">
          {t('description')}
        </p>

        {/* Email signup */}
        <div className="mt-8">
          <div className="mx-auto max-w-md">
            <div className="flex rounded-lg border border-gray-600 bg-gray-800 shadow-sm">
              <input
                type="email"
                placeholder={t('email_placeholder')}
                className="flex-1 rounded-l-lg border-0 bg-transparent px-4 py-3 text-white placeholder:text-gray-400 focus:outline-none focus:ring-0"
              />
              <button type="button" className="rounded-r-lg bg-blue-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-blue-700">
                {t('start_button')}
              </button>
            </div>
            <p className="mt-2 text-sm text-gray-300">
              {t('email_consent')}
            </p>
          </div>
        </div>

        {/* Stats section */}
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="text-center">
            <div className="text-2xl font-bold text-white md:text-3xl">
              {t('stat1_number')}
            </div>
            <div className="mt-1 text-sm text-gray-300">
              {t('stat1_label')}
            </div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-white md:text-3xl">
              {t('stat2_number')}
            </div>
            <div className="mt-1 text-sm text-gray-300">
              {t('stat2_label')}
            </div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-white md:text-3xl">
              {t('stat3_number')}
            </div>
            <div className="mt-1 text-sm text-gray-300">
              {t('stat3_label')}
            </div>
          </div>
        </div>
      </Vortex>
    </div>
  );
}

'use client';

import { useTranslations } from 'next-intl';

import { VortexDemo } from '@/components/VortexDemo';
import { SupportedPlatforms } from '@/templates/SupportedPlatforms';

export const Hero = () => {
  const t = useTranslations('Hero');

  return (
    <div className="relative overflow-hidden bg-black pt-20">
      {/* Vortex Demo Section */}
      <div className="relative z-10 w-full">
        <VortexDemo />
      </div>
      {/* Supported Platforms Section */}
      <div className="relative z-10 w-full">
        <SupportedPlatforms />
      </div>

      {/* CTA Section */}
      <div className="relative z-10 w-full px-4 pb-16">
        <div className="mx-auto max-w-4xl text-center">
          <div className="rounded-3xl border-2 border-[#676767]/30 bg-gradient-to-br from-zinc-900/90 to-zinc-800/70 p-12 backdrop-blur-sm">
            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
              {t('cta_title')}
            </h2>
            <p className="mb-8 text-neutral-400 md:text-lg">
              {t('cta_description')}
            </p>
            <a
              href="https://dashboard.modly.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-lg bg-gradient-to-r from-[#676767] to-[#32527B] px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:scale-105 hover:from-[#828387] hover:to-[#4E6D96]"
            >
              {t('cta_button')}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

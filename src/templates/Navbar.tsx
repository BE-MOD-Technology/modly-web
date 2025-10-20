'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { LocaleSwitcher } from '@/components/LocaleSwitcher';

export const Navbar = () => {
  const t = useTranslations('Navbar');

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <nav className="fixed inset-x-0 top-0 z-50 flex items-center justify-between border-b border-gray-800 bg-black/95 px-6 py-4 text-white backdrop-blur-md">
      <button
        type="button"
        onClick={scrollToTop}
        className="flex items-center transition-opacity hover:opacity-80"
        aria-label="Modly.me"
      >
        <Image
          src="/logo 140x60.png"
          alt="Modly.me"
          width={140}
          height={60}
          priority
          className="hidden md:block"
        />
        <Image
          src="/logo 70x30.png"
          alt="Modly.me"
          width={70}
          height={30}
          priority
          className="block md:hidden"
        />
      </button>
      <div className="flex items-center gap-8">
        <a href="#features" className="text-base transition-colors hover:text-[#7588A1] md:text-lg">{t('features')}</a>
        <a href="#faq" className="text-base transition-colors hover:text-[#7588A1] md:text-lg">{t('faq')}</a>
        <a href="#contact" className="text-base transition-colors hover:text-[#7588A1] md:text-lg">{t('contact')}</a>
        <button className="rounded-lg bg-gradient-to-r from-[#676767] to-[#32527B] px-6 py-2 text-sm font-semibold text-white transition-all duration-300 hover:scale-105 hover:from-[#828387] hover:to-[#4E6D96]">
          {t('demo_request')}
        </button>
        <LocaleSwitcher />
      </div>
    </nav>
  );
};

'use client';

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
    <nav className="fixed inset-x-0 top-0 z-50 flex items-center justify-between border-b border-border bg-background/95 px-6 py-4 text-text backdrop-blur-md">
      <button
        type="button"
        onClick={scrollToTop}
        className="text-2xl font-bold tracking-tight text-primary transition-opacity hover:opacity-80 md:text-3xl"
      >
        Modly.me
      </button>
      <div className="flex items-center gap-6">
        <a href="#features" className="text-base transition-colors hover:text-primary md:text-lg">{t('features')}</a>
        <a href="#faq" className="text-base transition-colors hover:text-primary md:text-lg">{t('faq')}</a>
        <a href="#contact" className="text-base transition-colors hover:text-primary md:text-lg">{t('contact')}</a>
        <a
          href="https://dashboard.modly.me/signin"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 md:text-base"
        >
          {t('sign_in')}
        </a>
        <LocaleSwitcher />
      </div>
    </nav>
  );
};

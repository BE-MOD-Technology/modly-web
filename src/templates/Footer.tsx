import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { CenteredFooter } from '@/features/landing/CenteredFooter';
import { Section } from '@/features/landing/Section';
import { AppConfig } from '@/utils/AppConfig';

import { Logo } from './Logo';

export const Footer = () => {
  const t = useTranslations('Footer');

  return (
    <footer className="py-8 text-center text-muted border-t border-border bg-background">
      <div>{t('copyright')}</div>
      <div className="mt-2">
        <a href="https://modly.me" target="_blank" rel="noopener noreferrer" className="underline text-primary hover:text-accent transition-colors">
          {t('website')}
        </a>
      </div>
    </footer>
  );
};

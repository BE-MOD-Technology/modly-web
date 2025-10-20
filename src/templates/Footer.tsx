import { useTranslations } from 'next-intl';

import { Link } from '@/libs/i18nNavigation';

export const Footer = () => {
  const t = useTranslations('Footer');

  return (
    <footer className="bg-black py-6 text-left text-muted">
      <div className="px-4">
        <div className="text-sm text-neutral-400">{t('copyright')}</div>
        <div className="mt-2 flex gap-4">
          <a href="https://modly.me" target="_blank" rel="noopener noreferrer" className="text-sm text-[#7588A1] underline transition-colors hover:text-white">
            {t('website')}
          </a>
          <Link href="/privacy-policy" className="text-sm text-[#7588A1] underline transition-colors hover:text-white">
            {t('privacy_policy')}
          </Link>
        </div>
      </div>
    </footer>
  );
};

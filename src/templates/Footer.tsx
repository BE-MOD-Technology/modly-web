import { useTranslations } from 'next-intl';

export const Footer = () => {
  const t = useTranslations('Footer');

  return (
    <footer className="bg-black py-6 text-left text-muted">
      <div className="px-4">
        <div className="text-sm text-neutral-400">{t('copyright')}</div>
        <div className="mt-1">
          <a href="https://modly.me" target="_blank" rel="noopener noreferrer" className="text-sm text-[#7588A1] underline transition-colors hover:text-white">
            {t('website')}
          </a>
        </div>
      </div>
    </footer>
  );
};

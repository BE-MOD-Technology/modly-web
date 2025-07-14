import { useTranslations } from 'next-intl';

export const Footer = () => {
  const t = useTranslations('Footer');

  return (
    <footer className="border-t border-border bg-background py-12 text-center text-muted">
      <div className="text-base leading-relaxed md:text-lg">{t('copyright')}</div>
      <div className="mt-3">
        <a href="https://modly.me" target="_blank" rel="noopener noreferrer" className="text-base text-primary underline transition-colors hover:text-accent md:text-lg">
          {t('website')}
        </a>
      </div>
    </footer>
  );
};

import { useTranslations } from 'next-intl';

import { Section } from '@/features/landing/Section';

export const Contact = () => {
  const t = useTranslations('Contact');

  return (
    <Section id="contact" title={t('section_title')} description={t('description')}>
      <div className="mx-auto max-w-4xl">
        <div className="text-center">
          <div>
            <h4 className="mb-2 text-lg font-semibold text-primary">{t('email_label')}</h4>
            <a href="mailto:info@modly.me" className="text-base text-muted transition-colors hover:text-primary md:text-lg">
              info@modly.me
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
};

import { useTranslations } from 'next-intl';

import { Background } from '@/components/Background';
import { Section } from '@/features/landing/Section';

export const About = () => {
  const t = useTranslations('About');

  return (
    <Background>
      <Section className="py-16">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-6 text-base font-semibold uppercase tracking-wider text-primary md:text-lg">
            {t('section_title')}
          </h2>
          <h3 className="mb-8 text-3xl font-bold leading-tight text-primary md:text-4xl">
            {t('main_title')}
          </h3>
          <p className="text-lg leading-relaxed text-muted md:text-xl">
            {t('description')}
          </p>
        </div>
      </Section>
    </Background>
  );
};

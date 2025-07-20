import { useTranslations } from 'next-intl';

import { Section } from '@/features/landing/Section';

export const Hero = () => {
  const t = useTranslations('Hero');
  return (
    <Section className="flex min-h-screen items-center justify-center bg-background pt-20">
      <div className="text-center">
        <h1 className="mx-auto max-w-5xl text-5xl font-bold leading-tight tracking-tight text-primary md:text-6xl">
          {t('title')}
        </h1>
        <p className="mx-auto mt-8 max-w-screen-md text-xl leading-relaxed text-muted md:text-2xl">
          {t('description')}
        </p>
      </div>
    </Section>
  );
};

import { useTranslations } from 'next-intl';
import { Section } from '@/features/landing/Section';

export const Hero = () => {
  const t = useTranslations('Hero');
  return (
    <Section className="py-36 bg-background">
      <div className="text-center">
        <h1 className="text-5xl font-bold tracking-tight text-primary">
          {t('title')}
        </h1>
        <p className="mx-auto mt-5 max-w-screen-md text-xl text-muted">
          {t('description')}
        </p>
        <div className="mt-8 flex justify-center gap-x-5 gap-y-3 max-sm:flex-col">
          <a className="rounded bg-primary px-8 py-3 text-lg font-semibold text-white shadow transition hover:bg-primary-dark" href="#demo">
            {t('primary_button')}
          </a>
        </div>
      </div>
    </Section>
  );
}

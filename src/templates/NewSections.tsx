import { useTranslations } from 'next-intl';

import { Background } from '@/components/Background';
import { Section } from '@/features/landing/Section';

export const MissingOut = () => {
  const t = useTranslations('MissingOut');

  return (
    <Section className="py-20">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="mb-10 text-3xl font-bold leading-tight text-primary md:text-4xl">
          {t('section_title')}
        </h2>
        <p className="mb-10 text-xl leading-relaxed text-muted md:text-2xl">
          {t('main_question')}
        </p>
        <div className="mb-10 space-y-6">
          <p className="text-lg text-text md:text-xl">
            {t('question1')}
          </p>
          <p className="text-lg text-text md:text-xl">
            {t('question2')}
          </p>
          <p className="text-lg text-text md:text-xl">
            {t('question3')}
          </p>
        </div>
        <p className="text-xl font-semibold leading-tight text-primary md:text-2xl">
          {t('conclusion')}
        </p>
      </div>
    </Section>
  );
};

export const CuriosityQuestions = () => {
  const t = useTranslations('CuriosityQuestions');

  return (
    <Background>
      <Section className="py-20">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-10 text-3xl font-bold leading-tight text-primary md:text-4xl">
            {t('section_title')}
          </h2>
          <div className="mb-10 space-y-8">
            <p className="text-xl font-medium leading-relaxed text-text md:text-2xl">{t('question1')}</p>
            <p className="text-xl font-medium leading-relaxed text-text md:text-2xl">{t('question2')}</p>
            <p className="text-xl font-medium leading-relaxed text-text md:text-2xl">{t('question3')}</p>
          </div>
          <p className="text-xl font-semibold leading-tight text-primary md:text-2xl">
            {t('conclusion')}
          </p>
        </div>
      </Section>
    </Background>
  );
};

export const DataInsights = () => {
  const t = useTranslations('DataInsights');

  return (
    <Section className="py-20">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="mb-10 text-3xl font-bold leading-tight text-primary md:text-4xl">
          {t('section_title')}
        </h2>
        <div className="mb-10 space-y-8">
          <div className="rounded-xl border border-border bg-background-card p-8">
            <p className="text-lg font-medium leading-relaxed text-text md:text-xl">
              "
              {t('insight1')}
              "
            </p>
          </div>
          <div className="rounded-xl border border-border bg-background-card p-8">
            <p className="text-lg font-medium leading-relaxed text-text md:text-xl">
              "
              {t('insight2')}
              "
            </p>
          </div>
          <div className="rounded-xl border border-border bg-background-card p-8">
            <p className="text-lg font-medium leading-relaxed text-text md:text-xl">
              "
              {t('insight3')}
              "
            </p>
          </div>
        </div>
        <div className="space-y-6">
          <p className="text-xl font-semibold leading-tight text-primary md:text-2xl">{t('conclusion1')}</p>
          <p className="text-xl font-semibold leading-tight text-primary md:text-2xl">{t('conclusion2')}</p>
        </div>
      </div>
    </Section>
  );
};

export const CrisisDrama = () => {
  const t = useTranslations('CrisisDrama');

  return (
    <Background>
      <Section className="py-20">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-10 text-3xl font-bold leading-tight text-primary md:text-4xl">
            {t('section_title')}
          </h2>
          <div className="mb-10 space-y-8">
            <p className="text-lg leading-relaxed text-text md:text-xl">{t('scenario1')}</p>
            <p className="text-lg leading-relaxed text-text md:text-xl">{t('scenario2')}</p>
            <p className="my-10 text-2xl font-bold leading-tight text-primary md:text-3xl">{t('reality')}</p>
          </div>
          <div className="space-y-6">
            <p className="text-xl font-semibold leading-tight text-primary md:text-2xl">{t('solution1')}</p>
            <p className="text-xl font-semibold leading-tight text-primary md:text-2xl">{t('solution2')}</p>
          </div>
        </div>
      </Section>
    </Background>
  );
};

export const DecisionSupport = () => {
  const t = useTranslations('DecisionSupport');

  return (
    <Section className="py-20">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="mb-10 text-3xl font-bold leading-tight text-primary md:text-4xl">
          {t('section_title')}
        </h2>
        <div className="mb-10 space-y-8">
          <p className="text-lg leading-relaxed text-text md:text-xl">{t('question1')}</p>
          <p className="text-lg leading-relaxed text-text md:text-xl">{t('question2')}</p>
          <p className="text-lg leading-relaxed text-text md:text-xl">{t('question3')}</p>
        </div>
        <p className="text-xl font-semibold leading-tight text-primary md:text-2xl">
          {t('conclusion')}
        </p>
      </div>
    </Section>
  );
};

export const ClosingStatements = () => {
  const t = useTranslations('ClosingStatements');

  return (
    <Background>
      <Section className="py-20">
        <div className="mx-auto max-w-4xl text-center">
          <div className="space-y-10">
            <p className="text-xl font-bold leading-tight text-primary md:text-2xl">{t('statement1')}</p>
            <p className="text-xl font-bold leading-tight text-primary md:text-2xl">{t('statement2')}</p>
            <p className="text-xl font-bold leading-tight text-primary md:text-2xl">{t('statement3')}</p>
            <p className="text-2xl font-bold leading-tight text-primary md:text-3xl">{t('statement4')}</p>
          </div>
        </div>
      </Section>
    </Background>
  );
};

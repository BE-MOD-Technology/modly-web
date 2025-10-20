import { useTranslations } from 'next-intl';

import { Background } from '@/components/Background';
import { Section } from '@/features/landing/Section';

export const MissingOut = () => {
  const t = useTranslations('MissingOut');

  return (
    <section className="w-full bg-black px-4 py-16">
      <div className="w-full">
        <div className="mb-12 text-center">
          <h2 className="mb-6 text-center text-base font-semibold uppercase tracking-wider text-[#7588A1] md:text-lg">
            {t('section_title')}
          </h2>
          <p className="mx-auto max-w-4xl text-lg leading-relaxed text-neutral-400 md:text-xl">
            {t('main_question')}
          </p>
        </div>

        <div className="mx-auto max-w-4xl space-y-6">
          <div className="rounded-lg border border-[#676767]/30 bg-zinc-900/50 p-6">
            <p className="text-lg text-neutral-300 md:text-xl">
              {t('question1')}
            </p>
          </div>
          <div className="rounded-lg border border-[#676767]/30 bg-zinc-900/50 p-6">
            <p className="text-lg text-neutral-300 md:text-xl">
              {t('question2')}
            </p>
          </div>
          <div className="rounded-lg border border-[#676767]/30 bg-zinc-900/50 p-6">
            <p className="text-lg text-neutral-300 md:text-xl">
              {t('question3')}
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-xl font-semibold leading-tight text-white md:text-2xl">
            {t('conclusion')}
          </p>
        </div>
      </div>
    </section>
  );
};

export const CuriosityQuestions = () => {
  const t = useTranslations('CuriosityQuestions');

  return (
    <section className="w-full bg-black px-4 py-16">
      <div className="w-full">
        <div className="mb-12 text-center">
          <h2 className="mb-6 text-center text-base font-semibold uppercase tracking-wider text-[#7588A1] md:text-lg">
            {t('section_title')}
          </h2>
        </div>

        <div className="mx-auto max-w-4xl space-y-6">
          <div className="rounded-lg border border-[#676767]/30 bg-zinc-900/50 p-6">
            <p className="text-lg text-neutral-300 md:text-xl">
              {t('question1')}
            </p>
          </div>
          <div className="rounded-lg border border-[#676767]/30 bg-zinc-900/50 p-6">
            <p className="text-lg text-neutral-300 md:text-xl">
              {t('question2')}
            </p>
          </div>
          <div className="rounded-lg border border-[#676767]/30 bg-zinc-900/50 p-6">
            <p className="text-lg text-neutral-300 md:text-xl">
              {t('question3')}
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-xl font-semibold leading-tight text-white md:text-2xl">
            {t('conclusion')}
          </p>
        </div>
      </div>
    </section>
  );
};

export const DataInsights = () => {
  const t = useTranslations('DataInsights');

  return (
    <section className="w-full bg-black px-4 py-16">
      <div className="w-full">
        <div className="mb-12 text-center">
          <h2 className="mb-6 text-center text-base font-semibold uppercase tracking-wider text-[#7588A1] md:text-lg">
            {t('section_title')}
          </h2>
        </div>

        <div className="mx-auto max-w-4xl space-y-6">
          <div className="rounded-lg border border-[#676767]/30 bg-zinc-900/50 p-6">
            <p className="text-lg text-neutral-300 md:text-xl">
              "
              {t('insight1')}
              "
            </p>
          </div>
          <div className="rounded-lg border border-[#676767]/30 bg-zinc-900/50 p-6">
            <p className="text-lg text-neutral-300 md:text-xl">
              "
              {t('insight2')}
              "
            </p>
          </div>
          <div className="rounded-lg border border-[#676767]/30 bg-zinc-900/50 p-6">
            <p className="text-lg text-neutral-300 md:text-xl">
              "
              {t('insight3')}
              "
            </p>
          </div>
        </div>

        <div className="mt-12 space-y-4 text-center">
          <p className="text-xl font-semibold leading-tight text-white md:text-2xl">
            {t('conclusion1')}
          </p>
          <p className="text-xl font-semibold leading-tight text-white md:text-2xl">
            {t('conclusion2')}
          </p>
        </div>
      </div>
    </section>
  );
};

export const CrisisDrama = () => {
  const t = useTranslations('CrisisDrama');

  return (
    <section className="w-full bg-black px-4 py-16">
      <div className="w-full">
        <div className="mb-12 text-center">
          <h2 className="mb-6 text-center text-base font-semibold uppercase tracking-wider text-[#7588A1] md:text-lg">
            {t('section_title')}
          </h2>
        </div>

        <div className="mx-auto max-w-4xl space-y-6">
          <div className="rounded-lg border border-[#676767]/30 bg-zinc-900/50 p-6">
            <p className="text-lg text-neutral-300 md:text-xl">
              {t('scenario1')}
            </p>
          </div>
          <div className="rounded-lg border border-[#676767]/30 bg-zinc-900/50 p-6">
            <p className="text-lg text-neutral-300 md:text-xl">
              {t('scenario2')}
            </p>
          </div>
          <div className="rounded-lg border border-[#676767]/30 bg-zinc-900/50 p-6">
            <p className="text-lg text-neutral-300 md:text-xl">
              {t('reality')}
            </p>
          </div>
        </div>

        <div className="mt-12 space-y-4 text-center">
          <p className="text-xl font-semibold leading-tight text-white md:text-2xl">
            {t('solution1')}
          </p>
          <p className="text-xl font-semibold leading-tight text-white md:text-2xl">
            {t('solution2')}
          </p>
        </div>
      </div>
    </section>
  );
};

export const DecisionSupport = () => {
  const t = useTranslations('DecisionSupport');

  return (
    <section className="w-full bg-black px-4 py-16">
      <div className="w-full">
        <div className="mb-12 text-center">
          <h2 className="mb-6 text-center text-base font-semibold uppercase tracking-wider text-[#7588A1] md:text-lg">
            {t('section_title')}
          </h2>
        </div>

        <div className="mx-auto max-w-4xl space-y-6">
          <div className="rounded-lg border border-[#676767]/30 bg-zinc-900/50 p-6">
            <p className="text-lg text-neutral-300 md:text-xl">
              {t('question1')}
            </p>
          </div>
          <div className="rounded-lg border border-[#676767]/30 bg-zinc-900/50 p-6">
            <p className="text-lg text-neutral-300 md:text-xl">
              {t('question2')}
            </p>
          </div>
          <div className="rounded-lg border border-[#676767]/30 bg-zinc-900/50 p-6">
            <p className="text-lg text-neutral-300 md:text-xl">
              {t('question3')}
            </p>
          </div>
        </div>

        <div className="mt-12 space-y-4 text-center">
          <p className="text-xl font-semibold leading-tight text-white md:text-2xl">
            {t('conclusion')}
          </p>
        </div>
      </div>
    </section>
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

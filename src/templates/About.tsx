import { useTranslations } from 'next-intl';

export const About = () => {
  const t = useTranslations('About');

  return (
    <section className="w-full bg-black px-4 py-16">
      <div className="w-full">
        <div className="text-center">
          <h2 className="mb-6 text-base font-semibold uppercase tracking-wider text-[#7588A1] md:text-lg">
            {t('section_title')}
          </h2>
          <h3 className="mb-8 text-3xl font-bold leading-tight text-white md:text-4xl">
            {t('main_title')}
          </h3>
          <p className="mx-auto max-w-4xl text-lg leading-relaxed text-neutral-400 md:text-xl">
            {t('description')}
          </p>
        </div>
      </div>
    </section>
  );
};

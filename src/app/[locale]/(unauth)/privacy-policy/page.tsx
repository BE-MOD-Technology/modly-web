import type { Metadata } from 'next';
import { useTranslations } from 'next-intl';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';

import { AllLocales } from '@/utils/AppConfig';

export function generateStaticParams() {
  return AllLocales.map(locale => ({ locale }));
}

export async function generateMetadata(props: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations({
    locale: props.params.locale,
    namespace: 'PrivacyPolicy',
  });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

export default function PrivacyPolicy(props: { params: { locale: string } }) {
  unstable_setRequestLocale(props.params.locale);
  const t = useTranslations('PrivacyPolicy');

  const renderContentWithLinks = (content: string) => {
    const parts = content.split(/(https?:\/\/\S+|[\w.%-]+@[\w.-]+\.[a-z]{2,})/gi);

    return parts.map((part, idx) => {
      if (part.match(/^https?:\/\//)) {
        return (
          <a
            key={`link-${idx}`}
            href={part}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-[#7588A1] underline transition-colors hover:text-white"
          >
            {part}
          </a>
        );
      }
      else if (part.match(/^[\w.%-]+@[\w.-]+\.[a-z]{2,}$/i)) {
        return (
          <a
            key={`email-${idx}`}
            href={`mailto:${part}`}
            className="font-medium text-[#7588A1] underline transition-colors hover:text-white"
          >
            {part}
          </a>
        );
      }
      return part;
    });
  };

  return (
    <div className="min-h-screen bg-black px-6 py-32">
      <div className="mx-auto max-w-4xl space-y-10">
        <div className="space-y-4">
          <h1 className="bg-gradient-to-r from-[#7588A1] to-[#32527B] bg-clip-text text-5xl font-bold text-transparent">
            {t('title')}
          </h1>
          <div className="space-y-1 text-gray-300">
            <p className="text-base">{t('last_updated')}</p>
            <p className="text-base">{t('publisher')}</p>
          </div>
          <p className="pt-4 text-lg leading-relaxed text-gray-100">{t('intro')}</p>
        </div>

        <div className="space-y-8">
          <section className="space-y-3">
            <h2 className="text-2xl font-semibold text-white">{t('section1_title')}</h2>
            <p className="whitespace-pre-line leading-relaxed text-gray-100">{renderContentWithLinks(t('section1_content'))}</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-semibold text-white">{t('section2_title')}</h2>
            <p className="whitespace-pre-line leading-relaxed text-gray-100">{renderContentWithLinks(t('section2_content'))}</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-semibold text-white">{t('section3_title')}</h2>
            <p className="whitespace-pre-line leading-relaxed text-gray-100">{renderContentWithLinks(t('section3_content'))}</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-semibold text-white">{t('section4_title')}</h2>
            <p className="whitespace-pre-line leading-relaxed text-gray-100">{renderContentWithLinks(t('section4_content'))}</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-semibold text-white">{t('section5_title')}</h2>
            <p className="whitespace-pre-line leading-relaxed text-gray-100">{renderContentWithLinks(t('section5_content'))}</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-semibold text-white">{t('section6_title')}</h2>
            <p className="whitespace-pre-line leading-relaxed text-gray-100">{renderContentWithLinks(t('section6_content'))}</p>
          </section>
        </div>
      </div>
    </div>
  );
}
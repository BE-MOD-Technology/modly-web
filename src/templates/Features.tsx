import { useTranslations } from 'next-intl';

import { Background } from '@/components/Background';
import { Section } from '@/features/landing/Section';

export const Features = () => {
  const t = useTranslations('Features');
  const features = [
    {
      title: t('feature1_title'),
      description: t('feature1_description'),
    },
    {
      title: t('feature2_title'),
      description: t('feature2_description'),
    },
    {
      title: t('feature3_title'),
      description: t('feature3_description'),
    },
    {
      title: t('feature4_title'),
      description: t('feature4_description'),
    },
    {
      title: t('feature5_title'),
      description: t('feature5_description'),
    },
    {
      title: t('feature6_title'),
      description: t('feature6_description'),
    },
  ];

  return (
    <Background>
      <Section
        id="features"
        subtitle={t('section_subtitle')}
        title={t('section_title')}
        description={t('section_description')}
      >
        <div className="grid grid-cols-1 gap-x-6 gap-y-8 md:grid-cols-2">
          {features.map((feature, idx) => (
            <div key={idx} className="rounded-xl border border-border bg-background-card p-8">
              <div className="mb-4 text-xl font-bold leading-tight text-primary md:text-2xl">
                {feature.title}
              </div>
              <div className="text-base leading-relaxed text-muted md:text-lg">
                {feature.description}
              </div>
            </div>
          ))}
        </div>
      </Section>
    </Background>
  );
};

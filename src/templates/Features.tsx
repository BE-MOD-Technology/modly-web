import { useTranslations } from 'next-intl';

import { Background } from '@/components/Background';
import { FeatureCard } from '@/features/landing/FeatureCard';
import { Section } from '@/features/landing/Section';

export const Features = () => {
  const t = useTranslations('Features');
  const features = [
    t('feature1_title'),
    t('feature2_title'),
    t('feature3_title'),
    t('feature4_title'),
    t('feature5_title'),
    t('feature6_title'),
  ];
  const descriptions = [
    t('section_description'),
    '', '', '', '', '',
  ];
  return (
    <Background>
      <Section
        subtitle={t('section_subtitle')}
        title={t('section_title')}
        description={t('section_description')}
      >
        <div className="grid grid-cols-1 gap-x-3 gap-y-8 md:grid-cols-2">
          {features.map((feature, idx) => (
            <div key={idx} className="rounded-xl border border-border bg-background-card p-5">
              <div className="text-lg font-bold mb-2 text-primary">{feature}</div>
              <div className="text-muted">{descriptions[idx] || ''}</div>
            </div>
          ))}
        </div>
      </Section>
    </Background>
  );
};

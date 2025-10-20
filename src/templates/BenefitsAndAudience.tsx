import { useTranslations } from 'next-intl';
import { BackgroundGradient } from '@/components/ui/background-gradient';
import { BenefitsCard } from '@/components/ui/benefits-card';
import { AudienceCard } from '@/components/ui/audience-card';

export const BenefitsAndAudience = () => {
  const tBenefits = useTranslations('Benefits');
  const tAudience = useTranslations('TargetAudience');
  const tFeatures = useTranslations('Features');

  const features = [
    {
      title: tFeatures('feature1_title'),
      description: tFeatures('feature1_description'),
      icon: (
        <svg className="w-8 h-8 text-[#7588A1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    },
    {
      title: tFeatures('feature2_title'),
      description: tFeatures('feature2_description'),
      icon: (
        <svg className="w-8 h-8 text-[#7588A1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
        </svg>
      )
    },
    {
      title: tFeatures('feature3_title'),
      description: tFeatures('feature3_description'),
      icon: (
        <svg className="w-8 h-8 text-[#7588A1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: tFeatures('feature4_title'),
      description: tFeatures('feature4_description'),
      icon: (
        <svg className="w-8 h-8 text-[#7588A1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L4.268 18.5c-.77.833.192 2.5 1.732 2.5z" />
        </svg>
      )
    },
    {
      title: tFeatures('feature5_title'),
      description: tFeatures('feature5_description'),
      icon: (
        <svg className="w-8 h-8 text-[#7588A1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9m0 9c-5 0-9-4-9-9s4-9 9-9" />
        </svg>
      )
    },
    {
      title: tFeatures('feature6_title'),
      description: tFeatures('feature6_description'),
      icon: (
        <svg className="w-8 h-8 text-[#7588A1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      )
    }
  ];
  
  return (
    <div className="w-full px-4 py-16 bg-black">
      <div className="grid grid-cols-1 gap-12">
        {/* Yeteneklerimiz Bölümü */}
        <div>
          <h2 className="mb-6 text-center text-base font-semibold uppercase tracking-wider text-[#7588A1] md:text-lg">
            {tFeatures('section_subtitle')}
          </h2>
          <h3 className="mb-8 text-center text-3xl font-bold leading-tight text-white md:text-4xl">
            {tFeatures('section_title')}
          </h3>
          <p className="mb-12 text-center text-lg leading-relaxed text-neutral-400 md:text-xl max-w-4xl mx-auto">
            {tFeatures('section_description')}
          </p>
        </div>

        {/* 6 Gradient Kartlar */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
          {features.map((feature, index) => (
            <BackgroundGradient
              key={index}
              className="rounded-[22px] max-w-sm p-6 bg-zinc-900 h-full"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h4 className="text-xl font-bold text-white mb-3">
                {feature.title}
              </h4>
              <p className="text-sm text-neutral-400 leading-relaxed">
                {feature.description}
              </p>
            </BackgroundGradient>
          ))}
        </div>

        {/* Faydalar Bölümü */}
        <div>
          <h2 className="mb-10 text-center text-2xl font-bold leading-tight text-white md:text-3xl">
            {tBenefits('section_title')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <BenefitsCard index={0}>
              <p className="text-sm text-neutral-400 leading-relaxed">
                {tBenefits('benefit1')}
              </p>
            </BenefitsCard>
            <BenefitsCard index={1}>
              <p className="text-sm text-neutral-400 leading-relaxed">
                {tBenefits('benefit2')}
              </p>
            </BenefitsCard>
            <BenefitsCard index={2}>
              <p className="text-sm text-neutral-400 leading-relaxed">
                {tBenefits('benefit3')}
              </p>
            </BenefitsCard>
            <BenefitsCard index={3}>
              <p className="text-sm text-neutral-400 leading-relaxed">
                {tBenefits('benefit4')}
              </p>
            </BenefitsCard>
            <BenefitsCard index={4}>
              <p className="text-sm text-neutral-400 leading-relaxed">
                {tBenefits('benefit5')}
              </p>
            </BenefitsCard>
            <BenefitsCard index={5}>
              <p className="text-sm text-neutral-400 leading-relaxed">
                {tBenefits('benefit6')}
              </p>
            </BenefitsCard>
          </div>
        </div>

        {/* Kimler için tasarlandı Bölümü */}
        <div>
          <h2 className="mb-10 text-center text-2xl font-bold leading-tight text-white md:text-3xl">
            {tAudience('section_title')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <AudienceCard index={0}>
              <p className="text-sm text-neutral-400 leading-relaxed">
                {tAudience('audience1')}
              </p>
            </AudienceCard>
            <AudienceCard index={1}>
              <p className="text-sm text-neutral-400 leading-relaxed">
                {tAudience('audience2')}
              </p>
            </AudienceCard>
            <AudienceCard index={2}>
              <p className="text-sm text-neutral-400 leading-relaxed">
                {tAudience('audience3')}
              </p>
            </AudienceCard>
            <AudienceCard index={3}>
              <p className="text-sm text-neutral-400 leading-relaxed">
                {tAudience('audience4')}
              </p>
            </AudienceCard>
          </div>
        </div>
      </div>
    </div>
  );
};

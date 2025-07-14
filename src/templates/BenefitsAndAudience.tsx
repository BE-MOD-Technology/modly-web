import { useTranslations } from 'next-intl';

export const BenefitsAndAudience = () => {
  const tBenefits = useTranslations('Benefits');
  const tAudience = useTranslations('TargetAudience');
  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <div className="grid grid-cols-1 gap-12">
        {/* Faydalar Bölümü */}
        <div>
          <h2 className="mb-10 text-center text-2xl font-bold leading-tight text-primary md:text-3xl">
            {tBenefits('section_title')}
          </h2>
          <ul className="space-y-4 text-center text-base leading-relaxed md:text-lg">
            <li>{tBenefits('benefit1')}</li>
            <li>{tBenefits('benefit2')}</li>
            <li>{tBenefits('benefit3')}</li>
            <li>{tBenefits('benefit4')}</li>
            <li>{tBenefits('benefit5')}</li>
            <li>{tBenefits('benefit6')}</li>
          </ul>
        </div>

        {/* Kimler için tasarlandı Bölümü */}
        <div>
          <h2 className="mb-10 text-center text-2xl font-bold leading-tight text-primary md:text-3xl">
            {tAudience('section_title')}
          </h2>
          <ul className="space-y-4 text-center text-base leading-relaxed md:text-lg">
            <li>{tAudience('audience1')}</li>
            <li>{tAudience('audience2')}</li>
            <li>{tAudience('audience3')}</li>
            <li>{tAudience('audience4')}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

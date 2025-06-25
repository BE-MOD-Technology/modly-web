import { useTranslations } from 'next-intl';

export const BenefitsAndAudience = () => {
  const tBenefits = useTranslations('Benefits');
  const tAudience = useTranslations('TargetAudience');
  return (
    <div className="max-w-3xl mx-auto py-16">
      <h2 className="text-2xl font-bold text-center mb-8 text-primary">{tBenefits('section_title')}</h2>
      <ul className="list-disc list-inside space-y-2 mb-16">
        <li>{tBenefits('benefit1')}</li>
        <li>{tBenefits('benefit2')}</li>
        <li>{tBenefits('benefit3')}</li>
        <li>{tBenefits('benefit4')}</li>
        <li>{tBenefits('benefit5')}</li>
        <li>{tBenefits('benefit6')}</li>
      </ul>
      <h2 className="text-2xl font-bold text-center mb-8 text-primary">{tAudience('section_title')}</h2>
      <ul className="list-disc list-inside space-y-2">
        <li>{tAudience('audience1')}</li>
        <li>{tAudience('audience2')}</li>
        <li>{tAudience('audience3')}</li>
        <li>{tAudience('audience4')}</li>
        <li>{tAudience('audience5')}</li>
      </ul>
    </div>
  );
} 
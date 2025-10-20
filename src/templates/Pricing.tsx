import { useTranslations } from 'next-intl';

import { Section } from '@/features/landing/Section';

export const Pricing = () => {
  const t = useTranslations('Pricing');
  const plans = [
    {
      name: t('free_plan_name'),
      price: '₺299',
      description: t('free_plan_description'),
      features: [
        '3 Sosyal Medya Hesabı',
        'Temel Raporlama',
        'E-posta Desteği',
      ],
      cta: t('button_text'),
    },
    {
      name: t('premium_plan_name'),
      price: '₺599',
      description: t('premium_plan_description'),
      features: [
        '10 Sosyal Medya Hesabı',
        'Gelişmiş Raporlama',
        'Alarm Sistemi',
        'Öncelikli Destek',
      ],
      cta: t('button_text'),
    },
    {
      name: t('enterprise_plan_name'),
      price: t('enterprise_plan_name') === 'Kurumsal' ? 'Özel' : 'Custom',
      description: t('enterprise_plan_description'),
      features: [
        'Sınırsız Hesap',
        'Özel Entegrasyonlar',
        '7/24 Destek',
        'Özel Eğitim',
      ],
      cta: t('button_text'),
    },
  ];
  return (
    <Section title={t('section_title')} description={t('section_description')}>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {plans.map((plan, idx) => {
          const isPopular = idx === 1; // Premium plan
          return (
            <div key={idx} className={`relative rounded-lg border p-8 transition-all duration-200 ${
              isPopular 
                ? 'border-blue-500 bg-blue-50 shadow-lg dark:border-blue-400 dark:bg-blue-900/10' 
                : 'border-gray-200 bg-white hover:shadow-md dark:border-gray-700 dark:bg-gray-800'
            }`}>
              {/* Popular badge */}
              {isPopular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-blue-600 px-4 py-1 text-sm font-medium text-white">
                  Most popular
                </div>
              )}
              
              <div className="text-center">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{plan.name}</h3>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{plan.description}</p>
                
                <div className="mt-6 flex items-baseline justify-center">
                  <span className="text-4xl font-bold text-gray-900 dark:text-white">{plan.price}</span>
                  <span className="ml-2 text-lg text-gray-500 dark:text-gray-400">/ay</span>
                </div>
                
                <ul className="mt-8 space-y-3 text-left">
                  {plan.features.map((f, i) => (
                    <li key={i} className="flex items-center text-sm text-gray-700 dark:text-gray-300">
                      <svg className="mr-3 h-4 w-4 flex-shrink-0 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
                
                <button className={`mt-8 w-full rounded-lg px-6 py-3 font-semibold transition-colors ${
                  isPopular
                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                    : 'border border-gray-300 text-gray-700 hover:border-gray-400 hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300 hover:dark:border-gray-500 hover:dark:bg-gray-700'
                }`}>
                  {plan.cta}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
};

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
        'E-posta Desteği'
      ],
      cta: t('button_text')
    },
    {
      name: t('premium_plan_name'),
      price: '₺599',
      description: t('premium_plan_description'),
      features: [
        '10 Sosyal Medya Hesabı',
        'Gelişmiş Raporlama',
        'Alarm Sistemi',
        'Öncelikli Destek'
      ],
      cta: t('button_text')
    },
    {
      name: t('enterprise_plan_name'),
      price: t('enterprise_plan_name') === 'Kurumsal' ? 'Özel' : 'Custom',
      description: t('enterprise_plan_description'),
      features: [
        'Sınırsız Hesap',
        'Özel Entegrasyonlar',
        '7/24 Destek',
        'Özel Eğitim'
      ],
      cta: t('button_text')
    }
  ];
  return (
    <Section title={t('section_title')} description={t('section_description')}>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {plans.map((plan, idx) => (
          <div key={idx} className="rounded-xl border border-border bg-background-card p-8">
            <h3 className="text-xl font-bold text-primary">{plan.name}</h3>
            <p className="mt-2 text-muted">{plan.description}</p>
            <div className="mt-4 text-3xl font-bold text-text">{plan.price}<span className="text-lg font-normal text-muted">/ay</span></div>
            <ul className="mt-6 space-y-3">
              {plan.features.map((f, i) => (
                <li key={i} className="flex items-center text-text">
                  <span className="mr-2 text-success">✓</span>
                  {f}
                </li>
              ))}
            </ul>
            <a className="mt-8 block w-full rounded bg-primary px-6 py-3 text-center font-semibold text-white shadow transition hover:bg-primary-dark" href="#demo">
              {plan.cta}
            </a>
          </div>
        ))}
      </div>
    </Section>
  );
}

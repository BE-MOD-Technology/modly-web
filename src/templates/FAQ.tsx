import { useTranslations } from 'next-intl';
import { Section } from '@/features/landing/Section';

export const FAQ = () => {
  const t = useTranslations('FAQ');
  const faqs = [
    {
      question: t('q1'),
      answer: t('a1'),
    },
    {
      question: t('q2'),
      answer: t('a2'),
    },
    {
      question: t('q3'),
      answer: t('a3'),
    },
    {
      question: t('q4'),
      answer: t('a4'),
    },
  ];
  return (
    <Section title={t('section_title')} description={t('section_description')}>
      <div className="space-y-6">
        {faqs.map((faq, idx) => (
          <div key={idx} className="rounded-xl border border-border bg-card p-5">
            <div className="font-semibold mb-2">{faq.question}</div>
            <div className="text-muted-foreground">{faq.answer}</div>
          </div>
        ))}
      </div>
    </Section>
  );
}

'use client';
import { useTranslations } from 'next-intl';
import { useState } from 'react';

export const FAQ = () => {
  const t = useTranslations('FAQ');
  const [openIndex, setOpenIndex] = useState<number | null>(null);

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

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="w-full bg-black px-4 py-16">
      <div className="w-full">
        <div className="mb-12 text-center">
          <h2 className="mb-6 text-center text-base font-semibold uppercase tracking-wider text-[#7588A1] md:text-lg">
            {t('section_title')}
          </h2>
          <p className="mx-auto max-w-4xl text-lg leading-relaxed text-neutral-400 md:text-xl">
            {t('section_description')}
          </p>
        </div>

        <div className="mx-auto max-w-4xl space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="relative overflow-hidden rounded-2xl border-2 border-[#676767]/30 bg-gradient-to-br from-zinc-900/90 to-zinc-800/70 backdrop-blur-sm transition-all duration-300 hover:border-[#32527B]/50"
            >
              {/* Gradient Background */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#676767]/20 via-[#828387]/20 to-[#32527B]/20 opacity-20" />

              <button
                onClick={() => toggleFAQ(idx)}
                className="relative z-10 w-full p-6 text-left transition-all duration-300 hover:bg-black/20"
              >
                <div className="flex items-center justify-between">
                  <h3 className="pr-4 text-lg font-semibold text-white md:text-xl">
                    {faq.question}
                  </h3>
                  <div className={`transition-transform duration-300${openIndex === idx ? 'rotate-180' : ''}`}>
                    <svg className="size-6 text-[#7588A1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </button>

              <div className={`relative z-10 overflow-hidden transition-all duration-300 ${openIndex === idx ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="px-6 pb-6">
                  <div className="mb-4 h-px bg-gradient-to-r from-transparent via-[#676767]/30 to-transparent" />
                  <p className="text-base leading-relaxed text-neutral-400 md:text-lg">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

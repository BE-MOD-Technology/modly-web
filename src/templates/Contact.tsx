import { useTranslations } from 'next-intl';

export const Contact = () => {
  const t = useTranslations('Contact');

  return (
    <section id="contact" className="w-full bg-black px-4 py-16">
      <div className="w-full">
        <div className="mb-12 text-center">
          <h2 className="mb-6 text-center text-base font-semibold uppercase tracking-wider text-[#7588A1] md:text-lg">
            {t('section_title')}
          </h2>
          <p className="mx-auto max-w-4xl text-lg leading-relaxed text-neutral-400 md:text-xl">
            {t('description')}
          </p>
        </div>

        <div className="relative overflow-hidden rounded-3xl border-2 border-[#676767]/30 bg-black p-8 backdrop-blur-sm">
          {/* Gradient Background */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#676767]/20 via-[#828387]/20 to-[#32527B]/20 opacity-30" />

          {/* Content */}
          <div className="relative z-10">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
              {/* Contact Info */}
              <div className="text-center lg:text-left">
                <div className="mb-6">
                  <div className="mx-auto mb-4 flex size-16 items-center justify-center rounded-full bg-gradient-to-br from-[#676767]/40 to-[#32527B]/40 lg:mx-0">
                    <svg className="size-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h4 className="mb-2 text-xl font-semibold text-white">{t('email_label')}</h4>
                  <a
                    href="mailto:info@modly.me"
                    className="inline-block text-lg text-[#7588A1] transition-all duration-300 hover:scale-105 hover:text-white"
                  >
                    info@modly.me
                  </a>
                </div>

                <div className="mt-6 flex justify-center lg:justify-start">
                  <div className="h-1 w-16 rounded-full bg-gradient-to-r from-[#676767] to-[#32527B]" />
                </div>
              </div>

              {/* Contact Form */}
              <div className="space-y-6">
                <h3 className="mb-4 text-xl font-semibold text-white">{t('form_title')}</h3>
                <form className="space-y-4">
                  <div>
                    <input
                      type="text"
                      placeholder={t('name_placeholder')}
                      className="w-full rounded-lg border border-[#676767]/30 bg-zinc-900/50 px-4 py-3 text-white transition-colors placeholder:text-gray-400 focus:border-[#32527B] focus:outline-none"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder={t('email_placeholder')}
                      className="w-full rounded-lg border border-[#676767]/30 bg-zinc-900/50 px-4 py-3 text-white transition-colors placeholder:text-gray-400 focus:border-[#32527B] focus:outline-none"
                    />
                  </div>
                  <div>
                    <textarea
                      placeholder={t('message_placeholder')}
                      rows={4}
                      className="w-full resize-none rounded-lg border border-[#676767]/30 bg-zinc-900/50 px-4 py-3 text-white transition-colors placeholder:text-gray-400 focus:border-[#32527B] focus:outline-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full rounded-lg bg-gradient-to-r from-[#676767] to-[#32527B] px-6 py-3 font-semibold text-white transition-all duration-300 hover:scale-105 hover:from-[#828387] hover:to-[#4E6D96]"
                  >
                    {t('submit_button')}
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Shine Effect */}
          <div className="absolute left-0 top-0 size-20 rounded-full bg-white/5 opacity-0 transition-opacity duration-500 hover:opacity-100" />
        </div>
      </div>
    </section>
  );
};

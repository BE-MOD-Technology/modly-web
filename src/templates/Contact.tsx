import { useTranslations } from 'next-intl';

export const Contact = () => {
  const t = useTranslations('Contact');

  return (
    <section id="contact" className="w-full px-4 py-16 bg-black">
      <div className="w-full">
        <div className="text-center mb-12">
          <h2 className="mb-6 text-center text-base font-semibold uppercase tracking-wider text-[#7588A1] md:text-lg">
            {t('section_title')}
          </h2>
          <p className="text-lg leading-relaxed text-neutral-400 md:text-xl max-w-4xl mx-auto">
            {t('description')}
          </p>
        </div>

        <div className="relative overflow-hidden rounded-3xl border-2 border-[#676767]/30 bg-black p-8 backdrop-blur-sm">
          {/* Gradient Background */}
          <div className="absolute inset-0 opacity-30 bg-gradient-to-br from-[#676767]/20 via-[#828387]/20 to-[#32527B]/20 rounded-3xl" />
          
          {/* Content */}
          <div className="relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Contact Info */}
              <div className="text-center lg:text-left">
                <div className="mb-6">
                  <div className="mx-auto lg:mx-0 mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[#676767]/40 to-[#32527B]/40">
                    <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h4 className="mb-2 text-xl font-semibold text-white">{t('email_label')}</h4>
                  <a 
                    href="mailto:info@modly.me" 
                    className="inline-block text-lg text-[#7588A1] transition-all duration-300 hover:text-white hover:scale-105"
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
                <h3 className="text-xl font-semibold text-white mb-4">{t('form_title')}</h3>
                <form className="space-y-4">
                  <div>
                    <input
                      type="text"
                      placeholder={t('name_placeholder')}
                      className="w-full px-4 py-3 rounded-lg bg-zinc-900/50 border border-[#676767]/30 text-white placeholder-gray-400 focus:border-[#32527B] focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder={t('email_placeholder')}
                      className="w-full px-4 py-3 rounded-lg bg-zinc-900/50 border border-[#676767]/30 text-white placeholder-gray-400 focus:border-[#32527B] focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <textarea
                      placeholder={t('message_placeholder')}
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg bg-zinc-900/50 border border-[#676767]/30 text-white placeholder-gray-400 focus:border-[#32527B] focus:outline-none transition-colors resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full px-6 py-3 rounded-lg bg-gradient-to-r from-[#676767] to-[#32527B] text-white font-semibold hover:from-[#828387] hover:to-[#4E6D96] transition-all duration-300 hover:scale-105"
                  >
                    {t('submit_button')}
                  </button>
                </form>
              </div>
            </div>
          </div>
          
          {/* Shine Effect */}
          <div className="absolute top-0 left-0 h-20 w-20 rounded-full bg-white/5 opacity-0 transition-opacity duration-500 hover:opacity-100" />
        </div>
      </div>
    </section>
  );
};

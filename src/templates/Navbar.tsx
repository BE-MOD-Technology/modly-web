import { useTranslations } from 'next-intl';
import { LocaleSwitcher } from '@/components/LocaleSwitcher';

export const Navbar = () => {
  const t = useTranslations('Navbar');
  return (
    <nav className="flex items-center justify-between px-6 py-4 border-b border border-border bg-background text-text">
      <a href="/" className="text-2xl font-bold tracking-tight text-primary">Modly.me</a>
      <div className="flex items-center gap-6">
        <a href="#features" className="hover:text-primary transition-colors">{t('features')}</a>
        <a href="#pricing" className="hover:text-primary transition-colors">{t('pricing')}</a>
        <a href="#faq" className="hover:text-primary transition-colors">{t('faq')}</a>
        <a href="#contact" className="hover:text-primary transition-colors">{t('contact')}</a>
        <LocaleSwitcher />
      </div>
    </nav>
  );
}

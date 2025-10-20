import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';

import { About } from '@/templates/About';
// import { Pricing } from '@/templates/Pricing';
// import { Sponsors } from '@/templates/Sponsors';
import { BenefitsAndAudience } from '@/templates/BenefitsAndAudience';
// import { CTA } from '@/templates/CTA';
// import { DemoBanner } from '@/templates/DemoBanner';
import { Contact } from '@/templates/Contact';
import { FAQ } from '@/templates/FAQ';
import { Footer } from '@/templates/Footer';
import { Hero } from '@/templates/Hero';
import { Navbar } from '@/templates/Navbar';
import {
  ClosingStatements,
  CrisisDrama,
  CuriosityQuestions,
  DataInsights,
  DecisionSupport,
  MissingOut,
} from '@/templates/NewSections';

export async function generateMetadata(props: { params: { locale: string } }) {
  const t = await getTranslations({
    locale: props.params.locale,
    namespace: 'Index',
  });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

const IndexPage = (props: { params: { locale: string } }) => {
  unstable_setRequestLocale(props.params.locale);

  return (
    <>
      {/* <DemoBanner /> */}
      <Navbar />
      <Hero />
      {/* <Sponsors /> */}
      <About />
      <BenefitsAndAudience />
      <MissingOut />
      <CuriosityQuestions />
      <DataInsights />
      <CrisisDrama />
      <DecisionSupport />
      <ClosingStatements />
      {/* <Pricing /> */}
      <FAQ />
      <Contact />
      {/* <CTA /> */}
      <Footer />
    </>
  );
};

export default IndexPage;

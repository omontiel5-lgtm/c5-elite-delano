import { Navbar } from '@/components/layout/Navbar';
import { Hero } from '@/components/sections/Hero';
import { Guarantees } from '@/components/sections/Guarantees';
import { C5Difference } from '@/components/sections/C5Difference';
import { WhyDelano } from '@/components/sections/WhyDelano';
import { Authority } from '@/components/sections/Authority';
import { Leadership } from '@/components/sections/Leadership';
import { Process } from '@/components/sections/Process';
import { Advisors } from '@/components/sections/Advisors';
import { Qualification } from '@/components/sections/Qualification';
import { CTAFinal } from '@/components/sections/CTAFinal';
import { Footer } from '@/components/sections/Footer';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Guarantees />
        <C5Difference />
        <WhyDelano />
        <Authority />
        <Leadership />
        <Process />
        <Advisors />
        <Qualification />
        <section id="cta">
          <CTAFinal />
        </section>
      </main>
      <Footer />
    </>
  );
}

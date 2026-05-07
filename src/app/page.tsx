import { Navbar } from '@/components/layout/Navbar';
import { WhatsAppFloat } from '@/components/layout/WhatsAppFloat';
import { Hero } from '@/components/sections/Hero';
import { Editorial } from '@/components/sections/Editorial';
import { WhyDelano } from '@/components/sections/WhyDelano';
import { Guarantees } from '@/components/sections/Guarantees';
import { Authority } from '@/components/sections/Authority';
import { Speakers } from '@/components/sections/Speakers';
import { Advisors } from '@/components/sections/Advisors';
import { Process } from '@/components/sections/Process';
import { FAQ } from '@/components/sections/FAQ';
import { FinalCTADual } from '@/components/sections/FinalCTADual';
import { Footer } from '@/components/sections/Footer';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Editorial />
        <WhyDelano />
        <Guarantees />
        <Authority />
        <Speakers />
        <Advisors />
        <Process />
        <FAQ />
        <section id="cta">
          <FinalCTADual />
        </section>
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}

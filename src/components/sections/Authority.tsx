import { SectionHeading } from '@/components/ui/SectionHeading';

export function Authority() {
  return (
    <section className="bg-white section-padding">
      <div className="container-c5">
        <SectionHeading
          eyebrow="Track record · Portfolio"
          title="Somos la firma inmobiliaria hispana que asesora al inversionista internacional serio."
        />

        {/* C5 Portfolio — track record + project logos */}
        <div className="mb-16">
          <img
            src="/images/c5-portfolio.png"
            alt="C5 Elite — +$500M en ventas, +750 unidades cerradas, 12+ proyectos en portfolio, +11,500 compradores internacionales asesorados. Proyectos: One Twenty Brickell, Domus Brickell Center, Frida Kahlo Wynwood Residences, The Elser Hotel, Cassia Coral Gables, 14 River District, Lennar, Visions Resort & Spa, Millenia Park, Jean-Georges Miami Tropic, The Standard Brickell, The Rider Residences, Delano Residences, Flow, One Park Tower by Turnberry"
            className="w-full h-auto"
          />
        </div>

        {/* Editorial closing */}
        <div className="text-center max-w-3xl mx-auto mt-16">
          <p className="font-serif text-3xl lg:text-4xl text-espresso-800 italic leading-tight text-balance mb-3">
            &ldquo;No vamos a sus eventos. Ellos vienen al nuestro.&rdquo;
          </p>
          <p className="text-sm text-espresso-700/70 italic">
            Esa es la diferencia entre un broker y la firma hispana #1 de preconstrucción en Miami.
          </p>
        </div>
      </div>
    </section>
  );
}

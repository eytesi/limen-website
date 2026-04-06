import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";

export const metadata = {
  title: "Sobre Limen - Tu mundo, visible",
  description: "Conoce la historia y misión de Limen, agencia de branding",
};

export default function SobreLimen() {
  return (
    <main className="min-h-screen bg-limen-white">
      <Navigation />

      <Hero
        title="Sobre Limen"
        subtitle="El espacio donde mundos internos se hacen visibles"
        pattern="fabric-3"
      />

      {/* Story Section */}
      <section className="py-20 bg-limen-cream pattern-fabric-1 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            <div>
              <h2 className="font-title-caps mb-6">Nuestra Historia</h2>
              <p className="text-lg font-light leading-relaxed text-limen-black/80 mb-4">
                Limen nace de una simple observación: muchas marcas tienen
                historias increíbles pero nadie las ve. Artistas, emprendedores,
                empresas con propósito—poseen un mundo interior rico, pero ese
                mundo permanece invisible.
              </p>
              <p className="text-lg font-light leading-relaxed text-limen-black/80 mb-4">
                Decidimos especializarnos en ese momento crítico: el umbral.
                Ese espacio liminal donde la marca cruza del anonimato a la
                visibilidad. Donde la identidad se materializa. Donde el mundo
                finalmente puede ver tu mundo.
              </p>
            </div>

            <div className="h-px bg-gradient-to-r from-transparent via-limen-black/20 to-transparent" />

            <div>
              <h2 className="font-title-caps mb-6">Nuestra Misión</h2>
              <p className="text-3xl font-display font-bold text-limen-black mb-4">
                Tu mundo, visible
              </p>
              <p className="text-lg font-light leading-relaxed text-limen-black/80">
                Traducimos la esencia de tu marca a un lenguaje visual y digital
                que el mundo entienda y recuerde. Creamos sistemas coherentes,
                estratégicos y hermosos—porque la claridad también es
                hermosa.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-limen-white pattern-animal relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-title-caps text-center mb-16">Nuestros valores</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <div className="text-5xl text-limen-accent font-serif mb-4">
                01
              </div>
              <h3 className="font-serif text-2xl font-light italic mb-3">
                Integridad
              </h3>
              <p className="font-light text-limen-black/70">
                Tu marca es visión verdadera, no ficción. Diseñamos desde la
                autenticidad de quién eres realmente.
              </p>
            </div>

            <div>
              <div className="text-5xl text-limen-accentAlt font-serif mb-4">
                02
              </div>
              <h3 className="font-serif text-2xl font-light italic mb-3">
                Claridad
              </h3>
              <p className="font-light text-limen-black/70">
                El diseño existe para comunicar. Cada elemento tiene un propósito.
                Nada es por casualidad.
              </p>
            </div>

            <div>
              <div className="text-5xl text-limen-accentGold font-serif mb-4">
                03
              </div>
              <h3 className="font-serif text-2xl font-light italic mb-3">
                Colaboración
              </h3>
              <p className="font-light text-limen-black/70">
                Tu voz importa. Creamos juntos, no para ti. El resultado es más
                fuerte porque es tuyo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team CTA */}
      <section className="py-20 bg-limen-black text-limen-white pattern-geometric-mix relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-title-caps text-limen-white mb-6">
            Detrás de Limen
          </h2>
          <p className="font-subtitle-italic text-xl text-limen-white/80 mb-8">
            Un equipo multidisciplinario apasionado por llevar mundos invisibles
            a la visibilidad
          </p>
          <a
            href="/contacto"
            className="inline-block px-8 py-3 bg-limen-accent text-limen-white rounded-lg font-serif font-semibold uppercase text-sm tracking-wider hover:scale-105 transition-transform"
          >
            Conoce al equipo
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}

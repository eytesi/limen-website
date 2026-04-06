import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";

export const metadata = {
  title: "Servicios - Limen",
  description: "Branding, diseño web, y redefinición de marca",
};

export default function Servicios() {
  return (
    <main className="min-h-screen bg-limen-white">
      <Navigation />

      <Hero
        title="Servicios"
        subtitle="Tres enfoques para hacer visible tu mundo"
        pattern="fabric-1"
      />

      {/* Services Grid */}
      <section className="py-20 bg-limen-cream pattern-fabric-2 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Branding */}
            <div id="branding" className="scroll-mt-32">
              <div className="bg-limen-white border border-limen-black/10 rounded-lg p-8 hover:shadow-lg transition-shadow">
                <h3 className="font-title-caps mb-6">Branding</h3>
                <p className="font-light text-limen-black/70 mb-6 leading-relaxed">
                  Construimos la identidad visual integral de tu marca, desde
                  el concepto hasta el manual completo.
                </p>

                <div className="space-y-3 mb-8">
                  <div className="flex items-start gap-3">
                    <span className="text-limen-accent font-serif text-lg">
                      →
                    </span>
                    <div>
                      <p className="font-serif font-semibold text-sm">
                        Estrategia de marca
                      </p>
                      <p className="text-xs font-light text-limen-black/60">
                        Posicionamiento, valores, narrativa
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-limen-accent font-serif text-lg">
                      →
                    </span>
                    <div>
                      <p className="font-serif font-semibold text-sm">
                        Identidad visual
                      </p>
                      <p className="text-xs font-light text-limen-black/60">
                        Logo, paleta, tipografía, patrones
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-limen-accent font-serif text-lg">
                      →
                    </span>
                    <div>
                      <p className="font-serif font-semibold text-sm">
                        Manual de identidad
                      </p>
                      <p className="text-xs font-light text-limen-black/60">
                        Guía completa de aplicaciones
                      </p>
                    </div>
                  </div>
                </div>

                <a
                  href="/contacto"
                  className="text-sm font-serif font-semibold uppercase tracking-wider text-limen-accent hover:text-limen-black transition-colors"
                >
                  Consultar →
                </a>
              </div>
            </div>

            {/* Web Design */}
            <div id="web-design" className="scroll-mt-32">
              <div className="bg-limen-white border border-limen-black/10 rounded-lg p-8 hover:shadow-lg transition-shadow">
                <h3 className="font-title-caps mb-6">Diseño Web</h3>
                <p className="font-light text-limen-black/70 mb-6 leading-relaxed">
                  Creamos experiencias digitales coherentes con tu marca,
                  responsivas y pensadas para convertir.
                </p>

                <div className="space-y-3 mb-8">
                  <div className="flex items-start gap-3">
                    <span className="text-limen-accent font-serif text-lg">
                      →
                    </span>
                    <div>
                      <p className="font-serif font-semibold text-sm">
                        Estrategia UX
                      </p>
                      <p className="text-xs font-light text-limen-black/60">
                        Arquitectura de información
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-limen-accent font-serif text-lg">
                      →
                    </span>
                    <div>
                      <p className="font-serif font-semibold text-sm">
                        Diseño Figma
                      </p>
                      <p className="text-xs font-light text-limen-black/60">
                        Prototipos de alta fidelidad
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-limen-accent font-serif text-lg">
                      →
                    </span>
                    <div>
                      <p className="font-serif font-semibold text-sm">
                        Desarrollo web
                      </p>
                      <p className="text-xs font-light text-limen-black/60">
                        Next.js, responsive, optimizado
                      </p>
                    </div>
                  </div>
                </div>

                <a
                  href="/contacto"
                  className="text-sm font-serif font-semibold uppercase tracking-wider text-limen-accent hover:text-limen-black transition-colors"
                >
                  Consultar →
                </a>
              </div>
            </div>

            {/* Rediseño */}
            <div id="rediseno" className="scroll-mt-32">
              <div className="bg-limen-white border border-limen-black/10 rounded-lg p-8 hover:shadow-lg transition-shadow">
                <h3 className="font-title-caps mb-6">Rediseño</h3>
                <p className="font-light text-limen-black/70 mb-6 leading-relaxed">
                  Revitalizamos marcas existentes, modernizando su identidad
                  manteniendo su esencia.
                </p>

                <div className="space-y-3 mb-8">
                  <div className="flex items-start gap-3">
                    <span className="text-limen-accent font-serif text-lg">
                      →
                    </span>
                    <div>
                      <p className="font-serif font-semibold text-sm">
                        Auditoría de marca
                      </p>
                      <p className="text-xs font-light text-limen-black/60">
                        Análisis y diagnóstico actual
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-limen-accent font-serif text-lg">
                      →
                    </span>
                    <div>
                      <p className="font-serif font-semibold text-sm">
                        Reposicionamiento
                      </p>
                      <p className="text-xs font-light text-limen-black/60">
                        Estrategia de transformación
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-limen-accent font-serif text-lg">
                      →
                    </span>
                    <div>
                      <p className="font-serif font-semibold text-sm">
                        Nueva identidad
                      </p>
                      <p className="text-xs font-light text-limen-black/60">
                        Implementación y transición
                      </p>
                    </div>
                  </div>
                </div>

                <a
                  href="/contacto"
                  className="text-sm font-serif font-semibold uppercase tracking-wider text-limen-accent hover:text-limen-black transition-colors"
                >
                  Consultar →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-limen-white pattern-animal relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-title-caps text-center mb-16">Cómo trabajamos</h2>

          <div className="max-w-4xl mx-auto space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-5xl font-serif font-bold text-limen-accent mb-4">
                  01
                </p>
                <h3 className="font-title-caps mb-4">Descubrimiento</h3>
                <p className="font-light text-limen-black/70">
                  Iniciamos con una conversación profunda. Queremos entender tu
                  mundo antes de diseñarlo.
                </p>
              </div>
              <div className="h-64 bg-limen-cream rounded-lg pattern-fabric-1" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="h-64 bg-limen-cream rounded-lg pattern-fabric-2 order-last md:order-first" />
              <div>
                <p className="text-5xl font-serif font-bold text-limen-accent mb-4">
                  02
                </p>
                <h3 className="font-title-caps mb-4">Estrategia</h3>
                <p className="font-light text-limen-black/70">
                  Desarrollamos la arquitectura visual y narrativa de tu marca.
                  Todo tiene propósito.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-5xl font-serif font-bold text-limen-accent mb-4">
                  03
                </p>
                <h3 className="font-title-caps mb-4">Creación</h3>
                <p className="font-light text-limen-black/70">
                  Creamos los elementos visuales y digitales con cuidado extremo
                  al detalle.
                </p>
              </div>
              <div className="h-64 bg-limen-cream rounded-lg pattern-animal" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="h-64 bg-limen-cream rounded-lg pattern-geometric-mix order-last md:order-first" />
              <div>
                <p className="text-5xl font-serif font-bold text-limen-accent mb-4">
                  04
                </p>
                <h3 className="font-title-caps mb-4">Entrega</h3>
                <p className="font-light text-limen-black/70">
                  Todo sistematizado, documentado, y listo para que tu marca
                  sea visible.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-limen-black text-limen-white pattern-fabric-3 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-title-caps text-limen-white mb-6">
            ¿Necesitas uno de estos servicios?
          </h2>
          <p className="font-subtitle-italic text-xl text-limen-white/80 mb-8">
            Contáctanos para descubrir cómo podemos ayudarte
          </p>
          <a
            href="/contacto"
            className="inline-block px-10 py-4 bg-limen-accent text-limen-white rounded-lg font-serif font-semibold uppercase text-sm tracking-wider hover:scale-105 transition-transform"
          >
            Empezar conversación
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}

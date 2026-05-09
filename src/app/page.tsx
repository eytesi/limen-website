import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { ProductCard } from "@/components/ProductCard";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen bg-limen-white">
      <Navigation />

      {/* Hero Section */}
      <Hero
        title="Tu mundo, visible"
        subtitle="Branding desde el corazón, diseño para el mundo"
        pattern="fabric-1"
      >
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <Link
            href="/productos"
            className="px-8 py-4 bg-limen-black text-limen-white rounded-lg font-serif font-semibold uppercase text-sm tracking-wider hover:bg-limen-accent transition-all duration-300"
          >
            Ver Productos
          </Link>
          <Link
            href="/contacto"
            className="px-8 py-4 border-2 border-limen-black text-limen-black rounded-lg font-serif font-semibold uppercase text-sm tracking-wider hover:bg-limen-black hover:text-limen-white transition-all duration-300"
          >
            Empezar Proyecto
          </Link>
        </div>
      </Hero>

      {/* Featured Services Section */}
      <section className="py-20 bg-limen-cream pattern-fabric-2 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-title-caps mb-4">Lo que hacemos</h2>
            <p className="font-subtitle-italic text-limen-black/70 text-xl">
              Diseño web para negocios reales
            </p>
          </div>

          <div className="max-w-lg mx-auto mb-10">
            <ProductCard
              title="Mundo"
              description="Tu negocio merece un sitio que lo represente. Diseño y desarrollo web completo, mobile-first, listo para subir."
              price="$100 USD · $150.000 ARS"
              features={[
                "Sitio web completo — hasta 5 secciones",
                "Diseño mobile-first, 100% responsive",
                "WhatsApp, redes y mapas integrados",
                "Entrega en 7 días hábiles",
                "Una ronda de revisiones incluida",
              ]}
              badge="Disponible ahora"
              highlight
              href="/productos/mundo"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <ProductCard
              title="Umbral"
              description="Identidad de marca completa para emprendimientos y proyectos nuevos."
              features={[
                "Sesión de descubrimiento",
                "Naming o refinamiento",
                "Logotipo + sistema de marca",
                "Manual de identidad",
                "Aplicaciones clave",
              ]}
              badge="Próximamente"
              comingSoon
              href="/productos/umbral"
            />
            <ProductCard
              title="Territorio"
              description="Identidad sólida + presencia digital completa."
              features={[
                "Todo lo de Umbral",
                "Estrategia de contenido",
                "Diseño y desarrollo web",
                "Sistema de patterns",
                "Manual extendido",
              ]}
              badge="Próximamente"
              comingSoon
              href="/productos/territorio"
            />
          </div>
        </div>
      </section>

      {/* Why Limen Section */}
      <section className="py-20 bg-limen-white pattern-animal relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div>
                <h3 className="font-title-caps mb-4">Por qué Limen</h3>
                <p className="font-light text-limen-black/80 leading-relaxed">
                  Limen es el umbral, el espacio liminal donde tu marca cruza
                  del anonimato a la visibilidad. Nos especializamos en llevar
                  mundos internos—tus valores, historia, visión—al espacio
                  externo donde el mundo puede verlos.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex gap-4">
                  <span className="text-2xl text-limen-accent font-serif">✓</span>
                  <div>
                    <h4 className="font-serif font-semibold uppercase text-sm tracking-wider mb-1">
                      Estrategia + Creatividad
                    </h4>
                    <p className="text-sm font-light text-limen-black/70">
                      No solo diseño bonito; diseño que funciona y comunica.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="text-2xl text-limen-accent font-serif">✓</span>
                  <div>
                    <h4 className="font-serif font-semibold uppercase text-sm tracking-wider mb-1">
                      Procesos Claros
                    </h4>
                    <p className="text-sm font-light text-limen-black/70">
                      Sabes exactamente en qué inviertes y qué recibirás.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="text-2xl text-limen-accent font-serif">✓</span>
                  <div>
                    <h4 className="font-serif font-semibold uppercase text-sm tracking-wider mb-1">
                      Colecciones Completas
                    </h4>
                    <p className="text-sm font-light text-limen-black/70">
                      De identidad, web o ambas: un ecosistema coherente.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 place-self-center">
              <div className="bg-limen-accent/10 rounded-lg p-8 text-center">
                <p className="text-4xl font-serif font-bold text-limen-accent mb-2">
                  10+
                </p>
                <p className="font-light text-sm">Proyectos completados</p>
              </div>
              <div className="bg-limen-accentAlt/10 rounded-lg p-8 text-center">
                <p className="text-4xl font-serif font-bold text-limen-accentAlt mb-2">
                  5+
                </p>
                <p className="font-light text-sm">Años de experiencia</p>
              </div>
              <div className="bg-limen-accentGold/10 rounded-lg p-8 text-center">
                <p className="text-4xl font-serif font-bold text-limen-accentGold mb-2">
                  100%
                </p>
                <p className="font-light text-sm">Diseño mobile-first</p>
              </div>
              <div className="bg-limen-black/10 rounded-lg p-8 text-center">
                <p className="text-4xl font-serif font-bold text-limen-black mb-2">
                  7
                </p>
                <p className="font-light text-sm">Días de entrega</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-limen-black text-limen-white pattern-geometric-mix relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="font-title-caps text-limen-white mb-6">
            Listo para hacerlo visible
          </h2>
          <p className="font-subtitle-italic text-xl text-limen-white/80 mb-8">
            Conversemos sobre tu mundo y cómo hacerlo visible
          </p>
          <Link
            href="/contacto"
            className="inline-block px-10 py-4 bg-limen-accent text-limen-white rounded-lg font-serif font-semibold uppercase text-sm tracking-wider hover:scale-105 transition-transform duration-300"
          >
            Empezar Conversación
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}

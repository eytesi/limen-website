import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { ProductCard } from "@/components/ProductCard";

export const metadata = {
  title: "Productos - Limen",
  description: "Tres formas de cruzar el umbral: Umbral, Territorio, Mundo",
};

export default function Productos() {
  return (
    <main className="min-h-screen bg-limen-white">
      <Navigation />

      <Hero
        title="Tres formas de cruzar el umbral"
        subtitle="Elige el producto que necesitas para hacerlo visible"
        pattern="fabric-2"
      />

      {/* Product Grid */}
      <section className="py-20 bg-limen-cream pattern-fabric-3 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <ProductCard
              title="Umbral"
              description="Identidad de marca completa para emprendimientos, artistas y proyectos nuevos"
              price="desde $800 USD"
              features={[
                "Sesión de descubrimiento — narrativa, valores, mundo de marca",
                "Naming o refinamiento del nombre existente",
                "Logotipo + sistema de marca (colores, tipografía, patterns)",
                "Manual de identidad visual básico",
                "Aplicaciones clave (perfil social, tarjeta, membrete)",
              ]}
              badge="Proyecto único"
              href="/productos/umbral"
            />

            <ProductCard
              title="Territorio"
              description="Identidad + presencia digital completa para consolidar tu marca"
              price="desde $1,800 USD"
              features={[
                "Todo lo de Umbral",
                "Estrategia de contenido y tono de voz",
                "Diseño y desarrollo web (hasta 5 páginas)",
                "Sistema de patterns y texturas personalizado",
                "Kit de activos para redes sociales",
                "Manual de identidad extendido",
              ]}
              badge="más completo"
              highlight
              href="/productos/territorio"
            />

            <ProductCard
              title="Mundo"
              description="Diseño web para marcas con identidad definida"
              price="desde $600 USD"
              features={[
                "Diseño en Figma + desarrollo (hasta 4 páginas)",
                "Versión mobile responsive",
                "Integración de CMS básico si se necesita",
                "Una ronda de revisiones",
              ]}
              badge="Proyecto único"
              href="/productos/mundo"
            />
          </div>

          {/* Add-ons Section */}
          <div className="mt-32 pt-16 border-t border-limen-black/10">
            <h2 className="font-title-caps text-center mb-12">
              Servicios adicionales
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "Dirección de arte",
                  description: "Para sesión fotográfica personalizada a tu marca",
                },
                {
                  title: "Pack de contenido",
                  description: "12 piezas diseñadas para redes sociales",
                },
                {
                  title: "Consultoría de posicionamiento",
                  description: "Sesión única para definir tu estrategia de marca",
                },
                {
                  title: "Rediseño / auditoría",
                  description: "Análisis y redefinición de marca existente",
                },
                {
                  title: "Diseño de merch",
                  description: "Packaging, productos, experiencia tangible",
                },
                {
                  title: "Retainer mensual",
                  description: "Soporte creativo continuo bajo medida",
                },
              ].map((service, idx) => (
                <div
                  key={idx}
                  className="p-6 border border-limen-black/10 rounded-lg hover:bg-limen-white transition-colors"
                >
                  <h3 className="font-serif italic font-light text-lg mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm font-light text-limen-black/70">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-limen-white pattern-animal relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-title-caps text-center mb-16">
            Proceso de trabajo
          </h2>

          <div className="space-y-8 max-w-3xl mx-auto">
            {[
              {
                number: "01",
                title: "Descubrimiento",
                description:
                  "Conversamos profundamente sobre tu marca, visión, mercado y objetivos.",
              },
              {
                number: "02",
                title: "Estrategia",
                description:
                  "Desarrollamos la arquitectura visual y comunicacional de tu marca.",
              },
              {
                number: "03",
                title: "Diseño",
                description:
                  "Creamos los elementos visuales: logo, paleta, tipografía, patterns.",
              },
              {
                number: "04",
                title: "Refinamiento",
                description:
                  "Iteramos juntos hasta que sea exactamente lo que necesitas.",
              },
              {
                number: "05",
                title: "Entrega",
                description:
                  "Recibes todo documentado, sistematizado y listo para usar.",
              },
            ].map((step, idx) => (
              <div key={idx} className="flex gap-6 items-start">
                <div className="text-4xl font-serif font-bold text-limen-accent flex-shrink-0 min-w-16">
                  {step.number}
                </div>
                <div>
                  <h3 className="font-title-caps mb-2">{step.title}</h3>
                  <p className="font-light text-limen-black/70">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-limen-black text-limen-white pattern-geometric-mix relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-title-caps text-limen-white mb-6">
            ¿Cuál es tu umbral?
          </h2>
          <p className="font-subtitle-italic text-xl text-limen-white/80 mb-8">
            Empecemos el proceso de llevar tu mundo a la visibilidad
          </p>
          <a
            href="/contacto"
            className="inline-block px-10 py-4 bg-limen-accent text-limen-white rounded-lg font-serif font-semibold uppercase text-sm tracking-wider hover:scale-105 transition-transform"
          >
            Iniciar un proyecto
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}

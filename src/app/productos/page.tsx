import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { ProductCard } from "@/components/ProductCard";

export const metadata = {
  title: "Productos - Limen",
  description: "Diseño web a medida. Tu negocio, visible.",
};

export default function Productos() {
  return (
    <main className="min-h-screen bg-limen-white">
      <Navigation />

      <Hero
        title="Tu mundo, visible"
        subtitle="Empezamos por donde más se necesita: un sitio web que represente lo que sos"
        pattern="fabric-2"
      />

      {/* Product Grid */}
      <section className="py-20 bg-limen-cream pattern-fabric-3 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Mundo — featured solo */}
          <div className="max-w-lg mx-auto mb-12">
            <p className="text-center text-xs font-serif uppercase tracking-widest text-limen-accent mb-6 opacity-70">
              — Disponible ahora —
            </p>
            <ProductCard
              title="Mundo"
              description="Tu negocio merece un sitio que lo represente. Diseño y desarrollo web completo, mobile-first, listo para subir."
              price="$100 USD · $150.000 ARS"
              features={[
                "Sitio web completo — hasta 5 secciones",
                "Diseño mobile-first, 100% responsive",
                "Identidad visual aplicada al sitio",
                "WhatsApp, redes y mapas integrados",
                "Entrega en 7 días hábiles",
                "Una ronda de revisiones incluida",
              ]}
              badge="Disponible ahora"
              highlight
              href="/productos/mundo"
            />
          </div>

          {/* Coming soon row */}
          <div className="mt-16 pt-12 border-t border-limen-black/10">
            <p className="text-center text-xs font-serif uppercase tracking-widest text-limen-black/40 mb-8">
              — Próximamente en Limen —
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
              <ProductCard
                title="Umbral"
                description="Identidad de marca completa para emprendimientos, artistas y proyectos nuevos."
                features={[
                  "Sesión de descubrimiento — narrativa, valores, mundo de marca",
                  "Naming o refinamiento del nombre existente",
                  "Logotipo + sistema de marca (colores, tipografía, patterns)",
                  "Manual de identidad visual básico",
                  "Aplicaciones clave (perfil social, tarjeta, membrete)",
                ]}
                badge="Próximamente"
                comingSoon
                href="/productos/umbral"
              />

              <ProductCard
                title="Territorio"
                description="Identidad sólida + presencia digital completa para consolidar tu marca."
                features={[
                  "Todo lo de Umbral",
                  "Estrategia de contenido y tono de voz",
                  "Diseño y desarrollo web (hasta 5 páginas)",
                  "Sistema de patterns y texturas personalizado",
                  "Kit de activos para redes sociales",
                  "Manual de identidad extendido",
                ]}
                badge="Próximamente"
                comingSoon
                href="/productos/territorio"
              />
            </div>
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
                title: "Consulta",
                description:
                  "Me contás qué necesitás, qué tiene tu negocio y a quién le hablás. Sin formularios raros.",
              },
              {
                number: "02",
                title: "Propuesta",
                description:
                  "En 24hs te mando una propuesta con estructura, referencias y precio final.",
              },
              {
                number: "03",
                title: "Diseño",
                description:
                  "Arrancamos. Diseño, desarrollo y revisiones — todo en comunicación directa.",
              },
              {
                number: "04",
                title: "Entrega",
                description:
                  "En 7 días hábiles tu sitio está listo, subido y funcionando.",
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
            ¿Querés un sitio que represente lo que sos?
          </h2>
          <p className="font-subtitle-italic text-xl text-limen-white/80 mb-8">
            $100 USD · $150.000 ARS · Entrega en 7 días
          </p>
          <a
            href="/contacto"
            className="inline-block px-10 py-4 bg-limen-accent text-limen-white rounded-lg font-serif font-semibold uppercase text-sm tracking-wider hover:scale-105 transition-transform"
          >
            Arranquemos
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}



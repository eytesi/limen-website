import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";

export const metadata = {
  title: "Portafolio - Limen",
  description: "Trabajos destacados de diseño web",
};

export default function Portafolio() {
  return (
    <main className="min-h-screen bg-limen-white">
      <Navigation />

      <Hero
        title="Portafolio"
        subtitle="Sitios reales, para negocios reales"
        pattern="fabric-2"
      />

      {/* Portfolio Grid */}
      <section className="py-20 bg-limen-cream pattern-fabric-1 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "La Leña",
                category: "Web Design · Restaurante",
                image: "pattern-fabric-1",
                description:
                  "Sitio para restaurante patagónico en Ushuaia. Carta con tabs, horarios y reservas por WhatsApp.",
              },
              {
                title: "Miga",
                category: "Web Design · Panadería",
                image: "pattern-fabric-2",
                description:
                  "Sitio kawaii para panadería artesanal. Encargos, carta y sección de Instagram integrados.",
              },
              {
                title: "KRUX",
                category: "Web Design · Moda",
                image: "pattern-geometric-mix",
                description:
                  "Sitio streetwear industrial B&W con catálogo por categorías, colecciones y marquee diagonal.",
              },
              {
                title: "CUMBRE",
                category: "Web Design · Turismo de Nieve",
                image: "pattern-fabric-3",
                description:
                  "Sitio de alquiler de equipamiento de nieve. Tarifas, proceso de reserva y catálogo por tipo.",
              },
              {
                title: "ALERO",
                category: "Web Design · Hotelería",
                image: "pattern-animal",
                description:
                  "Cabañas del sur con loader animado, sección de ventanas geométricas y sistema de reservas.",
              },
              {
                title: "LITORAL",
                category: "Web Design · Música",
                image: "pattern-fabric-1",
                description:
                  "Portfolio de banda con Spotify embed, tracklist, fechas de tour y tienda de merch integrada.",
              },
            ].map((project, idx) => (
              <div
                key={idx}
                className="group cursor-pointer overflow-hidden rounded-lg"
              >
                <div className={`relative h-80 ${project.image} overflow-hidden bg-limen-white border border-limen-black/10`}>
                  <div className="absolute inset-0 bg-gradient-to-t from-limen-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="font-title-caps text-limen-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-sm font-light text-limen-white/80 mb-3">
                      {project.category}
                    </p>
                    <p className="text-xs font-light text-limen-white/70">
                      {project.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-limen-black text-limen-white pattern-animal relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-title-caps text-limen-white mb-6">
            ¿Tu negocio podría estar aquí?
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



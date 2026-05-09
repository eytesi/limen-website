import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";

export const metadata = {
  title: "Portafolio - Limen",
  description: "Trabajos destacados de diseño web",
};

const projects = [
  {
    title: "La Leña",
    category: "Web Design · Restaurante",
    image: "/portfolio/laleña.jpg",
    demo: "/demos/laleña.html",
    description: "Sitio para restaurante patagónico en Ushuaia. Carta con tabs, horarios y reservas por WhatsApp.",
  },
  {
    title: "Miga",
    category: "Web Design · Panadería",
    image: "/portfolio/miga.jpg",
    demo: "/demos/miga.html",
    description: "Sitio kawaii para panadería artesanal. Encargos, carta y sección de Instagram integrados.",
  },
  {
    title: "KRUX",
    category: "Web Design · Moda",
    image: "/portfolio/krux.jpg",
    demo: "/demos/krux.html",
    description: "Sitio streetwear industrial B&W con catálogo por categorías, colecciones y marquee diagonal.",
  },
  {
    title: "CUMBRE",
    category: "Web Design · Turismo de Nieve",
    image: "/portfolio/cumbre.jpg",
    demo: "/demos/cumbre.html",
    description: "Alquiler de equipamiento de nieve. Tarifas, proceso de reserva y catálogo por tipo.",
  },
  {
    title: "ALERO",
    category: "Web Design · Hotelería",
    image: "/portfolio/alero.jpg",
    demo: "/demos/alero.html",
    description: "Cabañas del sur con loader animado, sección de ventanas geométricas y sistema de reservas.",
  },
  {
    title: "LITORAL",
    category: "Web Design · Música",
    image: "/portfolio/litoral.jpg",
    demo: "/demos/litoral.html",
    description: "Portfolio de banda con Spotify embed, tracklist, fechas de tour y tienda de merch integrada.",
  },
];

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
            {projects.map((project, idx) => (
              <div key={idx} className="group overflow-hidden rounded-lg border border-limen-black/10 bg-limen-white">
                {/* Screenshot */}
                <div className="relative h-64 overflow-hidden bg-limen-black/5">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Hover overlay with demo link */}
                  <div className="absolute inset-0 bg-limen-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 bg-limen-accent text-limen-white font-serif font-semibold uppercase text-xs tracking-wider rounded-lg hover:scale-105 transition-transform"
                    >
                      Ver demo en vivo →
                    </a>
                  </div>
                </div>

                {/* Info */}
                <div className="p-6">
                  <p className="text-xs font-serif uppercase tracking-widest text-limen-accent mb-1">
                    {project.category}
                  </p>
                  <h3 className="font-title-caps text-xl mb-2">{project.title}</h3>
                  <p className="text-sm font-light text-limen-black/70 leading-relaxed mb-4">
                    {project.description}
                  </p>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-serif font-semibold uppercase tracking-wider text-limen-black hover:text-limen-accent transition-colors"
                  >
                    Ver demo →
                  </a>
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



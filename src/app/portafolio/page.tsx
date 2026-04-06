import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";

export const metadata = {
  title: "Portafolio - Limen",
  description: "Trabajos destacados de branding y diseño web",
};

export default function Portafolio() {
  return (
    <main className="min-h-screen bg-limen-white">
      <Navigation />

      <Hero
        title="Portafolio"
        subtitle="Trabajos que hicieron mundos visibles"
        pattern="fabric-2"
      />

      {/* Portfolio Grid */}
      <section className="py-20 bg-limen-cream pattern-fabric-1 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Studio Aurora",
                category: "Branding + Web Design",
                image: "pattern-fabric-1",
                description:
                  "Identidad visual para studio de fotografía conceptual",
              },
              {
                title: "Verde Vivo",
                category: "Branding",
                image: "pattern-fabric-2",
                description: "Marca para emprendimiento de productos ecológicos",
              },
              {
                title: "Nexus Tech",
                category: "Web Design",
                image: "pattern-animal",
                description: "Sitio web para startup de tecnología",
              },
              {
                title: "Artístico Collective",
                category: "Rediseño de Marca",
                image: "pattern-geometric-mix",
                description:
                  "Modernización de galería de arte contemporáneo",
              },
              {
                title: "Wellness Co",
                category: "Branding + Web",
                image: "pattern-fabric-3",
                description: "Identidad para marca de bienestar y meditación",
              },
              {
                title: "Local Market",
                category: "E-Commerce Design",
                image: "pattern-animal",
                description: "Plataforma de comercio electrónico local",
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

      {/* Stats */}
      <section className="py-20 bg-limen-white pattern-geometric-mix relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-5xl font-serif font-bold text-limen-accent mb-2">
                50+
              </p>
              <p className="font-light text-limen-black/70">
                Proyectos completados
              </p>
            </div>
            <div>
              <p className="text-5xl font-serif font-bold text-limen-accentAlt mb-2">
                40
              </p>
              <p className="font-light text-limen-black/70">Clientes felices</p>
            </div>
            <div>
              <p className="text-5xl font-serif font-bold text-limen-accentGold mb-2">
                10+
              </p>
              <p className="font-light text-limen-black/70">Años de trayectoria</p>
            </div>
            <div>
              <p className="text-5xl font-serif font-bold text-limen-black mb-2">
                ∞
              </p>
              <p className="font-light text-limen-black/70">Historias invisibles</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-limen-black text-limen-white pattern-animal relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-title-caps text-limen-white mb-6">
            ¿Tu historia podría estar aquí?
          </h2>
          <p className="font-subtitle-italic text-xl text-limen-white/80 mb-8">
            Cuéntanos tu idea y trabajemos juntos en hacerla visible
          </p>
          <a
            href="/contacto"
            className="inline-block px-10 py-4 bg-limen-accent text-limen-white rounded-lg font-serif font-semibold uppercase text-sm tracking-wider hover:scale-105 transition-transform"
          >
            Empezar proyecto
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}

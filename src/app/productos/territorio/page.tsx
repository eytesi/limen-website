"use client";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function TerritorioPage() {
  return (
    <main className="min-h-screen bg-limen-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-limen-cream pattern-fabric-2">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-limen-accent text-limen-white rounded-full text-sm font-serif uppercase tracking-wider mb-4">
                Producto · Identidad + presencia digital
              </span>
            </div>
            <h1 className="font-title-caps text-2xl mb-6">
              Territorio
            </h1>
            <p className="font-subtitle-italic text-2xl text-limen-black/70 mb-8">
              Tu mundo, construido de adentro hacia afuera — y habitable en todos los espacios.
            </p>
            <div className="mb-8">
              <p className="text-4xl font-serif font-bold tracking-wider text-limen-black">
                desde $1,800 USD
              </p>
              <p className="text-sm font-serif font-light uppercase tracking-widest text-limen-black/60 mt-2">
                · proyecto único · pago 50% adelantado
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Para quién es Section */}
      <section className="py-20 bg-limen-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="font-title-caps text-3xl mb-8 text-center">Para quién es</h2>
            <div className="prose prose-lg mx-auto text-center max-w-3xl">
              <p className="font-light text-limen-black/80 leading-relaxed mb-6">
                Para quienes necesitan una identidad sólida y un lugar digital donde vivirla.
              </p>
              <p className="font-light text-limen-black/80 leading-relaxed mb-6">
                Territorio es el producto más completo de Limen. Está pensado para proyectos que necesitan construir todo desde cero — o rehacer todo desde cero — y quieren que la identidad visual y la presencia web sean un ecosistema coherente, no dos cosas diseñadas por separado.
              </p>
              <p className="font-light text-limen-black/80 leading-relaxed mb-6">
                Es ideal para emprendimientos que están por lanzarse, artistas que necesitan un sitio profesional que los represente, o marcas que crecieron sin un sistema y hoy necesitan uno.
              </p>
              <blockquote className="italic text-limen-black/60 border-l-4 border-limen-accent pl-4 mt-6">
                "No diseñamos una web y después le ponemos el logo. Diseñamos el mundo de tu marca y después construimos el espacio donde habitarlo."
              </blockquote>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pilares Section */}
      <section className="py-20 bg-limen-cream pattern-fabric-1">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="font-title-caps text-3xl mb-12 text-center">Dos pilares, un ecosistema</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-limen-white p-6 rounded-lg border border-limen-black/10">
                <h3 className="font-serif font-semibold mb-2">Pilar 01</h3>
                <h4 className="font-serif font-bold text-lg mb-3">Identidad de marca</h4>
                <ul className="space-y-2 text-sm font-light text-limen-black/70 text-left">
                  <li>Sesión de descubrimiento</li>
                  <li>Estrategia y posicionamiento</li>
                  <li>Logotipo y sistema visual</li>
                  <li>Paleta, tipografía, patterns</li>
                  <li>Tono de voz y narrativa</li>
                  <li>Manual de identidad extendido</li>
                </ul>
              </div>
              <div className="bg-limen-white p-6 rounded-lg border border-limen-black/10">
                <h3 className="font-serif font-semibold mb-2">Pilar 02</h3>
                <h4 className="font-serif font-bold text-lg mb-3">Presencia digital</h4>
                <ul className="space-y-2 text-sm font-light text-limen-black/70 text-left">
                  <li>Diseño web en Figma</li>
                  <li>Desarrollo (hasta 5 páginas)</li>
                  <li>Mobile responsive</li>
                  <li>CMS básico si se necesita</li>
                  <li>Kit de activos para redes</li>
                  <li>Dominio y hosting: orientación</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Qué incluye Section */}
      <section className="py-20 bg-limen-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h2 className="font-title-caps text-3xl mb-12 text-center">Qué incluye en detalle</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-limen-cream p-6 rounded-lg border border-limen-black/10">
                <div className="font-serif font-bold text-limen-accent text-2xl mb-2">01</div>
                <h4 className="font-serif font-semibold mb-2">Sesión de descubrimiento</h4>
                <p className="text-sm font-light text-limen-black/70">90 minutos para entender tu proyecto, tu mundo y a quién querés atraer.</p>
              </div>
              <div className="bg-limen-cream p-6 rounded-lg border border-limen-black/10">
                <div className="font-serif font-bold text-limen-accent text-2xl mb-2">02</div>
                <h4 className="font-serif font-semibold mb-2">Estrategia de marca completa</h4>
                <p className="text-sm font-light text-limen-black/70">Posicionamiento, tono de voz, arquetipo, narrativa y mundo conceptual documentados.</p>
              </div>
              <div className="bg-limen-cream p-6 rounded-lg border border-limen-black/10">
                <div className="font-serif font-bold text-limen-accent text-2xl mb-2">03</div>
                <h4 className="font-serif font-semibold mb-2">Identidad visual</h4>
                <p className="text-sm font-light text-limen-black/70">Logotipo, variantes, paleta, tipografía, patterns y texturas propias del proyecto.</p>
              </div>
              <div className="bg-limen-cream p-6 rounded-lg border border-limen-black/10">
                <div className="font-serif font-bold text-limen-accent text-2xl mb-2">04</div>
                <h4 className="font-serif font-semibold mb-2">Manual de identidad extendido</h4>
                <p className="text-sm font-light text-limen-black/70">Guía completa de uso, aplicaciones correctas e incorrectas, y ejemplos en contexto.</p>
              </div>
              <div className="bg-limen-cream p-6 rounded-lg border border-limen-black/10">
                <div className="font-serif font-bold text-limen-accent text-2xl mb-2">05</div>
                <h4 className="font-serif font-semibold mb-2">Diseño y desarrollo web</h4>
                <p className="text-sm font-light text-limen-black/70">Hasta 5 páginas diseñadas en Figma y desarrolladas. Mobile responsive incluido.</p>
              </div>
              <div className="bg-limen-cream p-6 rounded-lg border border-limen-black/10">
                <div className="font-serif font-bold text-limen-accent text-2xl mb-2">06</div>
                <h4 className="font-serif font-semibold mb-2">Kit de redes sociales</h4>
                <p className="text-sm font-light text-limen-black/70">Templates editables para Instagram, LinkedIn u otras plataformas relevantes al proyecto.</p>
              </div>
              <div className="bg-limen-cream p-6 rounded-lg border border-limen-black/10">
                <div className="font-serif font-bold text-limen-accent text-2xl mb-2">07</div>
                <h4 className="font-serif font-semibold mb-2">Sistema de patterns</h4>
                <p className="text-sm font-light text-limen-black/70">Patrones y texturas personalizados, únicos del proyecto. Archivos en todos los formatos.</p>
              </div>
              <div className="bg-limen-cream p-6 rounded-lg border border-limen-black/10">
                <div className="font-serif font-bold text-limen-accent text-2xl mb-2">08</div>
                <h4 className="font-serif font-semibold mb-2">Archivos finales completos</h4>
                <p className="text-sm font-light text-limen-black/70">Todo en AI, PDF, PNG, SVG y los formatos web correspondientes. Tuyo para siempre.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Cómo trabajamos Section */}
      <section className="py-20 bg-limen-cream pattern-fabric-3">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="font-title-caps text-3xl mb-12 text-center">Cómo trabajamos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-12 h-12 bg-limen-accent rounded-full flex items-center justify-center text-limen-white font-serif font-bold text-xl">1</div>
                  <h3 className="font-serif font-semibold text-xl">Descubrimiento</h3>
                </div>
                <p className="font-light text-limen-black/70 ml-16">Sesión de 90 minutos para entender tu proyecto en profundidad. Narrativa, valores, referencias, cliente ideal y objetivos de la presencia digital.</p>
                <p className="text-sm font-serif font-light uppercase tracking-widest text-limen-black/60 ml-16">Semana 1 · videollamada</p>
              </div>
              <div>
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-12 h-12 bg-limen-accent rounded-full flex items-center justify-center text-limen-white font-serif font-bold text-xl">2</div>
                  <h3 className="font-serif font-semibold text-xl">Estrategia y concepto</h3>
                </div>
                <p className="font-light text-limen-black/70 ml-16">Desarrollamos la estrategia escrita, el mundo conceptual de la marca y la arquitectura de contenido del sitio. Lo presentamos y ajustamos antes de diseñar.</p>
                <p className="text-sm font-serif font-light uppercase tracking-widest text-limen-black/60 ml-16">Semana 1–2 · documento escrito + aprobación</p>
              </div>
              <div>
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-12 h-12 bg-limen-accent rounded-full flex items-center justify-center text-limen-white font-serif font-bold text-xl">3</div>
                  <h3 className="font-serif font-semibold text-xl">Identidad visual</h3>
                </div>
                <p className="font-light text-limen-black/70 ml-16">Diseñamos el sistema de identidad completo. Una ronda de revisiones incluida en esta etapa.</p>
                <p className="text-sm font-serif font-light uppercase tracking-widest text-limen-black/60 ml-16">Semana 2–3 · presentación + revisiones</p>
              </div>
              <div>
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-12 h-12 bg-limen-accent rounded-full flex items-center justify-center text-limen-white font-serif font-bold text-xl">4</div>
                  <h3 className="font-serif font-semibold text-xl">Diseño web</h3>
                </div>
                <p className="font-light text-limen-black/70 ml-16">Con la identidad aprobada, diseñamos el sitio en Figma. Presentamos mockups completos antes de desarrollar. Una ronda de revisiones incluida.</p>
                <p className="text-sm font-serif font-light uppercase tracking-widest text-limen-black/60 ml-16">Semana 3–4 · diseño + aprobación</p>
              </div>
              <div>
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-12 h-12 bg-limen-accent rounded-full flex items-center justify-center text-limen-white font-serif font-bold text-xl">5</div>
                  <h3 className="font-serif font-semibold text-xl">Desarrollo y entrega</h3>
                </div>
                <p className="font-light text-limen-black/70 ml-16">Desarrollamos el sitio, aplicamos la identidad a todos los formatos incluidos, producimos el manual y entregamos todos los archivos finales.</p>
                <p className="text-sm font-serif font-light uppercase tracking-widest text-limen-black/60 ml-16">Semana 5–6 · entrega final completa</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-limen-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <h2 className="font-title-caps text-3xl mb-12 text-center">Preguntas frecuentes</h2>
            <div className="space-y-8">
              <div className="bg-limen-cream p-6 rounded-lg border border-limen-black/10">
                <h3 className="font-serif font-semibold mb-3">¿Cuánto tiempo toma el proyecto completo?</h3>
                <p className="font-light text-limen-black/70">Entre 5 y 6 semanas desde la sesión de descubrimiento hasta la entrega final. El tiempo varía según la velocidad de feedback y aprobaciones de tu parte.</p>
              </div>
              <div className="bg-limen-cream p-6 rounded-lg border border-limen-black/10">
                <h3 className="font-serif font-semibold mb-3">¿Qué tecnología usan para el desarrollo web?</h3>
                <p className="font-light text-limen-black/70">Depende de las necesidades del proyecto. Trabajamos con HTML/CSS/JS para sitios estáticos, y con plataformas como Webflow o WordPress cuando se necesita un CMS. Lo definimos juntos en la etapa de estrategia.</p>
              </div>
              <div className="bg-limen-cream p-6 rounded-lg border border-limen-black/10">
                <h3 className="font-serif font-semibold mb-3">¿Puedo agregar más páginas al sitio?</h3>
                <p className="font-light text-limen-black/70">Sí. Páginas adicionales más allá de las 5 incluidas tienen un costo de $150 USD por página, diseño y desarrollo.</p>
              </div>
              <div className="bg-limen-cream p-6 rounded-lg border border-limen-black/10">
                <h3 className="font-serif font-semibold mb-3">¿Incluye hosting o dominio?</h3>
                <p className="font-light text-limen-black/70">No incluimos los costos de hosting o dominio, pero te orientamos en qué elegir y cómo configurarlo. La mayoría de los proyectos de este tipo tienen costos de hosting de $10–20 USD por mes.</p>
              </div>
              <div className="bg-limen-cream p-6 rounded-lg border border-limen-black/10">
                <h3 className="font-serif font-semibold mb-3">¿Cómo es el esquema de pago?</h3>
                <p className="font-light text-limen-black/70">50% al inicio, 25% al aprobar la identidad visual, y 25% restante contra entrega final del sitio.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-limen-black text-limen-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h2 className="font-title-caps text-3xl mb-6">¿Listo para construir tu territorio?</h2>
            <p className="font-light text-limen-white/80 text-lg mb-8 max-w-2xl mx-auto">
              Tu marca merece un espacio digital que la represente. Hablemos de cómo podemos construirlo juntos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contacto"
                className="inline-flex items-center gap-2 px-8 py-4 bg-limen-accent text-limen-white rounded-lg font-serif font-semibold uppercase text-sm tracking-wider hover:bg-limen-accent/90 transition-all duration-300 group"
              >
                Empezar Proyecto
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/productos"
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-limen-white text-limen-white rounded-lg font-serif font-semibold uppercase text-sm tracking-wider hover:bg-limen-black hover:text-limen-white transition-all duration-300 group"
              >
                Ver Otros Productos
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
"use client";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function MundoPage() {
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
                Producto · Diseño web
              </span>
            </div>
            <h1 className="font-title-caps text-3xl mb-6">
              Mundo
            </h1>
            <p className="font-subtitle-italic text-2xl text-limen-black/70 mb-8">
              Un espacio digital construido para habitar tu identidad — no para contradecirla.
            </p>
            <div className="mb-8">
              <p className="text-4xl font-serif font-bold tracking-wider text-limen-black">
                desde $600 USD
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
                Para quienes ya tienen una identidad clara y necesitan un sitio que la traduzca bien.
              </p>
              <p className="font-light text-limen-black/80 leading-relaxed mb-6">
                Mundo está pensado para proyectos que ya saben quiénes son visualmente — tienen su logo, sus colores, su lenguaje — pero todavía no tienen un sitio web a la altura, o tienen uno que no los representa. No arrancamos desde cero en lo estratégico: tomamos lo que ya existe y lo llevamos a la pantalla con coherencia y precisión.
              </p>
              <p className="font-light text-limen-black/80 leading-relaxed mb-6">
                Si tu identidad todavía no está definida, Umbral o Territorio son el punto de partida correcto.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Qué incluye Section */}
      <section className="py-20 bg-limen-cream pattern-fabric-1">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h2 className="font-title-caps text-3xl mb-12 text-center">Qué incluye</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-limen-white p-6 rounded-lg border border-limen-black/10">
                <div className="font-serif font-bold text-limen-accent text-2xl mb-2">01</div>
                <h4 className="font-serif font-semibold mb-2">Sesión de briefing</h4>
                <p className="text-sm font-light text-limen-black/70">60 minutos para entender tu marca, tus objetivos y lo que necesitás que el sitio haga.</p>
              </div>
              <div className="bg-limen-white p-6 rounded-lg border border-limen-black/10">
                <div className="font-serif font-bold text-limen-accent text-2xl mb-2">02</div>
                <h4 className="font-serif font-semibold mb-2">Arquitectura de contenido</h4>
                <p className="text-sm font-light text-limen-black/70">Estructura de páginas, jerarquía de información y flujo de navegación definidos antes de diseñar.</p>
              </div>
              <div className="bg-limen-white p-6 rounded-lg border border-limen-black/10">
                <div className="font-serif font-bold text-limen-accent text-2xl mb-2">03</div>
                <h4 className="font-serif font-semibold mb-2">Diseño en Figma</h4>
                <p className="text-sm font-light text-limen-black/70">Mockups completos de todas las páginas, desktop y mobile. Aprobación antes de desarrollar.</p>
              </div>
              <div className="bg-limen-white p-6 rounded-lg border border-limen-black/10">
                <div className="font-serif font-bold text-limen-accent text-2xl mb-2">04</div>
                <h4 className="font-serif font-semibold mb-2">Desarrollo web</h4>
                <p className="text-sm font-light text-limen-black/70">Hasta 4 páginas desarrolladas. Mobile responsive incluido. Una ronda de revisiones.</p>
              </div>
              <div className="bg-limen-white p-6 rounded-lg border border-limen-black/10">
                <div className="font-serif font-bold text-limen-accent text-2xl mb-2">05</div>
                <h4 className="font-serif font-semibold mb-2">CMS básico (opcional)</h4>
                <p className="text-sm font-light text-limen-black/70">Si necesitás actualizar contenido vos mismo, integramos un CMS simple y te enseñamos a usarlo.</p>
              </div>
              <div className="bg-limen-white p-6 rounded-lg border border-limen-black/10">
                <div className="font-serif font-bold text-limen-accent text-2xl mb-2">06</div>
                <h4 className="font-serif font-semibold mb-2">Entrega y handoff</h4>
                <p className="text-sm font-light text-limen-black/70">El sitio live, los archivos de diseño en Figma, y una sesión de entrega para que sepas cómo manejarlo.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Lo que necesitamos de tu parte */}
      <section className="py-20 bg-limen-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h2 className="font-title-caps text-3xl mb-12 text-center">Lo que necesitamos de tu parte</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-limen-cream p-6 rounded-lg border border-limen-black/10">
                <h3 className="font-serif font-semibold mb-3">Lo que traés vos</h3>
                <ul className="space-y-2 text-sm font-light text-limen-black/70 text-left">
                  <li>Identidad visual existente (logo, colores, tipografía)</li>
                  <li>Textos e imágenes para el sitio</li>
                  <li>Acceso a dominio y hosting</li>
                  <li>Referencias de sitios que te gusten</li>
                </ul>
              </div>
              <div className="bg-limen-cream p-6 rounded-lg border border-limen-black/10">
                <h3 className="font-serif font-semibold mb-3">Lo que hacemos nosotros</h3>
                <ul className="space-y-2 text-sm font-light text-limen-black/70 text-left">
                  <li>Diseño y desarrollo completo</li>
                  <li>Adaptación de textos al tono de marca</li>
                  <li>Optimización de imágenes y rendimiento</li>
                  <li>Configuración y deploy del sitio</li>
                </ul>
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
                  <h3 className="font-serif font-semibold text-xl">Briefing</h3>
                </div>
                <p className="font-light text-limen-black/70 ml-16">Sesión de 60 minutos para entender tu marca, tus objetivos digitales y los contenidos del sitio. Definimos estructura y alcance.</p>
                <p className="text-sm font-serif font-light uppercase tracking-widest text-limen-black/60 ml-16">Semana 1 · videollamada</p>
              </div>
              <div>
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-12 h-12 bg-limen-accent rounded-full flex items-center justify-center text-limen-white font-serif font-bold text-xl">2</div>
                  <h3 className="font-serif font-semibold text-xl">Arquitectura y wireframe</h3>
                </div>
                <p className="font-light text-limen-black/70 ml-16">Definimos la estructura del sitio, el flujo de navegación y la jerarquía de contenido. Sin diseño visual todavía — primero la lógica.</p>
                <p className="text-sm font-serif font-light uppercase tracking-widest text-limen-black/60 ml-16">Semana 1 · documento + aprobación</p>
              </div>
              <div>
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-12 h-12 bg-limen-accent rounded-full flex items-center justify-center text-limen-white font-serif font-bold text-xl">3</div>
                  <h3 className="font-serif font-semibold text-xl">Diseño en Figma</h3>
                </div>
                <p className="font-light text-limen-black/70 ml-16">Diseñamos todas las páginas en Figma, desktop y mobile. Presentamos y abrimos una ronda de revisiones antes de pasar a desarrollo.</p>
                <p className="text-sm font-serif font-light uppercase tracking-widest text-limen-black/60 ml-16">Semana 2 · presentación + revisiones</p>
              </div>
              <div>
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-12 h-12 bg-limen-accent rounded-full flex items-center justify-center text-limen-white font-serif font-bold text-xl">4</div>
                  <h3 className="font-serif font-semibold text-xl">Desarrollo y entrega</h3>
                </div>
                <p className="font-light text-limen-black/70 ml-16">Desarrollamos el sitio aprobado, lo configuramos en tu hosting, hacemos pruebas y lo dejamos live. Sesión de handoff para que sepas manejarlo.</p>
                <p className="text-sm font-serif font-light uppercase tracking-widest text-limen-black/60 ml-16">Semana 3 · entrega final + sesión de cierre</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Extras Section */}
      <section className="py-20 bg-limen-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <h2 className="font-title-caps text-3xl mb-12 text-center">¿Querés más?</h2>
            <div className="space-y-8">
              <div className="bg-limen-cream p-6 rounded-lg border border-limen-black/10">
                <h3 className="font-serif font-semibold mb-3">Sumar identidad visual — upgrade a Territorio</h3>
                <p className="font-light text-limen-black/70">Si todavía no tenés una identidad definida, podemos construir todo junto. El upgrade a Territorio incluye branding completo + web con un proceso integrado.</p>
                <p className="font-serif font-bold text-limen-accent mt-2">desde $1,800</p>
              </div>
              <div className="bg-limen-cream p-6 rounded-lg border border-limen-black/10">
                <h3 className="font-serif font-semibold mb-3">Páginas adicionales</h3>
                <p className="font-light text-limen-black/70">Más allá de las 4 páginas incluidas, cada página adicional tiene diseño y desarrollo incluido.</p>
                <p className="font-serif font-bold text-limen-accent mt-2">$150 c/u</p>
              </div>
              <div className="bg-limen-cream p-6 rounded-lg border border-limen-black/10">
                <h3 className="font-serif font-semibold mb-3">Retainer de mantenimiento mensual</h3>
                <p className="font-light text-limen-black/70">Actualizaciones de contenido, ajustes de diseño y soporte técnico continuo.</p>
                <p className="font-serif font-bold text-limen-accent mt-2">desde $200/mes</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-limen-cream pattern-fabric-1">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h2 className="font-title-caps text-3xl mb-12 text-center">Preguntas frecuentes</h2>
            <div className="space-y-8">
              <div className="bg-limen-white p-6 rounded-lg border border-limen-black/10">
                <h3 className="font-serif font-semibold mb-3">¿Cuánto tiempo toma el proyecto?</h3>
                <p className="font-light text-limen-black/70">Entre 3 y 4 semanas desde el briefing hasta el sitio live. El tiempo varía según la velocidad de aprobación de tu parte y si los contenidos están listos al inicio.</p>
              </div>
              <div className="bg-limen-white p-6 rounded-lg border border-limen-black/10">
                <h3 className="font-serif font-semibold mb-3">¿Necesito tener todos los textos e imágenes listos?</h3>
                <p className="font-light text-limen-black/70">Sí, es recomendable. El proceso es más fluido cuando los contenidos están listos antes de diseñar. Si necesitás ayuda con los textos, podemos incluir redacción como servicio adicional.</p>
              </div>
              <div className="bg-limen-white p-6 rounded-lg border border-limen-black/10">
                <h3 className="font-serif font-semibold mb-3">¿En qué plataforma desarrollan?</h3>
                <p className="font-light text-limen-black/70">Depende de tus necesidades. Para sitios que no necesitan actualizaciones frecuentes, desarrollamos en código (HTML/CSS/JS). Para sitios donde necesitás editar contenido vos mismo, usamos Webflow o WordPress. Lo definimos en el briefing.</p>
              </div>
              <div className="bg-limen-white p-6 rounded-lg border border-limen-black/10">
                <h3 className="font-serif font-semibold mb-3">¿Cuántas revisiones están incluidas?</h3>
                <p className="font-light text-limen-black/70">Una ronda de revisiones sobre el diseño en Figma y una ronda sobre el desarrollo. Revisiones adicionales tienen un costo de $80 USD por ronda.</p>
              </div>
              <div className="bg-limen-white p-6 rounded-lg border border-limen-black/10">
                <h3 className="font-serif font-semibold mb-3">¿El sitio va a ser rápido y estar optimizado para buscadores?</h3>
                <p className="font-light text-limen-black/70">Sí. Todos los sitios que desarrollamos incluyen optimización básica de rendimiento y SEO técnico — estructura semántica correcta, meta tags, velocidad de carga y accesibilidad básica.</p>
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
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <h2 className="font-title-caps text-3xl mb-6">¿Listo para tener presencia digital?</h2>
            <p className="font-light text-limen-white/80 text-lg mb-8 max-w-2xl mx-auto">
              Tu marca merece un sitio web que la represente. Hablemos de cómo podemos construirlo.
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
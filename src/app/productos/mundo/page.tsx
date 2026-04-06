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
      <section className="relative py-20 bg-limen-cream pattern-fabric-2">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-limen-accent text-limen-white rounded-full text-sm font-serif uppercase tracking-wider mb-4">
                Producto · Solo diseño web
              </span>
            </div>
            <h1 className="font-title-caps text-5xl md:text-6xl mb-6">
              Mundo
            </h1>
            <p className="font-subtitle-italic text-2xl text-limen-black/70 mb-8">
              Tu marca en el mundo digital.
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

      {/* Description Section */}
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
                Para clientes que ya tienen identidad definida y necesitan un sitio web que la traduzca con coherencia.
              </p>
              <p className="font-light text-limen-black/80 leading-relaxed">
                Mundo es el servicio perfecto para quienes ya cuentan con una identidad visual sólida y buscan un sitio web profesional que la represente. Nos enfocamos en crear experiencias digitales coherentes, responsivas y optimizadas para convertir visitantes en clientes.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 bg-limen-cream pattern-fabric-1">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h2 className="font-title-caps text-3xl mb-12 text-center">Qué incluye</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-limen-white p-6 rounded-lg border border-limen-black/10 text-center"
              >
                <h3 className="font-serif font-semibold mb-3">Diseño en Figma</h3>
                <p className="text-sm font-light text-limen-black/70">
                  Prototipos de alta fidelidad y diseño de interfaz completo.
                </p>
              </motion.div>

              <motion.div
                whileHover={{ y: -5 }}
                className="bg-limen-white p-6 rounded-lg border border-limen-black/10 text-center"
              >
                <h3 className="font-serif font-semibold mb-3">Desarrollo web</h3>
                <p className="text-sm font-light text-limen-black/70">
                  Sitio web funcional desarrollado con tecnologías modernas.
                </p>
              </motion.div>

              <motion.div
                whileHover={{ y: -5 }}
                className="bg-limen-white p-6 rounded-lg border border-limen-black/10 text-center"
              >
                <h3 className="font-serif font-semibold mb-3">Mobile responsive</h3>
                <p className="text-sm font-light text-limen-black/70">
                  Optimizado para todos los dispositivos y tamaños de pantalla.
                </p>
              </motion.div>

              <motion.div
                whileHover={{ y: -5 }}
                className="bg-limen-white p-6 rounded-lg border border-limen-black/10 text-center"
              >
                <h3 className="font-serif font-semibold mb-3">CMS básico opcional</h3>
                <p className="text-sm font-light text-limen-black/70">
                  Sistema de gestión de contenido si necesitas actualizar el sitio.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-limen-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="font-title-caps text-3xl mb-12 text-center">Cómo trabajamos</h2>
            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-limen-accent rounded-full flex items-center justify-center text-limen-white font-serif font-bold text-xl flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="font-serif font-semibold text-xl mb-2">Briefing y análisis</h3>
                  <p className="font-light text-limen-black/70">
                    Entendemos tus objetivos, contenido disponible y requerimientos técnicos.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-limen-accent rounded-full flex items-center justify-center text-limen-white font-serif font-bold text-xl flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="font-serif font-semibold text-xl mb-2">Diseño y prototipado</h3>
                  <p className="font-light text-limen-black/70">
                    Creamos el diseño visual y la estructura de navegación en Figma.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-limen-accent rounded-full flex items-center justify-center text-limen-white font-serif font-bold text-xl flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="font-serif font-semibold text-xl mb-2">Desarrollo y testing</h3>
                  <p className="font-light text-limen-black/70">
                    Construimos el sitio web y realizamos pruebas exhaustivas.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-limen-accent rounded-full flex items-center justify-center text-limen-white font-serif font-bold text-xl flex-shrink-0">
                  4
                </div>
                <div>
                  <h3 className="font-serif font-semibold text-xl mb-2">Entrega y soporte</h3>
                  <p className="font-light text-limen-black/70">
                    Lanzamos tu sitio y te acompañamos en los primeros pasos.
                  </p>
                </div>
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
            transition={{ duration: 0.6, delay: 0.5 }}
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
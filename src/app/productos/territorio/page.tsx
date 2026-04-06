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
            <h1 className="font-title-caps text-5xl md:text-6xl mb-6">
              Territorio
            </h1>
            <p className="font-subtitle-italic text-2xl text-limen-black/70 mb-8">
              Construye tu territorio online con identidad completa.
            </p>
            <div className="mb-8">
              <p className="text-4xl font-serif font-bold tracking-wider text-limen-black">
                desde $1,800 USD
              </p>
              <p className="text-sm font-serif font-light uppercase tracking-widest text-limen-black/60 mt-2">
                · proyecto completo · pago 50% adelantado
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
                Para quienes necesitan tanto una identidad sólida como un espacio digital donde habitarla.
              </p>
              <p className="font-light text-limen-black/80 leading-relaxed">
                Territorio combina la identidad completa de Umbral con una presencia digital coherente. Ideal para emprendimientos que quieren construir su marca desde cero con un sitio web que la represente fielmente.
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-limen-white p-6 rounded-lg border border-limen-black/10"
              >
                <h3 className="font-serif font-semibold mb-3">Todo lo de Umbral</h3>
                <ul className="space-y-2 text-sm font-light text-limen-black/70">
                  <li>• Sesión de descubrimiento</li>
                  <li>• Estrategia de marca</li>
                  <li>• Identidad visual completa</li>
                  <li>• Manual de identidad</li>
                  <li>• Aplicaciones clave</li>
                  <li>• Archivos finales</li>
                </ul>
              </motion.div>

              <motion.div
                whileHover={{ y: -5 }}
                className="bg-limen-white p-6 rounded-lg border border-limen-black/10"
              >
                <h3 className="font-serif font-semibold mb-3">Presencia digital</h3>
                <ul className="space-y-2 text-sm font-light text-limen-black/70">
                  <li>• Estrategia de contenido y tono de voz</li>
                  <li>• Diseño y desarrollo web (hasta 5 páginas)</li>
                  <li>• Sistema de patterns y texturas personalizado</li>
                  <li>• Kit de activos para redes sociales</li>
                  <li>• Manual de identidad extendido</li>
                </ul>
              </motion.div>
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
            transition={{ duration: 0.6, delay: 0.4 }}
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
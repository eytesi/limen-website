"use client";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function UmbralPage() {
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
                Producto · Identidad de marca completa
              </span>
            </div>
            <h1 className="font-title-caps text-3xl mb-6">
              Umbral
            </h1>
            <p className="font-subtitle-italic text-2xl text-limen-black/70 mb-8">
              El momento en que tu marca cruza de invisible a visible.
            </p>
            <div className="mb-8">
              <p className="text-4xl font-serif font-bold tracking-wider text-limen-black">
                desde $800 USD
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
                Para quienes tienen un mundo propio y necesitan el lenguaje para mostrarlo.
              </p>
              <p className="font-light text-limen-black/80 leading-relaxed">
                Umbral está diseñado para emprendimientos, artistas, proyectos culturales y marcas personales que están comenzando o que necesitan redefinirse completamente. No es un servicio de diseño genérico: es un proceso de traducción. Trabajamos desde adentro hacia afuera — primero entendemos quién sos, qué mundo querés habitar, y a quién querés atraer. El resultado visual es consecuencia de ese trabajo, no el punto de partida.
              </p>
              <p className="font-light text-limen-black/80 leading-relaxed mt-6">
                Este producto es ideal si estás lanzando algo nuevo, si sentís que tu marca actual no te representa, o si tenés una visión clara pero no encontraste todavía cómo hacerla tangible.
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
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-limen-white p-6 rounded-lg border border-limen-black/10"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-limen-accent rounded-full flex items-center justify-center text-limen-white font-serif font-bold">
                    01
                  </div>
                  <h3 className="font-serif font-semibold">Sesión de descubrimiento</h3>
                </div>
                <p className="text-sm font-light text-limen-black/70">
                  Reunión de 90 minutos donde exploramos tu narrativa, valores, referencias y cliente ideal. El punto de partida de todo.
                </p>
              </motion.div>

              <motion.div
                whileHover={{ y: -5 }}
                className="bg-limen-white p-6 rounded-lg border border-limen-black/10"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-limen-accent rounded-full flex items-center justify-center text-limen-white font-serif font-bold">
                    02
                  </div>
                  <h3 className="font-serif font-semibold">Estrategia de marca</h3>
                </div>
                <p className="text-sm font-light text-limen-black/70">
                  Documento escrito con posicionamiento, tono de voz, arquetipo de marca y mundo conceptual. La brújula que guía el diseño.
                </p>
              </motion.div>

              <motion.div
                whileHover={{ y: -5 }}
                className="bg-limen-white p-6 rounded-lg border border-limen-black/10"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-limen-accent rounded-full flex items-center justify-center text-limen-white font-serif font-bold">
                    03
                  </div>
                  <h3 className="font-serif font-semibold">Identidad visual completa</h3>
                </div>
                <p className="text-sm font-light text-limen-black/70">
                  Logotipo principal y variantes, paleta de colores, sistema tipográfico, patterns y texturas propias.
                </p>
              </motion.div>

              <motion.div
                whileHover={{ y: -5 }}
                className="bg-limen-white p-6 rounded-lg border border-limen-black/10"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-limen-accent rounded-full flex items-center justify-center text-limen-white font-serif font-bold">
                    04
                  </div>
                  <h3 className="font-serif font-semibold">Manual de identidad</h3>
                </div>
                <p className="text-sm font-light text-limen-black/70">
                  Guía de uso completa: reglas de aplicación, combinaciones correctas, usos incorrectos y ejemplos prácticos.
                </p>
              </motion.div>

              <motion.div
                whileHover={{ y: -5 }}
                className="bg-limen-white p-6 rounded-lg border border-limen-black/10"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-limen-accent rounded-full flex items-center justify-center text-limen-white font-serif font-bold">
                    05
                  </div>
                  <h3 className="font-serif font-semibold">Aplicaciones clave</h3>
                </div>
                <p className="text-sm font-light text-limen-black/70">
                  Perfil y portada para redes sociales, tarjeta de presentación y membrete o firma de email.
                </p>
              </motion.div>

              <motion.div
                whileHover={{ y: -5 }}
                className="bg-limen-white p-6 rounded-lg border border-limen-black/10"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-limen-accent rounded-full flex items-center justify-center text-limen-white font-serif font-bold">
                    06
                  </div>
                  <h3 className="font-serif font-semibold">Archivos finales</h3>
                </div>
                <p className="text-sm font-light text-limen-black/70">
                  Entrega en todos los formatos necesarios: AI, PDF, PNG, SVG. Tuyo para siempre.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Cómo trabajamos Section */}
      <section className="py-20 bg-limen-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="font-title-caps text-3xl mb-12 text-center">Cómo trabajamos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <motion.div
                whileHover={{ x: -5 }}
                className="space-y-4"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-limen-accent rounded-full flex items-center justify-center text-limen-white font-serif font-bold text-xl">
                    1
                  </div>
                  <h3 className="font-serif font-semibold text-xl">Sesión de descubrimiento</h3>
                </div>
                <p className="font-light text-limen-black/70 ml-16">
                  Nos reunimos para entender tu proyecto en profundidad. No hay preguntas incorrectas ni respuestas esperadas. El objetivo es que podamos ver tu mundo desde adentro.
                </p>
                <p className="text-sm font-serif font-light uppercase tracking-widest text-limen-black/60 ml-16">
                  Semana 1 · 90 minutos · por videollamada
                </p>
              </motion.div>

              <motion.div
                whileHover={{ x: 5 }}
                className="space-y-4"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-limen-accent rounded-full flex items-center justify-center text-limen-white font-serif font-bold text-xl">
                    2
                  </div>
                  <h3 className="font-serif font-semibold text-xl">Estrategia y concepto</h3>
                </div>
                <p className="font-light text-limen-black/70 ml-16">
                  Con lo que surgió en la sesión, desarrollamos la estrategia escrita y la dirección conceptual de la identidad. Te lo presentamos antes de diseñar cualquier cosa visual.
                </p>
                <p className="text-sm font-serif font-light uppercase tracking-widest text-limen-black/60 ml-16">
                  Semana 1–2 · entrega de documento escrito
                </p>
              </motion.div>

              <motion.div
                whileHover={{ x: -5 }}
                className="space-y-4"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-limen-accent rounded-full flex items-center justify-center text-limen-white font-serif font-bold text-xl">
                    3
                  </div>
                  <h3 className="font-serif font-semibold text-xl">Diseño de identidad</h3>
                </div>
                <p className="font-light text-limen-black/70 ml-16">
                  Desarrollamos la identidad visual completa: logotipo, sistema de color, tipografía, patterns. Presentamos una propuesta principal con variantes y abrimos una ronda de revisiones.
                </p>
                <p className="text-sm font-serif font-light uppercase tracking-widest text-limen-black/60 ml-16">
                  Semana 2–3 · presentación + revisiones
                </p>
              </motion.div>

              <motion.div
                whileHover={{ x: 5 }}
                className="space-y-4"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-limen-accent rounded-full flex items-center justify-center text-limen-white font-serif font-bold text-xl">
                    4
                  </div>
                  <h3 className="font-serif font-semibold text-xl">Aplicaciones y entrega</h3>
                </div>
                <p className="font-light text-limen-black/70 ml-16">
                  Aplicamos la identidad a los formatos incluidos, producimos el manual y entregamos todos los archivos finales en los formatos acordados.
                </p>
                <p className="text-sm font-serif font-light uppercase tracking-widest text-limen-black/60 ml-16">
                  Semana 4 · entrega final completa
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-limen-cream pattern-fabric-3">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <h2 className="font-title-caps text-3xl mb-12 text-center">Preguntas frecuentes</h2>
            <div className="space-y-8">
              <div className="bg-limen-white p-6 rounded-lg border border-limen-black/10">
                <h3 className="font-serif font-semibold mb-3">¿Cuántas revisiones están incluidas?</h3>
                <p className="font-light text-limen-black/70">
                  Incluye dos rondas de revisiones sobre la identidad visual. Las revisiones adicionales tienen un costo de $80 USD por ronda. En la práctica, dos rondas son suficientes cuando el trabajo de estrategia previo está bien hecho.
                </p>
              </div>

              <div className="bg-limen-white p-6 rounded-lg border border-limen-black/10">
                <h3 className="font-serif font-semibold mb-3">¿Puedo empezar sin tener claro qué quiero?</h3>
                <p className="font-light text-limen-black/70">
                  Sí. Para eso existe la sesión de descubrimiento. No necesitás llegar con respuestas — necesitás llegar con honestidad sobre tu proyecto. El proceso está diseñado para ayudarte a clarificar lo que todavía no podés articular.
                </p>
              </div>

              <div className="bg-limen-white p-6 rounded-lg border border-limen-black/10">
                <h3 className="font-serif font-semibold mb-3">¿Cómo es el esquema de pago?</h3>
                <p className="font-light text-limen-black/70">
                  50% al inicio del proyecto, 50% contra entrega final. Para proyectos en ARS, cotizamos al tipo de cambio acordado al momento del inicio.
                </p>
              </div>

              <div className="bg-limen-white p-6 rounded-lg border border-limen-black/10">
                <h3 className="font-serif font-semibold mb-3">¿Qué pasa si no me convence la propuesta?</h3>
                <p className="font-light text-limen-black/70">
                  Si la propuesta no va en la dirección correcta, trabajamos sobre el feedback hasta encontrar el camino. No entregamos algo que no te represente. En casos excepcionales donde no llegamos a un acuerdo, devolvemos el 50% inicial.
                </p>
              </div>

              <div className="bg-limen-white p-6 rounded-lg border border-limen-black/10">
                <h3 className="font-serif font-semibold mb-3">¿Puedo agregar diseño web después?</h3>
                <p className="font-light text-limen-black/70">
                  Sí. Clientes que comenzaron con Umbral pueden sumar diseño web con un descuento del 15% sobre el precio de Mundo, porque ya tenemos todo el trabajo estratégico y visual hecho.
                </p>
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
            <h2 className="font-title-caps text-3xl mb-6">¿Listo para cruzar el umbral?</h2>
            <p className="font-light text-limen-white/80 text-lg mb-8 max-w-2xl mx-auto">
              Tu marca está esperando el momento de hacerse visible. Hablemos de cómo podemos hacer que suceda.
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
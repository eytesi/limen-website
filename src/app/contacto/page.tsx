"use client";

import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Contacto() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "branding",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log(formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        company: "",
        service: "branding",
        message: "",
      });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <main className="min-h-screen bg-limen-white">
      <Navigation />

      {/* Hero */}
      <section className="min-h-screen pt-32 bg-limen-cream pattern-fabric-3 relative flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-b from-limen-cream/40 to-transparent pointer-events-none" />

        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 z-10 text-center">
          <motion.h1
            className="font-title-caps text-hero mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Hablemos
          </motion.h1>
          <motion.p
            className="font-subtitle-italic text-xl text-limen-black/70 mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Cuéntanos tu idea, tu mundo, lo que necesitas para hacerlo visible
          </motion.p>

          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="bg-limen-white rounded-lg shadow-lg p-8 border border-limen-black/5"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {/* Name */}
              <div>
                <label className="block text-xs font-serif font-semibold uppercase tracking-wider text-limen-black/70 mb-2">
                  Nombre
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-limen-black/10 rounded-lg focus:outline-none focus:border-limen-accent transition-colors"
                  placeholder="Tu nombre"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-xs font-serif font-semibold uppercase tracking-wider text-limen-black/70 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-limen-black/10 rounded-lg focus:outline-none focus:border-limen-accent transition-colors"
                  placeholder="tu@email.com"
                />
              </div>

              {/* Company */}
              <div>
                <label className="block text-xs font-serif font-semibold uppercase tracking-wider text-limen-black/70 mb-2">
                  Empresa / Proyecto
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-limen-black/10 rounded-lg focus:outline-none focus:border-limen-accent transition-colors"
                  placeholder="Nombre de tu proyecto"
                />
              </div>

              {/* Service */}
              <div>
                <label className="block text-xs font-serif font-semibold uppercase tracking-wider text-limen-black/70 mb-2">
                  Servicio de interés
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-limen-black/10 rounded-lg focus:outline-none focus:border-limen-accent transition-colors"
                >
                  <option value="branding">Branding</option>
                  <option value="web-design">Diseño Web</option>
                  <option value="rediseno">Rediseño de Marca</option>
                  <option value="otro">Otro</option>
                </select>
              </div>
            </div>

            {/* Message */}
            <div className="mb-6">
              <label className="block text-xs font-serif font-semibold uppercase tracking-wider text-limen-black/70 mb-2">
                Tu mensaje
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 border border-limen-black/10 rounded-lg focus:outline-none focus:border-limen-accent transition-colors resize-none"
                placeholder="Cuéntanos más sobre tu proyecto..."
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={submitted}
              className={`w-full px-6 py-4 rounded-lg font-serif font-semibold uppercase text-sm tracking-wider transition-all duration-300 ${
                submitted
                  ? "bg-green-600 text-limen-white"
                  : "bg-limen-black text-limen-white hover:bg-limen-accent"
              }`}
            >
              {submitted ? "Mensaje enviado ✓" : "Enviar mensaje"}
            </button>
          </motion.form>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20 bg-limen-white pattern-geometric-mix relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-title-caps text-center mb-16">
            Otras formas de conectar
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <motion.div
              whileHover={{ y: -4 }}
              className="bg-limen-cream border border-limen-black/10 rounded-lg p-8"
            >
              <p className="text-3xl mb-4">✉</p>
              <h3 className="font-serif text-lg font-light italic mb-2">
                Email
              </h3>
              <a
                href="mailto:hola@limen.com"
                className="text-sm font-light text-limen-accent hover:text-limen-black transition-colors"
              >
                hola@limen.com
              </a>
            </motion.div>

            <motion.div
              whileHover={{ y: -4 }}
              className="bg-limen-cream border border-limen-black/10 rounded-lg p-8"
            >
              <p className="text-3xl mb-4">📱</p>
              <h3 className="font-serif text-lg font-light italic mb-2">
                WhatsApp
              </h3>
              <a
                href="https://wa.me/1234567890"
                className="text-sm font-light text-limen-accent hover:text-limen-black transition-colors"
              >
                +1 (555) 123-4567
              </a>
            </motion.div>

            <motion.div
              whileHover={{ y: -4 }}
              className="bg-limen-cream border border-limen-black/10 rounded-lg p-8"
            >
              <p className="text-3xl mb-4">🌐</p>
              <h3 className="font-serif text-lg font-light italic mb-2">
                Redes Sociales
              </h3>
              <div className="flex justify-center gap-4">
                <a
                  href="#"
                  className="text-xs font-serif uppercase tracking-wider text-limen-accent hover:text-limen-black transition-colors"
                >
                  Instagram
                </a>
                <a
                  href="#"
                  className="text-xs font-serif uppercase tracking-wider text-limen-accent hover:text-limen-black transition-colors"
                >
                  LinkedIn
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

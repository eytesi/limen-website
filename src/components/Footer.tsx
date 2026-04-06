"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Servicios: [
      { label: "Branding", href: "/servicios#branding" },
      { label: "Diseño Web", href: "/servicios#web-design" },
      { label: "Rediseño de Marca", href: "/servicios#rediseno" },
    ],
    Productos: [
      { label: "Umbral", href: "/productos#umbral" },
      { label: "Territorio", href: "/productos#territorio" },
      { label: "Mundo", href: "/productos#mundo" },
    ],
    Empresa: [
      { label: "Sobre Limen", href: "/sobre-limen" },
      { label: "Portafolio", href: "/portafolio" },
      { label: "Contacto", href: "/contacto" },
    ],
  };

  return (
    <footer className="bg-limen-black text-limen-white pattern-geometric-mix relative">
      <div className="absolute inset-0 opacity-10 pointer-events-none" />

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            {/* Brand Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-display font-bold uppercase tracking-wider mb-4">
                LIMEN
              </h3>
              <p className="font-subtitle-italic text-limen-white/70">
                Tu mundo, visible
              </p>
            </motion.div>

            {/* Link Columns */}
            {Object.entries(footerLinks).map(([category, links], idx) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <h4 className="font-serif font-semibold uppercase text-xs tracking-widest mb-4">
                  {category}
                </h4>
                <ul className="space-y-2">
                  {links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm font-light text-limen-white/70 hover:text-limen-accent transition-colors duration-300"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-limen-white/20 to-transparent my-8" />

          {/* Bottom Footer */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs font-light text-limen-white/50">
              © {currentYear} Limen. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a
                href="#"
                className="text-xs font-serif font-light uppercase tracking-wider text-limen-white/70 hover:text-limen-accent transition-colors"
              >
                Instagram
              </a>
              <a
                href="#"
                className="text-xs font-serif font-light uppercase tracking-wider text-limen-white/70 hover:text-limen-accent transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="#"
                className="text-xs font-serif font-light uppercase tracking-wider text-limen-white/70 hover:text-limen-accent transition-colors"
              >
                Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: "INICIO", href: "/" },
    { label: "SOBRE LIMEN", href: "/sobre-limen" },
    { label: "SERVICIOS", href: "/servicios" },
    { label: "PRODUCTOS", href: "/productos" },
    { label: "PORTAFOLIO", href: "/portafolio" },
    { label: "CONTACTO", href: "/contacto" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-limen-white/95 backdrop-blur-md border-b border-limen-black/5">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="group">
          <motion.div
            className="text-3xl font-display font-bold uppercase tracking-wider"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            LIMEN
          </motion.div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-serif text-sm font-light uppercase tracking-wider hover:text-limen-accent transition-colors group relative"
            >
              {item.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-limen-accent group-hover:w-full transition-all duration-300" />
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-limen-cream border-b border-limen-black/10"
        >
          <div className="flex flex-col space-y-4 px-4 py-6">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="font-serif text-sm font-light uppercase tracking-wider hover:text-limen-accent transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </header>
  );
}

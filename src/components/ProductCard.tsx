"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";

interface ProductCardProps {
  title: string;
  description: string;
  price?: string;
  features: string[];
  badge?: string;
  highlight?: boolean;
  comingSoon?: boolean;
  href?: string;
}

export function ProductCard({
  title,
  description,
  price,
  features,
  badge,
  highlight,
  comingSoon,
  href = "#",
}: ProductCardProps) {
  return (
    <motion.div
      whileHover={{ y: comingSoon ? 0 : -8, boxShadow: comingSoon ? "none" : "0 20px 40px rgba(0,0,0,0.1)" }}
      transition={{ duration: 0.3 }}
      className={`relative rounded-lg overflow-hidden transition-all duration-300 ${
        comingSoon
          ? "bg-limen-cream text-limen-black border border-limen-black/10 opacity-70"
          : highlight
          ? "bg-limen-black text-limen-white border-2 border-limen-accent"
          : "bg-limen-cream text-limen-black border border-limen-black/10"
      }`}
    >
      {/* Pattern Background */}
      <div className={`absolute inset-0 opacity-20 ${
        highlight ? "pattern-fabric-2" : "pattern-fabric-1"
      }`} />

      {badge && (
        <div className="absolute top-4 right-4 z-10">
          <span className={`px-3 py-1 rounded-full text-xs font-serif uppercase tracking-wider flex items-center gap-1 ${
            comingSoon
              ? "bg-limen-black/20 text-limen-black"
              : "bg-limen-accent text-limen-white"
          }`}>
            {comingSoon && <Clock className="w-3 h-3" />}
            {badge}
          </span>
        </div>
      )}

      <div className="relative z-10 p-8">
        {/* Title */}
        <h3 className="font-serif text-2xl font-light italic mb-3">
          {title}
        </h3>

        {/* Price */}
        <div className="mb-6">
          {comingSoon ? (
            <div>
              <p className="text-2xl font-serif font-bold tracking-wider mb-1 opacity-40">
                — — —
              </p>
              <p className="text-xs font-serif font-light uppercase tracking-widest opacity-50">
                Precio por definir
              </p>
            </div>
          ) : (
            <div>
              <p className="text-4xl font-serif font-bold tracking-wider mb-1">
                {price}
              </p>
              <p className="text-xs font-serif font-light uppercase tracking-widest opacity-70">
                Proyecto único · pago único
              </p>
            </div>
          )}
        </div>

        {/* Description */}
        <p className="text-sm font-light leading-relaxed mb-6 opacity-90">
          {description}
        </p>

        {/* Features */}
        <div className="space-y-3 mb-8 py-6 border-t border-current border-opacity-20">
          {features.map((feature, idx) => (
            <div key={idx} className="flex items-start gap-3">
              <span className={`text-lg mt-0.5 ${comingSoon ? "opacity-40" : "text-limen-accent"}`}>→</span>
              <span className={`text-sm font-light ${comingSoon ? "opacity-50" : ""}`}>{feature}</span>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        {comingSoon ? (
          <div className="inline-flex items-center gap-2 px-6 py-2 rounded-lg font-serif font-semibold uppercase text-xs tracking-wider bg-limen-black/10 text-limen-black/40 cursor-not-allowed select-none">
            <Clock className="w-4 h-4" />
            Próximamente
          </div>
        ) : (
          <Link
            href={href}
            className={`inline-flex items-center gap-2 px-6 py-2 rounded-lg font-serif font-semibold uppercase text-xs tracking-wider transition-all duration-300 group ${
              highlight
                ? "bg-limen-accent text-limen-white hover:gap-3"
                : "bg-limen-black text-limen-white hover:gap-3"
            }`}
          >
            Ver Detalles
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        )}
      </div>
    </motion.div>
  );
}

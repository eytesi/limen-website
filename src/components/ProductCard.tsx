"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ProductCardProps {
  title: string;
  description: string;
  price: string;
  features: string[];
  badge?: string;
  highlight?: boolean;
  href?: string;
}

export function ProductCard({
  title,
  description,
  price,
  features,
  badge,
  highlight,
  href = "#",
}: ProductCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
      transition={{ duration: 0.3 }}
      className={`relative rounded-lg overflow-hidden transition-all duration-300 ${
        highlight
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
          <span className={`px-3 py-1 rounded-full text-xs font-serif uppercase tracking-wider ${
            highlight 
              ? "bg-limen-accent text-limen-white"
              : "bg-limen-accent text-limen-white"
          }`}>
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
          <p className="text-4xl font-serif font-bold tracking-wider mb-2">
            {price}
          </p>
          <p className="text-xs font-serif font-light uppercase tracking-widest opacity-70">
            Proyecto único
          </p>
        </div>

        {/* Description */}
        <p className="text-sm font-light leading-relaxed mb-6 opacity-90">
          {description}
        </p>

        {/* Features */}
        <div className="space-y-3 mb-8 py-6 border-t border-current border-opacity-20">
          {features.map((feature, idx) => (
            <div key={idx} className="flex items-start gap-3">
              <span className="text-limen-accent text-lg mt-0.5">→</span>
              <span className="text-sm font-light">{feature}</span>
            </div>
          ))}
        </div>

        {/* CTA Button */}
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
      </div>
    </motion.div>
  );
}

"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface HeroProps {
  title: string;
  subtitle?: string;
  pattern: "fabric-1" | "fabric-2" | "fabric-3" | "animal" | "geometric";
  children?: ReactNode;
  fullHeight?: boolean;
}

export function Hero({
  title,
  subtitle,
  pattern,
  children,
  fullHeight = true,
}: HeroProps) {
  const patternClass = {
    "fabric-1": "pattern-fabric-1",
    "fabric-2": "pattern-fabric-2",
    "fabric-3": "pattern-fabric-3",
    animal: "pattern-animal",
    geometric: "pattern-geometric-mix",
  }[pattern];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section
      className={`w-full ${patternClass} ${fullHeight ? "min-h-screen" : "py-20"} pt-32 relative overflow-hidden flex items-center justify-center`}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-limen-cream/40 via-limen-white/20 to-transparent pointer-events-none" />

      <motion.div
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 z-10 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="font-title-caps text-hero mb-6 leading-tight"
          variants={itemVariants}
        >
          {title}
        </motion.h1>

        {subtitle && (
          <motion.div
            className="font-subtitle-italic text-xl md:text-2xl text-limen-black/80 mb-8"
            variants={itemVariants}
          >
            {subtitle}
          </motion.div>
        )}

        {children && (
          <motion.div variants={itemVariants}>{children}</motion.div>
        )}
      </motion.div>
    </section>
  );
}

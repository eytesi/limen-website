import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ["Cormorant", "Georgia", "serif"],
        display: ["Cormorant Display", "serif"],
      },
      colors: {
        limen: {
          black: "#0A0A0A",
          white: "#FFFFFF",
          cream: "#F5F3F0",
          accent: "#E63946", // Bold red accent
          accentAlt: "#457B9D", // Blue accent
          accentGold: "#D4A574", // Gold accent
        },
      },
      backgroundImage: {
        "pattern-geometric":
          "url('data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><circle cx=%2250%22 cy=%2250%22 r=%2230%22 fill=%22none%22 stroke=%22%230A0A0A%22 stroke-width=%222%22/><rect x=%2220%22 y=%2220%22 width=%2260%22 height=%2260%22 fill=%22none%22 stroke=%22%230A0A0A%22 stroke-width=%221%22/></svg>')",
      },
      fontSize: {
        hero: "clamp(2rem, 10vw, 8rem)",
        title: "clamp(1.5rem, 6vw, 4rem)",
        heading: "clamp(1.25rem, 4vw, 2rem)",
      },
      letterSpacing: {
        tight: "-0.05em",
        wider: "0.1em",
      },
      animation: {
        "fade-in": "fadeIn 0.8s ease-in-out",
        "slide-up": "slideUp 0.8s ease-out",
        "slide-down": "slideDown 0.8s ease-out",
        "scale-in": "scaleIn 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)",
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(30px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideDown: {
          "0%": { transform: "translateY(-30px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        scaleIn: {
          "0%": { transform: "scale(0.95)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;

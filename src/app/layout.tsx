import { ReactNode } from "react";
import "@/styles/globals.css";

export const metadata = {
  title: "Limen - Tu mundo, visible",
  description:
    "Branding agency especializada en identidad visual, diseño web y redefinición de marca. Tu mundo, visible.",
  keywords: [
    "branding",
    "diseño",
    "identidad de marca",
    "diseño web",
    "agencia creativa",
  ],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="color-scheme" content="light" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="icon" href="/limenlogo.png" type="image/png" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}

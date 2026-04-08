import Image from "next/image";

export const metadata = {
  title: "Equipo Limen",
  description: "Conocé al equipo de Limen Agency",
};

export default function EquipoPage() {
  return (
    <main className="max-w-2xl mx-auto py-16 px-4">
      <h1 className="text-4xl font-serif font-bold mb-8 text-center">
        Nuestro Equipo
      </h1>

      <section className="flex flex-col items-center bg-limen-cream rounded-xl shadow-lg p-8">
        <div className="w-40 h-40 mb-6 relative rounded-full overflow-hidden border-4 border-limen-accent">
          <Image
            src="/Limen CEO.png"
            alt="Ivo Vieytes, Founder & Creative Director"
            fill
            style={{ objectFit: "cover" }}
            sizes="160px"
            priority
          />
        </div>

        <h2 className="text-2xl font-serif font-semibold mb-2">
          Ivo Vieytes
        </h2>

        <p className="text-limen-accent font-medium mb-1">
          Founder & Creative Director
        </p>

        <p className="text-sm text-gray-700 mb-4 text-center max-w-md">
          Experiencia en Diseño gráfico, branding, programación, UX/UI.
          Responsable de la dirección creativa, desarrollo y ejecución de todo lo
          que ves en Limen. Apasionado por crear marcas memorables y experiencias
          digitales únicas.
        </p>

        <div className="flex gap-4 mt-2">
          <a
            href="mailto:hola@limen.agency"
            className="text-limen-accent hover:underline"
          >
            Email
          </a>
          <a
            href="https://www.linkedin.com/company/limenagency"
            target="_blank"
            rel="noopener noreferrer"
            className="text-limen-accent hover:underline"
          >
            LinkedIn
          </a>
        </div>
      </section>
    </main>
  );
}
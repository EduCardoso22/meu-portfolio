// src/app/page.tsx
import Link from 'next/link'; // Importar Link

export default function Home() {
  return (
    // Centralizado, padding maior, talvez um gradiente sutil?
    <main className="flex flex-grow flex-col items-center justify-center text-center px-4 md:px-24 py-12 bg-gradient-to-b from-white to-gray-50 dark:from-black dark:to-gray-900">
      
      <section>
        {/* Nome com destaque */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-3 text-gray-900 dark:text-white">
          Eduardo Cardoso Oliveira [cite: 2]
        </h1>

        {/* Título com cor mais suave */}
        <p className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-8">
          Desenvolvedor Full Stack
        </p>

        {/* Botão CTA mais chamativo */}
        <Link // Usar Link em vez de <a>
          href="/projetos" 
          className="inline-block bg-blue-600 text-white py-3 px-8 rounded-lg text-lg font-medium hover:bg-blue-700 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
        >
          Veja meus projetos
        </Link>
      </section>

    </main>
  );
}
// src/app/page.tsx
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex flex-grow flex-col items-center justify-center text-center px-4 md:px-24 py-12 bg-gradient-to-b from-white to-gray-50 dark:from-black dark:to-gray-900">
      <section className="max-w-2xl">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-3 text-gray-900 dark:text-white">
          Eduardo Cardoso Oliveira
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-8">
          Desenvolvedor Full Stack (em formação)
        </p>
        <Link
          href="/projetos"
          className="inline-block bg-blue-600 text-white py-3 px-8 rounded-lg text-lg font-medium hover:bg-blue-700 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
        >
          Veja meus projetos
        </Link>
        <p className="mt-12 text-md text-gray-500 dark:text-gray-400">
          Bem-vindo ao meu portfólio! Sou um estudante apaixonado por tecnologia, atualmente cursando Análise e Desenvolvimento de Sistemas e buscando me aprofundar no desenvolvimento web. Explore meus projetos e conheça um pouco mais sobre minha jornada.
        </p>
      </section>
    </main>
  );
}
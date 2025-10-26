import Link from 'next/link';

export default function Home() {
  return (
    <>
      <main className="flex flex-grow flex-col items-center justify-center text-center px-4 md:px-24 py-16 bg-gradient-to-b from-white to-gray-50 dark:from-black dark:to-gray-900">
        <section className="max-w-3xl">
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
          <p className="mt-10 text-md text-gray-500 dark:text-gray-400">
            Bem-vindo ao meu portfólio! Sou um estudante apaixonado por tecnologia, atualmente cursando Análise e Desenvolvimento de Sistemas e buscando me aprofundar no desenvolvimento web. Explore meus projetos e conheça um pouco mais sobre minha jornada.
          </p>
        </section>
      </main>

      <section className="w-full py-16 bg-gray-50 dark:bg-gray-950">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h2 className="text-3xl font-bold mb-8 text-gray-800 dark:text-white">Principais Habilidades</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm font-medium px-4 py-2 rounded-full">Java</span>
            <span className="bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 text-sm font-medium px-4 py-2 rounded-full">HTML5</span>
            <span className="bg-sky-100 dark:bg-sky-900 text-sky-800 dark:text-sky-200 text-sm font-medium px-4 py-2 rounded-full">CSS3</span>
            <span className="bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 text-sm font-medium px-4 py-2 rounded-full">JavaScript</span>
            <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-sm font-medium px-4 py-2 rounded-full">LaTeX</span>
            <span className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-sm font-medium px-4 py-2 rounded-full">Git/GitHub</span>
            <span className="bg-cyan-100 dark:bg-cyan-900 text-cyan-800 dark:text-cyan-200 text-sm font-medium px-4 py-2 rounded-full">React/Next.js (Estudando)</span>
          </div>
          <Link href="/sobre" className="mt-8 inline-block text-blue-600 dark:text-blue-400 hover:underline">
            Veja todas as minhas competências &rarr;
          </Link>
        </div>
      </section>

      <section className="w-full py-16 bg-white dark:bg-black">
         <div className="container mx-auto px-4 text-center max-w-4xl">
           <h2 className="text-3xl font-bold mb-8 text-gray-800 dark:text-white">Projetos em Destaque</h2>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
             <div className="bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md p-6 text-left border border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Robocode - Shigeo Kageyama</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">Robô autônomo em Java para a plataforma Robocode.</p>
                <div className="flex flex-wrap gap-2 mb-4">
                   <span className="text-xs bg-blue-100 text-blue-800 px-2 py-0.5 rounded dark:bg-blue-900 dark:text-blue-200">Java</span>
                   <span className="text-xs bg-gray-100 text-gray-800 px-2 py-0.5 rounded dark:bg-gray-700 dark:text-gray-200">Robocode</span>
                </div>
                <Link href="/projetos/robocode-shigeo-kageyama" className="text-sm text-blue-600 dark:text-blue-400 hover:underline">
                  Ver detalhes &rarr;
                </Link>
             </div>
             <div className="bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md p-6 text-left border border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Portfólio Pessoal (Este site!)</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">Desenvolvimento deste portfólio com Next.js e Tailwind CSS.</p>
                 <div className="flex flex-wrap gap-2 mb-4">
                   <span className="text-xs bg-cyan-100 text-cyan-800 px-2 py-0.5 rounded dark:bg-cyan-900 dark:text-cyan-200">Next.js</span>
                   <span className="text-xs bg-sky-100 text-sky-800 px-2 py-0.5 rounded dark:bg-sky-900 dark:text-sky-200">React</span>
                   <span className="text-xs bg-indigo-100 text-indigo-800 px-2 py-0.5 rounded dark:bg-indigo-900 dark:text-indigo-200">TypeScript</span>
                   <span className="text-xs bg-teal-100 text-teal-800 px-2 py-0.5 rounded dark:bg-teal-900 dark:text-teal-200">Tailwind CSS</span>
                </div>
                <Link href="/projetos/portfolio-nextjs" className="text-sm text-blue-600 dark:text-blue-400 hover:underline">
                  Ver detalhes &rarr;
                </Link>
             </div>
           </div>
           <Link href="/projetos" className="mt-8 inline-block text-blue-600 dark:text-blue-400 hover:underline">
             Veja todos os projetos &rarr;
           </Link>
         </div>
      </section>
    </>
  );
}
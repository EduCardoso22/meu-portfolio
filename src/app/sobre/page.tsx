import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Sobre Mim",
  description: "Conheça a trajetória, habilidades e experiências de Eduardo Cardoso Oliveira.",
};

export default function SobrePage() {
  return (
    <main className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-10 text-center md:text-left">
        Sobre Mim
      </h1>

      <section className="mb-12 flex flex-col md:flex-row items-center md:items-start gap-8">
        <div className="w-48 h-48 md:w-56 md:h-56 relative rounded-full overflow-hidden shadow-lg flex-shrink-0 bg-gray-200 dark:bg-gray-700">
           <Image
             src="/images/FotoPerfil.jpeg"
             alt="Foto de Eduardo Cardoso Oliveira"
             layout="fill"
             objectFit="cover"
             priority
           />
        </div>

        <div className="text-center md:text-left">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">Minha História</h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
            Olá! Sou Eduardo Cardoso Oliveira, um entusiasta da tecnologia em formação para me tornar Desenvolvedor Full Stack. Atualmente, estou cursando Análise e Desenvolvimento de Sistemas (ADS) no IFSC de São José e participo ativamente do Programa Jovem Programador, buscando aprimorar minhas habilidades práticas. Minha trajetória acadêmica inclui três semestres de Matemática, curso que despertou meu interesse pela lógica e resolução de problemas, direcionando-me naturalmente para o mundo da programação. Sou motivado pela possibilidade de criar soluções digitais e estou sempre em busca de conhecimento para enfrentar novos desafios na área de desenvolvimento web.
          </p>
        </div>
      </section>

      <section aria-labelledby="competencias-heading" className="mb-12">
        <h2 id="competencias-heading" className="text-2xl font-semibold mb-6 border-b pb-2">Competências</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-medium mb-3 text-blue-600 dark:text-blue-400">Hard Skills (Técnicas)</h3>
            <ul className="list-disc list-inside space-y-1.5 text-gray-700 dark:text-gray-300">
              <li>Java (incluindo POO)</li>
              <li>HTML5</li>
              <li>CSS3 (Tailwind CSS)</li>
              <li>JavaScript</li>
              <li>React & Next.js (Estudando)</li>
              <li>TypeScript (Estudando)</li>
              <li>Git & GitHub</li>
              <li>LaTeX</li>
              <li>Pacote Office</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-medium mb-3 text-green-600 dark:text-green-400">Soft Skills (Comportamentais)</h3>
             <ul className="list-disc list-inside space-y-1.5 text-gray-700 dark:text-gray-300">
              <li>Comunicação</li>
              <li>Trabalho Colaborativo</li>
              <li>Resolução de Problemas</li>
              <li>Adaptabilidade</li>
              <li>Aprendizado Contínuo</li>
              <li>Proatividade</li>
             </ul>
          </div>
        </div>
      </section>

      <section aria-labelledby="experiencia-heading">
        <h2 id="experiencia-heading" className="text-2xl font-semibold mb-6 border-b pb-2">Experiência e Formação</h2>
        <div className="space-y-8">
          <article>
            <h4 className="text-lg font-semibold text-gray-800 dark:text-white">Polo de Inovação Embrapii - IFSC</h4>
            <p className="text-sm text-gray-500 dark:text-gray-400">Estagiário | Set 2025 - Presente</p>
            <p className="mt-1 text-gray-700 dark:text-gray-300">Atuação em projetos de inovação e desenvolvimento tecnológico.</p>
          </article>
          <article>
            <h4 className="text-lg font-semibold text-gray-800 dark:text-white">CASAN</h4>
            <p className="text-sm text-gray-500 dark:text-gray-400">Estagiário | 2020 - 2021</p>
            <p className="mt-1 text-gray-700 dark:text-gray-300">Apoio em atividades administrativas e operacionais.</p>
          </article>
          <article>
            <h4 className="text-lg font-semibold text-gray-800 dark:text-white">IFSC - Campus São José</h4>
            <p className="text-sm text-gray-500 dark:text-gray-400">Tecnólogo em Análise e Desenvolvimento de Sistemas | Em andamento</p>
          </article>
           <article>
            <h4 className="text-lg font-semibold text-gray-800 dark:text-white">SENAC/SC - Programa Jovem Programador</h4>
            <p className="text-sm text-gray-500 dark:text-gray-400">Qualificação Profissional | Em andamento</p>
           </article>
          <article>
            <h4 className="text-lg font-semibold text-gray-800 dark:text-white">Universidade Federal de Santa Catarina (UFSC)</h4>
            <p className="text-sm text-gray-500 dark:text-gray-400">Licenciatura em Matemática | 3 semestres cursados</p>
          </article>
          <article>
            <h4 className="text-lg font-semibold text-gray-800 dark:text-white">Cursos Complementares</h4>
             <ul className="list-disc list-inside space-y-1 text-sm mt-2 text-gray-700 dark:text-gray-300">
                <li>Pacote Office (Online)</li>
                <li>LaTeX (Online)</li>
                <li>HTML e CSS (Online)</li>
             </ul>
          </article>
        </div>
      </section>
    </main>
  );
}
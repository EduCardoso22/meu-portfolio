// src/app/projetos/page.tsx
import Link from 'next/link';

const projetos = [
  {
    id: 'robocode-shigeo-kageyama',
    titulo: 'Robocode - Shigeo Kageyama',
    descricaoCurta: 'Projeto de um robô para a plataforma Robocode, desenvolvido em Java como atividade da disciplina de Algoritmos e Programação.',
    tecnologias: ['Java', 'Robocode'],
  },
  {
    id: 'ifsc-java-poo-exercicios',
    titulo: 'Exercícios de Java POO (IFSC)',
    descricaoCurta: 'Repositório com listas de exercícios resolvidos da disciplina de Programação Orientada a Objetos em Java (ADS - IFSC).',
    tecnologias: ['Java', 'POO'],
  },
   {
    id: 'portfolio-nextjs',
    titulo: 'Portfólio Pessoal (Este site!)',
    descricaoCurta: 'Desenvolvimento deste portfólio usando Next.js, TypeScript e Tailwind CSS para apresentar minhas habilidades e projetos.',
    tecnologias: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
  },
];

export default function ProjetosPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center md:text-left">
        Meus Projetos
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projetos.map((projeto) => (
          <div
            key={projeto.id}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 flex flex-col overflow-hidden group"
          >
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors">
                {projeto.titulo}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm flex-grow">
                {projeto.descricaoCurta}
              </p>
              <div className="flex flex-wrap gap-2 mb-4 mt-auto">
                {projeto.tecnologias.map((tech) => (
                  <span
                    key={tech}
                    className="bg-blue-100 dark:bg-gray-700 text-blue-800 dark:text-gray-300 text-xs font-medium px-2.5 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <Link
                href={`/projetos/${projeto.id}`}
                className="text-blue-600 dark:text-blue-400 hover:underline mt-2 text-sm font-medium opacity-80 group-hover:opacity-100 transition-opacity"
              >
                Ver detalhes &rarr;
              </Link>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
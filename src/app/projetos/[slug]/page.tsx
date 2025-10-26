// src/app/projetos/[slug]/page.tsx
import Link from 'next/link';
import React from 'react';
// Item 5: Importar ícones para links externos
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

// Seus dados de projeto (já atualizados anteriormente)
const projetos = [
   {
    id: 'robocode-shigeo-kageyama',
    titulo: 'Robocode - Shigeo Kageyama',
    descricaoCurta: 'Projeto de um robô para a plataforma Robocode...',
    descricaoCompleta: `Esta foi uma atividade prática realizada na disciplina de Introdução à Computação...`,
    tecnologias: ['Java', 'Robocode', 'Git', 'Linux'],
    desafios: 'O principal desafio foi aprender a utilizar a API específica do Robocode...',
    linkRepositorio: 'https://github.com/EduCardoso22/Shigeo-Kageyama-ROBOCODE.git',
    linkDemo: '#',
  },
  {
    id: 'ifsc-java-poo-exercicios',
    titulo: 'Exercícios de Java POO (IFSC)',
    descricaoCurta: 'Repositório com listas de exercícios resolvidos...',
    descricaoCompleta: `Este repositório está diretamente relacionado à disciplina de Programação Orientada a Objetos...`,
    tecnologias: ['Java', 'POO', 'IDE (Eclipse/IntelliJ)', 'Git'],
    desafios: 'Aplicar corretamente os conceitos de Programação Orientada a Objetos...',
    linkRepositorio: 'https://github.com/EduCardoso22/IFSC-Codespace-ENG-ADS-JAVA-POO.git',
    linkDemo: '#',
  },
  {
    id: 'portfolio-nextjs',
    titulo: 'Portfólio Pessoal (Este site!)',
    descricaoCurta: 'Desenvolvimento deste portfólio usando Next.js...',
    descricaoCompleta: `Este portfólio foi desenvolvido como projeto para a disciplina de FrontEnd...`,
    tecnologias: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Vercel', 'Git'],
    desafios: 'Aplicar os conhecimentos adquiridos na disciplina de FrontEnd...',
    linkRepositorio: 'https://github.com/EduCardoso22/meu-portfolio',
    linkDemo: '#', // Adicione o link do site quando estiver online
  },
];

function getProjectData(slug: string) {
  return projetos.find((p) => p.id === slug);
}

export default async function ProjetoDetalhePage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const projeto = getProjectData(resolvedParams.slug);

  if (!projeto) {
    // ... (código do projeto não encontrado)
     return (
      <main className="container mx-auto px-4 py-8 text-center">
        <h1 className="text-2xl font-bold text-red-600 dark:text-red-400">Projeto não encontrado!</h1>
        <Link href="/projetos" className="text-blue-600 dark:text-blue-400 hover:underline mt-4 inline-block">
          Voltar para a lista de projetos
        </Link>
      </main>
    );
  }

  return (
    // Item 7: Usar <article> para o conteúdo principal do projeto
    <main className="container mx-auto px-4 py-8 max-w-3xl">
      <article>
         <Link href="/projetos" className="text-blue-600 dark:text-blue-400 hover:underline mb-6 inline-block">
          &larr; Voltar para Projetos
        </Link>

        <h1 className="text-3xl md:text-4xl font-bold mb-4">{projeto.titulo}</h1>

        <div className="flex flex-wrap gap-2 mb-6" aria-label="Tecnologias utilizadas">
          {projeto.tecnologias.map((tech) => (
            <span
              key={tech}
              className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-sm font-medium px-3 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        <section aria-labelledby={`desc-${projeto.id}`} className="mb-8">
          <h2 id={`desc-${projeto.id}`} className="text-2xl font-semibold mb-3 border-b pb-2">Descrição</h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line text-justify">
            {projeto.descricaoCompleta}
          </p>
        </section>

        <section aria-labelledby={`desafios-${projeto.id}`} className="mb-8">
          <h2 id={`desafios-${projeto.id}`} className="text-2xl font-semibold mb-3 border-b pb-2">Desafios</h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line text-justify">
            {projeto.desafios}
          </p>
        </section>

        {/* Item 5: Adicionar Ícones aos links */}
        <section aria-labelledby={`links-${projeto.id}`}>
          <h2 id={`links-${projeto.id}`} className="text-2xl font-semibold mb-3 border-b pb-2">Links</h2>
          <div className="flex flex-wrap gap-4 items-center">
            {projeto.linkRepositorio && projeto.linkRepositorio !== '#' && (
              <a
                href={projeto.linkRepositorio}
                target="_blank"
                rel="noopener noreferrer"
                // Item 6: Animação sutil no hover
                className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors group"
              >
                <FaGithub className="w-4 h-4 mr-1.5 group-hover:scale-110 transition-transform"/> {/* Ícone GitHub */}
                Repositório
              </a>
            )}
            {projeto.linkDemo && projeto.linkDemo !== '#' && (
               <a
                href={projeto.linkDemo}
                target="_blank"
                rel="noopener noreferrer"
                // Item 6: Animação sutil no hover
                className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors group"
              >
                <FaExternalLinkAlt className="w-4 h-4 mr-1.5 group-hover:scale-110 transition-transform"/> {/* Ícone Link Externo */}
                Ver Demo
              </a>
            )}
          </div>
           {(!projeto.linkRepositorio || projeto.linkRepositorio === '#') && (!projeto.linkDemo || projeto.linkDemo === '#') && (
              <p className="text-sm text-gray-500 dark:text-gray-400 italic mt-2">Nenhum link externo disponível para este projeto.</p>
          )}
        </section>
      </article>
    </main>
  );
}

// Metadata dinâmica (já corrigida com async/await)
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const projeto = getProjectData(resolvedParams.slug);
  return {
    title: `${projeto?.titulo ?? 'Projeto'}`, // Item 8: Título específico (será combinado com template)
    description: `Detalhes sobre o projeto ${projeto?.titulo ?? ''} de Eduardo Cardoso Oliveira. ${projeto?.descricaoCurta ?? ''}`, // Item 8: Descrição dinâmica
  };
}
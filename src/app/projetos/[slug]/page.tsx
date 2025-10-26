// src/app/projetos/[slug]/page.tsx
import Link from 'next/link';
import React from 'react';

const projetos = [
   {
    id: 'robocode-shigeo-kageyama',
    titulo: 'Robocode - Shigeo Kageyama',
    descricaoCurta: 'Projeto de um robô para a plataforma Robocode, desenvolvido em Java como atividade da disciplina de Introdução a Computação.', // Mantido
    // --- DESCRIÇÃO ATUALIZADA ---
    descricaoCompleta: `Esta foi uma atividade prática realizada na disciplina de Introdução à Computação (IFSC). O objetivo principal foi aplicar os conceitos iniciais de programação em Java, além de exercitar o uso de Git/GitHub para versionamento de código e a familiarização com comandos básicos do sistema operacional Linux. O projeto consistiu em desenvolver a lógica de um robô de combate para a plataforma Robocode.`,
    tecnologias: ['Java', 'Robocode', 'Git', 'Linux'], // Adicionado Git e Linux
    // --- DESAFIOS ATUALIZADOS ---
    desafios: 'O principal desafio foi aprender a utilizar a API específica do Robocode para controlar o robô, juntamente com a prática inicial de versionamento usando Git e comandos no terminal Linux.',
    linkRepositorio: 'https://github.com/EduCardoso22/Shigeo-Kageyama-ROBOCODE.git',
    linkDemo: '#',
  },
  {
    id: 'ifsc-java-poo-exercicios',
    titulo: 'Exercícios de Java POO (IFSC)',
    descricaoCurta: 'Repositório com listas de exercícios resolvidos da disciplina de Programação Orientada a Objetos em Java (ADS - IFSC).', // Mantido
    // --- DESCRIÇÃO ATUALIZADA ---
    descricaoCompleta: `Este repositório está diretamente relacionado à disciplina de Programação Orientada a Objetos (POO), que estou cursando atualmente em Análise e Desenvolvimento de Sistemas (IFSC). Ele abriga as soluções para as listas de exercícios propostas pelo professor durante as aulas, além de outros materiais e anotações úteis. É um projeto em contínuo desenvolvimento, acompanhando o progresso da disciplina.`,
    tecnologias: ['Java', 'POO', 'IDE (Eclipse/IntelliJ)', 'Git'], // Adicionado Git
    // --- DESAFIOS ATUALIZADOS ---
    desafios: 'Aplicar corretamente os conceitos de Programação Orientada a Objetos (encapsulamento, herança, polimorfismo) na resolução dos problemas. Manter o repositório organizado e atualizado conforme as aulas avançam.',
    linkRepositorio: 'https://github.com/EduCardoso22/IFSC-Codespace-ENG-ADS-JAVA-POO.git',
    linkDemo: '#',
  },
  {
    id: 'portfolio-nextjs',
    titulo: 'Portfólio Pessoal (Este site!)',
    descricaoCurta: 'Desenvolvimento deste portfólio usando Next.js, TypeScript e Tailwind CSS.', // Mantido
    // --- DESCRIÇÃO ATUALIZADA ---
    descricaoCompleta: `Este portfólio foi desenvolvido como projeto para a disciplina de FrontEnd do curso do SENAC (Programa Jovem Programador). Ele serve como um protótipo inicial da minha presença online profissional. A intenção é que este seja um projeto vivo, que evoluirá ao longo da minha carreira, incorporando novas tecnologias, projetos e funcionalidades conforme aprendo e desenvolvo novas habilidades.
A tecnologia base escolhida foi Next.js com TypeScript e Tailwind CSS, visando aplicar conceitos modernos de desenvolvimento web e garantir boa performance e manutenibilidade.`,
    tecnologias: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Vercel', 'Git'], // Adicionado Git
    // --- DESAFIOS ATUALIZADOS ---
    desafios: 'Aplicar os conhecimentos adquiridos na disciplina de FrontEnd, aprender e integrar as tecnologias da stack (Next.js, TypeScript, Tailwind), estruturar o projeto de forma escalável e configurar o deploy. O principal desafio contínuo será manter o portfólio atualizado com novos aprendizados e projetos.',
    linkRepositorio: 'https://github.com/EduCardoso22/meu-portfolio',
    linkDemo: '#', // Adicione o link do site quando estiver online
  },
];

// Função para buscar os dados do projeto pelo ID (slug)
function getProjectData(slug: string) {
  return projetos.find((p) => p.id === slug);
}

// Componente da página (async para resolver params)
export default async function ProjetoDetalhePage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const projeto = getProjectData(resolvedParams.slug);

  if (!projeto) {
    return (
      <main className="container mx-auto px-4 py-8 text-center">
        <h1 className="text-2xl font-bold text-red-600 dark:text-red-400">Projeto não encontrado!</h1>
        <Link href="/projetos" className="text-blue-600 dark:text-blue-400 hover:underline mt-4 inline-block">
          Voltar para a lista de projetos
        </Link>
      </main>
    );
  }

  // Renderização dos detalhes do projeto
  return (
    <main className="container mx-auto px-4 py-8 max-w-3xl">
       <Link href="/projetos" className="text-blue-600 dark:text-blue-400 hover:underline mb-6 inline-block">
        &larr; Voltar para Projetos
      </Link>

      <h1 className="text-3xl md:text-4xl font-bold mb-4">{projeto.titulo}</h1>

      <div className="flex flex-wrap gap-2 mb-6">
        {projeto.tecnologias.map((tech) => (
          <span
            key={tech}
            className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-sm font-medium px-3 py-1 rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3 border-b pb-2">Descrição</h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line text-justify">
          {projeto.descricaoCompleta}
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3 border-b pb-2">Desafios</h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line text-justify">
          {projeto.desafios}
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-3 border-b pb-2">Links</h2>
        <div className="flex flex-wrap gap-4 items-center">
          {projeto.linkRepositorio && projeto.linkRepositorio !== '#' && (
            <a
              href={projeto.linkRepositorio}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline"
            >
              Repositório no GitHub
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
            </a>
          )}
          {projeto.linkDemo && projeto.linkDemo !== '#' && (
             <a
              href={projeto.linkDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline"
            >
              Ver Demo Online
               <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
            </a>
          )}
        </div>
         {(!projeto.linkRepositorio || projeto.linkRepositorio === '#') && (!projeto.linkDemo || projeto.linkDemo === '#') && (
            <p className="text-sm text-gray-500 dark:text-gray-400 italic mt-2">Nenhum link externo disponível para este projeto.</p>
        )}
      </section>
    </main>
  );
}

// Metadata dinâmica (async para resolver params)
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const projeto = getProjectData(resolvedParams.slug);
  return {
    title: `${projeto?.titulo ?? 'Projeto'} - Eduardo Oliveira`,
  };
}
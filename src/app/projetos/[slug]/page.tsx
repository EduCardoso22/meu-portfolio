import Link from 'next/link';
import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import type { Metadata } from 'next';

const projetos = [
   {
    id: 'robocode-shigeo-kageyama',
    titulo: 'Robocode - Shigeo Kageyama',
    descricaoCurta: 'Projeto de um robô para a plataforma Robocode, desenvolvido em Java como atividade da disciplina de Introdução a Computação.',
    descricaoCompleta: `Esta foi uma atividade prática realizada na disciplina de Introdução à Computação (IFSC). O objetivo principal foi aplicar os conceitos iniciais de programação em Java, além de exercitar o uso de Git/GitHub para versionamento de código e a familiarização com comandos básicos do sistema operacional Linux. O projeto consistiu em desenvolver a lógica de um robô de combate para a plataforma Robocode.`,
    tecnologias: ['Java', 'Robocode', 'Git', 'Linux'],
    desafios: 'O principal desafio foi aprender a utilizar a API específica do Robocode para controlar o robô, juntamente com a prática inicial de versionamento usando Git e comandos no terminal Linux.',
    linkRepositorio: 'https://github.com/EduCardoso22/Shigeo-Kageyama-ROBOCODE.git',
    linkDemo: '#',
  },
  {
    id: 'ifsc-java-poo-exercicios',
    titulo: 'Exercícios de Java POO (IFSC)',
    descricaoCurta: 'Repositório com listas de exercícios resolvidos da disciplina de Programação Orientada a Objetos em Java (ADS - IFSC).',
    descricaoCompleta: `Este repositório está diretamente relacionado à disciplina de Programação Orientada a Objetos (POO), que estou cursando atualmente em Análise e Desenvolvimento de Sistemas (IFSC). Ele abriga as soluções para as listas de exercícios propostas pelo professor durante as aulas, além de outros materiais e anotações úteis. É um projeto em contínuo desenvolvimento, acompanhando o progresso da disciplina.`,
    tecnologias: ['Java', 'POO', 'IDE (Eclipse/IntelliJ)', 'Git'],
    desafios: 'Aplicar corretamente os conceitos de Programação Orientada a Objetos (encapsulamento, herança, polimorfismo) na resolução dos problemas. Manter o repositório organizado e atualizado conforme as aulas avançam.',
    linkRepositorio: 'https://github.com/EduCardoso22/IFSC-Codespace-ENG-ADS-JAVA-POO.git',
    linkDemo: '#',
  },
  {
    id: 'portfolio-nextjs',
    titulo: 'Portfólio Pessoal (Este site!)',
    descricaoCurta: 'Desenvolvimento deste portfólio usando Next.js, TypeScript e Tailwind CSS.',
    descricaoCompleta: `Este portfólio foi desenvolvido como projeto para a disciplina de FrontEnd do curso do SENAC (Programa Jovem Programador). Ele serve como um protótipo inicial da minha presença online profissional. A intenção é que este seja um projeto vivo, que evoluirá ao longo da minha carreira, incorporando novas tecnologias, projetos e funcionalidades conforme aprendo e desenvolvo novas habilidades.\nA tecnologia base escolhida foi Next.js com TypeScript e Tailwind CSS, visando aplicar conceitos modernos de desenvolvimento web e garantir boa performance e manutenibilidade.`,
    tecnologias: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Vercel', 'Git'],
    desafios: 'Aplicar os conhecimentos adquiridos na disciplina de FrontEnd, aprender e integrar as tecnologias da stack (Next.js, TypeScript, Tailwind), estruturar o projeto de forma escalável e configurar o deploy. O principal desafio contínuo será manter o portfólio atualizado com novos aprendizados e projetos.',
    linkRepositorio: 'https://github.com/EduCardoso22/meu-portfolio',
    linkDemo: '#',
  },
];

function getProjectData(slug: string) {
  return projetos.find((p) => p.id === slug);
}

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

  return (
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

        <section aria-labelledby={`links-${projeto.id}`}>
          <h2 id={`links-${projeto.id}`} className="text-2xl font-semibold mb-3 border-b pb-2">Links</h2>
          <div className="flex flex-wrap gap-4 items-center">
            {projeto.linkRepositorio && projeto.linkRepositorio !== '#' && (
              <a
                href={projeto.linkRepositorio}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors group"
              >
                <FaGithub className="w-4 h-4 mr-1.5 group-hover:scale-110 transition-transform"/>
                Repositório
              </a>
            )}
            {projeto.linkDemo && projeto.linkDemo !== '#' && (
               <a
                href={projeto.linkDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors group"
              >
                <FaExternalLinkAlt className="w-4 h-4 mr-1.5 group-hover:scale-110 transition-transform"/>
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

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const projeto = getProjectData(resolvedParams.slug);
  return {
    title: `${projeto?.titulo ?? 'Projeto'}`,
    description: `Detalhes sobre o projeto ${projeto?.titulo ?? ''} de Eduardo Cardoso Oliveira. ${projeto?.descricaoCurta ?? ''}`,
  };
}
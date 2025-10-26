// src/app/projetos/[slug]/page.tsx
import Link from 'next/link';

const projetos = [
   {
    id: 'robocode-shigeo-kageyama',
    titulo: 'Robocode - Shigeo Kageyama',
    descricaoCurta: 'Projeto de um robô para a plataforma Robocode, desenvolvido em Java como atividade da disciplina de Algoritmos e Programação.',
    descricaoCompleta: `Este projeto foi desenvolvido durante a disciplina de Algoritmos e Programação no curso de ADS do IFSC. O objetivo era criar um robô autônomo para competir na plataforma Robocode.
Implementei estratégias de movimentação, mira e disparo utilizando a API do Robocode em Java. O robô "Shigeo Kageyama" foca em movimentação evasiva e mira preditiva simples. Foi uma ótima oportunidade para aplicar conceitos de lógica de programação e introdução à inteligência artificial em um ambiente prático e competitivo.`,
    tecnologias: ['Java', 'Robocode'],
    desafios: 'Entender a física e as APIs do Robocode, desenvolver uma lógica de combate eficaz e depurar o comportamento do robô em tempo real foram os principais desafios.',
    linkRepositorio: 'https://github.com/EduCardoso22/Shigeo-Kageyama-ROBOCODE.git',
    linkDemo: '#',
  },
  {
    id: 'ifsc-java-poo-exercicios',
    titulo: 'Exercícios de Java POO (IFSC)',
    descricaoCurta: 'Repositório com listas de exercícios resolvidos da disciplina de Programação Orientada a Objetos em Java (ADS - IFSC).',
    descricaoCompleta: `Este repositório contém as soluções para as listas de exercícios propostas na disciplina de Programação Orientada a Objetos (POO) do curso de Análise e Desenvolvimento de Sistemas no IFSC.
Os exercícios abrangem conceitos fundamentais de POO em Java, como classes, objetos, encapsulamento, herança, polimorfismo, interfaces e tratamento de exceções. Serviu como base prática para solidificar o aprendizado teórico da disciplina.`,
    tecnologias: ['Java', 'POO', 'IDE (Eclipse/IntelliJ)'],
    desafios: 'Compreender e aplicar corretamente os conceitos de POO para resolver os problemas propostos, especialmente herança e polimorfismo. Manter o código organizado e bem documentado.',
    linkRepositorio: 'https://github.com/EduCardoso22/IFSC-Codespace-ENG-ADS-JAVA-POO.git',
    linkDemo: '#',
  },
  {
    id: 'portfolio-nextjs',
    titulo: 'Portfólio Pessoal (Este site!)',
    descricaoCurta: 'Desenvolvimento deste portfólio usando Next.js, TypeScript e Tailwind CSS para apresentar minhas habilidades e projetos.',
    descricaoCompleta: `Este projeto, que você está vendo agora, foi criado para ser meu cartão de visitas digital. Utilizei Next.js pelo seu excelente desempenho e otimizações de SEO.
O TypeScript adiciona segurança e manutenibilidade. Tailwind CSS permitiu criar uma interface responsiva rapidamente. O deploy foi automatizado na Vercel.`,
    tecnologias: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Vercel'],
    desafios: 'Aprender e aplicar os conceitos do App Router do Next.js, configurar corretamente o TypeScript com React e garantir um bom desempenho.',
    linkRepositorio: 'https://github.com/EduCardoso22/meu-portfolio',
    linkDemo: '#', // Adicione o link do site quando estiver online
  },
];

function getProjectData(slug: string) {
  return projetos.find((p) => p.id === slug);
}

export default function ProjetoDetalhePage({ params }: { params: { slug: string } }) {
  const projeto = getProjectData(params.slug);

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
        {(projeto.linkRepositorio === '#' && !projeto.linkDemo || projeto.linkDemo === '#') && (
            <p className="text-sm text-gray-500 dark:text-gray-400 italic mt-2">Nenhum link externo disponível para este projeto.</p>
        )}
         {(!projeto.linkRepositorio || projeto.linkRepositorio === '#') && (!projeto.linkDemo || projeto.linkDemo === '#') && (
            <p className="text-sm text-gray-500 dark:text-gray-400 italic mt-2">Nenhum link externo disponível para este projeto.</p>
        )}
      </section>
    </main>
  );
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const projeto = getProjectData(params.slug);
  return {
    title: `${projeto?.titulo ?? 'Projeto'} - Eduardo Oliveira`,
  };
}
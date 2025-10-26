// src/app/projetos/[slug]/page.tsx
import Link from 'next/link';

// --- Dados de Exemplo (os mesmos da página de galeria) ---
// Idealmente, estes dados viriam de um CMS ou API,
// mas por agora vamos repetir para encontrar o projeto certo.
const projetos = [
  {
    id: 'meu-primeiro-site',
    titulo: 'Meu Primeiro Site Pessoal',
    descricaoCurta: 'Explorando HTML, CSS e JavaScript para criar uma presença online inicial.',
    descricaoCompleta: 'Este projeto foi fundamental para aprender os conceitos básicos do desenvolvimento web front-end. O foco foi estruturar o conteúdo semanticamente com HTML, estilizar com CSS puro (incluindo Flexbox e Grid) e adicionar interatividade básica com JavaScript.',
    tecnologias: ['HTML', 'CSS', 'JavaScript'],
    desafios: 'O principal desafio foi entender como diferentes propriedades CSS interagiam e garantir a responsividade em diferentes tamanhos de tela.',
    linkRepositorio: 'https://github.com/EduCardoso22/meu-portfolio', // <<< Substitua pelo link real do seu repositório no GitHub
  },
  {
    id: 'portfolio-nextjs',
    titulo: 'Portfólio Pessoal Interativo (Este site!)',
    descricaoCurta: 'Desenvolvimento de um portfólio moderno usando Next.js, TypeScript e Tailwind CSS.',
    descricaoCompleta: 'O objetivo deste projeto é aplicar conceitos modernos de desenvolvimento web, incluindo React com Next.js para otimização de performance (SSR/SSG), TypeScript para segurança de tipos, e Tailwind CSS para estilização rápida e consistente. A gestão do projeto segue a metodologia Kanban.',
    tecnologias: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Vercel'],
    desafios: 'Integrar todas as tecnologias de forma coesa e configurar corretamente o deploy contínuo com a Vercel.',
    linkRepositorio: '#', // <<< Substitua pelo link real
    linkDemo: '#', // <<< Substitua pelo link real (pode ser o link do próprio site)
  },
  // Adicione os detalhes dos seus outros projetos aqui...
];
// --- Fim dos Dados ---

// Função para buscar os dados do projeto pelo ID (slug)
function getProjectData(slug: string) {
  return projetos.find((p) => p.id === slug);
}

// O componente da página recebe 'params' que contém o valor do [slug] da URL
export default function ProjetoDetalhePage({ params }: { params: { slug: string } }) {
  const projeto = getProjectData(params.slug);

  // Se o projeto não for encontrado (URL inválida), mostra uma mensagem
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

  // Se o projeto for encontrado, exibe os detalhes
  return (
    <main className="container mx-auto px-4 py-8">
      {/* Botão de Voltar */}
       <Link href="/projetos" className="text-blue-600 dark:text-blue-400 hover:underline mb-6 inline-block">
        &larr; Voltar para Projetos
      </Link>

      {/* Título do Projeto */}
      <h1 className="text-3xl md:text-4xl font-bold mb-4">{projeto.titulo}</h1>

      {/* Tecnologias */}
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

      {/* Descrição Completa */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Descrição</h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">
          {projeto.descricaoCompleta}
        </p>
      </section>

      {/* Desafios */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Desafios</h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">
          {projeto.desafios}
        </p>
      </section>

      {/* Links Externos */}
      <section>
        <h2 className="text-2xl font-semibold mb-2">Links</h2>
        <div className="space-x-4">
          {projeto.linkRepositorio && projeto.linkRepositorio !== '#' && (
            <a
              href={projeto.linkRepositorio}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              Repositório no GitHub
            </a>
          )}
          {projeto.linkDemo && projeto.linkDemo !== '#' && (
             <a
              href={projeto.linkDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              Ver Demo Online
            </a>
          )}
        </div>
        {(projeto.linkRepositorio === '#' && projeto.linkDemo === '#') && (
            <p className="text-sm text-gray-500 italic">Links não disponíveis.</p>
        )}
      </section>
    </main>
  );
}

// (Opcional) Gerar metadados dinâmicos (título da aba do navegador)
export async function generateMetadata({ params }: { params: { slug: string } }) {
  const projeto = getProjectData(params.slug);
  return {
    title: `${projeto?.titulo ?? 'Projeto'} - Eduardo Oliveira`,
  };
}
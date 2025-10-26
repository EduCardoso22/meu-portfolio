// src/app/sobre/page.tsx

export default function SobrePage() {
  return (
    <main className="container mx-auto px-4 py-8"> {/* Container para centralizar e adicionar espaçamento */}
      
      {/* Título da Página */}
      <h1 className="text-3xl font-bold mb-6 text-center md:text-left">
        Sobre Mim
      </h1>

      {/* RF002 - Seção com breve biografia */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">Minha História</h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          {/* >>> INSIRA SUA BREVE BIOGRAFIA AQUI <<< 
            Fale um pouco sobre você, sua paixão por desenvolvimento, 
            seus objetivos, etc.
          */}
          Olá! Sou Eduardo Cardoso Oliveira, um [Seu Título, ex: Desenvolvedor Full Stack] apaixonado por criar soluções web modernas e eficientes... 
          [Continue com sua biografia]
        </p>
      </section>

      {/* RF002 - Descrição de minhas competências */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">Competências (Skills)</h2>
        
        {/* Hard Skills */}
        <div className="mb-4">
          <h3 className="text-xl font-medium mb-2">Hard Skills (Técnicas)</h3>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
            {/* >>> LISTE SUAS HARD SKILLS AQUI <<< */}
            <li>React & Next.js</li>
            <li>TypeScript</li>
            <li>Node.js</li>
            <li>Tailwind CSS</li>
            <li>HTML & CSS</li>
            <li>Git & GitHub</li>
            {/* Adicione mais conforme necessário */}
          </ul>
        </div>

        {/* Soft Skills */}
        <div>
          <h3 className="text-xl font-medium mb-2">Soft Skills (Comportamentais)</h3>
           <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
            {/* >>> LISTE SUAS SOFT SKILLS AQUI <<< */}
            <li>Comunicação</li>
            <li>Trabalho em Equipe</li>
            <li>Resolução de Problemas</li>
            <li>Aprendizado Contínuo</li>
            {/* Adicione mais conforme necessário */}
          </ul>
        </div>
      </section>

      {/* RF002 - Experiência profissional/acadêmica */}
      <section>
        <h2 className="text-2xl font-semibold mb-3">Experiência / Formação</h2>
        <div className="text-gray-700 dark:text-gray-300 space-y-4">
          {/* >>> ADICIONE SUA EXPERIÊNCIA E FORMAÇÃO AQUI <<<
            Use parágrafos ou uma lista para detalhar. Exemplo:
          */}
          <div>
            <h4 className="font-semibold">Nome da Empresa / Instituição de Ensino</h4>
            <p className="text-sm text-gray-500 dark:text-gray-400">Cargo / Curso - Período (Ex: Jan 2024 - Presente)</p>
            <p>Descrição das suas responsabilidades ou do que aprendeu.</p>
          </div>
          {/* Repita a estrutura acima para cada experiência/formação */}
        </div>
      </section>

    </main>
  );
}   
// src/app/sobre/page.tsx

export default function SobrePage() {
  return (
    <main className="container mx-auto px-4 py-8 max-w-3xl">
      <h1 className="text-3xl font-bold mb-8 text-center md:text-left">
        Sobre Mim
      </h1>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 border-b pb-2">Minha História</h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
          Olá! Sou Eduardo Cardoso Oliveira, um entusiasta da tecnologia em formação para me tornar Desenvolvedor Full Stack. Atualmente, estou cursando Análise e Desenvolvimento de Sistemas (ADS) no IFSC de São José e participo ativamente do Programa Jovem Programador, buscando aprimorar minhas habilidades práticas. Minha trajetória acadêmica inclui três semestres de Matemática, curso que despertou meu interesse pela lógica e resolução de problemas, direcionando-me naturalmente para o mundo da programação. Sou motivado pela possibilidade de criar soluções digitais e estou sempre em busca de conhecimento para enfrentar novos desafios na área de desenvolvimento web.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 border-b pb-2">Competências</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-medium mb-3 text-blue-600 dark:text-blue-400">Hard Skills (Técnicas)</h3>
            <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
              <li>Java (incluindo POO)</li>
              <li>HTML5</li>
              <li>CSS3 (incluindo Tailwind CSS)</li>
              <li>JavaScript</li>
              <li>React & Next.js (Aprendendo)</li>
              <li>TypeScript (Aprendendo)</li>
              <li>Git & GitHub</li>
              <li>LaTeX</li>
              <li>Pacote Office</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-medium mb-3 text-green-600 dark:text-green-400">Soft Skills (Comportamentais)</h3>
             <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
              <li>Comunicação</li>
              <li>Trabalho em Equipe</li>
              <li>Resolução de Problemas</li>
              <li>Adaptabilidade</li>
              <li>Aprendizado Contínuo</li>
              <li>Proatividade</li>
             </ul>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4 border-b pb-2">Experiência e Formação</h2>
        <div className="text-gray-700 dark:text-gray-300 space-y-6">
           <div>
            <h4 className="text-lg font-semibold text-gray-800 dark:text-white">Polo de Inovação Embrapii - IFSC</h4>
            <p className="text-sm text-gray-500 dark:text-gray-400">Estagiário | Set 2025 - Presente</p>
            <p className="mt-1">Atuação em projetos de inovação e desenvolvimento tecnológico.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-gray-800 dark:text-white">CASAN (Companhia Catarinense de Águas e Saneamento)</h4>
            <p className="text-sm text-gray-500 dark:text-gray-400">Estagiário | 2020 - 2021</p>
            <p className="mt-1">Apoio em atividades administrativas e operacionais.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-gray-800 dark:text-white">IFSC - Campus São José</h4>
            <p className="text-sm text-gray-500 dark:text-gray-400">Tecnólogo em Análise e Desenvolvimento de Sistemas | Em andamento</p>
          </div>
           <div>
            <h4 className="text-lg font-semibold text-gray-800 dark:text-white">SENAC/SC - Programa Jovem Programador</h4>
            <p className="text-sm text-gray-500 dark:text-gray-400">Qualificação Profissional | Em andamento</p>
           </div>
          <div>
            <h4 className="text-lg font-semibold text-gray-800 dark:text-white">Universidade Federal de Santa Catarina (UFSC)</h4>
            <p className="text-sm text-gray-500 dark:text-gray-400">Bacharelado em Matemática | 3 semestres cursados</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-gray-800 dark:text-white">Cursos Complementares</h4>
             <ul className="list-disc list-inside space-y-1 text-sm mt-1">
                <li>Pacote Office (Online)</li>
                <li>LaTeX (Online)</li>
                <li>HTML e CSS (Online)</li>
             </ul>
          </div>
        </div>
      </section>

    </main>
  );
}
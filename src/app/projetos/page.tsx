// Dentro do loop .map() em src/app/projetos/page.tsx:
<div
  key={projeto.id}
  // Borda sutil, sombra maior no hover, cantos mais arredondados
  className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 flex flex-col overflow-hidden group" 
>
  {/* Adicionar um espaço para imagem (opcional) */}
  {/* <div className="h-40 bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-gray-400">
    Imagem do Projeto (16:9)
  </div> */}
  
  <div className="p-6 flex flex-col flex-grow">
    <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors"> {/* Cor no hover do card */}
      {projeto.titulo}
    </h3>
    <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm flex-grow">
      {projeto.descricaoCurta}
    </p>
    <div className="flex flex-wrap gap-2 mb-4 mt-auto"> {/* Tecnologias no final */}
      {projeto.tecnologias.map((tech) => (
        <span 
          key={tech}
          // Badges com cores um pouco diferentes
          className="bg-blue-100 dark:bg-gray-700 text-blue-800 dark:text-gray-300 text-xs font-medium px-2.5 py-1 rounded-full"
        >
          {tech}
        </span>
      ))}
    </div>
    <Link 
      href={`/projetos/${projeto.id}`} 
      // Link mais discreto, visível no hover
      className="text-blue-600 dark:text-blue-400 hover:underline mt-2 text-sm font-medium opacity-80 group-hover:opacity-100 transition-opacity"
    >
      Ver detalhes &rarr; 
    </Link>
  </div>
</div>
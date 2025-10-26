export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      
      {/* RF001 - Página Home 
        Apresentação principal ("hero section") com nome, título e call-to-action.
      */}
      <section className="text-center">
        
        {/* Seu Nome [cite: 2] */}
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Eduardo Cardoso Oliveira 
        </h1>

        {/* Seu Título  */}
        <p className="text-xl md:text-2xl text-gray-400 mb-8">
          Desenvolvedor Full Stack
        </p>

        {/* Seu Call-to-Action (CTA)  */}
        <a 
          href="/projetos" 
          className="bg-blue-600 text-white py-3 px-6 rounded-lg text-lg hover:bg-blue-700 transition-colors"
        >
          Veja meus projetos
        </a>
      </section>

    </main>
  );
}
// src/app/contato/page.tsx

export default function ContatoPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      
      <h1 className="text-3xl font-bold mb-6 text-center">
        Entre em Contato
      </h1>

      <p className="text-center text-gray-700 dark:text-gray-300 mb-8 max-w-md mx-auto">
        Você pode me encontrar nas seguintes plataformas ou me enviar uma mensagem (funcionalidade futura). Ficarei feliz em conectar!
      </p>

      {/* RF004 - Links diretos para redes sociais profissionais */}
      <div className="flex justify-center items-center space-x-6">
        <a 
          href="https://www.linkedin.com/in/seu-usuario/" // <<< SUBSTITUA PELO SEU LINKEDIN
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-blue-600 dark:text-blue-400 hover:underline text-lg font-medium"
        >
          LinkedIn
        </a>
        
        <a 
          href="https://github.com/seu-usuario" // <<< SUBSTITUA PELO SEU GITHUB
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-gray-800 dark:text-gray-200 hover:underline text-lg font-medium"
        >
          GitHub
        </a>
        
        {/* Adicione outros links se desejar (ex: Email) */}
        {/* <a href="mailto:seuemail@exemplo.com" className="text-red-600 dark:text-red-400 hover:underline text-lg font-medium">
          Email
        </a> */}
      </div>

      {/* Futuramente, você pode adicionar um formulário de contato aqui se preferir,
        mas isso exigiria configuração de backend ou um serviço como Formspree/Netlify Forms.
      */}
      
    </main>
  );
}

// Metadata para a página de contato
export const metadata = {
  title: "Contato - Eduardo Oliveira",
  description: "Entre em contato com Eduardo Cardoso Oliveira.",
};
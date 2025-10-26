// src/app/contato/page.tsx
import Link from 'next/link';

export default function ContatoPage() {
  return (
    <main className="container mx-auto px-4 py-12 flex flex-col items-center">

      <h1 className="text-3xl font-bold mb-4 text-center">
        Entre em Contato
      </h1>

      <p className="text-center text-gray-600 dark:text-gray-400 mb-10 max-w-lg mx-auto">
        Estou sempre aberto a novas conexões e oportunidades. Você pode me encontrar nas redes profissionais, enviar um email ou até mesmo ligar. Vamos conversar!
      </p>

      <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-6 mb-12">
        <a
          href="https://www.linkedin.com/in/eduardo-cardoso-308a13216/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-700 hover:bg-blue-800 transition-colors shadow-sm w-full sm:w-auto"
        >
          LinkedIn
        </a>

        <a
          href="https://github.com/EduCardoso22"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 dark:border-gray-600 text-base font-medium rounded-md text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors shadow-sm w-full sm:w-auto"
        >
          GitHub
        </a>

        <a
          href="mailto:eduhcardoso002@hotmail.com"
          className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-red-700 dark:text-red-300 bg-red-100 dark:bg-red-900 hover:bg-red-200 dark:hover:bg-red-800 transition-colors shadow-sm w-full sm:w-auto"
        >
          Email
        </a>

         <a
          href="tel:+5548988341377" // Formato internacional para link telefônico
          className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-green-700 dark:text-green-300 bg-green-100 dark:bg-green-900 hover:bg-green-200 dark:hover:bg-green-800 transition-colors shadow-sm w-full sm:w-auto"
        >
          Telefone (48) 98834-1377
        </a>
      </div>

      <div className="text-center max-w-lg mx-auto border-t pt-8 mt-8 border-gray-200 dark:border-gray-700">
          <h2 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">Prefere enviar uma mensagem direta?</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            No momento, estou trabalhando na implementação de um formulário de contato aqui. Enquanto isso, por favor, utilize um dos métodos acima.
          </p>
          {/* Futuramente: <FormularioDeContato /> */}
      </div>

    </main>
  );
}

export const metadata = {
  title: "Contato - Eduardo Oliveira",
  description: "Entre em contato com Eduardo Cardoso Oliveira via LinkedIn, GitHub, Email ou Telefone.",
};
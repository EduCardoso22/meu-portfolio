// src/app/contato/page.tsx
import Link from 'next/link';

// SVGs simples para ícones (exemplo)
const LinkedInIcon = () => (
  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
  </svg>
);

const GitHubIcon = () => (
   <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.036 1.531 1.036.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.026 2.747-1.026.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
  </svg>
);

const EmailIcon = () => (
  <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const PhoneIcon = () => (
  <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
     <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
);

export default function ContatoPage() {
  return (
    <main className="container mx-auto px-4 py-12 flex flex-col items-center">

      <h1 className="text-3xl font-bold mb-4 text-center">
        Entre em Contato
      </h1>

      <p className="text-center text-gray-600 dark:text-gray-400 mb-10 max-w-lg mx-auto">
        Estou sempre aberto a novas conexões e oportunidades. Você pode me encontrar nas redes profissionais, enviar um email ou até mesmo ligar. Vamos conversar!
      </p>

      <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-6 mb-12 w-full max-w-xl">
        <a
          href="https://www.linkedin.com/in/eduardo-cardoso-308a13216/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-700 hover:bg-blue-800 transition-colors shadow-sm w-full sm:w-auto"
        >
          <LinkedInIcon /> LinkedIn
        </a>

        <a
          href="https://github.com/EduCardoso22"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 dark:border-gray-600 text-base font-medium rounded-md text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors shadow-sm w-full sm:w-auto"
        >
          <GitHubIcon /> GitHub
        </a>

        <a
          href="mailto:eduhcardoso002@hotmail.com"
          className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-red-700 dark:text-red-300 bg-red-100 dark:bg-red-900 hover:bg-red-200 dark:hover:bg-red-800 transition-colors shadow-sm w-full sm:w-auto"
        >
          <EmailIcon /> Email
        </a>

         <a 
          href="https://wa.me/5548988341377" // Link direto para WhatsApp (formato internacional)
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-green-700 dark:text-green-300 bg-green-100 dark:bg-green-900 hover:bg-green-200 dark:hover:bg-green-800 transition-colors shadow-sm w-full sm:w-auto"
        >
          <PhoneIcon /> WhatsApp / Telefone
        </a>
      </div>

       <div className="text-center max-w-lg mx-auto border-t pt-8 mt-8 border-gray-200 dark:border-gray-700">
          <h2 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">Formulário de Contato</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Em breve, adicionarei um formulário aqui para facilitar o envio direto de mensagens.
          </p>
      </div>

    </main>
  );
}

export const metadata = {
  title: "Contato - Eduardo Oliveira",
  description: "Entre em contato com Eduardo Cardoso Oliveira via LinkedIn, GitHub, Email ou WhatsApp/Telefone.",
};
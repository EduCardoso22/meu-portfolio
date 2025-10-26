import Link from 'next/link';
import type { Metadata } from 'next';
import { FaLinkedin, FaGithub, FaEnvelope, FaWhatsapp } from 'react-icons/fa';

export const metadata: Metadata = {
  title: "Contato",
  description: "Entre em contato com Eduardo Cardoso Oliveira via LinkedIn, GitHub, Email ou WhatsApp.",
};

export default function ContatoPage() {
  return (
    <main className="container mx-auto px-4 py-12 flex flex-col items-center flex-grow justify-center">

      <section className="text-center max-w-xl">
        <h1 className="text-3xl font-bold mb-4">
          Entre em Contato
        </h1>

        <p className="text-gray-600 dark:text-gray-400 mb-10">
          Estou sempre aberto a novas conexões e oportunidades. Você pode me encontrar nas redes profissionais, enviar um email ou até mesmo uma mensagem via WhatsApp. Vamos conversar!
        </p>

        <ul className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-4 sm:gap-6 mb-12 w-full">
          <li>
            <a
              href="https://www.linkedin.com/in/eduardo-cardoso-308a13216/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-5 py-2.5 border border-transparent text-base font-medium rounded-md text-white bg-blue-700 hover:bg-blue-800 transition-colors shadow-sm w-full sm:w-auto"
            >
              <FaLinkedin className="w-5 h-5 mr-2" /> LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://github.com/EduCardoso22"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-5 py-2.5 border border-gray-300 dark:border-gray-600 text-base font-medium rounded-md text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors shadow-sm w-full sm:w-auto"
            >
              <FaGithub className="w-5 h-5 mr-2" /> GitHub
            </a>
          </li>
          <li>
            <a
              href="mailto:eduhcardoso002@hotmail.com"
              className="inline-flex items-center justify-center px-5 py-2.5 border border-transparent text-base font-medium rounded-md text-red-700 dark:text-red-300 bg-red-100 dark:bg-red-900 hover:bg-red-200 dark:hover:bg-red-800 transition-colors shadow-sm w-full sm:w-auto"
            >
              <FaEnvelope className="w-5 h-5 mr-2" /> Email
            </a>
          </li>
          <li>
            <a
              href="https://wa.me/5548988341377"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-5 py-2.5 border border-transparent text-base font-medium rounded-md text-green-700 dark:text-green-300 bg-green-100 dark:bg-green-900 hover:bg-green-200 dark:hover:bg-green-800 transition-colors shadow-sm w-full sm:w-auto"
            >
              <FaWhatsapp className="w-5 h-5 mr-2" /> WhatsApp
            </a>
          </li>
        </ul>

        <div className="border-t pt-8 mt-8 border-gray-200 dark:border-gray-700">
            <h2 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">Formulário de Contato</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              (Em breve)
            </p>
        </div>
      </section>

    </main>
  );
}
// src/components/Footer.tsx
import Link from 'next/link';
import { FaGithub, FaLinkedin } from 'react-icons/fa'; // Importando ícones

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-100 dark:bg-gray-950 py-8 mt-16 border-t border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-4 text-center">
        {/* Links Sociais (Item 5 - Ícones) */}
        <div className="flex justify-center space-x-6 mb-4">
          <a href="https://github.com/EduCardoso22" target="_blank" rel="noopener noreferrer" aria-label="GitHub"
             className="text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white transition-colors">
            <FaGithub size={24} />
          </a>
          <a href="https://www.linkedin.com/in/eduardo-cardoso-308a13216/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
             className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 transition-colors">
            <FaLinkedin size={24} />
          </a>
          {/* Adicione outros ícones/links se desejar */}
        </div>

        {/* Informações */}
        <p className="text-sm text-gray-600 dark:text-gray-400">
          © {currentYear} Eduardo Cardoso Oliveira. Todos os direitos reservados.
        </p>
        <p className="mt-1 text-xs text-gray-500 dark:text-gray-500">
          Construído com <a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer" className="hover:underline">Next.js</a>
          {' '}e <a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer" className="hover:underline">Tailwind CSS</a>.
          Hospedado na <a href="https://vercel.com/" target="_blank" rel="noopener noreferrer" className="hover:underline">Vercel</a>.
        </p>
      </div>
    </footer>
  );
}
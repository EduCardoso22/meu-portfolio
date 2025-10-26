// src/components/Navbar.tsx
import Link from 'next/link';

export default function Navbar() {
  return (
    // Fundo branco/escuro, sombra suave, padding
    <nav className="bg-white dark:bg-gray-900 shadow-sm sticky top-0 z-50"> 
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo/Nome */}
        <Link href="/" className="text-lg font-semibold text-gray-800 dark:text-white hover:text-blue-600 transition-colors">
          Eduardo C. Oliveira
        </Link>

        {/* Links */}
        <div className="space-x-5"> {/* Aumentar espaço */}
          <Link href="/" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors pb-1 border-b-2 border-transparent hover:border-blue-500">
            Home
          </Link>
          <Link href="/sobre" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors pb-1 border-b-2 border-transparent hover:border-blue-500">
            Sobre
          </Link>
          <Link href="/projetos" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors pb-1 border-b-2 border-transparent hover:border-blue-500">
            Projetos
          </Link>
          <Link href="/contato" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors pb-1 border-b-2 border-transparent hover:border-blue-500">
            Contato
          </Link>
        </div>
      </div>
    </nav>
  );
}
// src/components/Navbar.tsx
import Link from 'next/link'; // Importa o componente Link do Next.js para navegação

export default function Navbar() {
  return (
    <nav className="bg-gray-100 dark:bg-gray-800 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Seu Nome ou Logo (link para Home) */}
        <Link href="/" className="text-xl font-bold text-black dark:text-white">
          Portfólio - Eduardo Cardoso Oliveira
        </Link>

        {/* Links de Navegação */}
        <div className="space-x-4">
          <Link href="/" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
            Home
          </Link>
          <Link href="/sobre" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
            Sobre
          </Link>
          <Link href="/projetos" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
            Projetos
          </Link>
          <Link href="/contato" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
            Contato
          </Link>
        </div>
      </div>
    </nav>
  );
}
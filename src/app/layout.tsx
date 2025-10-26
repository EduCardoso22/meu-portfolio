// src/app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/src/components/navbar"; // Verifique se este caminho está correto
import Footer from "@/src/components/footer"; // Importa o novo Footer
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Item 8: Metadata Base (outras páginas podem sobrescrever/adicionar)
export const metadata: Metadata = {
  title: {
    default: "Eduardo Cardoso Oliveira - Portfólio", // Título padrão
    template: "%s | Eduardo C. Oliveira", // Template para títulos de páginas filhas
  },
  description: "Portfólio pessoal de Eduardo Cardoso Oliveira, estudante de ADS e desenvolvedor web em formação.",
  // Adicionar outras meta tags relevantes (keywords, author, etc.) se desejar
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className="scroll-smooth"> {/* Adicionado scroll-smooth */}
      <body
        // Aplicando fontes e garantindo layout flexível + fundo/texto base
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased flex flex-col min-h-screen bg-background text-foreground`}
      >
        <Navbar />
        {/* Adicionado 'w-full' para garantir que o conteúdo tente ocupar a largura */}
        <div className="flex-grow w-full">{children}</div>
        <Footer /> {/* Usa o componente Footer */}
      </body>
    </html>
  );
}
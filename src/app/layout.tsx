import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/src/components/navbar"; // <<< 1. Importe a Navbar (usando o alias @/)
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Eduardo Cardoso Oliveira - Portfólio",
  description: "Portfólio pessoal de Eduardo Cardoso Oliveira", // Você pode ajustar a descrição
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`} // Adicionado flex flex-col min-h-screen
      >
        <Navbar /> {/* <<< 2. Adicione a Navbar aqui */}
        <div className="flex-grow">{children}</div> {/* Garante que o conteúdo principal ocupe o espaço */}
        {/* Você pode adicionar um Footer aqui depois */}
      </body>
    </html>
  );
}
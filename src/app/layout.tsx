// src/app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/src/components/navbar";
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
  description: "Portfólio pessoal de Eduardo Cardoso Oliveira",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen bg-background text-foreground`}
      >
        <Navbar />
        <div className="flex-grow">{children}</div>
        {/* Adicione um Footer aqui */}
        <footer className="bg-gray-100 dark:bg-gray-800 py-4 mt-12">
           <div className="container mx-auto px-4 text-center text-sm text-gray-600 dark:text-gray-400">
             © {new Date().getFullYear()} Eduardo Cardoso Oliveira. Todos os direitos reservados.
           </div>
        </footer>
      </body>
    </html>
  );
}
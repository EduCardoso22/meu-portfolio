import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/src/components/navbar";
import Footer from "@/src/components/footer";
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
  title: {
    default: "Eduardo Cardoso Oliveira - Portfólio",
    template: "%s | Eduardo C. Oliveira",
  },
  description: "Portfólio pessoal de Eduardo Cardoso Oliveira, estudante de ADS e desenvolvedor web em formação.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased flex flex-col min-h-screen bg-background text-foreground`}
      >
        <Navbar />
        <div className="flex-grow w-full">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
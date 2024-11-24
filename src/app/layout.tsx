import type { Metadata } from "next";
import { Inter } from 'next/font/google'
import localFont from "next/font/local";
import "@/styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster"

export const metadata: Metadata = {
  title: "Hygge Everyday",
  description: "Hygge Everyday",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link 
          rel="stylesheet" 
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&display=swap" 
        />
      </head>
      <body>
        <Header />
        <main>
          <div className="wrapper">
          {children}
          </div>
        </main>
        <Toaster />
        <Footer />
      </body>
    </html>
  );
}

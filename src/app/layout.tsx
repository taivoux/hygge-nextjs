import type { Metadata } from "next";
import { Manrope } from 'next/font/google';
import "@/styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster"
import { OrderProvider } from "@/context/orderContext";
import { MenuProvider } from "@/context/menuContext";

export const metadata: Metadata = {
  title: "Hygge Everyday",
  description: "Hygge Everyday",
};

const manrope = Manrope({
  subsets: ['latin'], // Specify the subsets you need
  weight: ['200', '300', '400', '500', '600', '700', '800'], // Specify the font weights you need
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={manrope.className}>
      <body>
        <Header />
        <main>
          <div className="wrapper">
          <OrderProvider>
            <MenuProvider>
              {children}
            </MenuProvider>
          </OrderProvider>
          </div>
        </main>
        <Toaster />
        <Footer />
      </body>
    </html>
  );
}

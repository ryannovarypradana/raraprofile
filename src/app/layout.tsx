import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/shared/Navbar";
import Footer from "./components/shared/Footer";
import FloatingWhatsApp from "./components/shared/FloatingWhatsApp";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rara Laundry | Jasa Laundry Profesional & Terpercaya",
  description: "Layanan laundry antar-jemput dengan hasil bersih, wangi, dan rapi.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className={inter.className}>
        {/* Kita bungkus semua dalam satu div utama untuk mengontrol layout */}
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          {/* Footer sekarang berada di dalam div utama */}
          <Footer />
        </div>
        {/* Tombol WhatsApp tetap di luar karena posisinya 'fixed' */}
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
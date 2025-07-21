import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Ganti font
import "./globals.css";
import Navbar from "./components/shared/Navbar";
import Footer from "./components/shared/Footer";
import FloatingWhatsApp from "./components/shared/FloatingWhatsApp";

const inter = Inter({ subsets: ["latin"] }); // Ganti font

export const metadata: Metadata = {
  title: "PristineClean | Jasa Laundry Profesional & Terpercaya",
  description: "Layanan laundry antar-jemput dengan hasil bersih, wangi, dan rapi.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className={inter.className}> {/* Gunakan font baru */}
        <Navbar />
        <main>
          {children}
        </main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
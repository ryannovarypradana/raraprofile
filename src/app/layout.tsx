import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./components/shared/Navbar";
import Footer from "./components/shared/Footer";
import FloatingWhatsApp from "./components/shared/FloatingWhatsApp";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "PristineClean | Jasa Laundry Profesional & Terpercaya",
  description: "Layanan laundry antar-jemput dengan hasil bersih, wangi, dan rapi. Solusi praktis untuk kesibukan Anda.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className={poppins.className}>
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
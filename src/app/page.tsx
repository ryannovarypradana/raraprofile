

import Hero from "./components/hero/Hero";
import Services from "./components/services/Services";
import HowItWorks from "./components/howItWorks/HowItWorks";
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";

// Nama-nama komponen diganti agar lebih sesuai
export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <HowItWorks />
      <Testimonials />
      <Contact />
    </main>
  );
}
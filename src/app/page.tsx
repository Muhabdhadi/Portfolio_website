import { About } from "@/components/About";
import { CareerJourney } from "@/components/CareerJourney";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navigation } from "@/components/Navigation";
import { Portfolio } from "@/components/Portfolio";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Skills } from "@/components/Skills";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <ScrollReveal>
          <About />
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <CareerJourney />
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <Skills />
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <Portfolio />
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <Contact />
        </ScrollReveal>
      </main>
      <Footer />
    </>
  );
}

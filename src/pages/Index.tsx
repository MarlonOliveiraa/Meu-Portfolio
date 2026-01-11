import Header from '@/components/Header';
import Hero from '@/components/sections/Hero';
import ImpactStatement from '@/components/sections/ImpactStatement';
import NarrativeTransition from '@/components/sections/NarrativeTransition';
import Timeline from '@/components/sections/Timeline';
import Achievements from '@/components/sections/Achievements';
import FeaturedProject from '@/components/sections/FeaturedProject';
import Projects from '@/components/sections/Projects';
import Skills from '@/components/sections/Skills';
import Vision from '@/components/sections/Vision';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/sections/Footer';
import SectionDivider from '@/components/sections/SectionDivider';

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Top gradient - Tech blue atmosphere */}
      <div className="fixed inset-x-0 top-0 h-[60vh] pointer-events-none z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/8 via-primary/3 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent" />
        {/* Subtle radial glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120%] h-[50vh] bg-gradient-radial from-primary/6 via-transparent to-transparent opacity-60" />
      </div>
      
      <div className="relative z-10">
        <Header />
        <Hero />
      
      {/* Impact Statement - Narrative break */}
      <ImpactStatement 
        statement="Não construo apenas software. Construo soluções que transformam a forma como pessoas trabalham."
        highlight="transformam"
      />
      
      <NarrativeTransition 
        text="O caminho de um desenvolvedor não é linear — é uma sequência de escolhas intencionais que moldam quem você se torna."
      />
      
      <Timeline />
      
      <SectionDivider variant="glow" />
      
      <NarrativeTransition 
        text="Cada número representa não apenas quantidade, mas compromisso com excelência em cada entrega."
      />
      
      <Achievements />
      
      <SectionDivider variant="subtle" />
      
      {/* Featured Project - Main chapter */}
      <FeaturedProject />
      
      <Projects />
      
      <SectionDivider variant="wide" />
      
      <Skills />
      
      <NarrativeTransition 
        text="Acredito que a verdadeira expertise está em saber quando simplificar."
      />
      
      <Vision />
      
      <Contact />
      
        <Footer />
      </div>
    </main>
  );
};

export default Index;

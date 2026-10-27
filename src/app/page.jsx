import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import CompanyProjects from '@/components/CompanyProjects';
import PersonalProjects from '@/components/PersonalProjects';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import CommandPalette from '@/components/CommandPalette';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen relative flex flex-col">
      <Navbar />
      <Hero />
      <About />
      <CompanyProjects />
      <PersonalProjects />
      <Experience />
      <Skills />
      <Contact />
      <Footer />
      <CommandPalette />
    </main>
  );
}

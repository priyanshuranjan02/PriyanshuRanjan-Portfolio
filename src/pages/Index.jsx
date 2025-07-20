import { ThemeProvider } from '@/contexts/ThemeContext.jsx';
import { Navbar } from '@/components/Navbar.jsx';
import { ThemeToggle } from '@/components/ThemeToggle.jsx';
import { Hero } from '@/components/sections/Hero.jsx';
import { About } from '@/components/sections/About.jsx';
import { Education } from '@/components/sections/Education.jsx';
import { Skills } from '@/components/sections/Skills.jsx';
import { Projects } from '@/components/sections/Projects.jsx';
import { Experience } from '@/components/sections/Experience.jsx';
import { Contact } from '@/components/sections/Contact.jsx';

const Index = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-foreground">
        <Navbar />
        
        <main>
          <Hero />
          <About />
          <Education />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </main>
        
        <ThemeToggle />
      </div>
    </ThemeProvider>
  );
};

export default Index;

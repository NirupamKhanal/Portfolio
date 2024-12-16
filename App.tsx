import React, { useState } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import { ThemeToggle } from './components/ThemeToggle';
import { LoadingScreen } from './components/LoadingScreen';
import { Navigation } from './components/Navigation';
import { Section } from './components/Section';
import { Sidebar } from './components/Sidebar';
import { Introduction } from './components/Introduction';
import { Research } from './components/Research';
import { Work } from './components/Work';
import { Projects } from './components/Projects';
import { Thoughts } from './components/Thoughts';
import { Contact } from './components/Contact';
import { AnimatedSection } from './components/AnimatedSection';
import { Github, Linkedin, Mail } from 'lucide-react';

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <ThemeProvider>
      <div className="bg-white dark:bg-black text-gray-900 dark:text-gray-100 min-h-screen transition-colors duration-500">
        {loading ? (
          <LoadingScreen onComplete={() => setLoading(false)} />
        ) : (
          <>
            <ThemeToggle />
            <Navigation />
            <Sidebar />
            
            <main className="pr-72">
              <Section id="home" className="flex items-center justify-center min-h-screen">
                <div className="space-y-12 max-w-4xl mx-auto">
                  <AnimatedSection>
                    <div className="text-center">
                      <h1 className="text-6xl md:text-8xl font-normal mb-8">
                        Hello, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-600 to-gray-900 dark:from-gray-400 dark:to-gray-100">Niv</span>
                      </h1>
                      <Introduction />
                    </div>
                  </AnimatedSection>
                  
                  <AnimatedSection delay={200}>
                    <div className="flex justify-center space-x-6">
                      <SocialLink href="#" icon={<Github />} />
                      <SocialLink href="#" icon={<Linkedin />} />
                      <SocialLink href="#" icon={<Mail />} />
                    </div>
                  </AnimatedSection>
                </div>
              </Section>

              <Research />
              <Work />
              <Projects />
              <Thoughts />
              <Contact />
            </main>
          </>
        )}
      </div>
    </ThemeProvider>
  );
}

function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <a
      href={href}
      className="p-3 rounded-full border border-gray-200 dark:border-gray-800 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300"
      target="_blank"
      rel="noopener noreferrer"
    >
      {icon}
    </a>
  );
}

export default App;
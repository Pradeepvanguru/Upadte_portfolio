
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Toaster } from '@/components/ui/toaster';
import { useToast } from '@/components/ui/use-toast';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ThemeToggle from '@/components/ThemeToggle';
import  Certification from '@/components/Certification';


function App() {
  const [theme, setTheme] = useState('light');
  const { toast } = useToast();

  useEffect(() => {
    // Check for saved theme preference or use system preference
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    } else if (prefersDark) {
      setTheme('dark');
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
    
    toast({
      title: `${newTheme.charAt(0).toUpperCase() + newTheme.slice(1)} mode activated`,
      description: `Switched to ${newTheme} theme`,
      duration: 2000,
    });
  };

  return (
    <div className="min-h-screen bg-background transition-colors duration-300">
      <Header theme={theme} toggleTheme={toggleTheme} />
      
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Certification />
        <Contact />
      </main>
      
      <Footer />
      <Toaster />
      
      <div className="fixed bottom-6 right-9 top-4 z-50">
        <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
      </div>
    </div>
  );
}

export default App;

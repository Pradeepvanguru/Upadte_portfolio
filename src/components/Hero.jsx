
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, GitCommit as GitHub, Linkedin, Twitter, ArrowRight, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import resume from './assets/resume.pdf'

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 -z-10"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute bottom-20 left-10 w-64 h-64 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="inline-block px-4 py-1.5 mb-6 text-sm font-medium rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300"
            >
              Welcome to my portfolio
            </motion.span>
            
            <motion.h1 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            >
              Hi, I'm <span className="text-gradient">Vanguru Pradeep</span>
              <br />
              {/* <span className="text-3xl md:text-4xl lg:text-5xl"> Developer</span> */}
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0"
            >
              I build exceptional digital experiences that are fast, accessible, visually appealing, and responsive. Let's turn your vision into reality.
            </motion.p>
          
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
             <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-white font-medium px-8"
                onClick={() => document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })}
              >
                Get in Touch
              </Button>
              <Button variant="outline" size="lg" asChild className="shadow-lg hover-lift">
                <a href={resume} download>
                  Download CV <Download className="ml-2 h-5 w-5" />
                </a>
              </Button>
             
              <Button 
                variant="outline" 
                size="lg" 
                className="border-gray-300 dark:border-gray-700"
                onClick={() => document.querySelector('#projects').scrollIntoView({ behavior: 'smooth' })}
              >
                View Projects
              </Button>
              <a 
                  href="https://github.com/Pradeepvanguru" 
                  className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-primary hover:text-white transition-colors cursor-pointer"
                  aria-label="GitHub"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </a>
                <a 
                  href="https://www.linkedin.com/in/vanguru-pradeep-79307725b" 
                  className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-primary hover:text-white transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
            </motion.div>
            
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative mx-auto lg:mx-0 max-w-md"
          >
            <div className="relative w-full h-full aspect-square  overflow-hidden rounded-full bg-blue-100 dark:bg-blue-900/30 border-white shadow-xl left-12">
              <img  alt="Professional portrait" className="w-full h-full object-cover " src="/src/components/assets/pradeep pic.jpg" />
            </div>
            
            <div className="absolute -bottom-6 -right-6 bg-white dark:bg-gray-800 rounded-lg p-4 shadow-lg">
              <div className="text-sm font-medium">
                <span className="block text-gray-500 dark:text-gray-400">Fresher</span>
                <span className="block text-2xl font-bold text-gray-900 dark:text-white"></span>
              </div>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={scrollToAbout}
            className="animate-bounce"
          >
            <ArrowDown className="h-6 w-6 text-gray-600 dark:text-gray-400" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

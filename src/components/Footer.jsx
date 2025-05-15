
import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-xl font-bold mb-4 text-gradient">Vanguru Pradeep</h3>
              <p className="text-gray-400 mb-6 max-w-md">
                A passionate web developer focused on creating beautiful and functional digital experiences.
              </p>
              <p className="text-gray-400">
                © {currentYear} Vanguru Pradeep. All rights reserved.
              </p>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-primary transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-primary transition-colors">About</a>
              </li>
              <li>
                <a href="#projects" className="text-gray-400 hover:text-primary transition-colors">Projects</a>
              </li>
              <li>
                <a href="#skills" className="text-gray-400 hover:text-primary transition-colors">Skills</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-primary transition-colors">Contact</a>
              </li>
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="text-gray-400">
                 Vanguru Pradeep
              </li>
              <li>
                <a href="mailto:vangurupradeep123@gmail.com" className="text-gray-400 hover:text-primary transition-colors">
                  vangurupradeep123@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+15551234567" className="text-gray-400 hover:text-primary transition-colors">
                  +91 7386385309
                </a>
              </li>
            </ul>
          </motion.div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-500 text-sm flex items-center justify-center">
            Made with <Heart className="h-4 w-4 text-red-500 mx-1" /> by Vanguru Pradeep
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

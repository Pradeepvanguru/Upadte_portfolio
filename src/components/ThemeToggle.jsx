
import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ThemeToggle = ({ theme, toggleTheme }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      whileHover={{ scale: 1.05 }}
    >
      <Button
        onClick={toggleTheme}
        variant="outline"
        size="icon"
        className="rounded-full w-12 h-12 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm shadow-lg border-2 border-gray-200 dark:border-gray-700"
        aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      >
        <motion.div
          initial={false}
          animate={{ rotate: theme === 'dark' ? 0 : 180 }}
          transition={{ duration: 0.5, type: 'spring' }}
        >
          {theme === 'light' ? (
            <Moon className="h-5 w-5 text-gray-700" />
          ) : (
            <Sun className="h-5 w-5 text-yellow-300" />
          )}
        </motion.div>
      </Button>
    </motion.div>
  );
};

export default ThemeToggle;

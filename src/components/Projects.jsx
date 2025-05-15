
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import main1 from './assets/main-1.png';
import main2 from './assets/main-2.png';
import main3 from './assets/main-3.png';
import clone from './assets/clone.png';
import recipe from './assets/recipe.png';
import Book from './assets/Book_summrization.png';


const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const projects = [
    {
      id: 1,
      title: 'WORKLOAD MANAGEMENT AND SUBSTITUTION SYSTEM FOR FACULTIES',
      description: 'A faculty-friendly application that notifies eligible faculty members by email when a substitute is needed, following a First-ComeFirst-Serve (FCFS) approach. Key features include an easy-to-apply process, expiration handling, time limits, authentication,automated email notifications using Nodemailer, and a responsive user interface.',
      image: main1,
      category: 'Live Projects',
      technologies: ['React Js', 'Node.js', 'MongoDB', 'Express Js','GitHub','Vercil','Render'],
      demoLink: 'https://main-project-omega-coral.vercel.app/',
      codeLink: 'https://github.com/Pradeepvanguru/Main_project.git',
    },
    {
      id: 2,
      title: 'COLLABORATIVE WORKFLOW MANAGEMENT AND TASK ALLOCATION.',
      description: 'This Project involves creating systems that help manage tasks and workflows collaboratively,Tracks daily task progress within projects, enabling team leaders to assign tasks and teammates to complete them within Time.Reduces the need for frequent meetings,allowing leaders to monitor progress directly via the application.',
      image: main2,
      category: 'Live Projects',
      technologies: ['Role-Based','Authentication','React Js', 'Node.js', 'MongoDB', 'Express Js','GitHub','Vercil','Render'],
      demoLink: 'https://venu-online.vercel.app/',
      codeLink: 'https://github.com/Pradeepvanguru/Venu_monitoring.git',
    },
    {
      id: 3,
      title: 'AUTOMATED SMART JOB APPLICATION SYSTEM',
      description: 'An automated system that personalizes and sends job applications with resumes to HR contacts, streamlining the job search process for seekers. It is user-friendly and highly efficient, ensuring a seamless and professional application experience.',
      image: main3,
      category: 'GitHub Projects',
      technologies: ['React', 'Tailwind CSS','Node.js', 'MongoDB', 'Express Js','GitHub','Vercil','Render'],
      demoLink: '#',
      codeLink: 'https://github.com/Pradeepvanguru/Smart_job_portal.git',
    },
    {
      id: 4,
      title: 'Book Summerization Tool ',
      description: 'A user-friendly application that takes the content of books or large text files and generates concise summaries. It helps readers quickly understand the key points, main ideas, and essential information without reading the entire book. Ideal for students, researchers, and busy professionals.',
      image: Book,
      category: 'GitHub Projects',
      technologies: ['React js','MongoDB','Node.js','JavaScript','Express Js','GitHub','Vercil','Render'],
      demoLink: '#',
      codeLink: 'https://github.com/Pradeepvanguru/BookSummarize.git',
    },
    {
      id: 5,
      title: 'Canvass Clone',
      description: 'A web-based clone of the Canvass learning platform that replicates core features such as course management, assignment uploads, grading system, announcements, and user authentication. Designed for students and instructors to manage academic content efficiently in a digital classroom environment.',
      image: clone,
      category: 'GitHub Projects',
      technologies: ['React DND', 'React js', 'GitHub', 'HTML', 'CSS', 'JavaScript',],
      demoLink: '#',
      codeLink: 'https://github.com/Pradeepvanguru/Techforce.git',
    },
    {
      id: 6,
      title: 'Recipe Finder',
      description: 'A smart web application that helps users discover recipes based on available ingredients. Users can input ingredients they have, and the app suggests matching recipes with step-by-step instructions. Ideal for quick meal planning and reducing food waste.',
      image: recipe,
      category: 'GitHub Projects',
      technologies: ['React.js', 'Bootstrap', 'HTML', 'CSS', 'JavaScript', 'GitHub'],
      demoLink: '#',
      codeLink: 'https://github.com/Pradeepvanguru/Resturant-Application.git',
    },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Explore my recent work and projects that showcase my skills and expertise in web and mobile development.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {['all', 'Live Projects','GitHub Projects'].map((filter) => (
            <Button
              key={filter}
              variant={activeFilter === filter ? 'default' : 'outline'}
              onClick={() => setActiveFilter(filter)}
              className="capitalize"
            >
              {filter}
            </Button>
          ))}
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="project-card bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg border border-gray-100 dark:border-gray-700"
            >
              <div className="relative h-56 overflow-hidden">
                <img alt={project.title} className="w-full h-full object-cover" src={project.image} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 w-full">
                    <div className="flex justify-between items-center">
                      {project.demoLink !== '#' && (
                        <a 
                          href={project.demoLink} 
                          className="text-white hover:text-primary transition-colors flex items-center gap-1 text-sm"
                        >
                          <ExternalLink size={16} />
                          <span>Live Demo</span>
                        </a>
                      )}
                      <a 
                        href={project.codeLink} 
                        className="text-white hover:text-primary transition-colors flex items-center gap-1 text-sm"
                      >
                        <Github size={16} />
                        <span>Source Code</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index} 
                      className="px-3 py-1 text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {project.demoLink !== '#' && (
                  <a 
                    href={project.demoLink} 
                    className="inline-flex items-center text-primary hover:text-primary/80 font-medium"
                  >
                    <span>View Project</span>
                    <ArrowRight size={16} className="ml-1" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;

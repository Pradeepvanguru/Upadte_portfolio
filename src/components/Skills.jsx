
import React from 'react';
import { motion } from 'framer-motion';
import { Code, Palette, Database, Server, Globe, Smartphone, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Java from './assets/Java fullstack.pdf';
import Fullstack  from './assets/Website Design and Development Internship - Internship.pdf';

const Skills = () => {
  const skillCategories = [
    {
      id: 'frontend',
      title: 'Frontend Development',
      icon: <Code className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
      skills: ['HTML5', 'CSS3', 'JavaScript',  'React js', 'Next.js', 'Tailwind CSS', 'Redux']
    },
    // {
    //   id: 'design',
    //   title: 'UI/UX Design',
    //   icon: <Palette className="w-6 h-6 text-purple-600 dark:text-purple-400" />,
    //   skills: ['Figma', 'Wireframing', 'Prototyping', 'User Research', 'Accessibility', 'Design Systems']
    // },
    {
      id: 'backend',
      title: 'Backend Development',
      icon: <Server className="w-6 h-6 text-green-600 dark:text-green-400" />,
      skills: ['Node.js', 'Express', 'Python', 'PHP', 'Laravel', 'RESTful APIs', 'Authentication']
    },
    {
      id: 'database',
      title: 'Database',
      icon: <Database className="w-6 h-6 text-amber-600 dark:text-amber-400" />,
      skills: ['MongoDB', 'MySQL',  'Firebase']
    },
    {
      id: 'mobile',
      title: 'Certifications',
      icon: <Smartphone className="w-6 h-6 text-red-600 dark:text-red-400" />,
      skills: ['Programming in Python', 'Core Java', 'AWS Cloud Practitioner Essentials','Web Designing and Development, Internship', 'Fullstack Development.']
    },
    {
      id: 'other',
      title: 'Other Skills',
      icon: <Globe className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />,
      skills: ['Git', 'GitHub', 'CI/CD', 'Jenkins', 'AWS EC2', 'Netlify', 'Vercel', 'Testing', 'SEO', 'Performance Optimization','Render',"AWS S3"]
    }
  ];

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
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A comprehensive overview of my technical skills and areas of expertise in web and mobile development.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.id}
              variants={itemVariants}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-lg bg-gray-100 dark:bg-gray-700 flex items-center justify-center mr-4">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2 mt-4">
                {category.skills.map((skill, index) => (
                  <motion.span
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className="skill-pill px-3 py-1.5 text-sm font-medium bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold mb-6">Internship Experience</h3>
          
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200 dark:bg-gray-700"></div>
              
              {/* Timeline items */}
              <div className="space-y-12">
                <TimelineItem 
                  year="Dec 2024 - April 2025"
                  title="JAVA FullStack Web Design and Development"
                  company="company : Pixelwind pvt.ltd,Visakhapatnam" 
                  certificate={Java}
                  description="Contributed to full-stack web development projects like Collaborative Workflow Management and Task Allocation,
                  focusing on building a collaborative, user-friendly, secure, and responsive application.
                  Built collaborative task management systems with contributions to both frontend and backend development during the
                  internship.
                  Gained hands-on experience in full-stack development using React.js, Node.js, Express.js, and MongoDB, while working
                  on real-time projects and enhancing web design skills"
                  
                  index={0}
                />
                
                <TimelineItem 
                  year=" 1st February, 2024 to 7th March, 2024"
                  title="Website Design and Development"
                  company="Internship Studio (Virtual Internship)"
                  certificate={Fullstack}
                  description="• Developed several web projects, including an Automated Smart Job Application System designed to assist job seekers.
                  Contributed to full-stack web development project both frontend and backend operations, focusing on building a
                  collaborative, user-friendly, secure, and responsive application.
                  Worked across the full stack using React.js, Node.js, Express.js, MongoDB, HTML, CSS, and JavaScript."
                  index={1}
                />
                
                {/* <TimelineItem 
                  year="2018 - 2019"
                  title="SCHOOL"
                  company="CGPA:9.8"
                  // description="Collaborated with a small team to build and maintain web applications, gaining experience in full-stack development and agile methodologies."
                  index={2}
                /> */}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const TimelineItem = ({ year, title, company, description, index, certificate }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative"
    >
      {/* Timeline dot */}
      <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-primary border-4 border-white dark:border-gray-800 z-10"></div>
      
      {/* Content */}
      <div className={`w-6/12 ${index % 2 === 0 ? 'ml-auto pl-8' : 'mr-auto pr-8 text-right'}`}>
        <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-md border border-gray-100 dark:border-gray-700">
          <span className="inline-block px-3 py-1 text-sm font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full mb-2">
            {year}
          </span>
          <h4 className="text-lg font-bold">{title}</h4>
          <p className="text-gray-600 dark:text-gray-400 text-sm mb-1">{company}</p>
          <p className="text-gray-600 dark:text-gray-400 text-sm">{description}</p>
          <Button variant="outline" size="lg" className="shadow-lg hover-lift mt-4">
            <a href={certificate} target="_blank" rel="noopener noreferrer">
              View <Download className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;

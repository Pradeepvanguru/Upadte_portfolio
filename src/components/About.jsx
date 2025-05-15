
import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Briefcase, GraduationCap } from 'lucide-react';
import profile from './assets/pic2.jpg';


const About = () => {
  const fadeInUpVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      }
    })
  };

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Get to know me better - my background, experience, and what drives me as a professional.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
              <img  alt="About me image" className="w-full h-30" src={profile} />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -left-6 w-64 h-64 bg-primary/10 rounded-full -z-10"></div>
            <div className="absolute -top-6 -right-6 w-40 h-40 bg-secondary/20 rounded-full -z-10"></div>
          </motion.div>

          <div className="space-y-8">
            <motion.div 
              custom={0}
              variants={fadeInUpVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-4">Who am I?</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                I'm a passionate web developer with expertise in creating beautiful, functional, and user-centered digital experiences. With a background in both design and development, I bring a unique perspective to every project.
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or enjoying outdoor activities to recharge my creative energy.
              </p>
            </motion.div>

            <motion.div 
              custom={1}
              variants={fadeInUpVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-sm text-gray-500 dark:text-gray-400">Date of Birth</h4>
                  <p className="font-medium">Sep 29, 2004</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <h4 className="text-sm text-gray-500 dark:text-gray-400">Location</h4>
                  <p className="font-medium">Vijayawada, INDIA</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                  <Briefcase className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
                <div>
                  <h4 className="text-sm text-gray-500 dark:text-gray-400">Experience</h4>
                  <p className="font-medium">Fresher</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-amber-600 dark:text-amber-400" />
                </div>
                <div>
                  <h4 className="text-sm text-gray-500 dark:text-gray-400">Degree</h4>
                  <p className="font-medium">BTech ,Information Technology</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              custom={2}
              variants={fadeInUpVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-4">My Approach</h3>
              <p className="text-gray-600 dark:text-gray-400">
                I believe in creating solutions that not only look great but also solve real problems. My development process focuses on clean code, performance optimization, and creating intuitive user experiences that delight users.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

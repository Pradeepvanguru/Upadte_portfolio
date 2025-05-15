import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import python from './assets/python.pdf';
import fullstack from './assets/fullstack.pdf'
import Corejava from './assets/Coursera  core java.pdf'
import aws from './assets/AWS Cloud Practitioner Essentials.pdf'
import devops from './assets/Devops.pdf'

const Certification = () => {
  const certifications = [
    {
      id: 1,
      courseName: "Programming in Python",
      platform: "Coursera",
      certificateLink: python,
      issueDate: "2023"
    },
    {
      id: 2,
      courseName: "Core Java",
      platform: "Coursera",
      certificateLink: Corejava,
      issueDate: "2023"
    },
    {
      id: 3,
      courseName: "AWS Cloud Practitioner Essentials",
      platform: "AWS",
      certificateLink: aws,
      issueDate: "2024"
    },
    {
      id: 4,
      courseName: "Web Designing and Development",
      platform: "AIIP",
      certificateLink: fullstack,
      issueDate: "2024"
    },
    {
      id: 5,
      courseName: "DevOps Basics for Everyone",
      platform: "IBM/Edx",
      certificateLink: devops,
      issueDate: "2024"
    },
    {
        id: 6,
        courseName: "Analyzing and Visualizing Datawith Power BI",
        platform: "Davidson College/Edx",
        certificateLink: devops,
        issueDate: "2024"
      }
  ];

  return (
    <section id="certifications" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Certifications</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Professional certifications and achievements that demonstrate my expertise and continuous learning.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-shadow"
            >
              <div className="flex flex-col h-full">
                <div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-100">{cert.courseName}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-2">
                    <span className="font-medium">Platform:</span> {cert.platform}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    <span className="font-medium">Issued:</span> {cert.issueDate}
                  </p>
                </div>
                
                <div className="mt-auto">
                  {cert.certificateLink !== "#" && (
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="w-full hover:bg-primary hover:text-white transition-colors"
                      asChild
                    >
                      <a 
                        href={cert.certificateLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2"
                      >
                        View Certificate
                        <ExternalLink size={16} />
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certification;
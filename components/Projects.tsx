'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FaArrowUpRightFromSquare } from 'react-icons/fa6';
import { FaGithub } from 'react-icons/fa6';

const projects = [
  {
    title: 'Automated Testing Framework for Web Applications',
    description: 'Designed and implemented an automation framework using Java, Selenium, and TestNG, enhancing test coverage by 40% and reducing regression testing time by 60% through CI/CD integration.',
    image: '/images/projects/Network_Test_Automation.jpg',
    tech: ['Java', 'Selenium', 'TestNG', 'CI/CD'],
    demo: '#',
    github: '#'
  },
  {
    title: 'Selenium & Java Automated Testing',
    description: 'Developed and implemented automated test scripts using Selenium WebDriver and Java, ensuring efficient testing and cross-browser compatibility.',
    image: '/images/projects/playwright-test-automation-min.jpg',
    tech: ['Selenium', 'Java', 'JUnit', 'Maven'],
    demo: '#',
    github: '#'
  },
  {
    title: 'WebDriverIO UI Automation',
    description: 'Created a comprehensive UI automation suite using WebDriverIO and Node.js for JavaScript-based applications with robust reporting and parallel test execution.',
    image: '/images/projects/Network_Test_Automation3.jpg',
    tech: ['WebDriverIO', 'Node.js', 'JavaScript', 'Mocha'],
    demo: '#',
    github: '#'
  }
];

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % projects.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="projects" className="py-20 relative overflow-hidden projects-section">
      {/* Digital Grid Background */}
      <div className="absolute inset-0 z-0 projects-grid-bg"></div>
      
      {/* Glowing Orbs */}
      {[...Array(5)].map((_, i) => (
        <div 
          key={i}
          className="absolute rounded-full projects-orb"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${Math.random() * 120 + 80}px`,
            height: `${Math.random() * 120 + 80}px`,
            animationDelay: `${Math.random() * 5}s`,
            opacity: 0.2 + Math.random() * 0.1
          }}
        ></div>
      ))}
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-3 py-1 text-sm font-semibold text-green-700 dark:text-green-400 bg-green-100 dark:bg-green-900/30 rounded-full mb-3">
            Portfolio
          </span>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 section-title projects-title">My Projects</h2>
          <p className="text-lg text-gray-600 dark:text-dark-text section-text max-w-2xl mx-auto">
            Here are some of my key testing projects that demonstrate my expertise in quality assurance and test automation.
          </p>
        </motion.div>

        {/* Featured Project Carousel */}
        <div className="mb-12 projects-carousel-container backdrop-blur-sm">
          <div className="relative h-[500px] w-full rounded-xl overflow-hidden shadow-2xl projects-carousel">
            {projects.map((project, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: idx === activeIndex ? 1 : 0,
                  zIndex: idx === activeIndex ? 10 : 0
                }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent z-10" />
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.onerror = null; // Prevent infinite loops
                    console.error(`Error loading image: ${project.image}`);
                  }}
                />
                <div className="absolute bottom-0 left-0 right-0 p-8 z-20 text-white project-info">
                  <h3 className="text-3xl font-bold mb-4 project-title">{project.title}</h3>
                  <p className="text-gray-200 mb-6 max-w-3xl project-description">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-green-600/50 text-white rounded-full text-sm project-tech"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    {project.demo !== '#' && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors project-btn"
                      >
                        <span>Live Demo</span>
                        <FaArrowUpRightFromSquare />
                      </a>
                    )}
                    {project.github !== '#' && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-gray-800/80 hover:bg-gray-700/80 text-white px-4 py-2 rounded-lg transition-colors backdrop-blur-sm project-btn-alt"
                      >
                        <span>View Code</span>
                        <FaGithub />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="flex justify-center mt-6 gap-3">
            {projects.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  idx === activeIndex 
                    ? 'bg-green-500 scale-125 shadow-glow-green' 
                    : 'bg-gray-300 dark:bg-gray-600 opacity-50 hover:opacity-80'
                }`}
                aria-label={`Go to project ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 
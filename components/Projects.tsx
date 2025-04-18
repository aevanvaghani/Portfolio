'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { FaArrowUpRightFromSquare } from 'react-icons/fa6';
import { FaGithub } from 'react-icons/fa6';

const projects = [
  {
    title: 'Automated Testing Framework for Web Applications',
    description: 'Designed and implemented an automation framework using Java, Selenium, and TestNG, enhancing test coverage by 40% and reducing regression testing time by 60% through CI/CD integration.',
    image: '/images/projects/automation-framework.jpg',
    tech: ['Java', 'Selenium', 'TestNG', 'CI/CD'],
    demo: '#',
    github: '#'
  },
  {
    title: 'Selenium & Java Automated Testing',
    description: 'Developed and implemented automated test scripts using Selenium WebDriver and Java, ensuring efficient testing and cross-browser compatibility.',
    image: '/images/projects/selenium-java.jpg',
    tech: ['Selenium', 'Java', 'JUnit', 'Maven'],
    demo: '#',
    github: '#'
  },
  {
    title: 'WebDriverIO UI Automation',
    description: 'Created a comprehensive UI automation suite using WebDriverIO and Node.js for JavaScript-based applications with robust reporting and parallel test execution.',
    image: '/images/projects/webdriverio.jpg',
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
    <section id="projects" className="py-20 dark:bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 section-title">My Projects</h2>
          <p className="text-lg text-gray-600 dark:text-dark-text section-text max-w-2xl mx-auto">
            Here are some of my key testing projects that demonstrate my expertise in quality assurance and test automation.
          </p>
        </motion.div>

        {/* Featured Project Carousel */}
        <div className="mb-20">
          <div className="relative h-[500px] w-full rounded-xl overflow-hidden shadow-2xl">
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
                <Image 
                  src={project.image} 
                  alt={project.title}
                  fill 
                  className="object-cover"
                  priority={idx === 0}
                />
                <div className="absolute bottom-0 left-0 right-0 p-8 z-20 text-white">
                  <h3 className="text-3xl font-bold mb-4">{project.title}</h3>
                  <p className="text-gray-200 mb-6 max-w-3xl">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-blue-600/80 text-white rounded-full text-sm"
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
                        className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
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
                        className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-lg transition-colors"
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
          <div className="flex justify-center mt-4 gap-2">
            {projects.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  idx === activeIndex ? 'bg-blue-600' : 'bg-gray-300 dark:bg-gray-600'
                }`}
              />
            ))}
          </div>
        </div>

        {/* All Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-dark-200 rounded-lg overflow-hidden shadow-lg dark:shadow-dark card hover:shadow-xl transition-shadow"
            >
              <div className="relative h-56">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 card-title">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-dark-text mb-4 line-clamp-3 card-text">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-100 dark:bg-dark-300 text-gray-700 dark:text-dark-text rounded-full text-sm card-tag"
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
                      className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      <span>View Demo</span>
                      <FaArrowUpRightFromSquare size={14} />
                    </a>
                  )}
                  {project.github !== '#' && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:underline"
                    >
                      <span>Code</span>
                      <FaGithub size={14} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 
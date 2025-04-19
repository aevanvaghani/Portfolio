'use client';

import { motion } from 'framer-motion';
import { BsBriefcaseFill } from 'react-icons/bs';
import { FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

const experiences = [
  {
    title: 'QA Automation Engineer',
    company: 'WaveDevs',
    type: 'Full-time',
    period: 'Jan 2025 - Present · 4 mos',
    location: 'On-site',
    description: 'Designed and implemented automated test frameworks for web applications, reducing regression testing time by 60% and improving test coverage.',
    skills: ['Manual Testing', 'WebdriverIO', 'Test Cases', 'JavaScript', 'Mocha (JavaScript Framework)', 'GitHub', 'Jira']
  },
  {
    title: 'QA Intern',
    company: 'TechSolutions',
    type: 'Internship',
    period: 'Jun 2024 - Dec 2024 · 7 mos',
    location: 'Remote',
    description: 'Assisted in manual testing of web applications, created and executed test cases, and learned automation testing fundamentals.',
    skills: ['Manual Testing', 'Test Case Design', 'JIRA', 'Selenium Basics']
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 relative overflow-hidden experience-section">
      {/* Hexagonal pattern background */}
      <div className="absolute inset-0 z-0 hexagon-bg"></div>
      
      {/* Floating particles */}
      <div className="absolute inset-0 z-0">
        {[...Array(20)].map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full experience-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 8 + 2}px`,
              height: `${Math.random() * 8 + 2}px`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 10 + 10}s`
            }}
          ></div>
        ))}
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-3 py-1 text-sm font-semibold text-purple-700 dark:text-purple-400 bg-purple-100 dark:bg-purple-900/30 rounded-full mb-3">
            My Journey
          </span>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 section-title">
            <span className="relative inline-block">
              Professional Experience
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-purple-600"></span>
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-dark-text section-text max-w-2xl mx-auto">
            My journey as a QA Automation Engineer, delivering quality software solutions.
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 timeline-glow"></div>

          {/* Experience items */}
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative mb-16 md:mb-12 ${
                index % 2 === 0 ? 'md:pr-12 md:text-right md:ml-0 md:mr-auto' : 'md:pl-12 md:ml-auto md:mr-0'
              } md:w-1/2 p-6`}
            >
              {/* Timeline dot */}
              <div className="absolute top-6 left-6 md:top-6 md:left-auto md:right-auto md:translate-x-0 md:-translate-y-0 
                            md:ml-0 md:mr-0 md:transform-none
                            md:inset-auto
                            md:mx-0
                            md:my-0
                            md:w-auto
                            md:h-auto
                            flex justify-center items-center w-10 h-10 rounded-full timeline-dot
                            shadow-timeline
                            md:left-auto
                            md:right-auto
                            z-10
                            md:left-1/2 md:-ml-5">
                <BsBriefcaseFill className="text-white" size={20} />
              </div>

              {/* Content */}
              <div className={`bg-white/10 dark:bg-dark-200/40 backdrop-blur-md rounded-lg shadow-lg p-6 ml-12 md:ml-0 ${
                index % 2 === 0 ? 'md:mr-6' : 'md:ml-6'
              } experience-card border border-white/10 text-start`}>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">{exp.title}</h3>
                <div className="text-blue-600 dark:text-blue-400 font-medium mb-2">{exp.company} · {exp.type}</div>

                <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-600 dark:text-gray-400">
                  <div className="flex items-center">
                    <FaCalendarAlt className="mr-2" />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center">
                    <FaMapMarkerAlt className="mr-2" />
                    <span>{exp.location}</span>
                  </div>
                </div>

                <p className="text-gray-700 dark:text-gray-300 mb-4">{exp.description}</p>

                <div className="mt-3">
                  <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Skills:</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 bg-gray-100 dark:bg-dark-300/50 text-gray-700 dark:text-dark-text rounded-full text-sm skill-badge"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 
'use client'

import { motion } from 'framer-motion'

const skills = [
  { name: 'Java', category: 'Programming' },
  { name: 'JavaScript', category: 'Programming' },
  { name: 'Node.js', category: 'Programming' },
  { name: 'Selenium', category: 'Web Automation' },
  { name: 'Cypress', category: 'Web Automation' },
  { name: 'Playwright', category: 'Web Automation' },
  { name: 'WebDriverIO', category: 'Web Automation' },
  { name: 'POSTMAN', category: 'API Automation' },
  { name: 'RestAssured', category: 'API Automation' },
  { name: 'GitHub', category: 'Project Management' },
  { name: 'JIRA', category: 'Project Management' },
]

const education = [
  {
    degree: 'Bachelor of Science in Information Technology',
    institution: 'Shree Swaminarayan College of Computer Science',
    period: '2021 - 2024',
    location: 'Bhavnagar, India'
  },
  {
    degree: 'Software Development Engineer in Test (SDET)',
    institution: 'Q Spider, RR Tower BTM',
    period: '2024 - present',
    location: 'Bangalore, India'
  }
]

const certificates = [
  'WebDriverIO + Node.js - JavaScript UI Automation from Scratch',
  'XPath Tutorial - Master XPath from Basic to Advanced Level',
  'CSS Selector Tutorial - Master CSS Selector from Basic to Advanced',
  'Learn JSONPath - Query Language for JSON'
]

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-dark-100 section-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 section-title">About Me</h2>
          <p className="text-lg text-gray-600 dark:text-dark-text max-w-3xl mx-auto section-text">
            To be a part of a team that actively contributes to the organization's growth and to be a part of a 
            progressive organization where I can put my knowledge and abilities to use.
          </p>
        </motion.div>

        {/* Education Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8 section-title">Education & Training</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 bg-white dark:bg-dark-200 rounded-lg shadow-sm dark:shadow-dark card"
              >
                <h4 className="font-bold text-lg text-gray-900 dark:text-white card-title">{edu.degree}</h4>
                <p className="text-gray-600 dark:text-dark-text card-text">{edu.institution}</p>
                <div className="flex justify-between mt-2 text-sm text-gray-500 dark:text-dark-text-muted">
                  <span>{edu.period}</span>
                  <span>{edu.location}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Skills Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8 section-title">Skills & Technologies</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-4 bg-white dark:bg-dark-200 rounded-lg shadow-sm hover:shadow-md dark:shadow-dark dark:hover:shadow-lg transition-shadow card"
              >
                <div className="text-center">
                  <h4 className="font-medium text-gray-900 dark:text-white card-title">{skill.name}</h4>
                  <p className="text-sm text-gray-500 dark:text-dark-text-muted">{skill.category}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certificates Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8 section-title">Certifications</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {certificates.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-4 bg-white dark:bg-dark-200 rounded-lg shadow-sm dark:shadow-dark card"
              >
                <div className="flex items-center">
                  <svg className="h-6 w-6 mr-2 text-green-500 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700 dark:text-dark-text card-text">{cert}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 
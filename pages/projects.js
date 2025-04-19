import Image from 'next/image';
import { useState, useEffect } from 'react';
import Header from '@/components/Header';

const projects = [
  {
    title: 'Automated Testing Framework for Web Applications',
    description: 'Designed and implemented an automation framework using Java, Selenium, and TestNG, enhancing test coverage by 40% and reducing regression testing time by 60% through CI/CD integration.',
    image: '/images/projects/Network_Test_Automation.jpg',
    tech: ['Java', 'Selenium', 'TestNG', 'CI/CD'],
  },
  {
    title: 'Selenium & Java Automated Testing',
    description: 'Developed and implemented automated test scripts using Selenium WebDriver and Java, ensuring efficient testing and cross-browser compatibility.',
    image: '/images/projects/playwright-test-automation-min.jpg',
    tech: ['Selenium', 'Java', 'JUnit', 'Maven'],
  },
  {
    title: 'WebDriverIO UI Automation',
    description: 'Created a comprehensive UI automation suite using WebDriverIO and Node.js for JavaScript-based applications with robust reporting and parallel test execution.',
    image: '/images/projects/webdriverio-automation.jpg',
    tech: ['WebDriverIO', 'Node.js', 'JavaScript', 'Mocha'],
  }
];

export default function ProjectsPage() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % projects.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main>
      <Header />
      <section className="py-20 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-10">My Projects</h2>
          
          <div className="mb-8">
            {/* Manually show all projects as cards to debug image loading */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <div key={index} className="overflow-hidden bg-white rounded-lg shadow-lg">
                  <div className="relative h-56">
                    <img 
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, idx) => (
                        <span key={idx} className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 
"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { fadeIn } from "../utils/motion";

// Skills data with categories and items
const skills = [
  {
    category: "Programming",
    items: ["JavaScript", "Java", "React", "Node.js"]
  },
  {
    category: "Web Automation",
    items: ["Selenium", "Cypress", "Playwright", "WebdriverIO"]
  },
  {
    category: "API Automation",
    items: ["Postman", "RestAssured"]
  },
  {
    category: "Project Management",
    items: ["Agile", "JIRA", "Git", "GitHub", "CI/CD"]
  }
];

// Education data
const education = [
  {
    degree: "Bachelor of Science in Information Technology",
    institution: "Shree Swaminarayan College of Computer Science",
    period: "2021 - 2024",
    location: "Bhavnagar, India"
  },
  {
    degree: "Software Development Engineer in Test (SDET)",
    institution: "Q Spider, RR Tower BTM",
    period: "2024 - present",
    location: "Bengaluru, India"
  }
];

// Certificates data
const certificates = [
  {
    name: "WebDriverIO + Node.js - JavaScript UI Automation from Scratch",
    issuer: "Udemy",
    year: "2024"
  },
  {
    name: "XPath Tutorial - Master XPath from Basic to Advanced Level",
    issuer: "RCV Academy and Software Testing Mentor",
    year: "2024"
  },
  {
    name: "Software Development Engineer in Test (SDET)",
    issuer: "Q Spider",
    year: "2024-2025"
  }
];

const About = () => {
  return (
    <section id="about" className="relative overflow-hidden bg-[#080a15] py-20 isolate">
      {/* Grid Background */}
      <div className="absolute inset-0 about-grid-bg opacity-40 z-0"></div>
      
      {/* Glowing orbs */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
        className="absolute top-1/4 left-1/4 w-64 h-64 about-orb -z-10"
      />
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ duration: 3, delay: 0.5, repeat: Infinity, repeatType: "reverse" }}
        className="absolute bottom-1/4 right-1/4 w-96 h-96 about-orb -z-10"
      />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          variants={fadeIn("up", "tween", 0.1, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="flex flex-col items-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6 about-title">About Me</h2>
          <div className="w-full max-w-3xl text-center">
            <motion.p 
              variants={fadeIn("up", "tween", 0.2, 1)}
              className="text-gray-300 text-lg leading-relaxed mb-8"
            >
              To be a part of a team that actively contributes to the organization's growth and to be a part of a progressive organization where I can put my knowledge and abilities to use.
            </motion.p>
            <motion.p 
              variants={fadeIn("up", "tween", 0.3, 1)}
              className="text-gray-300 text-lg leading-relaxed"
            >
              Passionate about contributing to organizational success through continuous learning, innovation, and the effective application of my skills.
            </motion.p>
          </div>
        </motion.div>

        {/* Education and Skills in two columns on larger screens */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* Education Section */}
          <motion.div
            variants={fadeIn("right", "tween", 0.2, 1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="bg-[#0c101d] p-8 rounded-xl border border-[#08d9d6]/30 shadow-glow-green"
          >
            <h3 className="text-2xl font-bold mb-6 about-subtitle">Education & Training</h3>
            <div className="space-y-6">
              {education.map((item, index) => (
                <motion.div 
                  key={index}
                  variants={fadeIn("up", "tween", 0.1 * index, 0.5)}
                  className="relative pl-6 border-l-2 border-[#08d9d6] pb-4"
                >
                  <span className="absolute -left-[5px] top-0 w-2 h-2 rounded-full bg-[#08d9d6] shadow-glow-green"></span>
                  <h4 className="text-xl font-semibold text-white">{item.degree}</h4>
                  <p className="text-[#08d9d6]">{item.institution}</p>
                  <div className="flex justify-between text-gray-400 mt-1">
                    <span>{item.period}</span>
                    <span>{item.location}</span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Certificates */}
            <h3 className="text-2xl font-bold mt-10 mb-6 about-subtitle">Certificates</h3>
            <div className="space-y-4">
              {certificates.map((cert, index) => (
                <motion.div 
                  key={index}
                  variants={fadeIn("up", "tween", 0.1 * index, 0.5)}
                  className="flex items-center p-4 bg-[#0d1526] rounded-lg border border-[#08d9d6]/20 hover:border-[#08d9d6]/50 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-full bg-[#08d9d6]/20 flex items-center justify-center mr-4">
                    <span className="text-[#08d9d6]">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">{cert.name}</h4>
                    <p className="text-sm text-gray-400">{cert.issuer} • {cert.year}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Skills Section */}
          <motion.div
            variants={fadeIn("left", "tween", 0.2, 1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="bg-[#0c101d] p-8 rounded-xl border border-[#08d9d6]/30 shadow-glow-green"
          >
            <h3 className="text-2xl font-bold mb-6 about-subtitle">Skills</h3>
            <div className="space-y-8">
              {skills.map((skillGroup, groupIndex) => (
                <motion.div
                  key={groupIndex}
                  variants={fadeIn("up", "tween", 0.1 * groupIndex, 0.5)}
                >
                  <h4 className="text-xl font-semibold mb-4 text-[#08d9d6]">{skillGroup.category}</h4>
                  <div className="flex flex-wrap gap-3">
                    {skillGroup.items.map((skill, index) => (
                      <motion.span
                        key={index}
                        variants={{
                          hidden: { opacity: 0, y: 20 },
                          show: { 
                            opacity: 1, 
                            y: 0,
                            transition: { 
                              delay: 0.05 * index,
                              duration: 0.5
                            }
                          }
                        }}
                        className="px-4 py-2 bg-[#0d1526] text-[#08d9d6] rounded-full border border-[#08d9d6]/30 hover:bg-[#08d9d6]/20 transition-all duration-300"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Add a profile image or illustration */}
            <motion.div 
              variants={fadeIn("up", "tween", 0.5, 1)}
              className="mt-10 flex justify-center"
            >
              <div className="relative w-48 h-48 rounded-full p-1 bg-gradient-to-r from-[#08d9d6] to-[#52ffcf] shadow-glow-green">
                <div className="w-full h-full rounded-full overflow-hidden">
                  <Image 
                    src="/images/profile.jpg" 
                    alt="Profile" 
                    width={200} 
                    height={200}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      // Fallback if image doesn't load
                      e.currentTarget.src = "https://via.placeholder.com/200?text=Profile";
                    }}
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 
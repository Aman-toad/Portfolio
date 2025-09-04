"use client"

import js from '../Assets/badges/js.svg'
import api from '../Assets/badges/api.png'
import Bootstrap from '../Assets/badges/bootstrap.svg'
import cpp from '../Assets/badges/cpp.svg'
import express from '../Assets/badges/express.svg'
import git from '../Assets/badges/git.svg'
import mongodb from '../Assets/badges/mongodb.png'
import mysql from '../Assets/badges/mysql.png'
import next from '../Assets/badges/next.svg'
import nodejs from '../Assets/badges/nodejs.svg'
import php from '../Assets/badges/php.png'
import python from '../Assets/badges/python.svg'
import react from '../Assets/badges/react.png'
import tailwindcss from '../Assets/badges/tailwindcss.svg'
import vscode from '../Assets/badges/vscode.svg'
import wordpress from '../Assets/badges/wordpress.svg'

import { motion } from "framer-motion"

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Stack",
      skills: [
        { name: "JavaScript", icon: js, color: "from-yellow-400 to-yellow-600" },
        { name: "React", icon: react, color: "from-cyan-400 to-blue-500" },
        { name: "Next.js", icon: next, color: "from-gray-700 to-gray-900" },
        { name: "Tailwind CSS", icon: tailwindcss, color: "from-teal-400 to-cyan-500" },
        { name: "Bootstrap", icon: Bootstrap, color: "from-purple-500 to-indigo-600" },
      ],
    },
    {
      title: "Backend Stack",
      skills: [
        { name: "Node.js", icon: nodejs, color: "from-green-500 to-green-700" },
        { name: "Express.js", icon: express, color: "from-gray-600 to-gray-800" },
        { name: "PHP", icon: php, color: "from-indigo-500 to-indigo-700" },
        { name: "MongoDB", icon: mongodb, color: "from-green-600 to-green-700" },
        { name: "MySQL", icon: mysql, color: "from-blue-500 to-blue-700" },
      ],
    },
    {
      title: "Tools & Others",
      skills: [
        { name: "Git & GitHub", icon: git, color: "from-gray-700 to-gray-900" },
        { name: "WordPress", icon: wordpress, color: "from-blue-600 to-blue-800" },
        { name: "VS Code", icon: vscode, color: "from-blue-400 to-indigo-500" },
        { name: "Python", icon:python, color: "from-yellow-400 to-green-500" },
        { name: "C++", icon: cpp, color: "from-blue-500 to-blue-700" },
        { name: "REST APIs", icon: api, color: "from-indigo-400 to-indigo-600" },
      ],
    },
  ];

  return (
    <section id='skills' className="py-10 md:py-15 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.p
            className="text-primary font-semibold text-lg mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            TECH STACK
          </motion.p>
          <motion.h2
            className="section-title mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            TECHNOLOGIES THAT MAKE<br />
            <span className="gradient-text">DEVELOPMENT</span><br />
            <span className="gradient-text-alt">SEAMLESS</span>
          </motion.h2>
          <motion.p
            className="section-subtitle max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            My toolkit spans the entire development ecosystem. From crafting responsive frontends
            to architecting scalable backends, I work with technologies that deliver results.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/30 hover:border-gray-600/50 transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
            >
              <h3 className="text-2xl font-bold mb-8 text-center">{category.title}</h3>

              <div className="flex flex-wrap justify-center gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    className="relative group cursor-pointer w-16 h-16 flex items-center justify-center"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.1 }}
                    transition={{
                      duration: 0.6,
                      delay: categoryIndex * 0.2 + skillIndex * 0.1,
                      type: "spring",
                      stiffness: 300,
                    }}
                  >
                    {/* Glow background */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${skill.color} rounded-xl blur-md opacity-60 group-hover:opacity-80 transition-opacity duration-300`}
                    />

                    {/* Badge itself */}
                    <div className="relative bg-gray-800 backdrop-blur-sm rounded-xl w-16 h-16 flex items-center justify-center border border-gray-600/30 hover:border-gray-500/50 transition-all duration-300">
                      <span className="text-3xl filter drop-shadow-lg text-white">
                        <img src={skill.icon} alt="badge" />
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>


        {/* Featured Projects Preview */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className="text-3xl font-bold mb-6">Ready to see these skills in action?</h3>
          <a href="#projects">
            <motion.button
              className="btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore My Projects
            </motion.button>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
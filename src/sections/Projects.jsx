import { motion } from 'framer-motion';
import ainotes from '../Assets/projects/ainotes.png'
import solar from '../Assets/projects/solarScope.png'
import fintrack from '../Assets/projects/FinTrack.png'
import xyphora from '../Assets/projects/community.png'

const Projects = () => {

  const projects = [
    {
      id: 1,
      title: "InscribeAI- AI-Notes App",
      category: "Full-Stack",
      description: "A complete AI Notes solution with Next.js for both frontend and backend, and Mongoose database. Features include user authentication, Notes Saving, and real-time AI Suggestions.",
      technologies: ["Next.js", "MongoDB", "ShadCn", "GeminiAPI", "Vercel"],
      image: ainotes,
      liveUrl: "https://inscribeai-rho.vercel.app",
      codeUrl: "https://github.com/Aman-toad/AI-Notes",
      status: "Live",
      highlights: [
        "Real-time AI-powered note suggestions",
        "Secure user authentication",
        "Fast MongoDB queries",
        "Deployed on Vercel for scalability",
      ]
    },
    {
      id: 2,
      title: "Community Hub - Student Portal",
      category: "Full-Stack",
      description: "A collaborative student community platform for sharing resources, posting updates, and connecting with peers. Designed to improve communication and collaboration within college communities.",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
      image: xyphora,
      liveUrl: "https://aman-toad.github.io/Student-community-git/",
      codeUrl: "https://github.com/Aman-toad/Student-community-git",
      status: "In Development",
      highlights: [
        "User authentication and role-based access",
        "Discussion forums and resource sharing",
        "Event posting and notifications",
        "Modern responsive UI with Tailwind CSS",
      ]
    },
    {
      id: 3,
      title: "Space Weather App",
      category: "Frontend",
      description: "A live API-based app that displays solar activity, geomagnetic storms, and space weather data.",
      technologies: ["HTML", "CSS", "JavaScript", "NASA API"],
      image: solar,
      liveUrl: "https://aman-toad.github.io/space-weather-app/",
      codeUrl: "https://github.com/Aman-toad/space-weather-app",
      status: "Live",
      highlights: [
        "Real-time NASA API data",
        "Interactive space weather updates",
        "Mobile-friendly interface",
        "Fast rendering with React",
      ]
    },
    {
      id: 4,
      title: "Finance Tracker App",
      category: "Full-Stack",
      description:
        "A personal finance tracker with income/expense management and data visualization using Chart.js. Built with React and Node.js backend.",
      technologies: ["HTMl", "Chart.js", "CSS", "Javasript", "Local Storage"],
      image: fintrack,
      liveUrl: "https://aman-toad.github.io/Finance-Tracker/",
      codeUrl: "https://github.com/Aman-toad/Finance-Tracker",
      status: "Live",
      highlights: [
        "Interactive pie chart visualization",
        "User-friendly dashboard",
        "Secure data storage",
        "Responsive design",
      ],
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <main className="pt-20">
        <section id='projects' className="py-10 md:py-15 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <motion.p
                className="text-primary font-semibold text-2xl mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                MY WORK
              </motion.p>
              <motion.h2
                className="section-title mb-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                PROJECTS THAT SHOWCASE<br />
                <span className="gradient-text">INNOVATION</span> AND<br />
                <span className="gradient-text-alt">EXCELLENCE</span>
              </motion.h2>
              <motion.p
                className="section-subtitle max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Each project represents a unique challenge solved with creative thinking,
                technical expertise, and attention to detail. Here's a selection of my favorite work.
              </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6">
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 p-6 rounded-xl hover:border-cyan-400/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 bg-gray-800 flex items-center justify-center">
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="w-12 h-12 object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <h3 className="text-xl font-bold text-white truncate">{project.title}</h3>
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-semibold flex-shrink-0 ${project.status === "Live"
                            ? "bg-green-500/20 text-green-400 border border-green-500/30"
                            : "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30"
                            }`}
                        >
                          {project.status}
                        </span>
                      </div>
                      <span className="text-cyan-400 text-sm font-semibold">{project.category}</span>
                    </div>
                  </div>

                  <p className="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3">{project.description}</p>

                  <div className="mb-6">
                    <h4 className="text-white font-semibold text-sm mb-3">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <motion.span
                          key={tech}
                          className="px-3 py-1 bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 rounded-full text-xs font-medium hover:bg-cyan-500/20 transition-colors"
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: techIndex * 0.05 }}
                          whileHover={{ scale: 1.05 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <motion.a
                      target='_blank'
                      href={project.liveUrl}
                      className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 rounded-lg font-semibold text-sm text-center hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      View Live
                    </motion.a>
                    <motion.a
                      target='_blank'
                      href={project.codeUrl}
                      className="flex-1 bg-gray-800 border border-gray-700 text-gray-300 px-4 py-2 rounded-lg font-semibold text-sm text-center hover:bg-gray-700 hover:border-gray-600 transition-all duration-300"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      View Code
                    </motion.a>
                  </div>
                </motion.div>
              ))}

              
            </div><motion.p
                className="text-center text-primary font-semibold text-2xl mt-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <a href="https://github.com/Aman-toad" target="_blank" className="underline hover:text-cyan-400 transition-colors">
                  VIEW MORE &#x21a6;
                </a>
              </motion.p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Projects;
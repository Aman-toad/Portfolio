"use client"
import { Routes, Route, Link } from "react-router-dom";
import ContactForm from "./contact";
import './App.css'
import { Menu, Code, Briefcase, User, Home, Computer, Phone, Smartphone, Zap, ChartColumnIncreasing, Database, TwitterIcon, LinkedinIcon, InstagramIcon, MapPin, Mail, Sun, Moon, Download, Eye, Github, } from "lucide-react"
import { useEffect, useState } from "react";

import profile from './Assets/profile.jpg';
import DistImage from './Assets/distance-img.jpg';
import anisphere from './Assets/anisphere.png';
import finance from './Assets/FinTrack.png';
import space from './Assets/SolarScope.png';
import community from './Assets/community.png'


export default function Portfolio() {
  const storedTheme = localStorage.getItem("theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const initialTheme = storedTheme ? storedTheme === "dark" : prefersDark;

  const [darkMode, setDarkmode] = useState(initialTheme);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle("dark");
    setDarkmode(!darkMode);
  };

  return (
    <>
      <Routes>
        {/* <Route path="/" element={<Portfolio />} /> */}
        <Route path="/contact" element={<ContactForm />} />
      </Routes>

      <div className="min-h-screen bg-white dark:bg-gray-900 md:pl-4 md:pr-4 lg:pl-4 lg:pr-4">
        {/* Navigation */}
        <nav className="sticky top-0 z-10 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex-shrink-0 font-bold text-xl text-gray-900 dark:text-white">
                <span className="text-primary text-3xl text-sky-500">Portfolio</span>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden md:block">
                <div className="flex items-center space-x-4">
                  <a
                    href="#home"
                    className="px-3 py-2 rounded-md text-sm font-medium text-gray-900 dark:text-white hover:text-primary dark:hover:text-primary flex items-center gap-1 transition-transform duration-300 ease-in-out hover:scale-110 hover:bg-sky-400"
                  >
                    <Home className="h-4 w-4" />
                    Home
                  </a>
                  <a
                    href="#about"
                    className="px-3 py-2 rounded-md text-sm font-medium text-gray-900 dark:text-white hover:text-primary dark:hover:text-primary flex items-center gap-1 transition-transform duration-300 ease-in-out hover:scale-110 hover:bg-sky-400"
                  >
                    <User className="h-4 w-4" />
                    About
                  </a>
                  <a
                    href="#projects"
                    className="px-3 py-2 rounded-md text-sm font-medium text-gray-900 dark:text-white hover:text-primary dark:hover:text-primary flex items-center gap-1 transition-transform duration-300 ease-in-out hover:scale-110 hover:bg-sky-400"
                  >
                    <Briefcase className="h-4 w-4" />
                    Projects
                  </a>
                  <a
                    href="#services"
                    className="px-3 py-2 rounded-md text-sm font-medium text-gray-900 dark:text-white hover:text-primary dark:hover:text-primary flex items-center gap-1 transition-transform duration-300 ease-in-out hover:scale-110 hover:bg-sky-400"
                  >
                    <Code className="h-4 w-4" />
                    Services
                  </a>
                </div>
              </div>

              {/* Hamburger */}
              <div className="md:hidden flex items-center">
                <button
                  type="button"
                  className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-primary hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none"
                  aria-controls="mobile-menu"
                  aria-expanded="false"
                  onClick={() => {
                    const mobileMenu = document.getElementById("mobile-menu")
                    if (mobileMenu) {
                      if (mobileMenu.classList.contains("hidden")) {
                        mobileMenu.classList.remove("hidden")
                      } else {
                        mobileMenu.classList.add("hidden")
                      }
                    }
                  }}
                >
                  <span className="sr-only">Open main menu</span>
                  <Menu className="block h-6 w-6" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>

          {/* Mobile menu, show/hide based on menu state */}
          <div className="hidden md:hidden" id="mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a
                href="#home"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 dark:text-white hover:text-primary dark:hover:text-primary"
              >
                Home
              </a>
              <a
                href="#about"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 dark:text-white hover:text-primary dark:hover:text-primary"
              >
                About
              </a>
              <a
                href="#projects"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 dark:text-white hover:text-primary dark:hover:text-primary"
              >
                Projects
              </a>
              <a
                href="#services"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 dark:text-white hover:text-primary dark:hover:text-primary"
              >
                Services
              </a>
            </div>
          </div>
        </nav>

        {/* Home Section */}
        <section id="home" className="py-20 md:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-12">
              <div className="left-animation-text md:w-1/2">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                  Hi, I'm <span className="text-primary text-sky-400">Aman</span>
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                  A passionate web developer creating beautiful and functional digital experiences.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="#projects"
                    className="px-6 py-3 bg-primary text-white font-medium rounded-md hover:bg-primary/90 transition-colors hover:bg-gray-700 duration-300"
                  >
                    View My Work
                  </a>
                  <Link
                    to="/contact"
                    className="px-6 py-3 bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white font-medium rounded-md dark:hover:bg-sky-400 transition-colors duration-300 hover:bg-sky-400 "
                  >
                    Contact Me
                  </Link>
                </div>
              </div>
              <div className="right-animation-text md:w-1/2 relative">
                <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-primary mx-auto">
                  <img src={profile}
                    alt="Profile"
                    width={400}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="heading text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">About Me</h2>
              <div className="mt-4 h-1 w-24 bg-primary mx-auto bg-sky-400"></div>
            </div>

            <div className="content-right grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <img
                  src={DistImage}
                  alt="About Me"
                  className="rounded-lg shadow-lg w-90"
                />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Who I Am</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  I'm a passionate web developer with over 1 years of experience creating modern, responsive websites and
                  applications. I specialize in front-end development with expertise in HTML, CSS, JavaScript, and various
                  frameworks.
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  My journey in web development started when I was in 12th Standard, and since then, I've worked on numerous
                  Projects.
                </p>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Name:</h4>
                    <p className="text-gray-600 dark:text-gray-300">Aman Singh</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Email:</h4>
                    <p className="text-gray-600 dark:text-gray-300">amancrafts.dev@gmail.com</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Location:</h4>
                    <p className="text-gray-600 dark:text-gray-300">Delhi, India</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Availability:</h4>
                    <p className="text-gray-600 dark:text-gray-300">Part-Time</p>
                  </div>
                </div>
                <div className="gap-5 flex">
                  <button className="bg-sky-400 p-2 duration-300 ease-in hover:scale-105 transition-transform-colors rounded-xl">
                    <a
                      href="Public/Aman_Resume.pdf"
                      download="Aman_Resume.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-primary text-white font-medium rounded-md hover:bg-primary/90 flex items-center gap-1.5"
                    >
                      <Download className="h-6 w-6" />
                      Download Resume
                    </a>
                  </button>

                  <button className="bg-sky-400 p-2 duration-300 ease-in hover:scale-105 transition-transform-colors rounded-xl">
                    <a
                      href="Public/Aman_Resume.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-primary text-white font-medium rounded-md hover:bg-primary/90 flex items-center gap-1.5"
                    >
                      <Eye className="h-6 w-6" />
                      View Resume
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="heading text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">Latest Projects</h2>
              <div className="mt-4 h-1 w-24 bg-primary mx-auto bg-sky-400"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">           

              {/* Project 1 */}
              <div className="content-up bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105">
                <div className="relative h-60">
                  <img src={space} alt="Project 2" fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Space Weather App</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    A responsive web app that shows live space weather data using NASA's public APIs. It displays real-time info like solar flares, geomagnetic storms, and other space phenomena in a clean, user-friendly interface.It fetches data dynamically and updates the UI with the latest readings. The project highlights my skills in API integration, DOM manipulation.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-sm rounded-full">
                      HTML
                    </span>
                    <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-sm rounded-full">
                      CSS
                    </span>
                    <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-sm rounded-full">
                      JAVASCRIPT
                    </span>
                    <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-sm rounded-full">
                      API INTEGRATION
                    </span>
                  </div>
                  <a href="https://aman-toad.github.io/space-weather-app/" target="_blank" className="text-primary hover:underline font-medium dark:text-white hover:text-sky-400 duration-300 ease-in hover:scale-105 transition-colors">
                    View Project →
                  </a>
                </div>
              </div>

              {/* Project 2 */}
              <div className="content-up bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105">
                <div className="relative h-60">
                  <img src={community} alt="Project 2" fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">College Community</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    A fully responsive platform designed to connect students, share resources, and build a collaborative space within the college.  It includes features like notes sharing, syllabus access, teacher info, login system, and leaderboard. The clean UI and mobile-friendly layout ensure a smooth experience across devices. This project showcases my skills in frontend development, component structuring, and UI/UX design.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-sm rounded-full">
                      REACT
                    </span>
                    <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-sm rounded-full">
                      TAILWINDCSS
                    </span>
                  </div>
                  <a href="https://aman-toad.github.io/Student-community-git/" target="_blank" className="text-primary hover:underline font-medium dark:text-white hover:text-sky-400 duration-300 ease-in hover:scale-105 transition-colors">
                    View Project →
                  </a>
                </div>
              </div>

              {/* Project 3 */}
              <div className="content-left bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105">
                <div className="relative h-60">
                  <img src={finance} alt="Project 3" fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Finance Tracker</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">A clean and interactive web app to track income, expenses, and balance in real-time.It lets users add, delete, and view transactions, while also visualizing expense categories through a pie chart. Features like login simulation, clear all data, and a responsive design make it both functional and user-friendly. This project highlights my skills in data handling, localStorage, DOM manipulation, and data visualization.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-sm rounded-full">
                      HTML
                    </span>
                    <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-sm rounded-full">
                      JAVASCIPT
                    </span>
                    <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-sm rounded-full">
                      CHART.JS
                    </span>
                  </div>
                  <a href="https://aman-toad.github.io/Finance-Tracker/" target="_blank" className="text-primary hover:underline font-medium dark:text-white hover:text-sky-400 duration-300 ease-in hover:scale-105 transition-colors">
                    View Project →
                  </a>
                </div>
              </div>

              {/* Project 4 */}
              <div className="content-right bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105">
                <div className="relative h-60">
                  <img src={anisphere} alt="Project 1" fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Anime Website</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    A fully responsive Anime platform Features with include character details, quizzes, and the latest news in anime
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-sm rounded-full">
                      HTML
                    </span>
                    <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-sm rounded-full">
                      CSS
                    </span>
                    <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-sm rounded-full">
                      JAVASCRIPT
                    </span>
                  </div>
                  <a href="https://aman-toad.github.io/Anime-Website/" target="_blank" className="text-primary hover:underline font-medium dark:text-white hover:text-sky-400 duration-300 ease-in hover:scale-105 transition-colors">
                    View Project →
                  </a>
                </div>
              </div>
            </div>

            <div className="text-center mt-12">
              <a
                href="#"
                className="px-6 py-3 bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white font-medium rounded-md hover:bg-gray-300 dark:hover:bg-gray-700 inline-block hover:text-sky-400 duration-300 ease-in hover:scale-105 transition-transform-colors"
              >
                View All Projects
              </a>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="heading text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">My Services</h2>
              <div className="mt-4 h-1 w-24 bg-primary mx-auto bg-sky-400"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Service 1 */}
              <div className="content-up bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg text-center transition-transform hover:scale-105">
                <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <Code className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Web Development</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Custom website development using modern technologies to create responsive, fast, and user-friendly
                  websites.
                </p>
              </div>

              {/* Service 2 */}
              <div className="content-up bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg text-center transition-transform hover:scale-105">
                <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <Computer className='h-8 w-8 text-white' />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">UI/UX Design</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Creating intuitive user interfaces and experiences that are both aesthetically pleasing and functional.
                </p>
              </div>

              {/* Service 3 */}
              <div className="content-up bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg text-center transition-transform hover:scale-105">
                <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <Smartphone className='h-8 w-8 text-white' />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">WordPress Website Setup & Costomization</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  I can set up and customize WordPress websites using themes, plugins, and page builders. Ideal for blogs, business, or portfolio sites.
                </p>
              </div>

              {/* Service 4 */}
              <div className="content-up bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg text-center transition-transform hover:scale-105">
                <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <Zap className='h-8 w-8 text-white' />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Performance Optimization</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Improving website speed and performance to enhance user experience and search engine rankings.
                </p>
              </div>

              {/* Service 5 */}
              <div className="content-up bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg text-center  transition-transform hover:scale-105">
                <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <ChartColumnIncreasing className='h-8 w-8 text-white' />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">SEO Optimization</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {/* Implementing search engine optimization strategies to improve visibility and organic traffic. */}
                  In Progress....
                </p>
              </div>

              {/* Service 6 */}
              <div className="content-up bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg text-center transition-transform hover:scale-105">
                <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <Database className='h-8 w-8 text-white' />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Database Design</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Creating efficient database structures and implementing data management solutions for web applications.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="md:col-span-2">
                <h3 className="text-xl font-bold mb-4">Portfolio</h3>
                <p className="text-gray-400 mb-4">Creating beautiful digital experiences with modern web technologies.</p>
                <div className="flex space-x-4">
                  {/* <a href="" target="_blank" className="text-gray-400 hover:text-white transition-colors">
                    <TwitterIcon className='h-8 w-8' />
                  </a> */}
                  {/* if twitter in futute  */}
                  <a 
                  href="https://github.com/Aman-toad" 
                  target="_blank"
                  className="text-gray-400 hover:text-white transition-colors">
                    <Github className='h-8 w-8' />
                  </a>
                  <a href="https://www.linkedin.com/in/aman-singh-a00toad/" target="_blank" className="text-gray-400 hover:text-white transition-colors">
                    <span className="sr-only">GitHub</span>
                    <LinkedinIcon className='h-8 w-8' />
                  </a>
                  <a href="https://www.instagram.com/console.log_aman/" target="_blank" className="text-gray-400 hover:text-white transition-colors">
                    <span className="sr-only">LinkedIn</span>
                    <InstagramIcon className='h-8 w-8' />
                  </a>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#home" className="text-gray-400 hover:text-white transition-colors">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="#about" className="text-gray-400 hover:text-white transition-colors">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#projects" className="text-gray-400 hover:text-white transition-colors">
                      Projects
                    </a>
                  </li>
                  <li>
                    <a href="#services" className="text-gray-400 hover:text-white transition-colors">
                      Services
                    </a>
                  </li>
                  <li>
                    <a href="/contact" className="text-gray-400 hover:text-white transition-colors">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
                <ul className="space-y-2 text-gray-400">
                  <li className="flex items-start">
                    <MapPin className='h-8 w-8 pr-1' />
                    <span>Delhi, India</span>
                  </li>
                  <li className="flex items-start">
                    <Mail className='h-8 w-8 pr-1' />
                    <span>amancrafts.dev@gmail.com</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
              <p>&copy; {new Date().getFullYear()} Portfolio. All rights reserved.</p>
            </div>
          </div>
        </footer>

        {/* Dark Mode Toggle */}
        <button
          onClick={toggleDarkMode}
          className="fixed bottom-6 right-6 p-3 bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-full shadow-lg hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
          aria-label="Toggle Dark Mode"
        >
          {darkMode ? <Sun className="h-6 w-6" /> : <Moon className="h-6 w-6" />}
        </button>
      </div>
    </>
  )
}
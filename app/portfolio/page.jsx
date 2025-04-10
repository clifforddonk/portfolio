// pages/index.js
"use client";
import { useState, useEffect } from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import FadeInSection from "@/app/components/FadeInSection";
import NavBar from "../components/NavBar";
import HeroSection from "../components/HeroSection";
import Skillbar from "../components/Skillbar";
import ProjectCard from "../components/ProjectCard";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

export default function Home() {
  const [activeTab, setActiveTab] = useState("all");
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Wait for component to mount to access theme
  useEffect(() => {
    setMounted(true);
  }, []);

  const projects = [
    {
      id: 1,
      title: "Byteblogg",
      description:
        "A dynamic blog platform built for seamless content publishing and user engagement.",
      image: "/byteblogg1.png",
      category: "fullstack",
      technologies: ["Next.js", "SpringBoot", "MongoDB"],
      link: "https://byteblogg.vercel.app/",
      code: "https://github.com/clifforddonk/blogsite_backend",
    },
    {
      id: 2,
      title: "African Youth Festival Portal",
      description:
        "Application portal for the Africa Youth Festival 2025, designed for a smooth and intuitive registration experience.",
      image: "/ayf.png",
      category: "fullstack",
      technologies: ["Next.js", "MongoDB"],
      link: "https://apply.africayouthfest.org/",
      code: "https://github.com/charlesbihdev/ayf-portal",
    },
    {
      id: 3,
      title: "ChoDelivery",
      description:
        "A modern food delivery system offering an efficient and responsive ordering experience.",
      image: "/cho.png",
      category: "frontend",
      technologies: ["Next.js", "Laravel"],
      link: "https://chodelivery.com/",
      code: "https://github.com/charlesbihdev/cho",
    },
    {
      id: 4,
      title: "Mattress Home",
      description:
        "An e-commerce platform tailored for mattress and bedding products, designed to provide a cozy shopping journey.",
      image: "/mh.png",
      category: "fullstack",
      technologies: ["Next.js", "Php"],
      link: "https://mattresshome.netlify.app/",
      code: "https://github.com/charlesbihdev/MATTRESS-HOME",
    },
    {
      id: 5,
      title: "Event-Pulse",
      description:
        "A full-featured event management and ticketing platform with robust backend architecture and user authentication.",
      image: "/event-pulse.png",
      category: "fullstack",
      technologies: ["Express", "MongoDB", "JWT", "Docker"],
      link: "https://event-pulse.com/",
      code: "",
    },
    {
      id: 6,
      title: "Portfolio Website",
      description:
        "A sleek and responsive personal portfolio showcasing my projects, skills, and journey as a developer.",
      image: "/port.png",
      category: "frontend",
      technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
      link: "https://clifforddonk.vercel.app/",
      code: "https://github.com/clifforddonk/portfolio",
    },
  ];

  const skills = [
    { name: "JavaScript", level: 70 },
    { name: "Java(SpringBoot)", level: 70 },
    { name: "React", level: 70 },
    { name: "Next.js", level: 70 },
    { name: "MongoDB", level: 70 },
    { name: "MySQL", level: 70 },
    { name: "Git", level: 70 },
    { name: "REST API", level: 70 },
  ];

  const filteredProjects =
    activeTab === "all"
      ? projects
      : projects.filter((project) => project.category === activeTab);

  if (!mounted) {
    // Avoid rendering with undefined theme
    return null;
  }

  return (
    <div
      className={`min-h-screen ${
        theme === "dark" ? "bg-gray-900" : "bg-gray-50"
      }`}
    >
      <Head>
        <title>Clifford Donkor - Portfolio</title>
        <meta
          name="description"
          content="Personal portfolio showcasing my work"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header/Navigation */}
      <header
        className={`${
          theme === "dark"
            ? "bg-gray-800 shadow-gray-900"
            : "bg-white shadow-sm"
        } sticky top-0 z-10`}
      >
        <NavBar />
      </header>

      {/* Hero Section */}
      <HeroSection />

      {/* About Section */}
      <FadeInSection
        id="about"
        className={`py-20 ${theme === "dark" ? "bg-gray-800" : "bg-white"}`}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
        >
          <div className="container mx-auto px-4">
            <h2
              className={`text-3xl font-bold text-center mb-12 ${
                theme === "dark" ? "text-white" : ""
              }`}
            >
              About Me
            </h2>
            <div className="flex flex-col md:flex-row items-center md:space-x-12">
              <div className="md:w-1/3 mb-8 md:mb-0">
                <div
                  className={`rounded-lg overflow-hidden shadow-lg ${
                    theme === "dark"
                      ? "bg-gray-700 ring-1 ring-indigo-500/20"
                      : "bg-gray-100"
                  } h-80 flex items-center justify-center`}
                >
                  <img src="/profile.jpg" alt="About Image" />
                </div>
              </div>
              <div className="md:w-2/3">
                <p
                  className={`text-lg ${
                    theme === "dark" ? "text-gray-300" : "text-gray-700"
                  } mb-6`}
                >
                  I'm a passionate Full Stack Developer with expertise in
                  building modern web applications. With over 2 years of
                  experience in the industry, I've worked on various projects
                  ranging from small business websites to complex enterprise
                  applications. I am currently a student at the University of
                  Mines and Technology, where I'm furthering my technical
                  knowledge and skills.
                </p>
                <p
                  className={`text-lg ${
                    theme === "dark" ? "text-gray-300" : "text-gray-700"
                  } mb-6`}
                >
                  My approach to development focuses on creating clean,
                  efficient, and maintainable code while delivering exceptional
                  user experiences. I enjoy solving complex problems and
                  continuously learning new technologies.
                </p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="#"
                    className={`px-4 py-2 rounded-full transition ${
                      theme === "dark"
                        ? "bg-gray-700 text-gray-200 hover:bg-gray-600"
                        : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                    }`}
                  >
                    Download Resume
                  </a>
                  <a
                    href="https://github.com/clifforddonk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`px-4 py-2 rounded-full transition ${
                      theme === "dark"
                        ? "bg-gray-700 text-white hover:bg-gray-600"
                        : "bg-gray-800 text-white hover:bg-gray-700"
                    }`}
                  >
                    GitHub
                  </a>
                  <a
                    href="https://www.linkedin.com/in/clifford-donkor-1a2b3c"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </FadeInSection>

      {/* Skills Section */}
      <FadeInSection
        id="skills"
        className={`py-20 ${theme === "dark" ? "bg-gray-900" : "bg-gray-50"}`}
      >
        <div className="container mx-auto px-4">
          <h2
            className={`text-3xl font-bold text-center mb-12 ${
              theme === "dark" ? "text-white" : ""
            }`}
          >
            My Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {skills.map((skill, index) => (
              <Skillbar key={index} skills={skill} />
            ))}
          </div>
        </div>
      </FadeInSection>

      {/* Projects Section */}
      <FadeInSection
        id="projects"
        className={`py-20 ${theme === "dark" ? "bg-gray-800" : "bg-white"}`}
      >
        <div className="container mx-auto px-4">
          <h2
            className={`text-3xl font-bold text-center mb-6 ${
              theme === "dark" ? "text-white" : ""
            }`}
          >
            My Projects
          </h2>
          <p
            className={`text-center ${
              theme === "dark" ? "text-gray-300" : "text-gray-600"
            } mb-12 max-w-2xl mx-auto`}
          >
            Here are some of my recent projects. Each one was carefully crafted
            to solve specific problems and demonstrate my skills.
          </p>

          {/* Project Filter */}
          <div className="flex justify-center mb-12">
            <div
              className={`inline-flex rounded-md ${
                theme === "dark" ? "shadow-gray-950" : "shadow-sm"
              }`}
            >
              <button
                onClick={() => setActiveTab("all")}
                className={`px-4 py-2 text-sm font-medium rounded-l-lg transition ${
                  activeTab === "all"
                    ? "bg-indigo-600 text-white"
                    : theme === "dark"
                    ? "bg-gray-700 text-gray-200 hover:bg-gray-600"
                    : "bg-white text-gray-700 hover:bg-gray-50"
                }`}
              >
                All
              </button>
              <button
                onClick={() => setActiveTab("frontend")}
                className={`px-4 py-2 text-sm font-medium transition ${
                  activeTab === "frontend"
                    ? "bg-indigo-600 text-white"
                    : theme === "dark"
                    ? "bg-gray-700 text-gray-200 hover:bg-gray-600"
                    : "bg-white text-gray-700 hover:bg-gray-50"
                }`}
              >
                Frontend
              </button>
              <button
                onClick={() => setActiveTab("backend")}
                className={`px-4 py-2 text-sm font-medium transition ${
                  activeTab === "backend"
                    ? "bg-indigo-600 text-white"
                    : theme === "dark"
                    ? "bg-gray-700 text-gray-200 hover:bg-gray-600"
                    : "bg-white text-gray-700 hover:bg-gray-50"
                }`}
              >
                Backend
              </button>
              <button
                onClick={() => setActiveTab("fullstack")}
                className={`px-4 py-2 text-sm font-medium rounded-r-lg transition ${
                  activeTab === "fullstack"
                    ? "bg-indigo-600 text-white"
                    : theme === "dark"
                    ? "bg-gray-700 text-gray-200 hover:bg-gray-600"
                    : "bg-white text-gray-700 hover:bg-gray-50"
                }`}
              >
                Full Stack
              </button>
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </FadeInSection>

      {/* Contact Section */}
      <ContactForm />

      {/* Footer */}
      <Footer />
    </div>
  );
}

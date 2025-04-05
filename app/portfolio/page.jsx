// pages/index.js
"use client";
import { useState } from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import FadeInSection from "@/app/components/FadeInSection";
import NavBar from "../components/NavBar";
import HeroSection from "../components/HeroSection";
import Skillbar from "../components/Skillbar";
import ProjectCard from "../components/ProjectCard";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

export default function Home() {
  const [activeTab, setActiveTab] = useState("all");

  const projects = [
    {
      id: 1,
      title: "Byteblogg",
      description: "A full-stack e-commerce solution with payment integration",
      image: "/byteblogg1.png",
      category: "fullstack",
      technologies: ["Next.js", "SpringBoot", "MongoDB"],
      link: "https://byteblogg.vercel.app/",
      code: "https://github.com/clifforddonk/blogsite_frontend",
    },
    {
      id: 2,
      title: "African Youth Festival Portal ",
      description: "Real-time weather application with interactive maps",
      image: "/ayf.png",
      category: "fullstack",
      technologies: ["Next.js", "MongoDB"],
      link: "https://apply.africayouthfest.org/",
      code: "",
    },
    {
      id: 3,

      title: "ChoDelivery",
      description: "Food Ordering System",
      image: "/cho.png",
      category: "frontend",
      technologies: ["Next.js", "Laravel"],
      link: "https://chodelivery.com/",
      code: "",
    },
    {
      id: 4,
      title: "Mattress Home",
      description: "Personal portfolio site built with Next.js",
      image: "/mh.png",
      category: "fullstack",
      technologies: ["Next.js", "Php"],
      link: "https://mattresshome.netlify.app/",
      code: "",
    },
    {
      id: 5,
      title: "Event-Pulse",
      description: "RESTful API for task management with authentication",
      image: "/event-pulse.png",
      category: "fullstack",
      technologies: ["Express", "MongoDB", "JWT", "Docker"],
      link: "https://event-pulse.com/",
      code: "",
    },
    {
      id: 6,
      title: "Portfolio Website",
      description: "Personal portfolio site built with Next.js",
      image: "/port.png",
      category: "frontend",
      technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
      link: "",
      code: "",
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

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Clifford Donkor - Portfolio</title>
        <meta
          name="description"
          content="Personal portfolio showcasing my work"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header/Navigation */}
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <NavBar />
      </header>

      {/* Hero Section */}
      <HeroSection />

      {/* About Section */}
      <FadeInSection id="about" className="py-20 bg-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
        >
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
            <div className="flex flex-col md:flex-row items-center md:space-x-12">
              <div className="md:w-1/3 mb-8 md:mb-0">
                <div className="rounded-lg overflow-hidden shadow-lg bg-gray-100 h-80 flex items-center justify-center">
                  <img src="/profile.jpg" alt="About Image" />
                </div>
              </div>
              <div className="md:w-2/3">
                <p className="text-lg text-gray-700 mb-6">
                  I'm a passionate Full Stack Developer with expertise in
                  building modern web applications. With over 2 years of
                  experience in the industry, I've worked on various projects
                  ranging from small business websites to complex enterprise
                  applications. I am currently a student at the University of
                  Mines and Technology, where I'm furthering my technical
                  knowledge and skills.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  My approach to development focuses on creating clean,
                  efficient, and maintainable code while delivering exceptional
                  user experiences. I enjoy solving complex problems and
                  continuously learning new technologies.
                </p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="#"
                    className="bg-gray-200 text-gray-800 px-4 py-2 rounded-full hover:bg-gray-300 transition"
                  >
                    Download Resume
                  </a>
                  <a
                    href="https://github.com/clifforddonk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-800 text-white px-4 py-2 rounded-full hover:bg-gray-700 transition"
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
      <FadeInSection id="skills" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">My Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {skills.map((skill, index) => (
              <Skillbar key={index} skills={skill} />
            ))}
          </div>
        </div>
      </FadeInSection>

      {/* Projects Section */}
      <FadeInSection id="projects" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-6">My Projects</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Here are some of my recent projects. Each one was carefully crafted
            to solve specific problems and demonstrate my skills.
          </p>

          {/* Project Filter */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex rounded-md shadow-sm">
              <button
                onClick={() => setActiveTab("all")}
                className={`px-4 py-2 text-sm font-medium rounded-l-lg ${
                  activeTab === "all"
                    ? "bg-indigo-600 text-white"
                    : "bg-white text-gray-700 hover:bg-gray-50"
                }`}
              >
                All
              </button>
              <button
                onClick={() => setActiveTab("frontend")}
                className={`px-4 py-2 text-sm font-medium ${
                  activeTab === "frontend"
                    ? "bg-indigo-600 text-white"
                    : "bg-white text-gray-700 hover:bg-gray-50"
                }`}
              >
                Frontend
              </button>
              <button
                onClick={() => setActiveTab("backend")}
                className={`px-4 py-2 text-sm font-medium ${
                  activeTab === "backend"
                    ? "bg-indigo-600 text-white"
                    : "bg-white text-gray-700 hover:bg-gray-50"
                }`}
              >
                Backend
              </button>
              <button
                onClick={() => setActiveTab("fullstack")}
                className={`px-4 py-2 text-sm font-medium rounded-r-lg ${
                  activeTab === "fullstack"
                    ? "bg-indigo-600 text-white"
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

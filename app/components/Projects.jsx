"üse client";
import React from "react";
import ProjectCard from "./ProjectCard";
import FadeInSection from "./layout/FadeInSection";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

export const Projects = () => {
  const [activeTab, setActiveTab] = useState("all");
  const { theme } = useTheme();
  const projects = [
    {
      id: 1,
      title: "SkyGuard - Airforce Quiz System",
      description:
        "The Airforce Quiz System is a Next.js-based learning management platform that allows Students to take quizzes on aviation safety topics and submit group assignments. Admins can also manage questions, view results, and grade group submissions.",
      image: "/projects/skyguard.png",
      category: "fullstack",
      technologies: ["Next.js"],
      link: "https://skyyguard.vercel.app/",
      code: "https://github.com/clifforddonk/airforce-exam-system",
    },
    {
      id: 2,
      title: "Task Tracker",
      description:
        "A simple, powerful task management system designed for teams. Track progress, assign tasks, and collaborate seamlessly.",
      image: "/projects/tasktracker.png",
      category: "fullstack",
      technologies: ["Django Rest Framework", "React"],
      link: "https://paymaster-task-tracker.vercel.app/",
      code: "https://github.com/clifforddonk/task_tracker_frontend",
    },
    {
      id: 3,
      title: "Byteblogg",
      description:
        "A dynamic blog platform built for seamless content publishing and user engagement.",
      image: "/projects/byteblogg1.png",
      category: "fullstack",
      technologies: ["Next.js", "SpringBoot", "MongoDB"],
      link: "https://byteblogg.vercel.app/",
      code: "https://github.com/clifforddonk/blogsite_backend",
    },
    {
      id: 4,
      title: "African Youth Festival Portal",
      description:
        "Application portal for the Africa Youth Festival 2025, designed for a smooth and intuitive registration experience.",
      image: "/projects/ayf.png",
      category: "fullstack",
      technologies: ["Next.js", "MongoDB"],
      link: "https://apply.africayouthfest.org/",
      code: "https://github.com/charlesbihdev/ayf-portal",
    },
    {
      id: 5,
      title: "ChoDelivery",
      description:
        "A modern food delivery system offering an efficient and responsive ordering experience.",
      image: "/projects/cho.png",
      category: "fullstack",
      technologies: ["React", "Laravel"],
      link: "https://chodelivery.com/",
      code: "https://github.com/charlesbihdev/cho",
    },
    {
      id: 6,
      title: "Mattress Home",
      description:
        "An e-commerce platform tailored for mattress and bedding products, designed to provide a cozy shopping journey.",
      image: "/projects/mh.png",
      category: "fullstack",
      technologies: ["Next.js", "Php"],
      link: "https://mattresshome.netlify.app/",
      code: "https://github.com/charlesbihdev/MATTRESS-HOME",
    },
    {
      id: 7,
      title: "Event-Pulse",
      description:
        "A full-featured event management and ticketing platform with robust backend architecture and user authentication.",
      image: "/projects/event-pulse.png",
      category: "fullstack",
      technologies: ["Laravel"],
      link: "https://event-pulse.com/",
      code: "https://github.com/charlesbihdev/Event-Pulse",
    },
    {
      id: 8,
      title: "Personal Portfolio",
      description:
        "A sleek and responsive personal portfolio showcasing my projects, skills, and journey as a developer.",
      image: "/projects/port.png",
      category: "frontend",
      technologies: ["Next.js"],
      link: "https://clifforddonk.vercel.app/",
      code: "https://github.com/clifforddonk/portfolio",
    },

    // {
    //   id: 9,
    //   title: "Employee Directory",
    //   description:
    //     "An intuitive employee directory application that allows users to search, filter, and view detailed profiles of employees within an organization.",
    //   image: "/projects/employee-directory.png",
    //   category: "fullstack",
    //   technologies: ["Laravel", "React", "CodeIgniter", "Inertia.js"],

    //   code: "https://github.com/Sametro-PayMaster/employee-directory",

    // },
  ];

  const filteredProjects =
    activeTab === "all"
      ? projects
      : projects.filter((project) => project.category === activeTab);

  return (
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
          Here are some of my recent projects. Each one was carefully crafted to
          solve specific problems and demonstrate my skills.
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
  );
};

// pages/index.js
"use client";
import { useState, useEffect } from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import FadeInSection from "@/app/components/layout/FadeInSection";
import HeroSection from "../components/HeroSection";
import Skillbar from "../components/Skillbar";
import ContactForm from "../components/ContactForm";
import WhatIDo from "../components/Services";
import { Projects } from "../components/Projects";

export default function Home() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Wait for component to mount to access theme
  useEffect(() => {
    setMounted(true);
  }, []);

  const skills = [
    { name: "JavaScript", level: 80 },
    { name: "React", level: 85 },
    { name: "Next.js", level: 70 },
    { name: "Java", level: 70 },
    { name: "SpringBoot", level: 60 },
    { name: "MongoDB", level: 70 },
    { name: "MySQL", level: 70 },
    { name: "Git", level: 80 },
  ];

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
      {/* <header
        className={`${
          theme === "dark"
            ? "bg-gray-800 shadow-gray-900"
            : "bg-white shadow-sm"
        } sticky top-0 z-10`}
      >
        <NavBar />
      </header> */}

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
                  <img src="/logo/profile2.jpg" alt="About Image" />
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
                <div className="">
                  {/* <a
                    href="#"
                    className={`px-4 py-2 rounded-full transition ${
                      theme === "dark"
                        ? "bg-gray-700 text-gray-200 hover:bg-gray-600"
                        : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                    }`}
                  >
                    Download Resume
                  </a> */}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </FadeInSection>

      {/* What I Do Section */}
      <div id="skills">
        <WhatIDo />
      </div>
      {/* Skills Section */}
      <FadeInSection
        className={`py-20 ${theme === "dark" ? "bg-gray-900" : "bg-gray-50"}`}
      >
        <div className="container mx-auto px-4">
          <h2
            className={`text-3xl font-bold text-center mb-12 ${
              theme === "dark" ? "text-white" : ""
            }`}
          >
            Tech Stack
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {skills.map((skill, index) => (
              <Skillbar key={index} skills={skill} />
            ))}
          </div>
        </div>
      </FadeInSection>

      {/* Projects Section */}
      <Projects />

      {/* Contact Section */}
      <ContactForm />


    </div>
  );
}

"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

export default function ContactForm() {
  const { theme } = useTheme();

  return (
    <div
      className={`container mx-auto px-4 py-20 ${
        theme === "dark" ? "bg-gray-900" : ""
      }`}
      id="contact"
    >
      <h2
        className={`text-3xl font-bold text-center mb-12 ${
          theme === "dark" ? "text-white" : ""
        }`}
      >
        Get In Touch
      </h2>
      <div className="flex flex-col md:flex-row gap-12 max-w-5xl mx-auto">
        <div className="md:w-1/2">
          <form className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className={`block text-sm font-medium mb-1 ${
                  theme === "dark" ? "text-gray-300" : "text-gray-700"
                }`}
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                  theme === "dark"
                    ? "bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                    : "border-gray-300"
                }`}
                placeholder="Your Name"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className={`block text-sm font-medium mb-1 ${
                  theme === "dark" ? "text-gray-300" : "text-gray-700"
                }`}
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                  theme === "dark"
                    ? "bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                    : "border-gray-300"
                }`}
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className={`block text-sm font-medium mb-1 ${
                  theme === "dark" ? "text-gray-300" : "text-gray-700"
                }`}
              >
                Message
              </label>
              <textarea
                id="message"
                rows="5"
                className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                  theme === "dark"
                    ? "bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                    : "border-gray-300"
                }`}
                placeholder="Your message here..."
              ></textarea>
            </div>
            <button
              type="submit"
              className={`text-white px-6 py-3 rounded-md font-medium hover:bg-indigo-700 transition w-full ${
                theme === "dark"
                  ? "bg-indigo-700 hover:bg-indigo-800"
                  : "bg-indigo-600"
              }`}
            >
              Send Message
            </button>
          </form>
        </div>
        <div className="md:w-1/2">
          <div
            className={`p-6 rounded-lg shadow-md h-full ${
              theme === "dark" ? "bg-gray-800 shadow-gray-900" : "bg-white"
            }`}
          >
            <h3
              className={`text-xl font-semibold mb-4 ${
                theme === "dark" ? "text-white" : ""
              }`}
            >
              Contact Information
            </h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <div
                  className={`p-2 rounded-md mr-4 ${
                    theme === "dark" ? "bg-indigo-900" : "bg-indigo-100"
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-6 w-6 ${
                      theme === "dark" ? "text-indigo-400" : "text-indigo-600"
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <h4
                    className={`font-medium ${
                      theme === "dark" ? "text-white" : ""
                    }`}
                  >
                    Email
                  </h4>
                  <p
                    className={`${
                      theme === "dark" ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    clifforddonk@gmail.com
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div
                  className={`p-2 rounded-md mr-4 ${
                    theme === "dark" ? "bg-indigo-900" : "bg-indigo-100"
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-6 w-6 ${
                      theme === "dark" ? "text-indigo-400" : "text-indigo-600"
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <h4
                    className={`font-medium ${
                      theme === "dark" ? "text-white" : ""
                    }`}
                  >
                    Phone
                  </h4>
                  <p
                    className={`${
                      theme === "dark" ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    +233 535 563 779
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div
                  className={`p-2 rounded-md mr-4 ${
                    theme === "dark" ? "bg-indigo-900" : "bg-indigo-100"
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-6 w-6 ${
                      theme === "dark" ? "text-indigo-400" : "text-indigo-600"
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h4
                    className={`font-medium ${
                      theme === "dark" ? "text-white" : ""
                    }`}
                  >
                    Location
                  </h4>
                  <p
                    className={`${
                      theme === "dark" ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    Accra, Ghana
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <h3
                className={`text-xl font-semibold mb-4 ${
                  theme === "dark" ? "text-white" : ""
                }`}
              >
                Follow Me
              </h3>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className={`text-2xl ${
                    theme === "dark"
                      ? "text-indigo-400 hover:text-indigo-500"
                      : "text-indigo-600 hover:text-indigo-700"
                  }`}
                >
                  <i className="fab fa-twitter"></i>
                </a>
                <a
                  href="#"
                  className={`text-2xl ${
                    theme === "dark"
                      ? "text-indigo-400 hover:text-indigo-500"
                      : "text-indigo-600 hover:text-indigo-700"
                  }`}
                >
                  <i className="fab fa-linkedin"></i>
                </a>
                <a
                  href="#"
                  className={`text-2xl ${
                    theme === "dark"
                      ? "text-indigo-400 hover:text-indigo-500"
                      : "text-indigo-600 hover:text-indigo-700"
                  }`}
                >
                  <i className="fab fa-github"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

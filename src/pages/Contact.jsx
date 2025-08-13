import React from "react";
import { Phone, Mail, Linkedin, Github } from "lucide-react";

export default function Contact() {
  return (
    <section className="pt-24 min-h-screen bg-gradient-to-br from-blue-50 via-pink-50 to-purple-100 dark:from-gray-900 dark:via-gray-800 dark:to-black">
      <div className="max-w-3xl mx-auto px-4" data-aos="fade-up">
        <h2 className="text-4xl font-extrabold mb-6 text-center text-gray-900 dark:text-white">
          Contact
        </h2>
        <p className="mb-8 text-center text-gray-700 dark:text-gray-300">
          Feel free to reach out via email or LinkedIn.
        </p>

        <div className="space-y-4">
          <div className="flex items-center gap-3 bg-gradient-to-r from-indigo-500 to-purple-500 p-4 rounded-lg shadow-lg text-white hover:scale-105 transition-transform duration-300">
            <Phone size={20} />
            <span className="font-semibold">+91 9092245875</span>
          </div>

          <div className="flex items-center gap-3 bg-gradient-to-r from-green-500 to-teal-500 p-4 rounded-lg shadow-lg text-white hover:scale-105 transition-transform duration-300">
            <Mail size={20} />
            <a
              href="mailto:kanagesharjun@gmail.com"
              className="hover:underline"
            >
              kanagesharjun@gmail.com
            </a>
          </div>

          <div className="flex items-center gap-3 bg-gradient-to-r from-blue-600 to-cyan-500 p-4 rounded-lg shadow-lg text-white hover:scale-105 transition-transform duration-300">
            <Linkedin size={20} />
            <a
              href="https://www.linkedin.com/in/arjun-n-257a31236/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              linkedin.com/in/arjun-n-257a31236
            </a>
          </div>

          <div className="flex items-center gap-3 bg-gradient-to-r from-gray-800 to-gray-600 p-4 rounded-lg shadow-lg text-white hover:scale-105 transition-transform duration-300">
            <Github size={20} />
            <a
              href="https://github.com/Arjun-17-8-01"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              github.com/Arjun-17-8-01
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

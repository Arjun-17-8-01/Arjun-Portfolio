import React from 'react'

const experiences = [
  {
    role: "Torque Specialist",
    company: "Alstom, Coimbatore",
    duration: "Aug 2021 - Sept 2021",
    description:
      "Worked in mechanical engineering focusing on torque applications within a leading train manufacturing company. Assisted in quality control and optimization of torque systems to ensure safety and efficiency."
  },
  {
    role: "Office Administration and C Programming Trainer",
    company: "Master JEE, Erode",
    duration: "Dec 2021 - May 2022",
    description:
      "Managed office administrative tasks and conducted training sessions on the C programming language, helping students build foundational coding skills."
  },
  {
    role: "Data Analyst",
    company: "Madhan Mohan Textiles Pvt Ltd, Erode",
    duration: "June 2022 - June 2023",
    description:
      "Analyzed and updated product listings on the Amazon Seller Center portal, improving e-commerce operations through detailed data management and market trend analysis."
  }
];

export default function WorkExperience() {
  return (
    <section className="pt-24 bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 dark:from-gray-900 dark:via-gray-800 dark:to-black min-h-screen animate-gradient">
      <div className="max-w-5xl mx-auto px-6" data-aos="fade-up">
        <h2 className="text-4xl font-extrabold mb-12 text-center text-gray-900 dark:text-white">
          Work Experience
        </h2>

        <div className="relative border-l-4 border-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 ml-4">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="mb-12 ml-6 relative group transition-all duration-300"
            >
              {/* Timeline Dot */}
              <span className="absolute -left-8 top-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full w-6 h-6 ring-4 ring-white dark:ring-gray-900 shadow-lg shadow-purple-400/50 group-hover:scale-125 transition-transform duration-300"></span>

              {/* Card */}
              <div className="bg-white/80 dark:bg-gray-800/80 rounded-xl p-6 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-100 dark:border-gray-700 backdrop-blur-sm">
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
                  {exp.role}
                </h3>
                <span className="block text-indigo-600 dark:text-indigo-400 font-medium">
                  {exp.company}
                </span>
                <span className="block text-sm text-gray-500 dark:text-gray-400 mb-4">
                  {exp.duration}
                </span>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Gradient Animation */}
      <style jsx>{`
        @keyframes gradientMove {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradientMove 15s ease infinite;
        }
      `}</style>
    </section>
  );
}

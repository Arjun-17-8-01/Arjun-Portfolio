import React, { useState } from 'react'

const certifications = {
  Infosys: [
    { name: "Java Developer Certification", file: "/assets/certifications/infosys/Java Developer Certification.pdf" },
    { name: "Java Programming Fundamentals", file: "/assets/certifications/infosys/Java Programming Fundamentals.pdf" },
    { name: "Python Foundation Certification", file: "/assets/certifications/infosys/Python Foundation Certification.pdf" },
  ],
  Oracle: [
    { name: "Oracle Cloud Infrastructure 2024 Generative AI Certified Professional", file: "/assets/certifications/oracle/Oracle Cloud Infrastructure 2024 Generative AI Certified Professional.pdf" },
    { name: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate", file: "/assets/certifications/oracle/Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate.pdf" },
    { name: "Oracle Cloud Infrastructure 2025 Certified Data Science Professional", file: "/assets/certifications/oracle/Oracle Cloud Infrastructure 2025 Certified Data Science Professional.pdf" },
    { name: "Oracle Cloud Infrastructure 2025 Certified Foundations Associate", file: "/assets/certifications/oracle/Oracle Cloud Infrastructure 2025 Certified Foundations Associate.pdf" },
  ],
  Nasscom: [
    { name: "Nasscom cybersecurity fundamentals", file: "/assets/certifications/nasscom/Nasscom cybersecurity fundamentals.pdf" },
    { name: "UiPath Automation Developer Associate Training", file: "/assets/certifications/nasscom/UiPath Automation Developer Associate Training.pdf" },
  ],
  Coursera: [
    { name: "Getting started with MS excel", file: "/assets/certifications/coursera/Coursera Getting started with MS excel.pdf" },
    { name: "Using Basic formulas and functions in ms excel", file: "/assets/certifications/coursera/Coursera Using Basic formulas and functions in ms excel.pdf" },
    { name: "IBM python for Data Science, AI & Development", file: "/assets/certifications/coursera/IBM python for Data Science, AI & Development.pdf" },
    { name: "Meta Certificate for Intro to Front End development", file: "/assets/certifications/coursera/Meta Certificate for Intro to Front End development.pdf" },
    { name: "Microsoft Excel and Copilot Fundamentals", file: "/assets/certifications/coursera/Microsoft Excel and Copilot Fundamentals.pdf" },
    { name: "Work Smarter with Microsoft Excel", file: "/assets/certifications/coursera/Work Smarter with Microsoft Excel.pdf" },
  ]
}

export default function Certifications() {
  const [activeCategory, setActiveCategory] = useState(null)
  const [selectedCert, setSelectedCert] = useState(null)

  const toggleCategory = (cat) => {
    if (activeCategory === cat) {
      setActiveCategory(null)
      setSelectedCert(null)
    } else {
      setActiveCategory(cat)
      setSelectedCert(null)
    }
  }

  const openCert = (file) => {
    setSelectedCert(file)
  }

  return (
    <section className="pt-24 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-black min-h-screen">
      <div className="max-w-5xl mx-auto px-6" data-aos="fade-up">
        <h2 className="text-4xl font-extrabold mb-10 text-center text-gray-900 dark:text-white">
          Certifications
        </h2>

        {Object.entries(certifications).map(([category, certs]) => (
          <div
            key={category}
            className="mb-8 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700 bg-transparent"
          >
            {/* Category Button */}
            <button
              onClick={() => toggleCategory(category)}
              className="w-full text-left px-6 py-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-semibold text-xl flex justify-between items-center hover:opacity-90 transition-all duration-300"
            >
              {category}
              <span
                className={`transform transition-transform ${activeCategory === category ? "rotate-180" : "rotate-0"}`}
              >
                &#9660;
              </span>
            </button>

            {/* Category Content */}
            {activeCategory === category && (
              <>
                <div className="p-6 bg-transparent grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                  {certs.map(({ name, file }, idx) => (
                    <button
                      key={idx}
                      onClick={() => openCert(file)}
                      className="block p-4 border border-gray-200 dark:border-gray-700 rounded-lg bg-gradient-to-br from-indigo-50 to-white dark:from-gray-700 dark:to-gray-800 hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer text-left"
                      title={`View ${name}`}
                    >
                      <h3 className="font-semibold text-indigo-700 dark:text-indigo-400">{name}</h3>
                    </button>
                  ))}
                </div>

                {selectedCert && (
                  <div className="mt-8 p-4 bg-transparent rounded-lg shadow-lg">
                    <iframe
                      src={selectedCert}
                      title="Selected Certification"
                      className="w-full h-[600px] rounded"
                    />
                  </div>
                )}
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

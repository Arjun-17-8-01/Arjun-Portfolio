import React from 'react'
import { FaGraduationCap, FaTools, FaLaptopCode } from 'react-icons/fa'

export default function Resume() {
  return (
    <section className="pt-24 min-h-screen bg-gradient-to-br from-purple-600 via-blue-500 to-cyan-400 text-white">
      <div className="max-w-5xl mx-auto px-4" data-aos="fade-up">
        <h2 className="text-5xl font-extrabold mb-6 text-center drop-shadow-lg">
          Resume
        </h2>
        <p className="mb-10 text-center text-lg max-w-2xl mx-auto text-white/90">
          Download the printable version or explore my education and skills below.
        </p>

        {/* Download Button */}
        <div className="flex justify-center mb-12">
          <a
            href="/assets/resume.pdf"
            download="AK_Resume.pdf"
            className="px-8 py-3 rounded-full bg-white text-purple-700 font-semibold shadow-lg hover:scale-110 hover:shadow-2xl transform transition duration-300"
          >
            Download Resume
          </a>
        </div>

        {/* Resume Preview */}
        <div className="mb-12 transform hover:scale-[1.02] transition duration-500 shadow-2xl rounded-lg overflow-hidden border border-white/20">
          <iframe
            src="/assets/resume.pdf"
            title="AK Resume PDF"
            className="w-full h-[600px]"
          />
        </div>

        {/* Education & Skills */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Education Card */}
          <div className="bg-white/90 backdrop-blur-lg rounded-xl shadow-lg p-8 hover:shadow-2xl hover:scale-105 transition transform duration-300 cursor-pointer">
            <div className="flex items-center mb-6 text-purple-700">
              <FaGraduationCap size={28} className="mr-3" />
              <h3 className="text-2xl font-bold">Education</h3>
            </div>
            <ul className="space-y-6 text-gray-800">
              <li className="p-4 rounded-lg bg-purple-50 hover:bg-purple-100 transition">
                <h4 className="text-lg font-semibold">10th Standard</h4>
                <p className="text-sm text-gray-600">Bharathi Vidya Bhavan, Erode</p>
                <p className="text-sm">2017 | 94%</p>
              </li>
              <li className="p-4 rounded-lg bg-purple-50 hover:bg-purple-100 transition">
                <h4 className="text-lg font-semibold">12th Standard</h4>
                <p className="text-sm text-gray-600">Bharathi Vidya Bhavan, Erode</p>
                <p className="text-sm">2019 | 70.33%</p>
              </li>
              <li className="p-4 rounded-lg bg-purple-50 hover:bg-purple-100 transition">
                <h4 className="text-lg font-semibold">Diploma in Mechanical Engineering</h4>
                <p className="text-sm text-gray-600">Sakthi Polytechnic College, Erode</p>
                <p className="text-sm">Aug 2019 – Aug 2021 | 95.91%</p>
              </li>
              <li className="p-4 rounded-lg bg-purple-50 hover:bg-purple-100 transition">
                <h4 className="text-lg font-semibold">Bachelor of Computer Applications</h4>
                <p className="text-sm text-gray-600">Alagappa University</p>
                <p className="text-sm">Aug 2021 – May 2024 | 80%</p>
              </li>
              <li className="p-4 rounded-lg bg-purple-50 hover:bg-purple-100 transition">
                <h4 className="text-lg font-semibold">Bachelor of Technology in Information Technology</h4>
                <p className="text-sm text-gray-600">Panimalar Engineering College, Chennai</p>
                <p className="text-sm">Aug 2023 – May 2026 | CGPA 8.7</p>
              </li>
            </ul>
          </div>

          {/* Skills Card */}
          <div className="bg-white/90 backdrop-blur-lg rounded-xl shadow-lg p-8 hover:shadow-2xl hover:scale-105 transition transform duration-300 cursor-pointer">
            <div className="flex items-center mb-6 text-purple-700">
              <FaTools size={28} className="mr-3" />
              <h3 className="text-2xl font-bold">Skills</h3>
            </div>
            <ul className="space-y-4 text-gray-800">
              <li className="flex items-center space-x-3 hover:text-purple-700 transition">
                <FaLaptopCode />
                <span><strong>Full Stack Development:</strong> Java (Advanced)</span>
              </li>
              <li className="flex items-center space-x-3 hover:text-purple-700 transition">
                <FaLaptopCode />
                <span><strong>Programming Languages:</strong> Python, SQL (Intermediate)</span>
              </li>
              <li className="flex items-center space-x-3 hover:text-purple-700 transition">
                <FaLaptopCode />
                <span><strong>Web Technologies:</strong> HTML, CSS, JavaScript, React</span>
              </li>
              <li className="flex items-center space-x-3 hover:text-purple-700 transition">
                <FaLaptopCode />
                <span><strong>Design & Tools:</strong> Figma, Power BI, Excel</span>
              </li>
              <li className="flex items-center space-x-3 hover:text-purple-700 transition">
                <FaLaptopCode />
                <span><strong>Foundations:</strong> UI/UX fundamentals (Beginner), Cloud Services, AI</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

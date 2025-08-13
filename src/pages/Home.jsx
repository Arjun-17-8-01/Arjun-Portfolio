import React from 'react'
import { Link } from 'react-router-dom'
import { TypeAnimation } from 'react-type-animation'

export default function Home() {
  return (
    <section className='pt-24 relative overflow-hidden'>
      {/* Subtle background gradient animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-200 via-blue-100 to-teal-200 dark:from-gray-800 dark:via-gray-900 dark:to-black animate-pulse-slow"></div>

      <div className='max-w-6xl mx-auto px-4 relative z-10'>

        <div className='min-h-[60vh] flex flex-col md:flex-row items-center gap-8'>
          
          {/* Left Section */}
          <div className='flex-1' data-aos='fade-right'>
            <h1
              className='text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-purple-500 via-pink-500 to-teal-400 bg-clip-text text-transparent animate-gradient'
            >
              Hi, I'm Arjun
            </h1>

            {/* Typing animation for roles */}
            <TypeAnimation
              sequence={[
                'IT Professional',
                2000,
                'Web Developer',
                2000,
                'Data Analyst',
                2000,
                'Tech Enthusiast',
                2000
              ]}
              wrapper="span"
              speed={50}
              className="text-xl md:text-2xl font-semibold text-gray-700 dark:text-gray-300"
              repeat={Infinity}
            />

            <p className='mt-4 text-lg text-gray-600 dark:text-gray-300 leading-relaxed'>
              I am a passionate IT professional. With experience as a Data Analyst at MMT Pvt. Ltd. and 
              an internship in Core Java and SQL, I bring skills in Java, Python, SQL, Power BI, and React. 
              I have worked on impactful projects like a Plastic Waste Management System and an AI-powered 
              Traffic Management System. Certified in multiple technologies, I thrive on solving real-world 
              problems through development, data, and continuous learning. I am also passionate about 
              game-based learning.
            </p>

            {/* Buttons with hover animation */}
            <div className='mt-6 flex items-center gap-4'>
              <a
                href='/assets/resume.pdf'
                download='AK_Resume.pdf'
                className='px-5 py-3 rounded-full bg-gradient-to-r from-purple-500 to-teal-400 text-white shadow-lg hover:scale-105 transition-transform'
              >
                Download Resume
              </a>

              <Link
                to='/projects'
                className='px-5 py-3 rounded-full border border-gray-400 dark:border-gray-600 hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors'
              >
                See Projects
              </Link>
            </div>
          </div>

          {/* Profile Image with hover zoom */}
          <div
            className='w-56 h-56 rounded-full overflow-hidden shadow-xl border-4 border-white dark:border-gray-800 transform hover:scale-110 transition-transform duration-500'
            data-aos='fade-left'
          >
            <img
              src='/assets/profile.jpg'
              alt='Arjun'
              className='w-full h-full object-cover'
            />
          </div>
        </div>

      </div>
    </section>
  )
}

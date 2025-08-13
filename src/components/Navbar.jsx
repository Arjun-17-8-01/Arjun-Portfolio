import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import DarkModeToggle from './DarkModeToggle'

export default function Navbar() {
  const loc = useLocation()
  return (
    <header className='fixed w-full z-30 bg-opacity-60 backdrop-blur-sm'>
      <div className='max-w-5xl mx-auto flex items-center justify-between p-4'>
        {/* Logo */}
        <Link to='/'>
          <img
            src='/logo.png'
            alt='Logo'
            className='h-10 w-auto transition-transform duration-300 hover:scale-110'
          />
        </Link>

        {/* Desktop Nav */}
        <nav className='hidden md:flex items-center space-x-4'>
          <Link to='/' className={'px-3 py-2 rounded ' + (loc.pathname === '/' ? 'bg-white/20' : '')}>Home</Link>
          <Link to='/resume' className={'px-3 py-2 rounded ' + (loc.pathname === '/resume' ? 'bg-white/20' : '')}>Resume</Link>
          <Link to='/projects' className={'px-3 py-2 rounded ' + (loc.pathname === '/projects' ? 'bg-white/20' : '')}>Projects</Link>
          <Link to='/work' className={'px-3 py-2 rounded ' + (loc.pathname === '/work' ? 'bg-white/20' : '')}>Work Experience</Link>
          <Link to='/certifications' className={'px-3 py-2 rounded ' + (loc.pathname === '/certifications' ? 'bg-white/20' : '')}>Certifications</Link>
          <Link to='/contact' className={'px-3 py-2 rounded ' + (loc.pathname === '/contact' ? 'bg-white/20' : '')}>Contact</Link>
          
          {/* Hire Me Button */}
          <a href='#contact' className='ml-2'>
            <Link to='/contact' className='px-4 py-2 rounded-full bg-gradient-to-r from-[#7c3aed] to-[#06b6d4] text-white'>
              Hire Me
            </Link>
          </a>

          {/* Dark Mode Toggle with Border */}
          <div className='p-[2px] rounded-full border border-gray-400 dark:border-gray-600 hover:border-[#7c3aed] transition-colors'>
            <DarkModeToggle />
          </div>
        </nav>

        {/* Mobile Nav Toggle */}
        <div className='md:hidden flex items-center space-x-2'>
          <div className='p-[2px] rounded-full border border-gray-400 dark:border-gray-600 hover:border-[#7c3aed] transition-colors'>
            <DarkModeToggle />
          </div>
          <button
            className='p-2 rounded-md border border-gray-400 dark:border-gray-600'
            onClick={() => {
              const el = document.getElementById('mobile-menu')
              if (el) el.classList.toggle('hidden')
            }}
          >
            Menu
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div id='mobile-menu' className='hidden md:hidden bg-white/60 dark:bg-gray-800/80'>
        <div className='flex flex-col p-4 space-y-2'>
          <Link to='/'>Home</Link>
          <Link to='/resume'>Resume</Link>
          <Link to='/projects'>Projects</Link>
          <Link to='/work'>Work Experience</Link>
          <Link to='/certifications'>Certifications</Link>
          <Link to='/contact'>Contact</Link>
        </div>
      </div>
    </header>
  )
}

import React, { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import AOS from 'aos'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Resume from './pages/Resume'
import Projects from './pages/Projects'
import WorkExperience from './pages/WorkExperience'
import Certifications from './pages/Certifications'
import Contact from './pages/Contact'

export default function App(){
  useEffect(()=>{ AOS.init({duration:800, once:true}) },[])
  return (
    <div className='min-h-screen flex flex-col'>
      <Navbar />
      <main className='flex-grow'>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/resume' element={<Resume/>} />
          <Route path='/projects' element={<Projects/>} />
          <Route path='/work' element={<WorkExperience/>} />
          <Route path='/certifications' element={<Certifications/>} />
          <Route path='/contact' element={<Contact/>} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

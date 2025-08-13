import React, { useEffect, useState } from 'react'
export default function DarkModeToggle(){
  const [dark, setDark] = useState(()=>typeof window !== 'undefined' && localStorage.getItem('theme')==='dark')
  useEffect(()=>{
    if(dark) document.documentElement.classList.add('dark')
    else document.documentElement.classList.remove('dark')
    localStorage.setItem('theme', dark? 'dark':'light')
  },[dark])
  return (
    <button onClick={()=>setDark(!dark)} aria-label='Toggle dark mode' className='p-2 rounded'>
      {dark ? '🌙' : '☀️'}
    </button>
  )
}

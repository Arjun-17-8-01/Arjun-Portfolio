import React from 'react'

export default function Footer() {
  return (
    <footer className='py-6 text-center'>
      <div className='max-w-5xl mx-auto text-sm text-gray-500'>
        © {new Date().getFullYear()} Arjun. Keep learning, keep building, keep inspiring 🚀
      </div>
    </footer>
  )
}

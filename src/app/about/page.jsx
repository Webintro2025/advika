import React from 'react'
import About from '../../components/About'
import WhyUnique from '../../components/WhyUnique'

export default function Page() {
  return (
    <main>
      <div className="bg-[linear-gradient(90deg,#1B5439_0%,#163f2e_100%)] text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold">About Us</h1>
          <p className="mt-3 text-lg text-[#F6C23E]">Advika Naturals LLP</p>
        </div>
      </div>

      <div className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <About />
        </div>
      </div>

      <div className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <WhyUnique />
        </div>
      </div>
    </main>
  )
}

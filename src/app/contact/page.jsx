import React from 'react'
import Map from '../../components/Map'
import GetInTouch from '../../components/GetInTouch'

export default function Page() {
  return (
    <main>
      <div className="bg-[linear-gradient(90deg,#1B5439_0%,#163f2e_100%)] text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold">Contact Us</h1>
          <p className="mt-3 text-lg text-[#F6C23E]">Get in touch with Advika Naturals</p>
        </div>
        <GetInTouch />
        <Map />
      </div>

  
    </main>
  )
}

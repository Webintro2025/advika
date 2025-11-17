"use client"
import React from 'react'

const About = () => {
  const images = [
    'https://picsum.photos/seed/makhana1/1200/900',
    'https://picsum.photos/seed/makhana2/800/600',
    'https://picsum.photos/seed/makhana3/800/600',
  ]

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

        {/* Text column */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About Us — <span className="text-[#1B5439]">Advika Naturals LLP</span>
          </h2>

          <p className="text-gray-700 mb-4 leading-relaxed">
            Welcome to Advika Naturals LLP, your trusted online destination for premium-quality Makhana (Fox Nuts)—a healthy, crunchy, and wholesome snack loved across generations. At Advika Naturals, we bring you the finest makhana sourced directly from the fertile lands of Bihar, the heart of India’s makhana cultivation.
          </p>

          <p className="text-gray-700 mb-4 leading-relaxed">
            Our mission is simple – to make healthy snacking accessible, natural, and truly enjoyable for every Indian household. Each product we offer reflects our commitment to quality, purity, and sustainability, ensuring that every makhana kernel is 100% natural, additive-free, and packed with nutrition.
          </p>

          <p className="text-gray-700 mb-4 leading-relaxed">
            We offer a wide range of products including Makhana Jar Packs, Loose Makhana, Roasted Makhana, and Flavored Makhanas in exciting options like Peri Peri, Pudina, Cheese, Classic Salted, and Black Pepper. As a true farm-to-packet brand, we ensure freshness, hygiene, and authenticity in every pack.
          </p>

          <p className="text-gray-700 mb-6 leading-relaxed">
            Guided by <strong className="text-gray-900">Mr. Suman</strong> and <strong className="text-gray-900">Mr. Ravi Kumar</strong>, our small but passionate team is dedicated to delivering premium-quality snacks that blend traditional taste with modern health values.
          </p>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-700">
            <li className="flex items-center gap-2">
              <span className="inline-block w-3 h-3 rounded-full bg-[#F6C23E]" />
              Makhana Jar Packs
            </li>
            <li className="flex items-center gap-2">
              <span className="inline-block w-3 h-3 rounded-full bg-[#F6C23E]" />
              Roasted & Flavoured Makhana
            </li>
            <li className="flex items-center gap-2">
              <span className="inline-block w-3 h-3 rounded-full bg-[#F6C23E]" />
              Makhana Cookies & Drinks
            </li>
            <li className="flex items-center gap-2">
              <span className="inline-block w-3 h-3 rounded-full bg-[#F6C23E]" />
              Makhana Atta / Dry Fruits
            </li>
          </ul>
        </div>

        {/* Image column */}
        <div className="grid grid-cols-2 grid-rows-2 gap-4">
          <div className="row-span-2 overflow-hidden rounded-2xl group relative">
            <img src={images[0]} alt="Advika Makhana" className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105" loading="lazy" />
          </div>

          <div className="overflow-hidden rounded-2xl group relative">
            <img src={images[1]} alt="Makhana closeup" className="w-full h-48 object-cover transform transition-transform duration-500 group-hover:scale-105" loading="lazy" />
          </div>

          <div className="overflow-hidden rounded-2xl group relative">
            <img src={images[2]} alt="Makhana pack" className="w-full h-48 object-cover transform transition-transform duration-500 group-hover:scale-105" loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

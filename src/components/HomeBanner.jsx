"use client"
import React, { useEffect, useState } from "react"

const slides = ["/banenerr.jpg", "/banner21.jpg"]

const HomeBanner = () => {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 3000) // 3 seconds
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative w-full overflow-hidden">
      {slides.map((src, index) => (
        <img
          key={src}
          src={src}
          alt=""
          className={`w-full transition-opacity duration-700 ${
            index === current ? "opacity-100" : "opacity-0 absolute inset-0"
          }`}
        />
      ))}
    </div>
  )
}

export default HomeBanner
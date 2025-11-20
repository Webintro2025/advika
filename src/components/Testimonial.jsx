"use client"
import React, { useRef, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Testimonial() {
	const statRefs = [useRef(null), useRef(null), useRef(null), useRef(null)]
	const statValues = [10, 128, 35, 3925]

	const testimonials = [
		{
			title: 'Best quality Makhana I’ve ever had!',
			text:
				'“I’ve been buying makhanas from local shops for years, but nothing compares to the freshness and crunch I got from Advika Naturals. Totally pure, with no artificial polish or added flavors—just as nature intended. Highly recommended!”',
			author: '— Ritu Sharma, Delhi'
		},
		{
			title: 'Perfect healthy snack for my kids',
			text:
				'“I’m always looking for healthy snacks for my children, and Advika Naturals’ roasted makhana is a hit! Crunchy, tasty, and guilt-free. Plus, I love knowing it’s completely natural and chemical-free.”',
			author: '— Aman Verma, Pune'
		},
		{
			title: 'Premium quality at a great price',
			text:
				'“I was pleasantly surprised by how premium the makhanas from Advika Naturals were—clean, big-sized, and super crunchy. I’ve made them a regular part of my daily evening snack. Value for money and top-notch!”',
			author: '— Sneha Rajput, Bangalore'
		},
		{
			title: 'Loved the flavor and packaging!',
			text:
				'“I ordered flavored makhana varieties from Advika Naturals and was impressed with both the taste and the eco-friendly packaging. Everything felt thoughtfully done. You’ve earned a loyal customer!”',
			author: '— Rahul Sinha, Jaipur'
		}
	]

	useEffect(() => {
		// Animate the numeric counters when they scroll into view
		statValues.forEach((value, i) => {
			const ref = statRefs[i].current
			if (!ref) return
			const obj = { val: 0 }
			gsap.to(obj, {
				val: value,
				duration: 2,
				ease: 'power1.out',
				scrollTrigger: {
					trigger: ref,
					start: 'top 85%',
					toggleActions: 'play none none reverse'
				},
				onUpdate: () => {
					// Format with comma separators for thousands
					ref.innerText = Math.floor(obj.val).toLocaleString()
				}
			})
		})
	}, [])

	const [currentIndex, setCurrentIndex] = useState(0)

	// Auto slide between two testimonial pages every 5 seconds
	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentIndex((prev) => (prev + 1) % 2)
		}, 3000)
		return () => clearInterval(interval)
	}, [])

	return (
		<section className="w-full">
			<div className="max-w-5xl mx-auto text-center py-16 px-6">
				<motion.p
					initial={{ opacity: 0, y: 6 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className="text-sm text-emerald-600 font-medium"
				>
					What Our Customers Say
				</motion.p>

				<motion.h2
					initial={{ opacity: 0, y: 10 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5 }}
					className="mt-3 text-4xl md:text-5xl font-extrabold text-[#0b3b2b]"
				>
					Trusted by Makhana Lovers Across India
				</motion.h2>

				<motion.p
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					className="mt-3 text-sm text-gray-500 max-w-2xl mx-auto"
				>
					Real stories from people who chose Advika Naturals for
					pure, crunchy and truly natural makhana.
				</motion.p>

				<div className="mt-10 overflow-hidden">
					<motion.div
						initial={{ opacity: 0, y: 12 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="flex transition-transform duration-500 ease-out"
						style={{ transform: `translateX(-${currentIndex * 100}%)`, width: '200%' }}
					>
						{/* Page 1: first three testimonials */}
						<div className="w-full flex flex-col lg:flex-row">
							{testimonials.slice(0, 3).map((t, idx) => (
								<div
									key={idx}
									className="w-full lg:w-1/3 px-3 md:px-4 mb-6 lg:mb-0"
								>
									<div className="bg-white rounded-2xl shadow-sm p-6 md:p-7 border border-emerald-50 h-full">
										<p className="text-sm font-semibold text-emerald-700 uppercase tracking-wide">
											{t.title}
										</p>
										<p className="mt-2 text-yellow-400 text-base">★★★★★</p>
										<p className="mt-3 text-gray-700 text-sm md:text-base leading-relaxed">
											{t.text}
										</p>
										<p className="mt-4 text-sm font-semibold text-gray-800">{t.author}</p>
									</div>
								</div>
							))}
						</div>

						{/* Page 2: last testimonial centered */}
						<div className="w-full flex justify-center">
							{testimonials.slice(3, 4).map((t, idx) => (
								<div
									key={idx}
									className="w-full lg:w-1/3 px-3 md:px-4"
								>
									<div className="bg-white rounded-2xl shadow-sm p-6 md:p-7 border border-emerald-50 h-full">
										<p className="text-sm font-semibold text-emerald-700 uppercase tracking-wide">
											{t.title}
										</p>
										<p className="mt-2 text-yellow-400 text-base">★★★★★</p>
										<p className="mt-3 text-gray-700 text-sm md:text-base leading-relaxed">
											{t.text}
										</p>
										<p className="mt-4 text-sm font-semibold text-gray-800">{t.author}</p>
									</div>
								</div>
							))}
						</div>
					</motion.div>
				</div>
			</div>

			<div className="bg-[#4b2b0b] text-white">
				<div className="max-w-6xl mx-auto py-12 px-6">
					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
						<div className="flex flex-col items-center">
							<div className="bg-white text-[#4b2b0b] rounded-full p-3 mb-3">
								<svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2l3 7h7l-5.5 4.5L19 21l-7-4-7 4 1.5-7.5L2 9h7l3-7z" />
								</svg>
							</div>
							<div ref={statRefs[0]} className="text-4xl md:text-5xl font-extrabold text-yellow-400">0</div>
							<div className="mt-2 text-base md:text-lg text-white/80">Countries</div>
						</div>

						<div className="flex flex-col items-center border-l border-white/20">
							<div className="bg-white text-[#4b2b0b] rounded-full p-3 mb-3">
								<svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7l6 6-6 6M21 7l-6 6 6 6" />
								</svg>
							</div>
							<div ref={statRefs[1]} className="text-4xl md:text-5xl font-extrabold text-yellow-400">0</div>
							<div className="mt-2 text-base md:text-lg text-white/80">District Covered</div>
						</div>

						<div className="flex flex-col items-center border-l border-white/20">
							<div className="bg-white text-[#4b2b0b] rounded-full p-3 mb-3">
								<svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h4l3 8 4-16 3 8h4" />
								</svg>
							</div>
							<div ref={statRefs[2]} className="text-4xl md:text-5xl font-extrabold text-yellow-400">0</div>
							<div className="mt-2 text-base md:text-lg text-white/80">Product Category</div>
						</div>

						<div className="flex flex-col items-center border-l border-white/20">
							<div className="bg-white text-[#4b2b0b] rounded-full p-3 mb-3">
								<svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 9l3 3m0 0l-3 3m3-3H3" />
								</svg>
							</div>
							<div ref={statRefs[3]} className="text-4xl md:text-5xl font-extrabold text-yellow-400">0</div>
							<div className="mt-2 text-base md:text-lg text-white/80">Happy Clients</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}


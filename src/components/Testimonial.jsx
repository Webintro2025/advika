"use client"
import React, { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Testimonial() {
	const statRefs = [useRef(null), useRef(null), useRef(null), useRef(null)]
	const statValues = [10, 128, 35, 3925]

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

	const avatarVariant = {
		hidden: { opacity: 0, y: 12, scale: 0.9 },
		visible: (i = 1) => ({
			opacity: 1,
			y: 0,
			scale: 1,
			transition: { delay: i * 0.12, duration: 0.5 }
		})
	}

	return (
		<section className="w-full">
			<div className="max-w-5xl mx-auto text-center py-16 px-6">
				<motion.p initial={{ opacity: 0, y: 6 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-sm text-emerald-600 font-medium">Experiences That Speak for Themselves</motion.p>

				<motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="mt-3 text-4xl md:text-5xl font-extrabold text-[#0b3b2b]">What People Love About Us</motion.h2>

				<motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mt-3 text-sm text-gray-500">Nature to Home Agro Traders truly stands out as a makhana dealer and supplier</motion.p>

				<div className="mt-6 flex justify-center">
					<svg width="120" height="28" viewBox="0 0 120 28" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M10 14C30 6 50 22 70 14C90 6 110 22 120 14" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round"/>
					</svg>
				</div>

				<div className="relative mt-10">
					<button aria-label="prev" className="hidden md:flex items-center justify-center absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border border-emerald-700 text-emerald-700 hover:bg-emerald-50">
						<svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
						</svg>
					</button>

					<div className="flex items-center justify-center gap-6">
						{["https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&q=80", "https://images.unsplash.com/photo-1545996124-1b8e9b9a1c45?w=200&q=80", "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?w=200&q=80"].map((src, idx) => (
							<motion.div key={idx} custom={idx} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={avatarVariant} className={`${idx === 1 ? '-mt-3' : ''} w-16 h-16 rounded-full ring-4 ring-white overflow-hidden shadow-lg`}>
								<motion.img whileHover={{ scale: 1.08 }} src={src} alt={`avatar-${idx}`} className="w-full h-full object-cover" />
							</motion.div>
						))}
					</div>

					<button aria-label="next" className="hidden md:flex items-center justify-center absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border border-emerald-700 text-emerald-700 hover:bg-emerald-50">
						<svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
						</svg>
					</button>
				</div>

				<motion.blockquote initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mt-8 text-center max-w-3xl mx-auto text-gray-700 leading-relaxed text-lg md:text-xl font-medium px-4">
					I love how their makhanas are both affordable and chemical-free. It's the perfect healthy snack for my family, delivery makes it even more convenient!
				</motion.blockquote>

				<div className="mt-6 flex flex-col items-center">
					<motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="flex items-center space-x-1">
						{Array.from({ length: 5 }).map((_, i) => (
							<svg key={i} xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
								<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.966a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118L10 13.347l-3.38 2.455c-.784.57-1.84-.196-1.54-1.118l1.286-3.966a1 1 0 00-.364-1.118L2.62 9.393c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.966z" />
							</svg>
						))}
					</motion.div>

					<p className="mt-4 text-sm font-semibold text-gray-700 uppercase">Priya Verma</p>
					<p className="text-xs text-gray-400">Customer</p>
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
							<div ref={statRefs[0]} className="text-3xl font-extrabold text-yellow-400">0</div>
							<div className="mt-2 text-sm text-white/80">Countries</div>
						</div>

						<div className="flex flex-col items-center border-l border-white/20">
							<div className="bg-white text-[#4b2b0b] rounded-full p-3 mb-3">
								<svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7l6 6-6 6M21 7l-6 6 6 6" />
								</svg>
							</div>
							<div ref={statRefs[1]} className="text-3xl font-extrabold text-yellow-400">0</div>
							<div className="mt-2 text-sm text-white/80">District Covered</div>
						</div>

						<div className="flex flex-col items-center border-l border-white/20">
							<div className="bg-white text-[#4b2b0b] rounded-full p-3 mb-3">
								<svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h4l3 8 4-16 3 8h4" />
								</svg>
							</div>
							<div ref={statRefs[2]} className="text-3xl font-extrabold text-yellow-400">0</div>
							<div className="mt-2 text-sm text-white/80">Product Category</div>
						</div>

						<div className="flex flex-col items-center border-l border-white/20">
							<div className="bg-white text-[#4b2b0b] rounded-full p-3 mb-3">
								<svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 9l3 3m0 0l-3 3m3-3H3" />
								</svg>
							</div>
							<div ref={statRefs[3]} className="text-3xl font-extrabold text-yellow-400">0</div>
							<div className="mt-2 text-sm text-white/80">Happy Clients</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}


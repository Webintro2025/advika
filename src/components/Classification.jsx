"use client"

import { useEffect, useRef } from "react"

export default function Classification() {
	const scroller = useRef(null)
	const autoIndexRef = useRef(0)

	const scroll = (dir = "next") => {
		const el = scroller.current
		if (!el) return
		const width = el.clientWidth
		const offset = dir === "next" ? width * 0.6 : -width * 0.6
		el.scrollBy({ left: offset, behavior: "smooth" })
	}

	const cards = [
		{
			title: "Cream & Onion Makhana",
			desc:
				"Layered with a creamy onion seasoning, this batch of roasted makhana brings a savoury crunch that pairs perfectly with evening tea or light snacking.",
			img: "/Cream onion makhana (2).png",
			gradient: ["rgba(8,56,31,0.92)", "rgba(88,129,87,0.88)"],
		},
		{
			title: "Makhana Biscuits",
			desc:
				"Delicately baked makhana biscuits give a wholesome bite, blending nutty fox nuts with buttery notes for a guilt-free treat.",
			img: "/Makhana Biscuits.png",
			gradient: ["rgba(8,56,31,0.92)", "rgba(174,143,95,0.9)"],
		},
		{
			title: "Mint Masala Makhana",
			desc:
				"Cool mint and bold spices coat every puffed fox nut, delivering an uplifting snack that feels fresh and zesty in every handful.",
			img: "/Mint makhana (1).png",
			gradient: ["rgba(8,56,31,0.92)", "rgba(70,129,102,0.9)"],
		},
		{
			title: "Mix Masala Makhana",
			desc:
				"A signature blend of traditional spices elevates these crunchy makhana pops, making them the ultimate party-time crowd pleaser.",
			img: "/Mix masala makhana (1).png",
			gradient: ["rgba(8,56,31,0.92)", "rgba(180,112,68,0.9)"],
		},
		{
			title: "Pepper & Salt Makhana",
			desc:
				"Simple yet addictive, the balance of cracked pepper and flaky salt keeps these makhana clusters light, crisp, and endlessly snackable.",
			img: "/Pepper salt makhana.png",
			gradient: ["rgba(8,56,31,0.92)", "rgba(135,135,135,0.85)"],
		},
		{
			title: "Peri Peri Makhana",
			desc:
				"Fiery peri peri chillies wrap each fox nut in a smoky heat, creating a bold snack that wakes up the palate instantly.",
			img: "/Peri Peri makhana.png",
			gradient: ["rgba(8,56,31,0.92)", "rgba(205,73,63,0.9)"],
		},
		{
			title: "Tango Tomato Makhana",
			desc:
				"Tangy tomato seasoning swirls with gentle sweetness, giving this makhana mix a vibrant kick reminiscent of classic street-side flavours.",
			img: "/Tango Tomato makhana.png",
			gradient: ["rgba(8,56,31,0.92)", "rgba(220,91,58,0.9)"],
		}
	]

	// auto slide horizontally every 3 seconds
	useEffect(() => {
		const el = scroller.current
		if (!el) return
		const interval = setInterval(() => {
			if (!el) return
			const width = el.clientWidth
			const maxScroll = el.scrollWidth - width
			let nextIndex = autoIndexRef.current + 1
			if (nextIndex * width * 0.6 > maxScroll) {
				nextIndex = 0
				el.scrollTo({ left: 0, behavior: "smooth" })
			} else {
				el.scrollBy({ left: width * 0.6, behavior: "smooth" })
			}
			autoIndexRef.current = nextIndex
		}, 3000)
		return () => clearInterval(interval)
	}, [])

	return (
		<section className="py-16 relative overflow-hidden">
			{/* big animated background using product images */}
			<div className="pointer-events-none absolute inset-0 opacity-20">
				<div className="w-[300%] h-full flex animate-[slideBg_30s_linear_infinite]">
					{[...cards, ...cards].map((c, i) => (
						<div
							key={i}
							className="w-1/3 bg-cover bg-center"
							style={{ backgroundImage: `url(${c.img})` }}
						/>
					))}
				</div>
			</div>

			<div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
					{/* Left intro */}
					<div className="pt-6">
						<div className="text-sm text-green-600 font-medium flex items-center gap-3 mb-4">
							<span className="text-green-500">✦</span>
							Phool Makhana Fox Nut in India
						</div>

						<h2 className="text-4xl lg:text-5xl font-extrabold text-[#08381f] leading-tight mb-6">
							Deals in Raw Makhana, Best Makhana Dealer & Supplier.
						</h2>

						<p className="text-gray-600 max-w-lg mb-8">
							Choose us for reliable, consistent, and premium makhana manufacturing that guarantees quality every time. At Nature to Home Agro Traders, we are a leading makhana manufacturer, specializing in producing high-quality raw makhana.
						</p>

						<div className="flex items-center gap-6">
							<a href="#" className="inline-flex items-center gap-4 bg-[#0f4b2e] text-white px-6 py-3 rounded-full shadow-md hover:opacity-95">
								<span>Send Enquiry</span>
								<span className="inline-flex items-center justify-center bg-[#f6c23e] text-[#0f4b2e] w-9 h-9 rounded-full">➤</span>
							</a>

							<div className="hidden md:flex items-center gap-3 text-green-600">
								<button onClick={() => scroll('prev')} aria-label="prev" className="w-8 h-8 rounded-full border border-green-200 flex items-center justify-center">←</button>
								<button onClick={() => scroll('next')} aria-label="next" className="w-8 h-8 rounded-full border border-green-200 flex items-center justify-center">→</button>
							</div>
						</div>
					</div>

					{/* Right cards */}
					<div>
						<div className="relative">
							<div ref={scroller} className="flex gap-6 overflow-x-auto no-scrollbar pb-4">
								{cards.map((c, idx) => (
									<article
										key={idx}
										className="group relative min-w-[300px] md:min-w-[360px] lg:min-w-[380px]"
									>
										<div className="rounded-2xl overflow-hidden shadow-lg bg-gray-800/80 backdrop-blur">
											<div className="h-72 sm:h-80 lg:h-96 bg-gray-100">
												<img
													src={c.img}
													alt={c.title}
													className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
													onError={(e) => {
														// fallback: keep layout intact with a soft gradient if the image fails loading
														e.currentTarget.style.display = 'none'
														if (e.currentTarget.parentElement) {
															e.currentTarget.parentElement.style.backgroundImage = `linear-gradient(135deg, ${c.gradient[0]}, ${c.gradient[1]})`
														}
													}}
												/>
											</div>
											<div
												className="relative p-6 text-white"
												style={{
													backgroundImage: `linear-gradient(140deg, ${c.gradient[0]}, ${c.gradient[1]}), url(${c.img})`,
													backgroundSize: "cover",
													backgroundPosition: "center",
												}}
											>
												<div className="absolute inset-0 bg-black/25" aria-hidden="true"></div>
												<div className="relative">
													<h3 className="font-semibold text-xl mb-3">{c.title}</h3>
													<p className="text-sm text-white/90 mb-4 leading-relaxed">{c.desc}</p>
													<a
														href="#"
														className="inline-flex items-center gap-2 text-sm font-medium text-[#f6c23e] hover:text-[#fddd8a]"
													>
														<span>View Detail</span>
														<span aria-hidden="true">➝</span>
													</a>
												</div>
											</div>
										</div>
									</article>
								))}
							</div>

							{/* arrows for lg screens (overlay) */}
							<div className="hidden lg:flex absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2">
								<button onClick={() => scroll('prev')} className="w-10 h-10 rounded-full bg-white/90 shadow-md flex items-center justify-center">◀</button>
							</div>
							<div className="hidden lg:flex absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2">
								<button onClick={() => scroll('next')} className="w-10 h-10 rounded-full bg-white/90 shadow-md flex items-center justify-center">▶</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}


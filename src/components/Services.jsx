"use client"

import { motion } from 'framer-motion'

export default function Services() {
	const features = [
		{
			icon: (
				<svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M12 2a10 10 0 100 20 10 10 0 000-20z" fill="#f6c23e" />
					<path d="M16 9l-5 8-3-4" stroke="#08381f" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
				</svg>
			),
			title: "Export Quality",
			desc:
				"Experience the finest Export-Quality Makhana, carefully processed to meet global standards.",
		},
		{
			icon: (
				<svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M12 2a10 10 0 100 20 10 10 0 000-20z" fill="#f6c23e" />
					<path d="M12 7v8M9 10h6" stroke="#08381f" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
				</svg>
			),
			title: "100% Natural",
			desc:
				"Indulge in the purity of 100% natural Makhana, sourced directly from trusted farmers.",
		},
		{
			icon: (
				<svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M12 2a10 10 0 100 20 10 10 0 000-20z" fill="#f6c23e" />
					<path d="M7 12h10M9 16h6" stroke="#08381f" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
				</svg>
			),
			title: "Home Delivery",
			desc:
				"Get Makhana at your doorstep — premium-quality Makhana delivered right to your home.",
		},
		{
			icon: (
				<svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M12 2a10 10 0 100 20 10 10 0 000-20z" fill="#f6c23e" />
					<path d="M12 8v8M8 10h8" stroke="#08381f" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
				</svg>
			),
			title: "Cheapest Price",
			desc:
				"Buy best Makhana and Cashew at the cheapest price. Competitive rates for bulk and retail.",
		},
	]

	const container = {
		hidden: {},
		visible: {
			transition: {
				staggerChildren: 0.08,
			},
		},
	}

	const card = {
		hidden: { opacity: 0, y: 18 },
		visible: { opacity: 1, y: 0 },
		hover: { scale: 1.03, y: -6 },
	}

	const iconVariants = {
		initial: { scale: 1 },
		hover: { scale: 1.06, rotate: 6 },
	}

	return (
		<section className="bg-[#f6f3ee] py-16">
			<div className="max-w-7xl mx-auto px-6 lg:px-8">
				<div className="text-center mb-10">
					<p className="text-sm text-green-700 font-medium">Makhana Manufacturer & Exporter</p>
					<h2 className="text-3xl sm:text-4xl lg:text-4xl font-extrabold text-[#08381f] mt-3">Top Makhana Dealer at Competitive Prices</h2>
					<p className="text-sm text-gray-600 max-w-2xl mx-auto mt-3">White 100 Percent Natural Quality And Healthy Round Shape Makhana, Food Grade Healthy Raw Dried High Protein Round Makhana Flake Broken</p>
					<div className="mx-auto mt-6 w-12 h-1 rounded bg-[#f6c23e]" />
				</div>
				<motion.div
					className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
					variants={container}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.15 }}
				>
					{features.map((f, i) => (
						<motion.div
							key={i}
							className="relative bg-[#0f4b2e] text-white rounded-2xl p-6 pt-14 shadow-lg overflow-hidden"
							variants={card}
							whileHover="hover"
							transition={{ type: 'spring', stiffness: 220, damping: 20 }}
							role="article"
							aria-label={f.title}
						>
							<motion.div className="absolute -top-8 left-1/2 transform -translate-x-1/2" variants={iconVariants} initial="initial" whileHover="hover">
								<div className="w-16 h-16 rounded-full bg-[#f6c23e] flex items-center justify-center shadow-md">
									{f.icon}
								</div>
							</motion.div>

							<h3 className="text-lg font-semibold text-white text-center mt-2 mb-3">{f.title}</h3>
							<div className="mx-auto w-12 h-1 bg-[#f6c23e] rounded mb-4" />
							<p className="text-sm text-white/80 text-center mb-6">{f.desc}</p>

							<div className="flex justify-center">
								<a href="#" className="text-[#f6c23e] inline-flex items-center gap-2 text-sm font-medium">
									<span aria-hidden>→</span>
								</a>
							</div>
						</motion.div>
					))}
				</motion.div>
			</div>
		</section>
	)
}


"use client"

import Image from "next/image"

const Million = () => {
	return (
		<section className="py-12 bg-white">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-10">
				{/* Left: Content */}
				<div className="w-full lg:w-1/2 space-y-4">
					<h2 className="text-3xl md:text-4xl font-bold text-[#08381f]">
						Advika Naturals – Premium Roasted Makhana for GCC Markets
					</h2>
					<p className="text-sm md:text-base text-gray-700 leading-relaxed">
						Advika Naturals is a premium roasted makhana brand positioned for strong
						growth in the GCC market, where demand for healthy, low-calorie,
						plant-based snacks is rising. The brand offers high-quality makhana
						roasted in olive oil and seasoned with gourmet spices, delivering a
						nutritious, clean-label snack free from cholesterol, palm oil,
						artificial additives, and trans fats.
					</p>
					<p className="text-sm md:text-base text-gray-700 leading-relaxed">
						With significant protein, fiber, antioxidants, and essential minerals,
						makhana is promoted as a modern superfood with deep cultural roots in
						India, ideal for at-home, workplace, and on-the-go snacking. Advika
						Naturals differentiates itself through transparent ingredient
						labeling, premium retail packaging, and a strong commitment to consumer
						education and trust.
					</p>
					<p className="text-sm md:text-base text-gray-700 leading-relaxed">
						The GCC’s diverse population and high purchasing power present major
						retail and distribution opportunities, and Advika Naturals offers
						partners sampling support, flexible order options, and marketing
						assistance to become early adopters of a new, innovative snack
						category.
					</p>
				</div>

				{/* Right: Image */}
				<div className="w-full lg:w-1/2 flex justify-center">
					<div className="relative w-full max-w-md aspect-square rounded-3xl overflow-hidden shadow-lg">
						<Image
							src="/aa.jpg"
							alt="Advika Naturals premium roasted makhana"
							fill
							className="object-cover"
							priority
						/>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Million


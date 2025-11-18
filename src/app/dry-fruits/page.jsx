"use client"

import Image from "next/image"
import Link from "next/link"
import dryData from "@/dry.js"

export default function DryFruitsPage() {
	const phone = "917678556015" // change if needed
	const message = encodeURIComponent("Hello, I am interested in your dry fruits.")
	const whatsappUrl = `https://wa.me/${phone}?text=${message}`

	return (
		<section className="py-12 bg-gray-50 min-h-screen relative">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<header className="mb-8 text-center">
					<h1 className="text-3xl sm:text-4xl font-bold text-[#08381f] mb-2">
						Premium Dry Fruits
					</h1>
					<p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
						Explore our curated range of almonds, raisins and cashew kernals.
					</p>
				</header>

				<div className="grid gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
					{dryData.map((item, index) => (
						<div
							key={index}
							className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden flex flex-col"
						>
							<div className="aspect-3/4 bg-gray-100 overflow-hidden">
								<Image
									src={item.image}
									alt={item.name}
									width={400}
									height={533}
									className="w-full h-full object-cover"
								/>
							</div>
							<div className="p-3 sm:p-4 flex-1 flex flex-col">
								<div className="flex items-center justify-between gap-2 mb-1">
									<h3 className="font-semibold text-sm sm:text-base text-[#08381f] line-clamp-2">
										{item.name}
									</h3>
									<Link
										href={`https://wa.me/${phone}?text=${encodeURIComponent(
											`Hi, I am interested in ${item.name}`
										)}`}
										target="_blank"
										rel="noopener noreferrer"
										className="flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-green-500 hover:bg-green-600 flex items-center justify-center text-white"
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 24 24"
											className="w-4 h-4 sm:w-5 sm:h-5"
											fill="currentColor"
										>
											<path d="M20.52 3.48A11.78 11.78 0 0012 .75C5.82.75.75 5.82.75 12c0 2.07.54 4.09 1.57 5.88L.75 23.25l5.52-1.53A11.2 11.2 0 0012 23.25C18.18 23.25 23.25 18.18 23.25 12c0-3.14-1.22-6.08-3.48-8.52zm-8.52 17c-1.8 0-3.56-.48-5.1-1.39l-.37-.22-3.28.91.9-3.19-.24-.39A9.27 9.27 0 012.75 12 9.24 9.24 0 0112 2.75c2.48 0 4.81.97 6.56 2.72A9.24 9.24 0 0121.25 12c0 5.1-4.15 9.25-9.25 9.25zm5.08-6.56c-.28-.14-1.65-.81-1.9-.9-.25-.09-.43-.14-.61.14-.18.28-.7.9-.86 1.08-.16.18-.32.2-.6.07-.28-.14-1.18-.44-2.25-1.41-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.13-.13.28-.32.42-.48.14-.16.18-.28.28-.46.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.84-2.02-.22-.53-.45-.46-.61-.47l-.52-.01c-.18 0-.48.07-.73.34-.25.27-.96.94-.96 2.29 0 1.35.98 2.66 1.12 2.84.14.18 1.94 2.96 4.7 4.15.66.29 1.18.46 1.58.59.66.21 1.25.18 1.72.11.53-.08 1.65-.68 1.89-1.34.23-.66.23-1.22.16-1.34-.07-.12-.25-.19-.53-.33z" />
										</svg>
									</Link>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>

			{/* Floating WhatsApp button */}
			<Link
				href={whatsappUrl}
				target="_blank"
				rel="noopener noreferrer"
				className="fixed bottom-4 right-4 z-50 w-12 h-12 sm:w-14 sm:h-14 bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center justify-center shadow-lg transition-colors"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					className="w-6 h-6 sm:w-7 sm:h-7"
					fill="currentColor"
				>
					<path d="M20.52 3.48A11.78 11.78 0 0012 .75C5.82.75.75 5.82.75 12c0 2.07.54 4.09 1.57 5.88L.75 23.25l5.52-1.53A11.2 11.2 0 0012 23.25C18.18 23.25 23.25 18.18 23.25 12c0-3.14-1.22-6.08-3.48-8.52zm-8.52 17c-1.8 0-3.56-.48-5.1-1.39l-.37-.22-3.28.91.9-3.19-.24-.39A9.27 9.27 0 012.75 12 9.24 9.24 0 0112 2.75c2.48 0 4.81.97 6.56 2.72A9.24 9.24 0 0121.25 12c0 5.1-4.15 9.25-9.25 9.25zm5.08-6.56c-.28-.14-1.65-.81-1.9-.9-.25-.09-.43-.14-.61.14-.18.28-.7.9-.86 1.08-.16.18-.32.2-.6.07-.28-.14-1.18-.44-2.25-1.41-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.13-.13.28-.32.42-.48.14-.16.18-.28.28-.46.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.84-2.02-.22-.53-.45-.46-.61-.47l-.52-.01c-.18 0-.48.07-.73.34-.25.27-.96.94-.96 2.29 0 1.35.98 2.66 1.12 2.84.14.18 1.94 2.96 4.7 4.15.66.29 1.18.46 1.58.59.66.21 1.25.18 1.72.11.53-.08 1.65-.68 1.89-1.34.23-.66.23-1.22.16-1.34-.07-.12-.25-.19-.53-.33z" />
				</svg>
			</Link>
		</section>
	)
}


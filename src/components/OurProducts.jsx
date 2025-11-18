"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import About from "./About"
import Services from "./Services"
import Classification from "./Classification"

export default function OurProducts() {
		const [products, setProducts] = useState([])
		const [loading, setLoading] = useState(true)
		const [error, setError] = useState("")

		useEffect(() => {
			const fetchProducts = async () => {
				try {
					setLoading(true)
					setError("")
					const res = await fetch("/api/product")
					if (!res.ok) {
						throw new Error(`Failed to load products (${res.status})`)
					}
					const data = await res.json()
					setProducts(Array.isArray(data) ? data : [])
				} catch (err) {
					setError(err.message || "Something went wrong while loading products")
				} finally {
					setLoading(false)
				}
			}

			fetchProducts()
		}, [])

		const chunkArray = (arr, size) => {
			const chunks = []
			for (let i = 0; i < arr.length; i += size) {
				chunks.push(arr.slice(i, i + size))
			}
			return chunks
		}

		const reversed = [...products].reverse()
		const chunks = chunkArray(reversed, 8)

		return (
			<section className="py-12 bg-gray-50">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<header className="mb-8 text-center">
						<h2 className="text-3xl sm:text-4xl font-bold text-[#08381f] mb-2">Our Products</h2>
						<p className="text-gray-600 max-w-2xl mx-auto">
							Browse our complete range of makhana products, freshly curated from the database.
						</p>
					</header>

					{loading && (
						<div className="text-center text-gray-500">Loading products...</div>
					)}

					{!loading && error && (
						<div className="text-center text-red-600 text-sm mb-4">{error}</div>
					)}

					{!loading && !error && products.length === 0 && (
						<div className="text-center text-gray-500">No products found.</div>
					)}

					{!loading && !error && products.length > 0 && (
						<div className="space-y-12">
							{chunks.map((group, index) => (
								<div key={index} className="space-y-8">
									<div className="grid gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
										{group.map((product) => {
											const primaryImage = product.images?.[0]?.url
											return (
												<Link
													key={product.id}
													href={`/product/${product.id}`}
													className="block group"
												>
													<article className="bg-white rounded-xl shadow-sm group-hover:shadow-md transition-shadow overflow-hidden flex flex-col h-full">
														<div className="aspect-3/4 sm:aspect-4/5 bg-gray-100 overflow-hidden">
															{primaryImage ? (
																<img
																	src={primaryImage}
																	alt={product.name}
																	className="w-full h-full object-cover"
																/>
															) : (
																<div className="w-full h-full flex items-center justify-center text-sm text-gray-400">
																	No image
																</div>
															)}
														</div>
														<div className="p-3 sm:p-4 flex-1 flex flex-col">
															<h3 className="font-semibold text-lg text-[#08381f] mb-1 line-clamp-1 group-hover:text-[#0f4b2e]">
																{product.name}
															</h3>
															{product.category && (
																<p className="text-xs text-green-600 mb-1">{product.category.name}</p>
															)}
															<div className="mt-auto flex items-center justify-between">
																<span className="font-semibold text-[#0f4b2e]">
																	₹{Number(product.price || 0).toFixed(2)}
																</span>
																<span className="text-xs text-gray-400">View details</span>
															</div>
														</div>
													</article>
												</Link>
											)
										})}
									</div>

									{index === 0 && <About />}
									{index === 1 && <Services />}
									{index === 2 && <Classification />}
								</div>
							))}
						</div>
					)}
				</div>
			</section>
		)
	}


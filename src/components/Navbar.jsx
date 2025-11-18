"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from 'framer-motion'
import CartSidebar from '../components/CartSidebar'
import LoginModal from './LoginModal'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCategories } from '@/store/apiSlice'

export default function Navbar() {
	const [mobileOpen, setMobileOpen] = useState(false)
	const [showCart, setShowCart] = useState(false)

	const [scrolled, setScrolled] = useState(false)
	const [showLogin, setShowLogin] = useState(false)

	// framer-motion variants (kept for reference)
	const navVariants = {
		hidden: { y: -140, opacity: 0 },
		visible: { y: 0, opacity: 1 },
	}

	useEffect(() => {
		const onScroll = () => {
			if (typeof window === 'undefined') return
			setScrolled(window.scrollY > 30)
		}
		window.addEventListener('scroll', onScroll, { passive: true })
		onScroll()
		return () => window.removeEventListener('scroll', onScroll)
	}, [])

	const [productsOpen, setProductsOpen] = useState(false)
	const [mobileProductsOpen, setMobileProductsOpen] = useState(false)
	const closeTimeoutRef = useRef(null)

					const dispatch = useDispatch()
					const categories = useSelector((state) => state.api.categories || [])
					const loadingCategories = useSelector((state) => state.api.categoriesLoading)
					const categoriesError = useSelector((state) => state.api.categoriesError)

	useEffect(() => {
		if (productsOpen && (!categories || categories.length === 0)) {
			dispatch(fetchCategories())
		}
	}, [productsOpen, categories, dispatch])

	useEffect(() => {
		// expose global helper to open cart
		window.openCart = () => setShowCart(true)
		window.closeCart = () => setShowCart(false)
		return () => {
			if (closeTimeoutRef.current) {
				clearTimeout(closeTimeoutRef.current)
			}
			try { delete window.openCart } catch (e) {}
			try { delete window.closeCart } catch (e) {}
		}
	}, [])

	return (
		<header className="w-full">
			{/* Top promo bar */}
			<div className="bg-[#0f4b2e] text-white text-sm">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex items-center justify-between h-10">
						<div className="flex items-center gap-3">
							<span className="inline-block bg-[#0f4b2e]">
								Wholesale prices for bulk buyers.
							</span>
							<span className="hidden sm:inline-block bg-[#f6c23e] text-[#07321a] font-semibold px-3 py-1 rounded-md">
								Quick Quote
							</span>
						</div>
						<div className="hidden sm:flex items-center gap-4">
							<div className="flex items-center gap-2">
								<svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
									<path d="M22 16.92V21a1 1 0 0 1-1.11 1 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2 3.11 1 1 0 0 1 3 2h4.09a1 1 0 0 1 1 .75c.12.66.33 1.3.62 1.9a1 1 0 0 1-.24 1.09L7.91 7.91a16 16 0 0 0 6 6l1.17-1.17a1 1 0 0 1 1.09-.24c.6.29 1.24.5 1.9.62a1 1 0 0 1 .75 1V22z" fill="currentColor" />
								</svg>
								<a href="tel:+917678556015" className="text-white">+91 7678556015</a>
							</div>
							<div className="flex items-center gap-2">
								<svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M4 4h16v16H4z" fill="none" />
									<path d="M22 6.5L12 13 2 6.5V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v.5z" fill="currentColor" />
								</svg>
								<a href="mailto:advikanaturalsllp@gmail.com" className="text-white">advikanaturalsllp@gmail.com</a>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Main navigation (sticky with framer-motion effect on scroll) */}
			<motion.nav
				className={`bg-white w-full left-0 right-0`}
				// when not scrolled, keep the nav slightly lower so it doesn't overlap the top promo bar
				style={{ position: 'fixed', top: scrolled ? 0 : 36, zIndex: 50 }}
				initial={{ y: 0 }}
				animate={
					scrolled
						? { y: [-12, 0], boxShadow: '0px 10px 30px rgba(15,75,46,0.08)', backgroundColor: '#ffffff' }
						: { y: 0, boxShadow: 'none', backgroundColor: 'transparent' }
				}
				transition={{ duration: 0.35, ease: 'easeOut' }}
			>
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex justify-between h-20 items-center">
						<div className="flex items-center gap-6">
							{/* Logo */}
							<a href="/" className="flex items-center gap-3">
								<img src="/logo.jpg" alt="Advika Naturals LLP" className="h-10 w-auto object-contain" />
								<div>
									<span className="block text-lg font-extrabold text-[#0f4b2e]">Advika Naturals LLP</span>
								
								</div>
							</a>

											{/* center links - hidden on small */}
											<div className="hidden lg:flex items-center space-x-4">
												<a href="/" className="text-gray-700 hover:text-[#0f4b2e] flex items-center gap-1">Home</a>
												<a href="/about" className="text-gray-700 hover:text-[#0f4b2e] flex items-center gap-1">About</a>

												{/* Products dropdown - single link that shows a product list on hover/click */}
												<div
													className="relative"
													onMouseEnter={() => {
														if (closeTimeoutRef.current) {
															clearTimeout(closeTimeoutRef.current)
															closeTimeoutRef.current = null
														}
														setProductsOpen(true)
													}}
													onMouseLeave={() => {
														if (closeTimeoutRef.current) {
															clearTimeout(closeTimeoutRef.current)
														}
														closeTimeoutRef.current = setTimeout(() => {
															setProductsOpen(false)
															closeTimeoutRef.current = null
														}, 700)
													}}
												>
													<button
														onClick={() => setProductsOpen((s) => !s)}
														aria-expanded={productsOpen}
														className="flex items-center gap-1 text-gray-700 hover:text-[#0f4b2e]"
													>
														Products <span className="ml-1">▾</span>
													</button>

													{/* dropdown panel */}
													<div
														className={`absolute top-full mt-2 left-0 w-96 bg-white border rounded-md shadow-lg py-3 px-3 z-50 ${productsOpen ? 'block' : 'hidden'}`}
													>
														<ul className="grid grid-cols-1 gap-2 text-sm">
															{loadingCategories && <li className="text-gray-500">Loading...</li>}
															{categoriesError && <li className="text-red-500">{categoriesError}</li>}
															{!loadingCategories && !categoriesError && categories.length === 0 && (
																<li className="text-gray-700">No categories</li>
															)}
															{categories.slice().reverse().map((cat) => (
																<li key={cat.id}>
																	<a href={`/category/${cat.id}`} className="block text-gray-700 px-2 py-1 rounded hover:bg-gray-50">{cat.name}</a>
																</li>
															))}
														</ul>
													</div>
												</div>
<a href="/dry-fruits" className="text-gray-700 hover:text-[#0f4b2e]">Dry Fruits</a>
												<a href="/contact" className="text-gray-700 hover:text-[#0f4b2e]">Contact</a>
											</div>
						</div>

						<div className="flex items-center gap-4">
							{/* Login button (desktop) */}
							<div className="hidden lg:flex items-center gap-2">
								<button onClick={() => setShowLogin(true)} className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-100 text-gray-700">
									<svg className="w-5 h-5 text-[#1B5439]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 12c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm0 2c-3.33 0-10 1.67-10 5v2h20v-2c0-3.33-6.67-5-10-5z" fill="currentColor"/></svg>
									<span className="font-medium">Login</span>
								</button>
							</div>

							{/* Cart button */}
							<div className="ml-3">
								<button onClick={() => setShowCart(true)} className="p-2 rounded-md text-gray-700 hover:bg-gray-100">
									<svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 3h2l.4 2M7 13h10l3-8H6.4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
								</button>
							</div>

							{/* Mobile menu button */}
							<div className="lg:hidden">
								<button onClick={() => setMobileOpen(!mobileOpen)} className="p-2 rounded-md text-gray-700 hover:bg-gray-100">
									<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} /></svg>
								</button>
							</div>
						</div>
					</div>
				</div>

				{/* Mobile menu panel */}
				{mobileOpen && (
					<div className="lg:hidden bg-white border-t">
						<div className="px-4 py-4 space-y-3">
							<a href="/" className="block text-gray-700">Home</a>
							<a href="/about" className="block text-gray-700">About</a>

							{/* Mobile Products accordion */}
							<div>
								<button
									onClick={() => {
										setMobileProductsOpen((s) => !s)
										if (!mobileProductsOpen && (!categories || categories.length === 0)) {
											dispatch(fetchCategories())
										}
									}}
									className="w-full flex items-center justify-between text-gray-700 py-2"
								>
									<span>Products</span>
									<span className="text-sm">{mobileProductsOpen ? '▾' : '▸'}</span>
								</button>
								{mobileProductsOpen && (
									<ul className="mt-2 pl-4 space-y-1">
										{loadingCategories && <li className="text-gray-500">Loading...</li>}
										{categoriesError && <li className="text-red-500">{categoriesError}</li>}
										{!loadingCategories && !categoriesError && categories.length === 0 && (
											<li className="text-gray-700">No categories</li>
										)}
										{categories.slice().reverse().map((cat) => (
											<li key={cat.id}>
												<a href={`/category/${cat.id}`} className="block text-gray-700 px-2 py-1 rounded">{cat.name}</a>
											</li>
										))}
									</ul>
								)}
							</div>

							<a href="/contact" className="block text-gray-700">Contact</a>
							<button onClick={() => setShowLogin(true)} className="block text-gray-700">Login</button>
							<div className="pt-2 border-t mt-2">
								<a href="tel:+917678556015" className="block text-sm text-[#0f4b2e]">+91 7678556015</a>
								<a href="mailto:advikanaturalsllp@gmail.com" className="block text-sm text-[#0f4b2e]">advikanaturalsllp@gmail.com</a>
							</div>
						</div>
					</div>
				)}

				{/* Cart sidebar (mounted at top-level in navbar) */}
				<CartSidebar visible={showCart} onClose={(v) => setShowCart(v)} />
				<LoginModal open={showLogin} onClose={() => setShowLogin(false)} onSuccess={(data) => {
					// optional: trigger UI update after login
					setShowLogin(false)
					// you can add additional behavior here, e.g., refresh user profile
				}} />
			</motion.nav>
			{/* spacer to preserve document flow when nav is fixed (height matches nav bar)
			    If the promo bar above is tall, increase this so content isn't covered. */}
			<div aria-hidden className="h-20" />
		</header>
	)
}


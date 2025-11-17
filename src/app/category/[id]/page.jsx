"use client"

import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'

export default function CategoryPage() {
  const params = useParams()
  const id = Number(params?.id)
  const [products, setProducts] = useState([])
  const [count, setCount] = useState(0)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (!id || Number.isNaN(id)) {
      setError('Invalid category id')
      return
    }

    const abortCtrl = new AbortController()
    async function load() {
      setLoading(true)
      setError(null)
      try {
        const url = `/api/category/${id}/products`
        console.debug('CategoryPage: fetching', { id, url })
        const res = await fetch(url, { signal: abortCtrl.signal })
        if (!res.ok) {
          const txt = await res.text()
          console.debug('CategoryPage: non-ok response', { status: res.status, text: txt })
          throw new Error(`Failed to load (${res.status}) ${txt}`)
        }
        const data = await res.json()
        console.debug('CategoryPage: data', data)
        setProducts(Array.isArray(data.products) ? data.products : [])
        if (typeof data.count === 'number') setCount(data.count)
      } catch (err) {
        if (err.name !== 'AbortError') setError(err.message || 'Error loading products')
      } finally {
        setLoading(false)
      }
    }

    load()
    return () => abortCtrl.abort()
  }, [id])

  if (!id || Number.isNaN(id)) {
    return (
      <div className="p-8">
        <h2 className="text-xl font-semibold">Invalid category</h2>
      </div>
    )
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-2">Products</h1>
      <div className="text-sm text-gray-600 mb-4">Found {loading ? '...' : count} products in this category</div>

      {loading && <div className="text-sm text-gray-500">Loading products...</div>}
      {error && <div className="text-sm text-red-500">{error}</div>}

      {!loading && !error && products.length === 0 && (
        <p>No products found in this category.</p>
      )}

      {!loading && !error && products.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p) => (
            <div key={p.id} className="border rounded-lg p-4 shadow-sm hover:shadow-lg hover:-translate-y-1 transform transition-transform duration-300 bg-white">
                  {p.images && p.images[0] ? (
                    <Link href={`/product/${p.id}`} className="block">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={p.images[0].url} alt={p.name} className="w-full h-[500px] object-cover rounded-md transition-transform duration-300 hover:scale-105 cursor-pointer" />
                    </Link>
                  ) : (
                    <Link href={`/product/${p.id}`} className="block">
                      <div className="w-full h-[500px] bg-gray-100 rounded-md flex items-center justify-center cursor-pointer">No image</div>
                    </Link>
                  )}
              <div className="mt-3 flex items-center justify-between">
                <h2 className="text-lg font-semibold">
                  <Link href={`/product/${p.id}`} className="hover:underline">{p.name}</Link>
                </h2>
                <div className="text-indigo-600 font-bold text-lg">₹{p.price}</div>
              </div>
              <div className="mt-3">
                <button
                  onClick={async () => {
                    try {
                      const res = await fetch('/api/cart', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ productId: p.id, quantity: 1 }),
                      })
                      if (!res.ok) {
                        const txt = await res.text()
                        alert('Failed to add to cart: ' + txt)
                        return
                      }
                      // open cart sidebar and refresh
                      if (window.openCart) window.openCart()
                      if (window.refreshCart) window.refreshCart()
                    } catch (err) {
                      console.error(err)
                      alert('Error adding to cart')
                    }
                  }}
                  className="mt-2 inline-flex items-center gap-2 px-4 py-2 bg-[#0f4b2e] text-white rounded"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

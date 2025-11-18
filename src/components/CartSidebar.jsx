"use client"

import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCart, increaseCartItem, decreaseCartItem, removeCartItem } from '@/store/apiSlice'

export default function CartSidebar({ visible, onClose }) {
  const dispatch = useDispatch()
  const cart = useSelector((state) => state.api.cart || { items: [] })
  const loading = useSelector((state) => state.api.cartLoading)
  const error = useSelector((state) => state.api.cartError)

  useEffect(() => {
    // register global helper to refresh cart
    window.refreshCart = () => dispatch(fetchCart())
    return () => {
      try { delete window.refreshCart } catch (e) {}
    }
  }, [dispatch])

  useEffect(() => {
    if (visible) dispatch(fetchCart())
  }, [visible, dispatch])

  function handleIncrease(item) {
    dispatch(increaseCartItem({ cartItemId: item.id, amount: 1 }))
  }

  function handleDecrease(item) {
    dispatch(decreaseCartItem({ cartItemId: item.id, amount: 1 }))
  }

  function handleRemove(item) {
    dispatch(removeCartItem({ cartItemId: item.id }))
  }

  const items = Array.isArray(cart.items) ? cart.items : []

  return (
    <div className={`fixed inset-y-0 right-0 w-80 bg-white shadow-xl transform transition-transform ${visible ? 'translate-x-0' : 'translate-x-full'}`} style={{ zIndex: 60 }}>
      <div className="p-4 border-b flex items-center justify-between">
        <h3 className="text-lg font-semibold">Your Cart</h3>
        <button onClick={() => onClose && onClose(false)} className="text-gray-600">Close</button>
      </div>
      <div className="p-4 overflow-auto h-full">
        {loading && <div className="text-sm text-gray-500">Loading...</div>}
        {error && <div className="text-sm text-red-500">{error}</div>}
        {!loading && !error && items.length === 0 && <div className="text-sm text-gray-600">Your cart is empty.</div>}

        <ul className="space-y-3">
          {items.map((it) => (
            <li key={it.id} className="flex items-center gap-3">
              
              <div className="flex-1 pl-16">
                <div className="font-medium text-sm">{it.product?.name}</div>
                <div className="text-xs text-gray-500">₹{it.product?.price}</div>
                <div className="mt-2 flex items-center gap-2">
                  <button onClick={() => handleDecrease(it)} className="px-2 py-1 bg-gray-100 rounded">-</button>
                  <div className="text-sm">{it.quantity}</div>
                  <button onClick={() => handleIncrease(it)} className="px-2 py-1 bg-gray-100 rounded">+</button>
                  <button onClick={() => handleRemove(it)} className="ml-4 text-red-500 text-sm">Remove</button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

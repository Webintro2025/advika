
import { createAsyncThunk } from '@reduxjs/toolkit'
import { fetchCart } from './apiSlice'

export const addToCart = createAsyncThunk('api/addToCart', async ({ productId, quantity = 1 }, { rejectWithValue, dispatch }) => {
  try {
    let cartId = null
    if (typeof window !== 'undefined') {
      cartId = localStorage.getItem('cartId')
    }
    const res = await fetch('/api/cart', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ productId, quantity, cartId: cartId ? Number(cartId) : undefined })
    })
    const data = await res.json()
    // If backend returns a new cartId, store it
    if (data && data.cartId && typeof window !== 'undefined') {
      localStorage.setItem('cartId', data.cartId)
    }
    if (!res.ok) return rejectWithValue(data?.error || 'Failed to add to cart')
    // Refresh cart after adding
    dispatch(fetchCart())
    return data
  } catch (err) {
    return rejectWithValue(err.message || 'Network error')
  }
})

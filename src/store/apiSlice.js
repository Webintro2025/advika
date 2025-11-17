import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

// Thunks for fetching commonly used API data
export const fetchCategories = createAsyncThunk('api/fetchCategories', async (_, { rejectWithValue }) => {
  try {
    const res = await fetch('/api/category')
    const data = await res.json()
    if (!res.ok) return rejectWithValue(data?.error || 'Failed to fetch categories')
    return Array.isArray(data) ? data : []
  } catch (err) {
    return rejectWithValue(err.message || 'Network error')
  }
})

export const fetchProducts = createAsyncThunk('api/fetchProducts', async (_, { rejectWithValue }) => {
  try {
    const res = await fetch('/api/product')
    const data = await res.json()
    if (!res.ok) return rejectWithValue(data?.error || 'Failed to fetch products')
    return Array.isArray(data) ? data : []
  } catch (err) {
    return rejectWithValue(err.message || 'Network error')
  }
})

export const fetchProductById = createAsyncThunk('api/fetchProductById', async (id, { rejectWithValue }) => {
  try {
    const res = await fetch(`/api/product/${id}`)
    const data = await res.json()
    if (!res.ok) return rejectWithValue(data?.error || 'Failed to fetch product')
    return data
  } catch (err) {
    return rejectWithValue(err.message || 'Network error')
  }
})

// Cart thunks
export const fetchCart = createAsyncThunk('api/fetchCart', async (_, { rejectWithValue }) => {
  try {
    const res = await fetch('/api/cart')
    const data = await res.json()
    if (!res.ok) return rejectWithValue(data?.error || 'Failed to fetch cart')
    return data
  } catch (err) {
    return rejectWithValue(err.message || 'Network error')
  }
})

export const increaseCartItem = createAsyncThunk('api/increaseCartItem', async ({ cartItemId, amount = 1 }, { rejectWithValue, dispatch }) => {
  try {
    const res = await fetch('/api/cart/increase', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ cartItemId, amount }) })
    const data = await res.json()
    if (!res.ok) return rejectWithValue(data?.error || 'Failed to increase')
    // refresh cart
    dispatch(fetchCart())
    return data
  } catch (err) {
    return rejectWithValue(err.message || 'Network error')
  }
})

export const decreaseCartItem = createAsyncThunk('api/decreaseCartItem', async ({ cartItemId, amount = 1 }, { rejectWithValue, dispatch }) => {
  try {
    const res = await fetch('/api/cart/decrease', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ cartItemId, amount }) })
    const data = await res.json()
    if (!res.ok) return rejectWithValue(data?.error || 'Failed to decrease')
    dispatch(fetchCart())
    return data
  } catch (err) {
    return rejectWithValue(err.message || 'Network error')
  }
})

export const removeCartItem = createAsyncThunk('api/removeCartItem', async ({ cartItemId }, { rejectWithValue, dispatch }) => {
  try {
    const res = await fetch(`/api/cart/remove?cartItemId=${encodeURIComponent(cartItemId)}`, { method: 'DELETE' })
    const data = await res.json().catch(() => ({}))
    if (!res.ok) return rejectWithValue(data?.error || 'Failed to remove')
    dispatch(fetchCart())
    return data
  } catch (err) {
    return rejectWithValue(err.message || 'Network error')
  }
})

// User thunks
export const fetchCurrentUser = createAsyncThunk('api/fetchCurrentUser', async (_, { rejectWithValue }) => {
  try {
    const res = await fetch('/api/auth/me')
    const data = await res.json()
    if (!res.ok) return rejectWithValue(data?.error || 'Failed to fetch user')
    return data
  } catch (err) {
    return rejectWithValue(err.message || 'Network error')
  }
})

const initialState = {
  categories: [],
  categoriesLoading: false,
  categoriesError: null,

  products: [],
  productsLoading: false,
  productsError: null,

  productsById: {},
  // cart
  cart: { items: [] },
  cartLoading: false,
  cartError: null,

  // user
  user: null,
  userLoading: false,
  userError: null,
}

const apiSlice = createSlice({
  name: 'api',
  initialState,
  reducers: {
    clearCategoriesError(state) { state.categoriesError = null },
    clearProductsError(state) { state.productsError = null },
  },
  extraReducers: (builder) => {
    builder
      // categories
      .addCase(fetchCategories.pending, (state) => {
        state.categoriesLoading = true
        state.categoriesError = null
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.categoriesLoading = false
        state.categories = action.payload
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.categoriesLoading = false
        state.categoriesError = action.payload || action.error.message
      })

      // products list
      .addCase(fetchProducts.pending, (state) => {
        state.productsLoading = true
        state.productsError = null
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.productsLoading = false
        state.products = action.payload
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.productsLoading = false
        state.productsError = action.payload || action.error.message
      })

      // product by id
      .addCase(fetchProductById.fulfilled, (state, action) => {
        if (action.payload && action.payload.id) {
          state.productsById[action.payload.id] = action.payload
        }
      })
      // cart
      .addCase(fetchCart.pending, (state) => {
        state.cartLoading = true
        state.cartError = null
      })
      .addCase(fetchCart.fulfilled, (state, action) => {
        state.cartLoading = false
        // expect { items: [...] }
        state.cart = action.payload || { items: [] }
      })
      .addCase(fetchCart.rejected, (state, action) => {
        state.cartLoading = false
        state.cartError = action.payload || action.error.message
      })

      .addCase(increaseCartItem.rejected, (state, action) => {
        state.cartError = action.payload || action.error.message
      })
      .addCase(decreaseCartItem.rejected, (state, action) => {
        state.cartError = action.payload || action.error.message
      })
      .addCase(removeCartItem.rejected, (state, action) => {
        state.cartError = action.payload || action.error.message
      })

      // user
      .addCase(fetchCurrentUser.pending, (state) => {
        state.userLoading = true
        state.userError = null
      })
      .addCase(fetchCurrentUser.fulfilled, (state, action) => {
        state.userLoading = false
        state.user = action.payload || null
      })
      .addCase(fetchCurrentUser.rejected, (state, action) => {
        state.userLoading = false
        state.userError = action.payload || action.error.message
      })
  },
})

export const { clearCategoriesError, clearProductsError } = apiSlice.actions
export default apiSlice.reducer

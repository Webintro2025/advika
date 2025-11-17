import { configureStore } from '@reduxjs/toolkit'
import apiReducer from './apiSlice'

export const store = configureStore({
  reducer: {
    api: apiReducer,
  },
})

// optional: export RootState and AppDispatch for TS/IDE assistance
export default store

import { configureStore } from '@reduxjs/toolkit'
import productSliceReducer, { productSlice } from './productSlice'
import categorySliceReducer, { categorySlice } from './categorySlice'
import bannerSliceReducer, { bannerSlice } from './bannerSlice'

export const store = configureStore({
  reducer: {
    productSlice : productSliceReducer,
    categorySlice : categorySliceReducer,
    bannerSlice : bannerSliceReducer
  },
})
import { configureStore } from '@reduxjs/toolkit'
import filterbar from './counter/filterbar'
import cartReducer from './cart/cartReducer'

export const store = configureStore({
  reducer: {
    filterbar: filterbar,
    cartReducer: cartReducer,
  },
})
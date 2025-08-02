import { createSlice } from '@reduxjs/toolkit'
import { productData as product } from '../../api/productData'

const initialState = {
  producttype: ['quantity'],
  productvalue: [1],
  products: product
}

export const filterbar = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    filteritemtype: (state, action) => {
      state.producttype = action.payload
    },
    filteritems: (state, action) => {
      state.productvalue = action.payload
    },
    removefilteritems: (state, action) => {
      state.productvalue = state.productvalue.filter((item) => item !== action.payload)
    },

  },
})

export const { filteritems, removefilteritems, filteritemtype} = filterbar.actions

export default filterbar.reducer
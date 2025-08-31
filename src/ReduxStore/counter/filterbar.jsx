import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  productLength: null,
  currentCateory: null,
  activefilter: [],
  filters: {
    category: null,
    subcategories: [],
    brands: [],
    features: [],
    condition: 'any',
    rating: null,
    priceRange: [0, 2000],
  },
};

const filterbar = createSlice({
  name: 'filterbar',
  initialState,
  reducers: {
    setFilter: (state, action) => {
      const { key, value } = action.payload;
      state.filters[key] = value;
      state.currentCateory = value;
    },
    toggleArrayFilter: (state, action) => {
      const { key, value } = action.payload;

      if (state.filters[key].includes(value)) {
        state.filters[key] = state.filters[key].filter((v) => v !== value);

        state.activefilter = state.activefilter.filter((item) => item !== value);
      } else {
        state.filters[key].push(value);

        if (!state.activefilter.includes(value)) {
          state.activefilter.push(value);
        }
      }
    },
    resetFilters: (state) => {
      state.filters = { ...initialState.filters }; 
      state.activefilter = [];
    },
    removefilter: (state, action) => {
      const value = action.payload;

      state.activefilter = state.activefilter.filter((item) => item !== value);
      
    },
    getProductLength: (state, action) => {
      state.productLength = action.payload;
    },
  },
});

export const { setFilter, toggleArrayFilter, resetFilters, removefilter, getProductLength } = filterbar.actions;
export default filterbar.reducer;

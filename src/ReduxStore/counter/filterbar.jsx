import { createSlice } from '@reduxjs/toolkit';

const initialState = {
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
      state.filters[key] = value

    },
    toggleArrayFilter: (state, action) => {
      const { key, value } = action.payload;
      if (state.filters[key].includes(value)) {
        state.filters[key] = state.filters[key].filter((v) => v !== value);
      } else {
        state.filters[key].push(value);
        state.activefilter.push(value)
      }
    },
    resetFilters: (state) => {
      state.filters = initialState.filters;
    },
    removefilter: (state, action) => {
      state.activefilter = state.activefilter.filter(item => item !== action.payload)
    }
  },
});

export const { setFilter, toggleArrayFilter, resetFilters, removefilter } = filterbar.actions;
export default filterbar.reducer;

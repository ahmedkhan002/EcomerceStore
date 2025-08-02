import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filters: {
    category: null,
    subcategories: [],
    brands: [],
    features: [],
    condition: 'any',
    rating: null,
    priceRange: [0, 1000],
  },
};

const filterbar = createSlice({
  name: 'filterbar',
  initialState,
  reducers: {
    setFilter: (state, action) => {
      const { key, value } = action.payload;
      state.filters[key] = value;
    },
    toggleArrayFilter: (state, action) => {
      const { key, value } = action.payload;
      if (state.filters[key].includes(value)) {
        state.filters[key] = state.filters[key].filter((v) => v !== value);
      } else {
        state.filters[key].push(value);
      }
    },
    resetFilters: (state) => {
      state.filters = initialState.filters;
    },
  },
});

export const { setFilter, toggleArrayFilter, resetFilters } = filterbar.actions;
export default filterbar.reducer;

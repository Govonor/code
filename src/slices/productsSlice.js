// src/slices/productsSlice.js
import { createSlice } from '@reduxjs/toolkit';

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    products: [],
  },
  reducers: {
    setProducts(state, action) {
      state.products = action.payload;
    },
    addProduct(state, action) {
      state.products.push(action.payload);
    },
  },
});

export const { setProducts, addProduct } = productsSlice.actions;
export default productsSlice.reducer;

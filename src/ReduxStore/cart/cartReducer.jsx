import { createSlice } from '@reduxjs/toolkit';
import { productData as product } from '../../api/productData';
import toast from 'react-hot-toast';

const initialState = {
  cartitems: [],
  saveditems: [],
  orderDetails:[],
  viewitem: null,
};

export const cartReducer = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    movetosaved: (state, action) => {
      const itemId = action.payload.id;
      const item = product.find((p) => p.id === itemId);

      if (item) {
        const exists = state.saveditems.some((saved) => saved.id === itemId);
        if (exists) {
          state.saveditems = state.saveditems.filter((saved) => saved.id !== itemId);
          toast.success('Removed from Saved');
        } else {
          state.saveditems.push({ ...item, quantity: 1 });
          state.cartitems = state.cartitems.filter((c) => c.id !== itemId);
          toast.success('Moved to Saved');
        }
      }
    },

    movetocart: (state, action) => {
      const itemId = action.payload.id;
      const item = product.find((p) => p.id === itemId);

      if (item) {
        const exists = state.cartitems.some((cart) => cart.id === itemId);
        if (!exists) {
          state.cartitems.push({ ...item, quantity: 1 });
          toast.success('Added to Cart');
        }
        state.saveditems = state.saveditems.filter((s) => s.id !== itemId);
      }
    },

    viewitem: (state, action) => {
      const itemId = action.payload.id;
      const item = product.find((p) => p.id === itemId);
      if (item) {
        state.viewitem = item;
      }
    },

    order: (state, action) => {
      if (state.cartitems.length < 1) {
        toast.error('No items in cart');
        return;
      }
      state.orderDetails.push(state.cartitems)
      toast.success('Order placed successfully');
      state.cartitems = []
    },

    removefromcart: (state, action) => {
      const itemId = action.payload.id;
      state.cartitems = state.cartitems.filter((item) => item.id !== itemId);
      toast.success('Removed from Cart');
    },

    increaseQuantity: (state, action) => {
      const item = state.cartitems.find((i) => i.id === action.payload.id);
      if (item) {
        item.quantity += 1;
      }
    },

    decreaseQuantity: (state, action) => {
      const item = state.cartitems.find((i) => i.id === action.payload.id);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
    },

    removeall: (state) => {
      state.cartitems = [];
      toast.success('Cart Cleared');
    },
  },
});

export const {
  movetocart,
  increaseQuantity,
  decreaseQuantity,
  removefromcart,
  movetosaved,
  removeall,
  viewitem,
  order
} = cartReducer.actions;

export default cartReducer.reducer;

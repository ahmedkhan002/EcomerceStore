import { createSlice } from '@reduxjs/toolkit'
import { productData as product } from '../../api/productData';

const initialState = {
    cartitems: [],
    saveditems: [],
    viewitem: null
}
export const cartReducer = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        movetosaved: (state, action) => {
            const itemIndex = product.findIndex(item => item.id === action.payload.id);

            if (itemIndex !== -1) {
                const item = product[itemIndex];
                const exists = state.saveditems.some(saved => saved.id === item.id);
                if (!exists) {
                    state.saveditems.push(item);
                }
                state.cartitems = state.cartitems.filter(item => item.id !== action.payload.id);
            }
        },
        movetocart: (state, action) => {
            const itemIndex = product.findIndex(item => item.id === action.payload.id);
            if (itemIndex !== -1) {
                const item = product[itemIndex];
                state.cartitems.push(item);
                state.saveditems = state.saveditems.filter(item => item.id !== action.payload.id);
            }
        },
        viewitem: (state, action) => {
            const itemIndex = product.findIndex(item => item.id === action.payload.id)
            if (itemIndex !== -1) {
                state.viewitem = product[itemIndex];
            }
        },
        removefromcart: (state, action) => {
            const itemIndex = state.cartitems.findIndex(item => item.id === action.payload.id)
            if (itemIndex !== -1) {
                const item = state.cartitems[itemIndex];
                state.cartitems = state.cartitems.filter(i => i !== item)
            }
        },
        increaseQuantity: (state, action) => {
            const item = state.cartitems.find(i => i.id === action.payload.id);
            if (item) item.quantity += 1;
        },
        decreaseQuantity: (state, action) => {
            const item = state.cartitems.find(i => i.id === action.payload.id);
            if (item && item.quantity > 1) {
                item.quantity -= 1;
            }
        },
        removeall: (state) => {
            state.cartitems = []
        }
    },
})

export const { movetocart, increaseQuantity, decreaseQuantity, removefromcart, movetosaved, removeall, viewitem } = cartReducer.actions

export default cartReducer.reducer
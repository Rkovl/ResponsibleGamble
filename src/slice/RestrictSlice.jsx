import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({ 
    name: 'cart',
    initialState: {
        cart: []
    },
    reducers: {
        addToCart: (state,action)=>{
            state.cart.push(action.payload)
            console.log(state.cart, "cart")
        }
    }
 })
console.log("first")
 export const cartActions = cartSlice.actions

 export default cartSlice.reducer
import { createSlice,nanoid } from '@reduxjs/toolkit'


const initialState = {
    cart:[]
  }
  export const cartSlice = createSlice(
    {  name: "cart",
    initialState,
        reducers: {
            add:(state,action)=>{
              state.cart.push(action.payload)   
             },
             removToCart:(state,action)=>{
              state.cart.push(action.payload)   
             }
            }
          }
        
    
  )
  export const {add,removToCart} = cartSlice.actions

export default cartSlice.reducer
import { createSlice,nanoid } from '@reduxjs/toolkit'


const initialState = {
    cart:[],
    data:[]

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
             },
             addprice:(state,action)=>{
              state.data.push(action.payload)   
             },
            }
          }
        
    
  )
  export const {add,removToCart,addprice} = cartSlice.actions

export default cartSlice.reducer
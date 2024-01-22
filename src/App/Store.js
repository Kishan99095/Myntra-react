import { configureStore } from '@reduxjs/toolkit'
import cartSlice from '../Features/Slice'

export const store = configureStore({
  reducer:{
    cart:cartSlice
  }
    
  }
)
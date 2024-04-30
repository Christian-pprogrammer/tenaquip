import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface ICartState {
  cart: any;
  cartType: 'authenticated_cart' | 'unauthenticated_cart',
  recentCartItem: any
}

const initialState: ICartState = {
  cart: undefined,
  cartType: 'unauthenticated_cart',
  recentCartItem: null
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {

    setCart: (state: ICartState, action: PayloadAction<any>) => {
      state.cart = action.payload.cart
      state.cartType = action.payload.cartType
    },

    setRecentCartItem: (state: ICartState, action: PayloadAction<any>) => {
      state.recentCartItem = action.payload;
    }
  }
})

export const { setCart, setRecentCartItem } = cartSlice.actions;

export default cartSlice.reducer;
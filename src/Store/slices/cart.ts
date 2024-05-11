import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface ICartState {
  cart: any;
  cartType: 'authenticated_cart' | 'unauthenticated_cart',
  recentCartItem: any
}


const loadCartFromLocalStorage = () => {
  try {
    if (typeof localStorage !== 'undefined') {
      const cart = localStorage.getItem("cart");
      return cart ? JSON.parse(cart) : null;
    } else {
      return null; // Handle the case when localStorage is not available
    }
  } catch (error) {
    return null;
  }
};


const initialState: ICartState = {
  cart: loadCartFromLocalStorage(),
  cartType: 'unauthenticated_cart',
  recentCartItem: null
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {

    setCart: (state: ICartState, action: PayloadAction<any>) => {
      state.cart = action.payload?.cart;
      state.cartType = action.payload?.cartType;
      localStorage?.setItem("cart", JSON.stringify(action.payload?.cart))
    },

    clearCart: (state: ICartState) => {
      state.cart = null;
      localStorage?.removeItem("cart");
      localStorage?.removeItem("cart_id");
    },

    setRecentCartItem: (state: ICartState, action: PayloadAction<any>) => {
      state.recentCartItem = action.payload;
    }
  }
})

export const { setCart, setRecentCartItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
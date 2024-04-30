import userReducer from '@/Store/slices/user';
import modalReducer from '@/Store/slices/modal';
import loadingReducer from '@/Store/slices/loading';
import productReducer from '@/Store/slices/product';
import cartReducer from '@/Store/slices/cart';
import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({
  reducer: {
    modal: modalReducer,
    loading: loadingReducer,
    user: userReducer,
    product: productReducer,
    cart: cartReducer
  }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
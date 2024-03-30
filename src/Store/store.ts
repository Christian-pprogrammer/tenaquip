import userReducer from '@/Store/slices/user';
import modalReducer from '@/Store/slices/modal';
import loadingReducer from '@/Store/slices/loading';
import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({
  reducer: {
    modal: modalReducer,
    loading: loadingReducer,
    user: userReducer
  }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
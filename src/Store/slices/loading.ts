import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface IModalState {
  loading: boolean;
}

const initialState: IModalState = {
  loading: false
}

const loadingSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {

    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload
    }
  }
})

export const { setLoading } = loadingSlice.actions;

export default loadingSlice.reducer;
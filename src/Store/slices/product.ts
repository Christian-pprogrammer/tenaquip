import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface IProductState {
  productCategories: Array<MainCategory>,
  productBrands: Array<any>,
}

const initialState: IProductState = {
  productCategories: [],
  productBrands: []
}

const productSlice = createSlice({
  name: 'product',
  initialState: initialState,
  reducers: {
    setProductCategories: (state, action: PayloadAction<Array<any>>) => {
      state.productCategories = action.payload
    }
  }
})

export const { setProductCategories } = productSlice.actions;

export default productSlice.reducer;
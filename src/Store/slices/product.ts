import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface IProductState {
  productCategories: Array<MainCategory>,
  productBrands: Array<any>,
  breadcrumb: any
}

const loadBreadcrumbFromLocalStorage = () => {
  try {
    const breadcrumb = localStorage.getItem("breadcrumb");
    return breadcrumb ? JSON.parse(breadcrumb) : null;
  } catch (error) {

  }
};

const initialState: IProductState = {
  productCategories: [],
  productBrands: [],
  breadcrumb: loadBreadcrumbFromLocalStorage()
}

const productSlice = createSlice({
  name: 'product',
  initialState: initialState,
  reducers: {
    setProductCategories: (state, action: PayloadAction<Array<any>>) => {
      state.productCategories = action.payload
    },
    setBreadcrumb: (state, action: PayloadAction<any>) => {
      state.breadcrumb = action.payload
      localStorage.setItem("breadcrumb", JSON.stringify(action.payload))
    }
  }
})

export const { setProductCategories, setBreadcrumb } = productSlice.actions;

export default productSlice.reducer;
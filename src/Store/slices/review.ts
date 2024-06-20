import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IReviewState {
  product_id: number;
  product_name: string;
  thumbnail: string;
}

const initialState: IReviewState = {
  product_id: 0,
  product_name: "",
  thumbnail: ""
};

const reviewSlice = createSlice({
  name: "review",
  initialState,
  reducers: {
    setReviewData: (state, action: PayloadAction<IReviewState>) => {
      state.product_id = action.payload.product_id;
      state.product_name = action.payload.product_name;
      state.thumbnail = action.payload.thumbnail
    },
  },
});

export const { setReviewData } = reviewSlice.actions;
export default reviewSlice.reducer;

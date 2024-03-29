import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IUserState {
  email: string;
  password: string;
  user: any;
}

const initialState: IUserState = {
  email: '',
  password: '',
  user: null
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
    setUser: (state, action: PayloadAction<any>) => {
      state.user = action.payload
    }
  },
});

export const { setEmail, setPassword } = userSlice.actions;
export default userSlice.reducer;
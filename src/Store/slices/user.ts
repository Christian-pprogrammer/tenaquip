import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IUserState {
  email: string;
  password: string;
  user: any;
  token: any,
}


const loadUserFromLocalStorage = () => {
  try {
    const user = localStorage.getItem("user");
    return user ? JSON.parse(user) : null;
  } catch (error) {
    console.error("Error loading user from localStorage:", error);
    return null;
  }
};

const loadTokenFromLocalStorage = () => {
  try {
    return localStorage.getItem("token") || null;
  } catch (error) {
    console.error("Error loading token from localStorage:", error);
    return null;
  }
};

const initialState: IUserState = {
  email: '',
  password: '',
  user: loadUserFromLocalStorage(),
  token: loadTokenFromLocalStorage()
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
      state.user = action.payload;
      localStorage.setItem("user", JSON.stringify(action.payload))
    },
    setToken: (state, action: PayloadAction<any>) => {
      state.token = action.payload;
      localStorage.setItem("token", action.payload)
    }
  },
});

export const { setEmail, setPassword, setUser, setToken } = userSlice.actions;
export default userSlice.reducer;
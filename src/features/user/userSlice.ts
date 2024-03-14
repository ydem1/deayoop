import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { USER_INIT } from 'constants/userInit'
import { User } from 'types/User'

const storedUser = localStorage.getItem('storedUser');
const initialState = storedUser !== null ? JSON.parse(storedUser) : USER_INIT;

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updata: (state, action: PayloadAction<Omit<User, 'rating' | 'revies'>>) => {
      const updataUser = { ...state, ...action.payload };
      localStorage.setItem('storedUser', JSON.stringify(updataUser));

      return updataUser;
    },
  },
});

export const { updata } = userSlice.actions;

export default userSlice.reducer;
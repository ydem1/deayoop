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
    patch: (state, action: PayloadAction<Omit<User, 'rating' | 'revies'>>) => {
      const updatedUser = { ...state, ...action.payload };
      localStorage.setItem('storedUser', JSON.stringify(updatedUser));

      return updatedUser;
    },
  },
});

export const { patch } = userSlice.actions;

export default userSlice.reducer;
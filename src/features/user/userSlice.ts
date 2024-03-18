import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { USER_INIT } from 'constants/userInit'
import { User } from 'types/User'

const storedUser = localStorage.getItem('storedUser');
const initialState: User = storedUser !== null ? JSON.parse(storedUser) : USER_INIT;

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    patch: (state, action: PayloadAction<Omit<User, 'rating' | 'revies'>>) => {
      const updatedUser = { ...state, ...action.payload };
      localStorage.setItem('storedUser', JSON.stringify(updatedUser));

      return updatedUser;
    },
    updateFullName: (state, action: PayloadAction<string>) => {
      state.fullName = action.payload
    },
    updatePhone: (state, action: PayloadAction<string>) => {
      state.phone = action.payload
    },
    updateEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload
    },
    saveCurrentUser: (state) => {
      localStorage.setItem('storedUser', JSON.stringify(state));
    },
  },
});

export const { updateFullName, updatePhone, updateEmail, saveCurrentUser } = userSlice.actions;

export default userSlice.reducer;
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { USER_INIT } from 'constants/userInit'
import { User } from 'types/User'

const initialState: User = USER_INIT;

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updata: (state, action: PayloadAction<Omit<User, 'rating' | 'revies'>>) => (
      { ...state, ...action.payload }
    ),
  },
});

export const { updata } = userSlice.actions;

export default userSlice.reducer;
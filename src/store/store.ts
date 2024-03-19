import { configureStore } from '@reduxjs/toolkit';
import offerSlice from 'features/offers/offerSlice';
import userSlice from 'features/user/userSlice';

export const store = configureStore({
  reducer: {
    user: userSlice,
    offers: offerSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

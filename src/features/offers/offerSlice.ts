import axios from "axios";
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { Offer } from 'types/Offer';

interface OfferState {
  offers: Offer[];
  loading: boolean,
  error: string;
}

const initialState: OfferState = {
  offers: [],
  loading: false,
  error: '',
};

export const offerSlice = createSlice({
  name: 'offer',
  initialState,
  reducers: {
  },
  extraReducers(builder) {
    builder.addCase(getOffers.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(getOffers.fulfilled, (state, action) => {
      state.offers = action.payload;
      state.loading = false;
    });

    builder.addCase(getOffers.rejected, (state) => {
      state.error = 'Something went wrong try again later';
      state.loading = false;
    });
  },
});

export const getOffers = createAsyncThunk(
  'offers/getOffers',
  () => (
    axios.get('http://deayloop.backend.test.starway.agency:8002/api/offers/all/')
      .then(response => response.data)
  ),
);

export default offerSlice.reducer;
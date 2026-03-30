import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  downloads: [],
};

const downloadSlice = createSlice({
  name: 'downloads',
  initialState,
  reducers: {
    addToDownloads: (state, action) => {
      const incomingId = action.payload.id || action.payload._id || action.payload.title;
      const exists = state.downloads.some(
        (item) => (item.id || item._id || item.title) === incomingId
      );
      if (!exists) {
        state.downloads.push(action.payload);
      }
    },
    removeFromDownloads: (state, action) => {
      state.downloads = state.downloads.filter(
        (item) => (item.id || item._id || item.title) !== action.payload
      );
    },
  },
});

export const { addToDownloads, removeFromDownloads } = downloadSlice.actions;
export default downloadSlice.reducer;

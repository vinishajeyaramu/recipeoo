import { createSlice } from '@reduxjs/toolkit';
import { isVideoItem } from '../utils/collectionAccess';

const getDownloadOwnerKey = () => {
  if (typeof window === 'undefined') return null;

  try {
    const userInfo = JSON.parse(localStorage.getItem('userInfo') || 'null');
    if (!userInfo || userInfo.role === 'admin') return null;

    return userInfo._id || userInfo.email || null;
  } catch {
    return null;
  }
};

const initialState = {
  downloadsByUser: {},
};

const ensureDownloadsByUser = (state) => {
  if (!state.downloadsByUser || typeof state.downloadsByUser !== 'object' || Array.isArray(state.downloadsByUser)) {
    state.downloadsByUser = {};
  }

  return state.downloadsByUser;
};

const downloadSlice = createSlice({
  name: 'downloads',
  initialState,
  reducers: {
    addToDownloads: (state, action) => {
      if (isVideoItem(action.payload)) {
        return;
      }

      const ownerKey = getDownloadOwnerKey();
      if (!ownerKey) {
        return;
      }

      const downloadsByUser = ensureDownloadsByUser(state);
      const currentDownloads = downloadsByUser[ownerKey] || [];
      const incomingId = action.payload.id || action.payload._id || action.payload.title;
      const exists = currentDownloads.some(
        (item) => (item.id || item._id || item.title) === incomingId
      );
      if (!exists) {
        downloadsByUser[ownerKey] = [
          ...currentDownloads,
          {
            ...action.payload,
            itemType: action.payload.itemType || action.payload.type || 'recipe',
          },
        ];
      }
    },
    removeFromDownloads: (state, action) => {
      const ownerKey = getDownloadOwnerKey();
      if (!ownerKey) {
        return;
      }

      const downloadsByUser = ensureDownloadsByUser(state);
      downloadsByUser[ownerKey] = (downloadsByUser[ownerKey] || []).filter(
        (item) => (item.id || item._id || item.title) !== action.payload
      );
    },
  },
});

export const selectCurrentUserDownloads = (state) => {
  const ownerKey = getDownloadOwnerKey();
  if (!ownerKey) {
    return [];
  }

  const downloadsByUser = state.downloads?.downloadsByUser;
  if (!downloadsByUser || typeof downloadsByUser !== 'object' || Array.isArray(downloadsByUser)) {
    return [];
  }

  return downloadsByUser[ownerKey] || [];
};

export const { addToDownloads, removeFromDownloads } = downloadSlice.actions;
export default downloadSlice.reducer;

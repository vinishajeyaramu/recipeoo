export const APP_MESSAGE_EVENT = 'recipeoo:message';

export const showAppMessage = (message) => {
  if (typeof window === 'undefined' || !message) return;

  window.dispatchEvent(
    new CustomEvent(APP_MESSAGE_EVENT, {
      detail: { message },
    })
  );
};

export const getStoredUserInfo = () => {
  try {
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    return userInfo && typeof userInfo === 'object' ? userInfo : null;
  } catch {
    return null;
  }
};

export const isSignedInUser = () => {
  const userInfo = getStoredUserInfo();
  return Boolean(userInfo && userInfo.role !== 'admin');
};

export const getCollectionOwnerKey = () => {
  const userInfo = getStoredUserInfo();
  if (!userInfo || userInfo.role === 'admin') {
    return null;
  }

  return userInfo._id || userInfo.email || null;
};

export const getStoredFavorites = () => {
  if (typeof window === 'undefined') return [];

  const ownerKey = getCollectionOwnerKey();
  if (!ownerKey) {
    return [];
  }

  try {
    const favoritesByUser = JSON.parse(localStorage.getItem('favoritesByUser') || '{}');
    if (!favoritesByUser || typeof favoritesByUser !== 'object' || Array.isArray(favoritesByUser)) {
      return [];
    }

    return Array.isArray(favoritesByUser[ownerKey]) ? favoritesByUser[ownerKey] : [];
  } catch {
    return [];
  }
};

export const saveStoredFavorites = (favorites) => {
  if (typeof window === 'undefined') return;

  const ownerKey = getCollectionOwnerKey();
  if (!ownerKey) {
    return;
  }

  try {
    const favoritesByUser = JSON.parse(localStorage.getItem('favoritesByUser') || '{}');
    const nextFavoritesByUser =
      favoritesByUser && typeof favoritesByUser === 'object' && !Array.isArray(favoritesByUser)
        ? favoritesByUser
        : {};

    nextFavoritesByUser[ownerKey] = Array.isArray(favorites) ? favorites : [];
    localStorage.setItem('favoritesByUser', JSON.stringify(nextFavoritesByUser));
  } catch {
    localStorage.setItem('favoritesByUser', JSON.stringify({ [ownerKey]: favorites || [] }));
  }
};

export const requireSignedInUser = (
  message = 'Please sign in to continue adding favorites or downloads.'
) => {
  if (isSignedInUser()) {
    return true;
  }

  showAppMessage(message);
  return false;
};

export const isVideoItem = (item) =>
  item?.itemType === 'video' || item?.type === 'video';

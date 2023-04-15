import storage from 'redux-persist/lib/storage';

export const contactsPersistConfig = {
  key: 'contacts',
  storage,
  blacklist: 'filter',
};

import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';

import { contactsPersistConfig } from './constants';

import { contactsReducer } from './contactsSlice';
import { filterReducer } from './filterSlice';

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});

export const persistedReducer = persistReducer(
  contactsPersistConfig,
  rootReducer
);

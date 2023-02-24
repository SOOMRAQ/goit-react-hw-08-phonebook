import { contactsReducer } from './contactsSlice';
import { filterReducer } from './filterSlice';
import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './authSlice';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const middleware = getDefaultMiddleware => {
  return getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  });
};

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: persistReducer(persistConfig, filterReducer),
    auth: persistReducer(persistConfig, authReducer),
  },
  middleware,
});

export const persistor = persistStore(store);

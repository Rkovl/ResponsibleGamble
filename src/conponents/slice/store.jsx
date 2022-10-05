import { configureStore } from '@reduxjs/toolkit'
import GambleSlice from './GambleSlice'
import RestrictSlice from './RestrictSlice'

import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'

import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
}

const persistGambleReducer = persistReducer(persistConfig, GambleSlice)
const persistRestrictSlice = persistReducer(persistConfig, RestrictSlice)

export default configureStore({
  reducer: {
    main: persistGambleReducer,
    restrict: persistRestrictSlice
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
})
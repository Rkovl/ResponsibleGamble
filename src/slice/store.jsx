import { configureStore } from '@reduxjs/toolkit'
import GambleSlice from './GambleSlice'
import RestrictSlice from './RestrictSlice'


export default configureStore({
  reducer: {
    main: GambleSlice,
    restrict: RestrictSlice
  },
})
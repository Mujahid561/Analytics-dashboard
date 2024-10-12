
import { configureStore } from '@reduxjs/toolkit'
import dataReducer from './DashboardReducer'

export const store = configureStore({
  reducer: {
    dataReducer: dataReducer,
  },
})
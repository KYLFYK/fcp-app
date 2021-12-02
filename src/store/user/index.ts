import { combineReducers } from '@reduxjs/toolkit'
import userProfileReducer from './reducers/profileSlice'

export const userReducers = combineReducers({
  profile: userProfileReducer,
})

import { combineReducers } from '@reduxjs/toolkit'
import theoryReducerReducer from './reducers/theoryTestsSlice'

export const testsReducers = combineReducers({
  theory: theoryReducerReducer,
})

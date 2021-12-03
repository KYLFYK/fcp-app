import { combineReducers, Reducer } from '@reduxjs/toolkit'
import { userReducers } from './user'
import { testsReducers } from './tests'

const appReducer = combineReducers({
  userReducers,
  testsReducers,
})

export type RootCombine = ReturnType<typeof appReducer>

const rootReducer: Reducer = (state: RootCombine, action) => {
  if (action.type === 'LOG_OUT') {
    return appReducer(undefined, action)
  }

  return appReducer(state, action)
}

export default rootReducer

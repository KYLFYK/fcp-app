import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import rootReducer, { RootCombine } from './index'
import createSagaMiddleware from 'redux-saga'
import rootSaga from '../saga/index'
import { persistStore } from 'redux-persist'
import thunk from 'redux-thunk'

const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
  reducer: { rootReducer },
  middleware: [sagaMiddleware, thunk],
})

sagaMiddleware.run(rootSaga)

export type AppDispatch = typeof store.dispatch
export type RootState = {
  rootReducer: RootCombine
}

export const persistedStore = persistStore(store)
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

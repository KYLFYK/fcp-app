import { takeLeading } from 'redux-saga/effects'

function* loadUserData(): Generator {}

export function* emptyWorker(): Generator {
  yield takeLeading('user/empty', loadUserData)
}

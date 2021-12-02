import { all, call, spawn } from 'redux-saga/effects'
import { message } from 'antd'
import { emptyWorker } from './empty/emptyWorker'

function* rootSaga(): Generator {
  const sagas = [emptyWorker]

  yield all(
    sagas.map((saga) =>
      spawn(function* () {
        while (true) {
          try {
            yield call(saga)
            break
          } catch (e) {
            message.error(`Error ${JSON.stringify(e)}`).then()
            console.log(e)
          }
        }
      })
    )
  )
}

export default rootSaga

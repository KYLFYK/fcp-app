import React, { Fragment } from 'react'
import { render } from 'react-dom'
import { App } from './app'
import { store } from './store/store'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

render(
  <Fragment>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </Fragment>,
  document.getElementById('root')
)

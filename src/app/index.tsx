import React, { FC } from 'react'
import './App.less'
import { UnityApp } from '../pages/unity-app'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { addUrlPath } from '../functions/addUrlPath'
import { Dashboard } from '../pages/dashboard'

export const App: FC = () => {
  return (
    <div className={'App'}>
      <BrowserRouter>
        <Switch>
          <Route exact path={addUrlPath('/')} component={Dashboard} />
          <Route path={addUrlPath('/unity')} component={UnityApp} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

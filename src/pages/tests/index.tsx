import { FC } from 'react'
import { Switch, Route } from 'react-router-dom'
import { addUrlPath } from '../../functions/addUrlPath'
import { TestsList } from './TestsList'
import { TestPageRouted } from './TestPage'

export const Tests: FC = () => {
  return (
    <Switch>
      <Route exact path={addUrlPath('/tests')} component={TestsList} />
      <Route
        exact
        path={addUrlPath('/tests/:testId')}
        component={TestPageRouted}
      />
    </Switch>
  )
}

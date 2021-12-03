import { FC } from 'react'
import {
  NavLink,
  Redirect,
  RouteComponentProps,
  withRouter,
} from 'react-router-dom'
import { addUrlPath } from '../../functions/addUrlPath'
import { useAppSelector } from '../../store/store'
import { Breadcrumb } from 'antd'
import { Timer } from './Timer'
import moment from 'moment'
import { Questions } from './Questions'

import styles from './Tests.module.scss'

interface RouteProps {
  testId: string
}

interface Props extends RouteProps {}

const TestPage: FC<RouteComponentProps<Props>> = ({ match }) => {
  const thisTest = useAppSelector(
    (state) =>
      state.rootReducer.testsReducers.theory.list.filter(
        (test) => test.id === match.params.testId
      )[0]
  )

  if (!match.params.testId || !match.params.testId.length || !thisTest) {
    return <Redirect to={addUrlPath('/tests')} />
  }

  return (
    <div className={styles.wrapper}>
      <Breadcrumb>
        <Breadcrumb.Item>Главная</Breadcrumb.Item>
        <Breadcrumb.Item>Теория</Breadcrumb.Item>
        <Breadcrumb.Item>Тесты</Breadcrumb.Item>
        <Breadcrumb.Item>
          <NavLink to={addUrlPath(`/tests/${thisTest.id}`)}>
            {thisTest.description}
          </NavLink>
        </Breadcrumb.Item>
      </Breadcrumb>
      <span className={`${styles.title} ${styles.ltlMargin}`}>
        {thisTest.description}
      </span>
      <Timer startFrom={moment().toISOString()} />
      <p className={styles.testDesc}>{thisTest.testDescription}</p>
      <Questions task={thisTest} />
    </div>
  )
}

export const TestPageRouted = withRouter(TestPage)

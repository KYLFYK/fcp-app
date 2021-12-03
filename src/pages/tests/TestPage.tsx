import { FC, useState } from 'react'
import {
  NavLink,
  Redirect,
  RouteComponentProps,
  withRouter,
} from 'react-router-dom'
import { addUrlPath } from '../../functions/addUrlPath'
import { useAppSelector } from '../../store/store'
import { Breadcrumb, Button, Result } from 'antd'
import { Timer } from './Timer'
import moment from 'moment'
import { Questions } from './Questions'

import styles from './Tests.module.scss'

interface RouteProps {
  testId: string
}

interface Props extends RouteProps {}

export interface TaskStatusType {
  completed: boolean
  result: number
  success: boolean
}

const TestPage: FC<RouteComponentProps<Props>> = ({ match }) => {
  const thisTest = useAppSelector(
    (state) =>
      state.rootReducer.testsReducers.theory.list.filter(
        (test) => test.id === match.params.testId
      )[0]
  )

  const [status, setStatus] = useState<TaskStatusType>({
    completed: thisTest.questions.length === 0,
    result: 0,
    success: false,
  })

  const tryAgain = () => {
    setStatus({
      completed: false,
      result: 0,
      success: false,
    })
  }

  if (!thisTest) {
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
      {!status.completed && (
        <>
          <span className={`${styles.title} ${styles.ltlMargin}`}>
            {thisTest.description}
          </span>
          <Timer startFrom={moment().toISOString()} />
          <p className={styles.testDesc}>{thisTest.testDescription}</p>
          <Questions setStatus={setStatus} task={thisTest} />
        </>
      )}
      {status.completed && (
        <div className={styles.completed}>
          <Result
            status={thisTest.result >= 70 ? 'success' : 'error'}
            title={thisTest.result >= 70 ? 'Тест пройден!' : 'Тест не пройден'}
            subTitle={
              thisTest.result >= 70
                ? `Вы прекрасно справились с заданием, так держать! Результат: ${thisTest.result} из 100 баллов`
                : `Попробуйте улучшить свои знания и пройти тест еще раз. Результат: ${thisTest.result} из 100 баллов`
            }
            extra={[
              <NavLink to={addUrlPath('/tests')} key={'back'}>
                <Button type="primary" key="console">
                  Вернуться к тестам
                </Button>
              </NavLink>,
              <div
                key={'repeat'}
                style={{
                  display: 'inline-block',
                }}
              >
                {thisTest.questions.length > 0 && (
                  <Button onClick={tryAgain}>Повторить попытку</Button>
                )}
              </div>,
            ]}
          />
        </div>
      )}
    </div>
  )
}

export const TestPageRouted = withRouter(TestPage)

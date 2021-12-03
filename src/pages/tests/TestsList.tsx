import { FC } from 'react'
import { useAppSelector } from '../../store/store'
import { Breadcrumb } from 'antd'
import { NavLink } from 'react-router-dom'
import { addUrlPath } from '../../functions/addUrlPath'
import { TaskCard } from '../dashboard/TaskCard'

import styles from './Tests.module.scss'

export const TestsList: FC = () => {
  const tests = useAppSelector(
    (state) => state.rootReducer.testsReducers.theory.list
  )

  return (
    <div className={styles.wrapper}>
      <Breadcrumb>
        <Breadcrumb.Item>Главная</Breadcrumb.Item>
        <Breadcrumb.Item>Теория</Breadcrumb.Item>
        <Breadcrumb.Item>
          <NavLink to={addUrlPath('/tests')}>Тесты</NavLink>
        </Breadcrumb.Item>
      </Breadcrumb>
      <span className={styles.title}>Тесты</span>
      <div className={styles.testsWrapper}>
        {tests.map((test, index) => (
          <TaskCard
            key={index}
            title={''}
            withoutTitle
            description={test.description}
            tags={test.tags}
            url={`/tests/${test.id}`}
            imgUrl={test.imgUrl}
            width={260}
          />
        ))}
      </div>
    </div>
  )
}

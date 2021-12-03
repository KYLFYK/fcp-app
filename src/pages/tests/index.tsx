import { FC } from 'react'
import { Breadcrumb } from 'antd'
import { NavLink } from 'react-router-dom'
import { addUrlPath } from '../../functions/addUrlPath'

import styles from './Tests.module.scss'

export const Tests: FC = () => {
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
    </div>
  )
}

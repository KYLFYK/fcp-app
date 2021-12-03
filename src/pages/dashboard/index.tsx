import { FC } from 'react'
import { MainCards } from './MainCards'
import { AddedTasks } from './AddedTasks'

import styles from './Dashboard.module.scss'

export const Dashboard: FC = () => {
  return (
    <div className={styles.wrapper}>
      <MainCards />
      <AddedTasks />
    </div>
  )
}

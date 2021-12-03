import { FC } from 'react'
import { NavLink } from 'react-router-dom'

import styles from './AdditionalMenu.module.scss'
import { addUrlPath } from '../functions/addUrlPath'

export const AdditionalMenu: FC = () => {
  return (
    <div className={styles.wrapper}>
      <NavLink className={styles.link} to={addUrlPath('/')}>
        Помощь
      </NavLink>
      <NavLink className={styles.link} to={addUrlPath('/')}>
        Настройки
      </NavLink>
      <NavLink className={styles.link} to={addUrlPath('/')}>
        Выход
      </NavLink>
    </div>
  )
}

import { FC } from 'react'
import {
  SearchOutlined,
  QuestionCircleOutlined,
  BellOutlined,
} from '@ant-design/icons'

import styles from './Topbar.module.scss'
import { Badge } from 'antd'

export const Topbar: FC = () => {
  return (
    <div className={styles.wrapper}>
      <span className={styles.title}>
        Образовательная платформа операторов БПЛА РОССЕТИ
      </span>
      <div className={styles.settings}>
        <div className={styles.button}>
          <SearchOutlined />
        </div>
        <div className={styles.button}>
          <QuestionCircleOutlined />
        </div>
        <div className={styles.button}>
          <Badge className={styles.badge} count={25} />
          <BellOutlined />
        </div>
      </div>
    </div>
  )
}

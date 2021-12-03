import { FC } from 'react'

import styles from './UserInfo.module.scss'
import { Avatar } from 'antd'

export const UserInfo: FC = () => {
  return (
    <div className={styles.wrapper}>
      <Avatar
        style={{
          backgroundColor: '#7265e6',
          verticalAlign: 'middle',
        }}
        size={64}
        gap={4}
      >
        UN
      </Avatar>
      <div className={styles.info}>
        <span className={styles.name}>Алексеев Алексей</span>
        <span className={styles.role}>Оператор БПЛА</span>
      </div>
    </div>
  )
}

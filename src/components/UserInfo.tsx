import { FC } from 'react'
import { Avatar } from 'antd'

import styles from './UserInfo.module.scss'

import userImage from '../assets/thierry-lemaitre-4xXZ1dCfbwA-unsplash.jpg'

export const UserInfo: FC = () => {
  return (
    <div className={styles.wrapper}>
      <Avatar
        style={{
          backgroundColor: '#7265e6',
          verticalAlign: 'middle',
        }}
        src={userImage}
        size={80}
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

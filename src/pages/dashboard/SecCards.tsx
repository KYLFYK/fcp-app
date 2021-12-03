import { FC } from 'react'
import { Card } from 'antd'

import styles from './Dashboard.module.scss'

export const SecCards: FC = () => {
  return (
    <div className={styles.secCards}>
      <Card title="Награды">
        <div className={styles.secCardImage}>
          <img
            alt="example"
            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
          />
        </div>
      </Card>
      <Card title="Оценки">
        <div className={styles.secCardImage}>
          <img
            alt="example"
            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
          />
        </div>
      </Card>
      <Card title="Уровень подготовки">
        <div className={styles.secCardImage}>
          <img
            alt="example"
            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
          />
        </div>
      </Card>
    </div>
  )
}

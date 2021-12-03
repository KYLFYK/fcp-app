import { FC } from 'react'
import { Badge, Card } from 'antd'
import { SecCards } from './SecCards'

import styles from './Dashboard.module.scss'

export const MainCards: FC = () => {
  return (
    <div className={styles.cards}>
      <Card
        title="Прогресс обучения"
        style={{
          flexBasis: '50%',
        }}
        bordered={false}
        bodyStyle={{
          height: '100%',
        }}
      >
        <div className={styles.cardContent}>
          <div className={styles.cardImage}>
            <img
              alt="example"
              src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
            />
          </div>
          <div className={styles.cardStats}>
            <div className={styles.statElem}>
              <Badge color={'blue'} text={'Учебник'} />
              <span className={styles.percent}>22%</span>
            </div>
            <div className={styles.statElem}>
              <Badge color={'yellow'} text={'Тесты'} />
              <span className={styles.percent}>89%</span>
            </div>
            <div className={styles.statElem}>
              <Badge color={'green'} text={'Практика'} />
              <span className={styles.percent}>29%</span>
            </div>
          </div>
        </div>
      </Card>
      <SecCards />
    </div>
  )
}

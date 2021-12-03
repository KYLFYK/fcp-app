import { FC } from 'react'
import { Card } from 'antd'

import styles from './Dashboard.module.scss'
import img1 from '../../assets/achievments.jpg'
import img2 from '../../assets/results.jpg'
import img3 from '../../assets/mainAchieve.jpg'

export const SecCards: FC = () => {
  return (
    <div className={styles.secCards}>
      <Card title="Награды">
        <div className={styles.secCardImage}>
          <img alt="example" src={img1} />
        </div>
      </Card>
      <Card title="Оценки">
        <div className={styles.secCardImage}>
          <img alt="example" src={img2} />
        </div>
      </Card>
      <Card title="Уровень подготовки">
        <div className={styles.secCardImage}>
          <img alt="example" src={img3} />
        </div>
      </Card>
    </div>
  )
}

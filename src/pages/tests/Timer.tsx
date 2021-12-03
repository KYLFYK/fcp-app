import { FC } from 'react'
import Moment from 'react-moment'

import styles from './Tests.module.scss'

interface Props {
  startFrom: string
}

export const Timer: FC<Props> = ({ startFrom }) => {
  return (
    <div className={styles.timer}>
      <Moment
        duration={startFrom}
        durationFromNow
        interval={1000}
        format={'HH:mm:ss'}
      />
    </div>
  )
}

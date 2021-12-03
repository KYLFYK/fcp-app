import { FC } from 'react'
import { NavLink } from 'react-router-dom'
import { addUrlPath } from '../../functions/addUrlPath'
import { RightOutlined } from '@ant-design/icons'
import { TaskCard } from './TaskCard'

import styles from './Dashboard.module.scss'

export const AddedTasks: FC = () => {
  return (
    <div className={styles.tasks}>
      <span className={styles.tasksTitle}>Назначенные задания</span>
      <div className={styles.tasksCards}>
        <TaskCard
          url={'/unity'}
          imgUrl={
            'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png'
          }
          title={'Практика'}
          width={260}
          description={'Взлёт и посадка'}
          tags={[
            {
              text: 'Назначено',
              color: '#1890FF',
            },
          ]}
        />
        <TaskCard
          url={'/unity'}
          imgUrl={
            'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png'
          }
          title={'Тест'}
          width={260}
          description={'Основы управления летательными аппаратами'}
          tags={[
            {
              text: 'Назначено 23:29:29',
              color: '#FF7875',
            },
          ]}
        />
        <NavLink
          to={addUrlPath('/tasks')}
          style={{
            display: 'flex',
            gap: '12px',
            alignItems: 'center',
          }}
        >
          <RightOutlined />
          Все задания
        </NavLink>
      </div>
    </div>
  )
}

import { FC } from 'react'
import { Breadcrumb } from 'antd'
import { NavLink } from 'react-router-dom'
import { addUrlPath } from '../../functions/addUrlPath'
import { TaskCard } from '../dashboard/TaskCard'

import styles from './Tasks.module.scss'
import img1 from '../../assets/unsplash_8erBzivCEJU.jpg'
import img2 from '../../assets/unsplash_92OQdTVMMck.jpg'
import img3 from '../../assets/unsplash_Q9A52B2k770.jpg'

export const Tasks: FC = () => {
  return (
    <div className={styles.wrapper}>
      <Breadcrumb>
        <Breadcrumb.Item>Главная</Breadcrumb.Item>
        <Breadcrumb.Item>
          <NavLink to={addUrlPath('/tasks')}>Назначенные задания</NavLink>
        </Breadcrumb.Item>
      </Breadcrumb>
      <span className={styles.title}>Назначенные задания</span>
      <div className={styles.tasks}>
        <TaskCard
          title={'Практика'}
          url={'/unity'}
          width={260}
          imgUrl={img3}
          tags={[
            {
              color: '#52C41A',
              text: 'Выполнено',
            },
            {
              color: '#FFA940',
              text: '80',
            },
          ]}
          description={'Возврат домой'}
        />
        <TaskCard
          title={'Практика'}
          url={'/unity'}
          width={260}
          imgUrl={img2}
          tags={[
            {
              color: '#1890FF',
              text: 'Назначено',
            },
          ]}
          description={'Взлет и посадка'}
        />
        <TaskCard
          title={'Тест'}
          url={'/tests'}
          width={260}
          imgUrl={img1}
          tags={[
            {
              color: '#FF7875',
              text: 'Назначено 23:29:29',
            },
          ]}
          description={'Основы управления летательными аппаратами'}
        />
      </div>
    </div>
  )
}

import { FC } from 'react'
import { addUrlPath } from '../../functions/addUrlPath'
import { Badge, Card } from 'antd'
import { NavLink } from 'react-router-dom'

import styles from './Dashboard.module.scss'

interface Tag {
  color: string
  text: string
}

interface Props {
  title: string
  url: string
  width: number
  imgUrl: string
  tags: Tag[]
  description: string
  withoutTitle?: boolean
}

export const TaskCard: FC<Props> = ({
  title,
  url,
  width,
  imgUrl,
  tags,
  description,
  withoutTitle,
}) => {
  return (
    <NavLink to={addUrlPath(url)} className={styles.emptyCard}>
      <Card
        title={!withoutTitle ? title : undefined}
        style={{
          width: width,
        }}
        headStyle={{
          display: withoutTitle ? 'none' : '',
        }}
      >
        <div className={styles.image}>
          <img alt="example" src={imgUrl} />
        </div>
        <span className={styles.description}>{description}</span>
        <div className={styles.tags}>
          {tags.map((tag, index) => (
            <Badge
              key={index}
              className="site-badge-count-109"
              count={tag.text}
              style={{ backgroundColor: tag.color }}
            />
          ))}
        </div>
      </Card>
    </NavLink>
  )
}

import { FC } from 'react'
import { NavLink } from 'react-router-dom'
import { addUrlPath } from '../../functions/addUrlPath'

export const Dashboard: FC = () => {
  return (
    <div>
      Dashboard
      <NavLink to={addUrlPath('/unity')}>Go to unity</NavLink>
    </div>
  )
}

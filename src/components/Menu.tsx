import { FC, useEffect, useState } from 'react'
import { Menu as MenuBlock } from 'antd'
import { NavLink } from 'react-router-dom'
import { addUrlPath } from '../functions/addUrlPath'

const { SubMenu } = MenuBlock

export const Menu: FC = () => {
  const [selectedKeys, setSelectedKeys] = useState<string[]>([
    window.location.pathname,
  ])

  useEffect(() => {
    setSelectedKeys([window.location.pathname])

    //  eslint-disable-next-line
  }, [window.location.pathname])

  return (
    <MenuBlock
      style={{ width: 256 }}
      defaultOpenKeys={[
        addUrlPath('/theory'),
        addUrlPath('/practice'),
        addUrlPath('/exam'),
      ]}
      defaultSelectedKeys={selectedKeys}
      mode={'inline'}
      theme={'light'}
    >
      <MenuBlock.Item key={addUrlPath('')}>
        <NavLink to={addUrlPath('')}>Главная</NavLink>
      </MenuBlock.Item>
      <MenuBlock.Item key={addUrlPath('/tasks')}>
        <NavLink to={addUrlPath('/tasks')}>Назначенные задания</NavLink>
      </MenuBlock.Item>
      <SubMenu key={addUrlPath('/theory')} title="Теория">
        <MenuBlock.Item key={addUrlPath('/learn')}>
          <NavLink to={addUrlPath('/learn')}>Учебник</NavLink>
        </MenuBlock.Item>
        <MenuBlock.Item key={addUrlPath('/tests')}>
          <NavLink to={addUrlPath('/tests')}>Тесты</NavLink>
        </MenuBlock.Item>
        <MenuBlock.Item key={addUrlPath('/docs')}>
          <NavLink to={addUrlPath('/docs')}>Нормативные акты</NavLink>
        </MenuBlock.Item>
      </SubMenu>
      <SubMenu key={addUrlPath('/practice')} title="Практика">
        <MenuBlock.Item key={addUrlPath('/practice/learn')}>
          <NavLink to={addUrlPath('/practice/learn')}>Обучение</NavLink>
        </MenuBlock.Item>
        <MenuBlock.Item key={addUrlPath('/practice/prepare')}>
          <NavLink to={addUrlPath('/practice/prepare')}>Подготовка</NavLink>
        </MenuBlock.Item>
      </SubMenu>
      <SubMenu key={addUrlPath('/exam')} title="Экзамен">
        <MenuBlock.Item key="5">Option 3</MenuBlock.Item>
        <MenuBlock.Item key="6">Option 4</MenuBlock.Item>
      </SubMenu>
      <MenuBlock.Item key={addUrlPath('/grade')}>
        <NavLink to={addUrlPath('/grade')}>Критерии оценок</NavLink>
      </MenuBlock.Item>
    </MenuBlock>
  )
}

import React, { FC } from 'react'
import { UnityApp } from '../pages/unity-app'
import { Route, Switch } from 'react-router-dom'
import { addUrlPath } from '../functions/addUrlPath'
import { Dashboard } from '../pages/dashboard'
import { Menu } from '../components/Menu'
import { Layout } from 'antd'
import { Topbar } from '../components/Topbar'
import { UserInfo } from '../components/UserInfo'
import { AdditionalMenu } from '../components/AdditionalMenu'
import { Tasks } from '../pages/tasks'

import './App.less'
import { Tests } from '../pages/tests'

const { Header, Sider, Content } = Layout

export const App: FC = () => {
  return (
    <div className={'App'}>
      <Layout
        style={{
          width: '100%',
          height: '100%',
        }}
      >
        <Header
          style={{
            backgroundColor: '#ffffff',
            borderBottom: '1px solid #F0F0F0',
          }}
        >
          <Topbar />
        </Header>
        <Layout>
          <Sider
            width={256}
            theme={'light'}
            style={{
              overflowY: 'auto',
            }}
          >
            <UserInfo />
            <Menu />
            <AdditionalMenu />
          </Sider>
          <Content
            style={{
              height: '100%',
              overflowY: 'auto',
              paddingTop: '10px',
              paddingLeft: '42px',
              paddingBottom: '30px',
              paddingRight: '42px',
              backgroundColor: '#FAFAFA',
            }}
          >
            <Switch>
              <Route exact path={addUrlPath('/')} component={Dashboard} />
              <Route path={addUrlPath('/unity')} component={UnityApp} />
              <Route path={addUrlPath('/tasks')} component={Tasks} />
              <Route path={addUrlPath('/tests')} component={Tests} />
            </Switch>
          </Content>
        </Layout>
      </Layout>
    </div>
  )
}

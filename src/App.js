import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import logo from './logo.svg';
import { Button, Divider } from 'antd';
import './App.less';
import { Layout , Menu, Breadcrumb} from 'antd';
import Home from './components/home/Home';
import About from './components/about/About';
import Movie from './components/movie/Movie';
import One from './router/router'

const {
  Header, Footer, Sider, Content,
} = Layout;
class App extends Component {
  render() {
    return (
      <div className='App'> 
      <Router>
        <Layout className="layout">
          <Header>
            <Menu
              theme="light"
              mode="horizontal"
              defaultSelectedKeys={['1']}
              style={{ lineHeight: '64px' }}
              >
              <Menu.Item key='1'><Link to='/'>首页</Link></Menu.Item>
              <Menu.Item key='2'><Link to='/movie/in_theaters'>电影</Link></Menu.Item>
              <Menu.Item key='3'><Link to='/about'>关于</Link></Menu.Item>
            </Menu>
          </Header>
          <Content >
              <Route exact path='/' component={Home}></Route>
              <Route path='/movie' component={Movie}></Route>
              <Route path='/ahout' component={About}></Route>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            Ant Design ©2018 Created by Ant UED
          </Footer>
        </Layout>
      </Router>
      </div>
    );
  }
}

export default App;

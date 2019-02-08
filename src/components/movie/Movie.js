import React, { Component } from 'react'
import { Layout,Menu } from 'antd';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import MovieList from './MovieList';
import MovieDetail from './MovieDetail';
import './Movie.less';
const { Sider, Content } = Layout;

export default class Movie extends Component {
  render() {
    return <Layout>
      <Sider>
        <Menu theme="light" mode='vertical' defaultSelectedKeys={['1']} style={{ lineHeight: '64px' }}>
          <Menu.Item key='1'><Link to='/movie/in_theaters'>正在热映</Link></Menu.Item> 
          <Menu.Item key='2'><Link to='/movie/coming_soon'>即将上映</Link></Menu.Item> 
          <Menu.Item key='3'><Link to='/movie/top250'>Top250</Link></Menu.Item> 
        </Menu>
      </Sider>
      <Content>
        <Route exact path='/movie/:movieType' component={MovieList}></Route>
        <Route exact path='/movie/detail/:id' component={MovieDetail}></Route>
      </Content>
    </Layout>
  }
}

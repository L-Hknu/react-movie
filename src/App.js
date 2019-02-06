import React, { Component } from 'react';
import logo from './logo.svg';
import { Button } from 'antd';
import './App.less';
import { Layout , Menu, Breadcrumb} from 'antd';
import Home from './components/home/Home';
import About from './components/about/About';
import Movie from './components/movie/Movie';
const {
  Header, Footer, Sider, Content,
} = Layout;
class App extends Component {
  render() {
    return (
      <Layout className="layout">
        <Header>
          <Home title='我是爸爸'></Home>
        </Header>
        <Content style={{ padding: '0 50px' }}>

        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    );
  }
}

export default App;

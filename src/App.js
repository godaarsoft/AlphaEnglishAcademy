import React from 'react';
import { Route } from 'react-router';
import { BrowserRouter, Link } from 'react-router-dom';
import { Layout, Menu, Breadcrumb } from 'antd';
import './App.less';
import Home from './scripts/Home';
import Contact from './scripts/Contact';

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <BrowserRouter>
      <Layout className="layout" style={{ minHeight: "100vh" }}>
        <Header style={{ position: 'fixed', zIndex: 1, width: '100%', backgroundColor: '#f0f2f5' }} >
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['1']}
            style={{ lineHeight: '80px', fontSize: '20px' }}
          >
            <Menu.Item key="1">
              <span className="nav-text" style={{ paddingRight: 10 }}>خانه</span>
              <Link to="/Home"></Link>
            </Menu.Item>
            <Menu.Item key="2">
              <span className="nav-text" style={{ paddingRight: 10 }}>تماس با ما</span>
              <Link to="/Contact"></Link>
            </Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: '0 50px', marginTop: 64, height: '80vh' }}>
          <Breadcrumb style={{ margin: '16px 0', fontSize: "16px" }} >
            <Breadcrumb.Item>خانه</Breadcrumb.Item>
          </Breadcrumb>
          <Route exact path="/" component={Home} />
          <Route path="/Contact" component={Contact} />
        </Content>
        <Footer style={{ textAlign: 'center' }}>طراحی شده توسط تیم نرم افزاری گدار سافت</Footer>
      </Layout>
    </BrowserRouter>
  );
}

export default App;

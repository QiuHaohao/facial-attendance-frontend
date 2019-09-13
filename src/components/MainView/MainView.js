import React from 'react';
import { Layout } from 'antd';

import Header from './Header';
import Content from './Content';

import './MainView.css';

const { Header: LayoutHeader, Content: LayoutContent } = Layout;

function MainView() {
  return (
    <Layout className="ant-layout">
      <LayoutHeader className="ant-layout-header">
        <Header />
      </LayoutHeader>
      <LayoutContent className="ant-layout-content">
        <Content />
      </LayoutContent>
    </Layout>
  );
}

export default MainView;

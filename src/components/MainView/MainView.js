import React from 'react';
import { Layout } from 'antd';

import { useUser } from '../../hooks/userHook';

import PageLoading from '../commons/PageLoading';

import Header from './Header';
import Content from './Content';

import './MainView.css';

const { Header: LayoutHeader, Content: LayoutContent } = Layout;

function MainView() {
  const user = useUser();
  return user.isSignedIn !== undefined ? (
    <Layout className="ant-layout">
      <LayoutHeader className="ant-layout-header">
        <Header />
      </LayoutHeader>
      <LayoutContent className="ant-layout-content">
        <Content />
      </LayoutContent>
    </Layout>
  ) : (
    <PageLoading />
  );
}

export default MainView;

import React from 'react';
import { Layout } from 'antd';
const { Header, Sider, Content } = Layout;

const Index: React.FC = () => (
  <Layout style={{ minHeight: '100vh' }}>
    <Sider width={250} style={{ backgroundColor: '#1677ff' }}>
      Sider
    </Sider>
    <Layout>
      <Header style={{ backgroundColor: '#4096ff', color: '#fff', textAlign: 'center' }}>
        Header
      </Header>
      <Content style={{ padding: '24px', minHeight: 280 }}>
        Content
      </Content>
    </Layout>
  </Layout>
);

export default Index;

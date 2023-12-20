import React from 'react';
import { Col, Image, Layout, Row } from 'antd';
import Dashboard from '../dashboard'
import Test from '../Tabs/Tabs'
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
import Logo from '../../assets/images/Logo_Container.png'
import {
  UserOutlined,
  SettingOutlined,
  BellOutlined,
  SearchOutlined,
  HomeOutlined,
  CustomerServiceOutlined,
  SafetyCertificateOutlined,
  KeyOutlined,
  TagsOutlined,
} from '@ant-design/icons';
import SearchBar from '../../components/SeachBar';
import ButtonSlider from '../../components/ButtonSlider';
import './style.css';
 
const { Header, Sider, Content } = Layout;

const styleTextButton: React.CSSProperties = {
  width: 100,
  textAlign: 'start',
};

const styleIcon: React.CSSProperties = {
  fontSize: '24px',
};

const styleButton: React.CSSProperties = {
  width: 224,
  height: 48,
  padding: '12px 8px',
  display: 'flex',
  alignItems: 'center',
  border: 'none',
  borderBottom: '1px solid  #F2F4F8',
};

const styleSearch: React.CSSProperties = {
  width: 224,
  height: 48,
  padding: '12px 8px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  border: 'none',
  borderRadius: 0,
  borderBottom: '1px solid  #F2F4F8',
  background: '#F2F4F8',
  marginTop: '20px',
  marginBottom: '20px',
};

const buttonData = [
  {
    icon: <HomeOutlined style={styleIcon} />,
    text: 'Dashboard',
  },
  {
    icon: <CustomerServiceOutlined style={styleIcon} />,
    text: 'Services',
    isShowNotification: true,
    isShowDropdown: true,
  },
  {
    icon: <TagsOutlined style={styleIcon} />,
    text: 'Plans',
  },
  {
    icon: <KeyOutlined style={styleIcon} />,
    text: 'API keys',
  },
  {
    icon: <SafetyCertificateOutlined style={styleIcon} />,
    text: 'Access Controls',
  },
];

const Index: React.FC = () => (
  <Layout style={{ minHeight: '100vh' }}>
    <Sider width={256} style={{ backgroundColor: '#FFFFFF', padding: '14px 16px 24px 16px', justifyContent: 'center' }}>
      <Row>
        <Col span={24}>
          <Image src={Logo} style={{ width: '224px', height: '39px' }} />
        </Col>
      </Row>
      <Row gutter={[16, 16]} style={{ justifyContent: 'center', marginTop: 20 }}>
        <Col span={6} style={{ fontSize: '30px' }}>
          <UserOutlined />
        </Col>
        <Col span={6} style={{ fontSize: '30px' }}>
          <SettingOutlined />
        </Col>
        <Col span={6} style={{ fontSize: '30px' }}>
          <BellOutlined />
        </Col>
      </Row>
      <SearchBar
        prefix={<SearchOutlined style={{ fontSize: 20 }} />}
        placeholder="Search for..."
        style={styleSearch}
      />
      {buttonData.map((button, index) => (
         <Link key={index} to={`/${button.text.toLowerCase()}`}> 
         <ButtonSlider
           key={index}
           type="text"
           icon={button.icon}
           style={styleButton}
           textbutton={button.text}
           isShowNotification={button.isShowNotification}
           isShowDropdown={button.isShowDropdown}
           styleTextButton={styleTextButton}
         />
       </Link>
      ))}
    </Sider>
    <Layout>
      <Header style={{ backgroundColor: '#4096ff', color: '#fff', textAlign: 'center' }}>
        Header
      </Header>
      <Content style={{ padding: '24px', minHeight: 280 }}>
      <Routes>
             <Route path="/" element={<Dashboard />} />
             <Route path="/tabs" element={<Test />} />
      </Routes>
      </Content>
    </Layout>
  </Layout>
);

export default Index;

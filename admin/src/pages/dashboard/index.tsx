import React, { useState } from 'react';
import { Badge, Col, Image, Layout, Row } from 'antd';
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
import './styles.css';
import { Outlet } from 'react-router-dom';
 
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
    navigator: '/DashBoard'
  },
  {
    icon: <CustomerServiceOutlined style={styleIcon} />,
    text: 'Services',
    isShowNotification: true,
    isShowDropdown: true,
    navigator: '/Services'
  },
  {
    icon: <TagsOutlined style={styleIcon} />,
    text: 'Plans',
    navigator: '/Plans'
  },
  {
    icon: <KeyOutlined style={styleIcon} />,
    text: 'API keys',
    navigator: '/APIkeys'
  },
  {
    icon: <SafetyCertificateOutlined style={styleIcon} />,
    text: 'Access Controls',
    navigator: '/AccessControls'
  },
];

const Index: React.FC = () => {
  const [headerText, setHeaderText] = useState('Dashboard');

  const handleButtonClick = (text: string) => {
    setHeaderText(text);
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider width={256} style={{ backgroundColor: '#FFFFFF', padding: '14px 16px 24px 16px', justifyContent: 'center', borderRight: '1px solid #F2F4F8' }}>
      <Row>
        <Col span={24}>
          <Image preview={false} src={Logo} style={{ width: '224px', height: '39px' }} />
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
          <Badge count={9} color='#FB0007'>
            <BellOutlined style={{ fontSize: 30}} />
          </Badge>
        </Col>
      </Row>
      <SearchBar
        prefix={<SearchOutlined style={{ fontSize: 20 }} />}
        placeholder="Search for..."
        style={styleSearch}
      />
      {buttonData.map((button, index) => (
         <ButtonSlider
           key={index}
           type="text"
           icon={button.icon}
           style={styleButton}
           textbutton={button.text}
           isShowNotification={button.isShowNotification}
           isShowDropdown={button.isShowDropdown}
           styleTextButton={styleTextButton}
           navigator={button.navigator}
           onClick={() => handleButtonClick(button.text)}
         />
      ))}
    </Sider>
    <Layout>
        <Header style={{ backgroundColor: '#FFFFFF', fontSize: '42px', padding: '0 20px' }}>
          <span>{headerText}</span>
        </Header>
        <Content style={{ backgroundColor: '#FFFFFF', padding: '24px', minHeight: 280 }}>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default Index;
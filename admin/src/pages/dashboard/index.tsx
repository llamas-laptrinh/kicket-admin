import React from 'react';
import { Col, Image, Layout, Row } from 'antd';
import Logo from '../../assets/images/Logo_Container.png'
import { UserOutlined, SettingOutlined, BellOutlined, SearchOutlined, HomeOutlined, CustomerServiceOutlined, SafetyCertificateOutlined, KeyOutlined, TagsOutlined} from '@ant-design/icons';
import SearchBar from '../../components/SeachBar';
import ButtonSlider from '../../components/ButtonSlider';
import './style.css'

const { Header, Sider, Content } = Layout;

const styleTextButton: React.CSSProperties = {
  width: 100,
  textAlign: 'start'
}

const styleIcon: React.CSSProperties = {
  fontSize: '24px'
}

const styleButton: React.CSSProperties = {
  width: 224,
  height: 48,
  padding: '12px 8px',
  display: 'flex',
  alignItems: 'center',
  border: 'none',
  borderBottom: "1px solid  #F2F4F8",
}

const styleSearch: React.CSSProperties = {
  width: 224,
  height: 48,
  padding: '12px 8px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  border: 'none',
  borderRadius: 0,
  borderBottom: "1px solid  #F2F4F8",
  background: '#F2F4F8',
  marginTop: '20px',
  marginBottom: '20px'
}

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
        placeholder='Search for...'
        style={styleSearch}
      />
      <ButtonSlider
        type='text'
        icon={<HomeOutlined style={styleIcon} />}
        style={styleButton}
        textbutton='Dashboard'
      />

      <ButtonSlider 
        type='text'
        icon={<CustomerServiceOutlined style={styleIcon} />}
        isShowNotification={true}
        isShowDropdown={true}
        textbutton='Servcies'
        styleTextButton={styleTextButton}
        style={styleButton}
      />

<ButtonSlider
        type='text'
        icon={<TagsOutlined style={styleIcon} />}
        style={styleButton}
        textbutton='Plans'
      />

<ButtonSlider
        type='text'
        icon={<KeyOutlined style={styleIcon} />}
        style={styleButton}
        textbutton='API keys'
      />

<ButtonSlider
        type='text'
        icon={<SafetyCertificateOutlined style={styleIcon} />}
        style={styleButton}
        textbutton='Access Controls'
      />
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

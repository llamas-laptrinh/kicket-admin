import React, { useState } from 'react';
import { Badge, Space, Tabs, Menu, Dropdown } from 'antd';
import 'antd/dist/reset.css';
import './style.css';
import DateRanger from '../DateRanger';
import { EllipsisOutlined } from '@ant-design/icons';
import { MenuClickEventHandler } from 'rc-menu/lib/interface';

const { TabPane } = Tabs;

interface MyTabsProps {
  overviewContent?: React.ReactNode;
  tasksContent?: React.ReactNode;
  documentContent?: React.ReactNode;
  teamContent?: React.ReactNode;
  reportsContent?: React.ReactNode;
  adminContent?: React.ReactNode;
}

const MyTabs: React.FC<MyTabsProps> = ({
  overviewContent,
  tasksContent,
  documentContent,
  teamContent,
  reportsContent,
  adminContent,
}) => {
  const [activeTabKey, setActiveTabKey] = useState('1');

  const handleTabChange = (key: string) => {
    setActiveTabKey(key);
  };

  const handleMenuClick: MenuClickEventHandler = (info) => {
    console.log('Clicked on menu item:', info.key);
  };
  

  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="edit">Edit</Menu.Item>
      <Menu.Item key="delete">Delete</Menu.Item>
    </Menu>
  );

  return (
    <div style={{ width: '1136px'}}>
      <Tabs
        tabBarStyle={{ borderBottom: 'none' }}
        activeKey={activeTabKey}
        onChange={handleTabChange}
        tabBarExtraContent={<DateRanger />}
      >
        <TabPane tab="Overview" key="1">
          <Space>{overviewContent}</Space>
        </TabPane>
        <TabPane
          tab={
            <Space>
              <span>Tasks</span>
              <Badge count={7} color='#FB0007' />
            </Space>
          }
          key="2"
        >
          {tasksContent}
        </TabPane>
        <TabPane
          tab={
            <Space>
              <span>Document</span>
              <Badge count={2} color='#FB0007' />
            </Space>
          }
          key="3"
        >
          {documentContent}
        </TabPane>
        <TabPane
          tab={
            <Space>
              <span>Team</span>
              <Badge count={100} color='#FB0007' />
            </Space>
          }
          key="4"
        >
          {teamContent}
        </TabPane>
        <TabPane tab="Reports" key="5">
          {reportsContent}
        </TabPane>
        <TabPane
          tab={
           <Space>
            <span style={{color: '#A2A9B0'}}>Admin</span>
            <Dropdown overlay={menu} trigger={['click']}>
              <div style={{ cursor: 'pointer' }}>
                <EllipsisOutlined />
              </div>
            </Dropdown>
           </Space>
          }
          key="6"
        >
          {adminContent}
        </TabPane>
      </Tabs>
    </div>
  );
};

export default MyTabs;

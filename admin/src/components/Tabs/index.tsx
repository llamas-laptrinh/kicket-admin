import React, { useState } from 'react';
import { Space, Tabs } from 'antd';
import 'antd/dist/reset.css';
import './style.css';
import DateRanger from '../DateRanger';

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

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <Tabs tabBarStyle={{ borderBottom: 'none' }} activeKey={activeTabKey} onChange={handleTabChange}>
        <TabPane tab="Overview" key="1">
          <Space>{overviewContent}</Space>
        </TabPane>
        <TabPane tab="Tasks" key="2">
          {tasksContent}
        </TabPane>
        <TabPane tab="Document" key="3">
          {documentContent}
        </TabPane>
        <TabPane tab="Team" key="4">
          {teamContent}
        </TabPane>
        <TabPane tab="Reports" key="5">
          {reportsContent}
        </TabPane>
        <TabPane tab="Admin" key="6">
          {adminContent}
        </TabPane>
      </Tabs>
    </div>
  );
};

export default MyTabs;

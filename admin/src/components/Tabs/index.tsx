import React, { useState } from 'react';
import { Tabs } from 'antd';
import 'antd/dist/reset.css'
import './style.css'
const { TabPane } = Tabs;

const MyTabs: React.FC = () => {
  const [activeTabKey, setActiveTabKey] = useState('1');

  const handleTabChange = (key: string) => {
    setActiveTabKey(key);
  };
  return (
    <Tabs activeKey={activeTabKey} onChange={handleTabChange}>
      <TabPane tab="Overview" key="1">
        Content of Tab Pane 1
      </TabPane>
      <TabPane tab="Tasks" key="2">
        Content of Tab Pane 2
      </TabPane>
      <TabPane tab="Document" key="3">
        Content of Tab Pane 3
      </TabPane>
      <TabPane tab="Team" key="4">
        Content of Tab Pane 4
      </TabPane>
      <TabPane tab="Reports" key="5">
        Content of Tab Pane 5
      </TabPane>
      <TabPane tab="Admin" key="6">
        Content of Tab Pane 6
      </TabPane>
    </Tabs>
  );
};

export default MyTabs;

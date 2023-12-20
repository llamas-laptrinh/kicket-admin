/* eslint-disable prefer-const */
import React, { useState } from 'react';
import {
    DesktopOutlined,
    FileOutlined,
    PieChartOutlined,
    TeamOutlined,
    UserOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Layout, Menu, theme, Col, Row, Tabs } from 'antd';
import './styles.css'
import CardComponent from './CardComponent';
import type { TabsProps } from 'antd';

import PolarChart from '../../components/Charts/Polar';
import GaugesChart from '../../components/Charts/Gauges';
import MapChart from '../../components/Charts/Map';
import NestedChart from '../../components/Charts/NestedChart';
import * as am5 from '@amcharts/amcharts5';

import { dataItems, polarDataItems } from '../../types';
const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];


let nestedData: dataItems = [{
    country: "Lithuania",
    litres: 501.9,
    bottles: 1500
}, {
    country: "Czech Republic",
    litres: 301.9,
    bottles: 990
}, {
    country: "Ireland",
    litres: 201.1,
    bottles: 785
}, {
    country: "Germany",
    litres: 165.8,
    bottles: 255
}, {
    country: "Australia",
    litres: 139.9,
    bottles: 452
}, {
    country: "Austria",
    litres: 128.3,
    bottles: 332
}, {
    country: "UK",
    litres: 99,
    bottles: 150
}, {
    country: "Belgium",
    litres: 60,
    bottles: 178
}, {
    country: "The Netherlands",
    litres: 50,
    bottles: 50
}];

let polarData: polarDataItems = [{
    category: "Health",
    value: 5,
    columnSettings: {
        fill: am5.color(0x095256),
    }
}, {
    category: "Career",
    value: 4,
    columnSettings: {
        fill: am5.color(0x087f8c),
    }
}, {
    category: "Love",
    value: 7,
    columnSettings: {
        fill: am5.color(0x5aaa95),
    }
}, {
    category: "Spirituality",
    value: 9,
    columnSettings: {
        fill: am5.color(0x86a873),
    }
}, {
    category: "Family",
    value: 3,
    columnSettings: {
        fill: am5.color(0xbb9f06),
    }
},
];
let gaugeData: number = 70;

const Overview: React.FC = () => {
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
    return (
        <div
            style={{
                padding: 24,
                minHeight: 360,
                background: colorBgContainer,
                borderRadius: borderRadiusLG,
            }}
        >
            <Row gutter={16}>
                <Col span={6}>
                    <CardComponent label="Users total" totalValue="11.8M" percentage="1.1%"></CardComponent>
                </Col>
                <Col span={6}>
                    <CardComponent label="Users total" totalValue="11.8M" percentage="1.1%"></CardComponent>
                </Col>
                <Col span={6}>
                    <CardComponent label="Users total" totalValue="11.8M" percentage="1.1%"></CardComponent>
                </Col>
                <Col span={6}>
                    <CardComponent label="Users total" totalValue="11.8M" percentage="1.1%"></CardComponent>
                </Col>
            </Row>
            <Row gutter={16}>
                <Col span={6}>
                    <div className='border mt-5'>
                        <GaugesChart data={gaugeData}></GaugesChart>
                    </div>
                </Col>
                <Col span={6}>
                    <div className='border mt-5'>
                        {/* Polar */}

                        <PolarChart data={polarData}></PolarChart>
                        {/* End polar */}
                    </div>
                </Col>
                <Col span={12}>
                    <div className='border mt-5'>
                        <div className="App">
                            <MapChart></MapChart>
                        </div>
                    </div>
                </Col>

            </Row>
            <Row gutter={16}>
                <Col span={12}>
                    <div className='border mt-5'>
                        {/**/}
                    </div>
                </Col>
                <Col span={12}>
                    <div className='border mt-5'>
                        <div className="App">
                            <NestedChart data={nestedData}></NestedChart>
                        </div>
                    </div>
                </Col>

            </Row>
        </div >
    )
}

// export default Overview


function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
    } as MenuItem;
}

const items: MenuItem[] = [
    getItem('Option 1', '1', <PieChartOutlined />),
    getItem('Option 2', '2', <DesktopOutlined />),
    getItem('User', 'sub1', <UserOutlined />, [
        getItem('Tom', '3'),
        getItem('Bill', '4'),
        getItem('Alex', '5'),
    ]),
    getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
    getItem('Files', '9', <FileOutlined />),
];



const Dashboard: React.FC = () => {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    const onChange = (key: string) => {
        console.log(key);
    };

    const tabsItems: TabsProps['items'] = [
        {
            key: '1',
            label: 'Overview',
            children: <Overview />,
        },
        {
            key: '2',
            label: 'Tab 2',
            children: 'Content of Tab Pane 2',
        },
        {
            key: '3',
            label: 'Tab 3',
            children: 'Content of Tab Pane 3',
        },
    ];

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Sider className='white-background' collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
                <div className="demo-logo-vertical" />
                <Menu defaultSelectedKeys={['1']} mode="inline" items={items} />
            </Sider>
            <Layout>
                <Header style={{ padding: 0, background: colorBgContainer }} >
                    <h2>Dashboard</h2>
                </Header>
                <Content style={{ margin: '0 16px' }}>
                    <Tabs defaultActiveKey="1" items={tabsItems} onChange={onChange} />

                </Content >
                <Footer style={{ textAlign: 'center' }}></Footer>
            </Layout >
        </Layout >
    );
};

export default Dashboard;
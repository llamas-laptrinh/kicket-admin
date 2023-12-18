import React, { useEffect, useState, useLayoutEffect } from 'react';
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

import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import * as am5percent from "@amcharts/amcharts5/percent";
import * as am5radar from "@amcharts/amcharts5/radar";
import * as am5map from "@amcharts/amcharts5/map";
import am5geodata_usaLow from "@amcharts/amcharts5-geodata/usaLow";
import am5geodata_worldLow from "@amcharts/amcharts5-geodata/worldLow";

const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];




// const domContainer = document.querySelector('#app');
// ReactDOM.render(React.createElement(ApexChart), domContainer);




const Overview: React.FC = () => {
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    useEffect(() => {
        let root = am5.Root.new("chartdiv");
        root.setThemes([
            am5themes_Animated.new(root)
        ]);
        let chart = root.container.children.push(am5radar.RadarChart.new(root, {
            panX: false,
            panY: false,
            wheelX: "panX",
            wheelY: "zoomX"
        }));

        let xRenderer = am5radar.AxisRendererCircular.new(root, {});
        xRenderer.labels.template.setAll({
            radius: 10
        });

        let xAxis = chart.xAxes.push(am5xy.CategoryAxis.new(root, {
            maxDeviation: 0,
            categoryField: "category",
            renderer: xRenderer,
            tooltip: am5.Tooltip.new(root, {})
        }));

        let yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
            min: 0,
            max: 10,
            renderer: am5radar.AxisRendererRadial.new(root, {
                minGridDistance: 20
            })
        }));

        yAxis.get("renderer").labels.template.set("forceHidden", true);

        let series = chart.series.push(am5radar.RadarColumnSeries.new(root, {
            xAxis: xAxis,
            yAxis: yAxis,
            valueYField: "value",
            categoryXField: "category"
        }));

        series.columns.template.setAll({
            tooltipText: "{categoryX}: {valueY}",
            templateField: "columnSettings",
            strokeOpacity: 0,
            width: am5.p100
        });

        let data = [{
            category: "Health",
            value: 5,
            columnSettings: {
                fill: chart.get("colors").next()
            }
        }, {
            category: "Career",
            value: 4,
            columnSettings: {
                fill: chart.get("colors").next()
            }
        }, {
            category: "Love",
            value: 7,
            columnSettings: {
                fill: chart.get("colors").next()
            }
        }, {
            category: "Spirituality",
            value: 9,
            columnSettings: {
                fill: chart.get("colors").next()
            }
        }, {
            category: "Family",
            value: 3,
            columnSettings: {
                fill: chart.get("colors").next()
            }
        }, {
            category: "Money",
            value: 3,
            columnSettings: {
                fill: chart.get("colors").next()
            }
        }, {
            category: "Fun",
            value: 5,
            columnSettings: {
                fill: chart.get("colors").next()
            }
        }, {
            category: "Friends",
            value: 10,
            columnSettings: {
                fill: chart.get("colors").next()
            }
        }];

        series.data.setAll(data);
        xAxis.data.setAll(data);

        // Animate chart
        // https://www.amcharts.com/docs/v5/concepts/animations/#Initial_animation
        series.appear(1000);
        chart.appear(1000, 100);

        // Function for updating value
        function setValue(index, value) {

            // Set value
            let row = data[index];
            row.value = value;
            console.log(row)
            series.data.setIndex(index, {
                category: row.category,
                value: value,
                columnSettings: row.columnSettings
            });

            // Reveal next question
            let areas = document.getElementsByClassName("area");
            for (var i = 0; i < areas.length; i++) {
                areas[i].style.display = (index + 1) === i ? "block" : "none";
            }

        }
        return () => {
            root.dispose();
        };
    }, []);
    useEffect(() => {
        let root = am5.Root.new("mapchart");


        // Set themes
        // https://www.amcharts.com/docs/v5/concepts/themes/
        root.setThemes([
            am5themes_Animated.new(root)
        ]);


        // Create the map chart
        // https://www.amcharts.com/docs/v5/charts/map-chart/
        let chart = root.container.children.push(am5map.MapChart.new(root, {
            panX: "translateX",
            panY: "translateY",
            projection: am5map.geoMercator()
        }));


        // Create main polygon series for countries
        // https://www.amcharts.com/docs/v5/charts/map-chart/map-polygon-series/
        let polygonSeries = chart.series.push(am5map.MapPolygonSeries.new(root, {
            geoJSON: am5geodata_worldLow,
            exclude: ["AQ"]
        }));

        polygonSeries.mapPolygons.template.setAll({
            tooltipText: "{name}",
            toggleKey: "active",
            interactive: true
        });

        polygonSeries.mapPolygons.template.states.create("hover", {
            fill: root.interfaceColors.get("primaryButtonHover")
        });

        polygonSeries.mapPolygons.template.states.create("active", {
            fill: root.interfaceColors.get("primaryButtonHover")
        });


        // US Series
        // Create main polygon series for countries
        // https://www.amcharts.com/docs/v5/charts/map-chart/map-polygon-series/
        let polygonSeriesUS = chart.series.push(am5map.MapPolygonSeries.new(root, {
            geoJSON: am5geodata_usaLow
        }));

        polygonSeriesUS.mapPolygons.template.setAll({
            tooltipText: "{name}",
            toggleKey: "active",
            interactive: true
        });

        let colors = am5.ColorSet.new(root, {});

        polygonSeriesUS.mapPolygons.template.set("fill", colors.getIndex(3));

        polygonSeriesUS.mapPolygons.template.states.create("hover", {
            fill: root.interfaceColors.get("primaryButtonHover")
        });

        polygonSeriesUS.mapPolygons.template.states.create("active", {
            fill: root.interfaceColors.get("primaryButtonHover")
        });



        // Add zoom control
        // https://www.amcharts.com/docs/v5/charts/map-chart/map-pan-zoom/#Zoom_control
        chart.set("zoomControl", am5map.ZoomControl.new(root, {}));


        // Set clicking on "water" to zoom out
        chart.chartContainer.get("background").events.on("click", function () {
            chart.goHome();
        })


        // Make stuff animate on load
        chart.appear(1000, 100);
        return () => {
            root.dispose();
        };
    }, []);
    useEffect(() => {
        let root = am5.Root.new("percentchart");

        root.setThemes([
            am5themes_Animated.new(root)
        ]);

        let chart = root.container.children.push(
            am5radar.RadarChart.new(root, {
                panX: false,
                panY: false,
                startAngle: 150,
                endAngle: 390,
            })
        );

        chart.getNumberFormatter().set("numberFormat", "#'%'");

        // Create axis and its renderer
        // https://www.amcharts.com/docs/v5/charts/radar-chart/gauge-charts/#Axes
        let axisRenderer = am5radar.AxisRendererCircular.new(root, {
            innerRadius: -40
        });

        axisRenderer.grid.template.setAll({
            stroke: root.interfaceColors.get("background"),
            visible: true,
            strokeOpacity: 0.8
        });

        let xAxis = chart.xAxes.push(
            am5xy.ValueAxis.new(root, {
                maxDeviation: 0,
                min: 0,
                max: 100,
                strictMinMax: true,
                renderer: axisRenderer
            })
        );

        // Add clock hand
        // https://www.amcharts.com/docs/v5/charts/radar-chart/gauge-charts/#Clock_hands
        let axisDataItem = xAxis.makeDataItem({});

        let clockHand = am5radar.ClockHand.new(root, {
            pinRadius: 50,
            radius: am5.percent(100),
            innerRadius: 50,
            bottomWidth: 0,
            topWidth: 0
        });

        clockHand.pin.setAll({
            fillOpacity: 0,
            strokeOpacity: 0.5,
            stroke: am5.color(0x000000),
            strokeWidth: 1,
            strokeDasharray: [2, 2]
        });
        clockHand.hand.setAll({
            fillOpacity: 0,
            strokeOpacity: 0.5,
            stroke: am5.color(0x000000),
            strokeWidth: 0.5
        });

        let bullet = axisDataItem.set(
            "bullet",
            am5xy.AxisBullet.new(root, {
                sprite: clockHand
            })
        );

        xAxis.createAxisRange(axisDataItem);

        let label = chart.radarContainer.children.push(
            am5.Label.new(root, {
                centerX: am5.percent(50),
                textAlign: "center",
                centerY: am5.percent(50),
                fontSize: "1.5em"
            })
        );

        axisDataItem.set("value", 50);
        bullet.get("sprite").on("rotation", function () {
            let value = axisDataItem.get("value");
            label.set("text", Math.round(value).toString() + "%");
        });

        // setInterval(function () {
        //     let value = Math.round(Math.random() * 100);

        //     axisDataItem.animate({
        //         key: "value",
        //         to: value,
        //         duration: 500,
        //         easing: am5.ease.out(am5.ease.cubic)
        //     });

        //     axisRange0.animate({
        //         key: "endValue",
        //         to: value,
        //         duration: 500,
        //         easing: am5.ease.out(am5.ease.cubic)
        //     });

        //     axisRange1.animate({
        //         key: "value",
        //         to: value,
        //         duration: 500,
        //         easing: am5.ease.out(am5.ease.cubic)
        //     });
        // }, 2000);

        chart.bulletsContainer.set("mask", undefined);

        let colorSet = am5.ColorSet.new(root, {});

        let axisRange0 = xAxis.createAxisRange(
            xAxis.makeDataItem({
                above: true,
                value: 0,
                endValue: 50
            })
        );

        axisRange0.get("axisFill").setAll({
            visible: true,
            fill: colorSet.getIndex(0)
        });

        axisRange0.get("label").setAll({
            forceHidden: true
        });

        let axisRange1 = xAxis.createAxisRange(
            xAxis.makeDataItem({
                above: true,
                value: 50,
                endValue: 100
            })
        );

        axisRange1.get("axisFill").setAll({
            visible: true,
            fill: colorSet.getIndex(4)
        });

        axisRange1.get("label").setAll({
            forceHidden: true
        });

        // Make stuff animate on load
        chart.appear(1000, 100);
        return () => {
            root.dispose();
        };
    }, []);
    useEffect(() => {
        let root = am5.Root.new("nestedchart");

        // Set themes
        // https://www.amcharts.com/docs/v5/concepts/themes/
        root.setThemes([
            am5themes_Animated.new(root)
        ]);

        // Create chart
        // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/
        // start and end angle must be set both for chart and series
        let chart = root.container.children.push(am5percent.PieChart.new(root, {
            layout: root.verticalLayout,
            innerRadius: am5.percent(40)
        }));

        // Create series
        // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/#Series
        // start and end angle must be set both for chart and series
        let series0 = chart.series.push(am5percent.PieSeries.new(root, {
            valueField: "bottles",
            categoryField: "country",
            alignLabels: false
        }));

        let bgColor = root.interfaceColors.get("background");

        series0.ticks.template.setAll({ forceHidden: true });
        series0.labels.template.setAll({ forceHidden: true });
        series0.slices.template.setAll({
            stroke: bgColor,
            strokeWidth: 2,
            tooltipText:
                "{category}: {valuePercentTotal.formatNumber('0.00')}% ({value} bottles)"
        });
        series0.slices.template.states.create("hover", { scale: 0.95 });

        let series1 = chart.series.push(am5percent.PieSeries.new(root, {
            valueField: "litres",
            categoryField: "country",
            alignLabels: true
        }));

        series1.slices.template.setAll({
            stroke: bgColor,
            strokeWidth: 2,
            tooltipText:
                "{category}: {valuePercentTotal.formatNumber('0.00')}% ({value} litres)"
        });

        let data = [{
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

        // Set data
        // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/#Setting_data
        series0.data.setAll(data);
        series1.data.setAll(data);

        // Play initial series animation
        // https://www.amcharts.com/docs/v5/concepts/animations/#Animation_of_series
        series0.appear(1000, 100);
        series1.appear(1000, 100);
        return () => {
            root.dispose();
        };
    }, []);

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
                        <div id="percentchart" style={{ width: "100%", height: "300px" }}></div>
                        {/**/}
                    </div>
                </Col>
                <Col span={6}>
                    <div className='border mt-5'>
                        {/* Polar */}
                        <div id="chartdiv" style={{ width: "100%", height: "300px" }}></div>
                        {/* End polar */}
                    </div>
                </Col>
                <Col span={12}>
                    <div className='border mt-5'>
                        <div className="App">
                            <div id="mapchart" style={{ width: "100%", height: "300px" }}></div>
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
                            <div id="nestedchart" style={{ width: "100%", height: "300px" }}></div>
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
/* eslint-disable prefer-const */
import React, { useEffect } from 'react'
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import * as am5radar from "@amcharts/amcharts5/radar";
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import { polarDataItems } from '../../../types';


// const PolarChart: React.FC<{ data: polarProps }> = ({ data }) => {
const PolarChart: React.FC<{ data: polarDataItems }> = ({data}) => {
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
        console.log(chart.get("colors")?.next())

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

        


        series.data.setAll(data);
        xAxis.data.setAll(data);

        // Animate chart
        series.appear(1000);
        chart.appear(1000, 100);

        // function setValue(index, value) {

        //     // Set value
        //     let row = data[index];
        //     row.value = value;
        //     console.log(row)
        //     series.data.setIndex(index, {
        //         category: row.category,
        //         value: value,
        //         columnSettings: row.columnSettings
        //     });

        //     // Reveal next question
        //     let areas = document.getElementsByClassName("area");
        //     for (var i = 0; i < areas.length; i++) {
        //         areas[i].style.display = (index + 1) === i ? "block" : "none";
        //     }

        // }
        return () => {
            root.dispose();
        };
    }, [data]);
    return (
        <div id="chartdiv" style={{ width: "100%", height: "300px" }}></div>
    )
}

export default PolarChart;

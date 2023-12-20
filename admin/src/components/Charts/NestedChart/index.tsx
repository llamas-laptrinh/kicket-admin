/* eslint-disable prefer-const */
import React, { useEffect } from 'react'
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import * as am5 from "@amcharts/amcharts5";
import * as am5percent from "@amcharts/amcharts5/percent";
import { dataItems } from '../../../types';


const NestedChart: React.FC<{ data: dataItems }> = ({data}) => {
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
    }, [data]);
    return (
        <div id="nestedchart" style={{ width: "100%", height: "300px" }}></div>
    )
}

export default NestedChart;

/* eslint-disable prefer-const */
import { useEffect } from 'react'
import * as am5 from "@amcharts/amcharts5";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import * as am5map from "@amcharts/amcharts5/map";
import am5geodata_usaLow from "@amcharts/amcharts5-geodata/usaLow";
import am5geodata_worldLow from "@amcharts/amcharts5-geodata/worldLow";

export default function MapChart() {
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
        chart.chartContainer.get("background")?.events.on("click", function () {
            chart.goHome();
        })


        // Make stuff animate on load
        chart.appear(1000, 100);
        return () => {
            root.dispose();
        };
    }, []);

    return (
        <div id="mapchart" style={{ width: "100%", height: "300px" }}></div>

    )
}

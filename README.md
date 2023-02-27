# Steps to use React Charts

1. install node module
2. There are below functions for charts
   1. lineChart(props)
   2. areaChart(props)
   3. barChart(props)
   4. pieChart(props)
   5. radarChart(props)
   6. composedChart(props)
   7. radialBarChart(props)
3. send props as object

### Line Chart props object

create object named as "details" and pass properties to the chart

ex. const details = {
rc_width: "100%",
rc_height: "100%",
rc_aspect: 3,
chartData:<add test array of object or fetch from server>
chart_width: 500,
chart_height: 300,
m_top: 5,
m_bottom: 5,
m_left: 20,
m_right: 100,
cg_sdash: "3 3",
x_interval: "preserveStartEnd",
lineDataKey:<array of y-axis items>
chart_type: "monotone",
chart_stroke: "blue",
chart_fill: "blue",
dot_rad: 5,
compChart_Scale: "auto",
bar_size: 20,
}

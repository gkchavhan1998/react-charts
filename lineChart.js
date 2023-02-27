import React from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  Tooltip,
} from "recharts";

function LineChrt(props) {
  return (
    <>
      <ResponsiveContainer
        width={props.rc_width}
        height={props.rc_height}
        aspect={props.rc_aspect}
      >
        <LineChart
          data={props.chartData}
          width={props.chart_width}
          height={props.chart_height}
          margin={{
            top: props.m_top,
            right: props.m_right,
            left: props.m_left,
            bottom: props.m_bottom,
          }}
        >
          <CartesianGrid strokeDasharray={props.cg_sdash} />
          <XAxis dataKey={props.xAxisDataKey} interval={props.x_interval} />
          <YAxis />
          <Tooltip />
          <Legend />

          {props.lineDataKey.map((item) => {
            return (
              <Line
                type={props.chart_type}
                dataKey={item}
                stroke={props.chart_stroke}
                activeDot={{ r: props.dot_rad }}
                key={item}
              />
            );
          })}
        </LineChart>
      </ResponsiveContainer>
    </>
  );
}

module.exports = LineChrt;

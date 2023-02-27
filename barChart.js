import React from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

function BarChrt(props) {
  return (
    <div>
      <ResponsiveContainer
        width={props.rc_width}
        height={props.rc_height}
        aspect={props.rc_aspect}
      >
        <BarChart
          width={props.rc_width}
          height={props.rc_aspect}
          data={props.chartData}
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
          {/* <Bar dataKey="pv" fill="#8884d8" />
              <Bar dataKey="uv" fill="#82ca9d" /> */}

          {props.barDataKey.map((item) => {
            return <Bar dataKey={item} fill={props.chart_fill} key={item} />;
          })}
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

module.exports = BarChrt;

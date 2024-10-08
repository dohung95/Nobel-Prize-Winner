import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const van_data_chart = [
  { year: 1867-1877, event: "Born in Poland", achievement: 0, perseverance: 10, obstacle: "Living under Russian occupation" },
  { year: 1891, event: "Moved to Paris to study at Sorbonne", achievement: 20, perseverance: 30, obstacle: "Financial difficulties while studying abroad" },
  { year: 1898, event: "Discovered polonium and radium", achievement: 50, perseverance: 60, obstacle: "Faced skepticism from the scientific community" },
  { year: 1903, event: "Received Nobel Prize in Physics", achievement: 70, perseverance: 80, obstacle: "Gender discrimination in the scientific field" },
  { year: 1911, event: "Received Nobel Prize in Chemistry", achievement: 90, perseverance: 95, obstacle: "Personal crisis and public doubt" },
  { year: 1934, event: "Died from radiation exposure", achievement: 100, perseverance: 100, obstacle: "Long-term health effects from radiation research" }
];

const TimelineChart = () => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart
        data={van_data_chart}
        margin={{
          top: 10, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="year" />
        <YAxis />
        <Tooltip formatter={(value, name, props) => {
          const { payload } = props;
          return [
            `Achievement: ${payload.achievement}% | Perseverance: ${payload.perseverance}%`,
            `Event: ${payload.event}, Obstacle: ${payload.obstacle}`
          ];
        }} />
        <Legend />
        {/* Line representing achievement */}
        <Line type="monotone" dataKey="achievement" stroke="#8884d8" name="Achievement" activeDot={{ r: 8 }} />
        {/* Line representing perseverance */}
        <Line type="monotone" dataKey="perseverance" stroke="#82ca9d" name="Perseverance" activeDot={{ r: 8 }} />
      </LineChart>
    </ResponsiveContainer>
  );
}

export default TimelineChart;

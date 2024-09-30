import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const van_data_chart = [
  { year: 1867, event: "Sinh ra tại Ba Lan", achievement: 0, perseverance: 10, obstacle: "Sống dưới sự chiếm đóng của Nga" },
  { year: 1891, event: "Chuyển đến Paris học tại Sorbonne", achievement: 20, perseverance: 30, obstacle: "Khó khăn tài chính khi học tập ở nước ngoài" },
  { year: 1898, event: "Phát hiện ra polonium và radium", achievement: 50, perseverance: 60, obstacle: "Phải đối mặt với sự nghi ngờ từ cộng đồng khoa học" },
  { year: 1903, event: "Nhận giải Nobel Vật lý", achievement: 70, perseverance: 80, obstacle: "Bị kỳ thị giới tính trong lĩnh vực khoa học" },
  { year: 1911, event: "Nhận giải Nobel Hóa học", achievement: 90, perseverance: 95, obstacle: "Khủng hoảng cá nhân và sự nghi ngờ từ công chúng" },
  { year: 1934, event: "Qua đời vì phơi nhiễm phóng xạ", achievement: 100, perseverance: 100, obstacle: "Tác động lâu dài của nghiên cứu phóng xạ đến sức khỏe" }
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
            `Thành tựu: ${payload.achievement}% | Kiên trì: ${payload.perseverance}%`,
            `Sự kiện: ${payload.event}, Trở ngại: ${payload.obstacle}`
          ];
        }} />
        <Legend />
        {/* Đường biểu diễn achievement (Thành tựu) */}
        <Line type="monotone" dataKey="achievement" stroke="#8884d8" name="Thành tựu" activeDot={{ r: 8 }} />
        {/* Đường biểu diễn perseverance (Kiên trì vượt qua khó khăn) */}
        <Line type="monotone" dataKey="perseverance" stroke="#82ca9d" name="Kiên trì" activeDot={{ r: 8 }} />
      </LineChart>
    </ResponsiveContainer>
  );
}

export default TimelineChart;

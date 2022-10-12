import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip} from "recharts";
import './Statistics.css'


const Statistics = () => {
  const data = [
    {
      name: "React",
      total: 8,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "JavaScript",
      total: 9,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "CSS",
      total: 8,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Git",
      total: 11,
      pv: 9800,
      amt: 2290,
    },
  ];
  return (
    <div className="chart">
      
      <LineChart width={600} height={400} data={data}>
        <Line
          type="monotone"
          dataKey="total"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <CartesianGrid strokeDasharray="3 3" />
      </LineChart>
      <h1>This chart show the total quiz numbers</h1>
    </div>
  );
};

export default Statistics;

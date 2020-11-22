import React from 'react';
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ReferenceLine,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from "recharts";

const Chart = ({ data }) => {
  const temperature = data.cast.map(i => i.list.map(i => i.main));
  
  return (
    <ResponsiveContainer width="100%" height={500}>
      <BarChart layout="horizontal" data={temperature[0]}>
        <YAxis dataKey="temp" stroke="#8884d8" margin={{ top: 50, right: 30, left: 20, bottom: 10 }}/>
        <XAxis/>
        <Tooltip wrapperStyle={{ width: 150, backgroundColor: '#ccc' }}/>
        <Legend width={100} wrapperStyle={{
          top: 480,
          left: 400,
          backgroundColor: '#f5f5f5',
          border: '1px solid #d5d5d5',
          borderRadius: 10,
          lineHeight: '30px',
          width: 350,
        }}/>
        <CartesianGrid stroke="#ccc" strokeDasharray="3 3"/>
        <ReferenceLine y={274} label="Max" stroke="red" strokeDasharray="3 3"/>
        <Bar dataKey="temp_max" fill="#169bde" stackId="a" barSize={3}/>
        <Bar dataKey="temp_min" fill="#ed4d21" stackId="a" barSize={3}/>
        <Bar dataKey="feels_like" fill="#ffc658" barSize={3}/>
      </BarChart>
    </ResponsiveContainer>
  );
};

export default Chart;

import React from 'react';
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const Chart = ({ data }) => {
  const temperature = data.cast.map(i => i.list.map(i => i.main));
  
  return (
    <ResponsiveContainer width="100%" height={500}>
      <BarChart layout="vertical" data={temperature[0]}>
        <YAxis dataKey="temp" stroke="#8884d8" margin={{ top: 50, right: 10, left: 10, bottom: 10 }} tick={{ fontSize: 15}} type="category" domain={['dataMin', 'dataMax']} allowDataOverflow={true}/>
        <XAxis tick={{ fill: 'red', fontSize: 10}}/>
        <Tooltip wrapperStyle={{ width: 150, backgroundColor: '#ccc' }}/>
        <Legend width={100} wrapperStyle={{
          top: -30,
          left: 400,
          backgroundColor: '#f5f5f5',
          border: '1px solid #d5d5d5',
          borderRadius: 10,
          lineHeight: '30px',
          width: 350,
        }}/>
        <CartesianGrid stroke="#ccc" strokeDasharray="3 3"/>
        <Bar dataKey="temp_max" fill="#169bde" barSize={3}/>
        <Bar dataKey="temp_min" fill="#ed4d21" barSize={3}/>
      </BarChart>
    </ResponsiveContainer>
  );
};

export default Chart;

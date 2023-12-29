// TripleLayerDoughnutChart.tsx
import React from 'react';
import { PieChart, Pie, Cell } from 'recharts';

interface DoughnutChartProps {
  outerData?: { name: string; value: number }[];
  middleData?: { name: string; value: number }[];
  innerData?: { name: string; value: number }[];
}

const COLORS = ['#FF5733', '#33FF57', '#5733FF', '#FFC300'];

const DoughnutChart: React.FC<DoughnutChartProps> = ({ outerData = [], middleData = [], innerData = [] }) => {
  return (
    <PieChart width={220} height={220}>
      <Pie
        data={outerData}
        cx={110}
        cy={110}
        innerRadius={75}
        outerRadius={100}
        fill="#8884d8"
        paddingAngle={5}
        dataKey="value"
      >
        {outerData.map((entry, index) => (
          <Cell key={`outer-cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Pie
        data={middleData}
        cx={110}
        cy={110}
        innerRadius={50}
        outerRadius={75}
        fill="#eee"
        paddingAngle={5}
        dataKey="value"
      >
        {middleData.map((entry, index) => (
          <Cell key={`middle-cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Pie
        data={innerData}
        cx={110}
        cy={110}
        innerRadius={0}
        outerRadius={50}
        fill="#fff"
        paddingAngle={5}
        dataKey="value"
      >
        {innerData.map((entry, index) => (
          <Cell key={`inner-cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
    </PieChart>
  );
};

export default DoughnutChart;

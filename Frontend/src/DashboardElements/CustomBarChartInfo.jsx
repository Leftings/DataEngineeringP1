import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid, ResponsiveContainer, Rectangle } from "recharts";

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p className="label">{`${payload[0].payload.item} : ${payload[0].value}`}</p>
      </div>
    );
  }
  return null;
};

const CustomBarChartInfo = ({ name, width, height, data, xAxis, dataKey }) => {
  return (
    <div className="chart-container">
      <h2 className="text-xl font-bold text-center mb-4">{name}</h2>
      <ResponsiveContainer width="100%" height={height}>
        <BarChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }} style={{ backgroundColor: 'transparent' }} fill="transparent">
          <CartesianGrid strokeDasharray="3 3" fill="transparent" stroke="#ddd"/>
          <XAxis dataKey={xAxis} />
          <YAxis />
          <Tooltip content={<CustomTooltip />} />
          <Legend />
          <Bar 
            dataKey={dataKey}
            barSize={20}
            fill="Cyan"
            activeBar={<Rectangle fill="White" background={null}/>}
            background={null}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CustomBarChartInfo;

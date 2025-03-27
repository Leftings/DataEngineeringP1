import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { Card, CardContent } from "./Cards";

function CustomLineChart({name, width, height, data, xAxis}) {
    return (
        <Card>
            <CardContent>
                <h2 className="text-xl font-bold">{name}</h2>
                <ResponsiveContainer width={width} height={height}>
                <LineChart data={data}>
                    <XAxis dataKey={xAxis} />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="revenue" stroke="#3b82f6" />
                </LineChart>
                </ResponsiveContainer>
            </CardContent>
        </Card>
    );
}

export default CustomLineChart;
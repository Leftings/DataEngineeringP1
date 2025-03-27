import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from "recharts";
import { Card, CardContent } from "./Cards";

function CustomBarChart({name, width, height, data, xAxis, dataKey}) {
    return(
        <Card>
            <CardContent>
                <h2 className="text-xl font-bold">{name}</h2>
                <ResponsiveContainer width={width} height={height}>
                <BarChart data={data}>
                    <XAxis dataKey={xAxis} />
                    <YAxis />
                    <Tooltip/>
                    <Legend />
                    <Bar dataKey={dataKey} fill="#ef4444" />
                </BarChart>
                </ResponsiveContainer>
            </CardContent>
        </Card>
    );
}

export default CustomBarChart;
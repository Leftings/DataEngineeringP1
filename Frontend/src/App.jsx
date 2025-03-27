import "./index.css";
import CustomLineChart from "./DashboardElements/CustomLinechart.jsx";
import CustomBarChart from "./DashboardElements/CustomBarChart.jsx";
import CustomBarChartInfo from "./DashboardElements/CustomBarChartInfo.jsx";
import { Card, CardContent} from "./DashboardElements/Cards.jsx";

const salesData = [
  { month: "Jan", revenue: 10000 },
  { month: "Feb", revenue: 12000 },
  { month: "Mar", revenue: 15000 },
  { month: "Apr", revenue: 18000 },
  { month: "May", revenue: 16000 },
  { month: "Jun", revenue: 20000 },
  { month: "Jul", revenue: 0}
];

const productSales = [
  { product: "Laptop", sales: 40 },
  { product: "Phone", sales: 60 },
  { product: "Headphones", sales: 30 },
  { product: "Tablet", sales: 20 },
];

function App() {
  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Revenue Trend Chart */}
      <CustomLineChart name="Sales Data" width={salesData.length * 50} height={300} data={salesData} xAxis="month"></CustomLineChart>

      {/* Sales Breakdown Chart */}
      <CustomBarChart name="Product Sales" width={productSales.length * 100} height={300} data={productSales} xAxis="product" dataKey="sales"></CustomBarChart>

      <CustomBarChartInfo name="Product Sales" width={productSales.length * 100} height={300} data={productSales} xAxis="product" dataKey="sales"></CustomBarChartInfo>
    </div>
  );
}

export default App;

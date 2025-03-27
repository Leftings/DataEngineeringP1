import "./index.css";
import CustomLineChart from "./DashboardElements/CustomLinechart.jsx";
import CustomBarChart from "./DashboardElements/CustomBarChart.jsx";
import CustomBarChartInfo from "./DashboardElements/CustomBarChartInfo.jsx";
import { Card, CardContent} from "./DashboardElements/Cards.jsx";
import CustomPieChart from "./DashboardElements/CustomPieChart.jsx";
import { useState, useEffect } from "react";

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
  { item: "Test", value: 100 },
  { item: "Appel", value: 1 },
  { item: "Peer", value: 23 },
  { item: "Ananas", value: 65 },
  { item: "Pizza", value: 76 },
  { item: "Whoop", value: 23 },
  { item: "Spetter poep", value: 45 },
  { item: "Monster", value: 32 },
  { item: "Red Bull", value: 98 },
  { item: "Bullet", value: 34 },
  { item: "Prime", value: 12 },
  { item: "Ghost", value: 45 },
  { item: "Aardappel", value: 95 },
  { item: "9/11", value: 56 }
];

function App() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePieEnter = (_, index) => {
    setActiveIndex(index);
  };

  const [width, setWidth] = useState(window.innerWidth * 0.8); // 80% of screen width

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth * 0.8);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Revenue Trend Chart */}
      <CustomLineChart name="Sales Data" width={width} height={300} data={salesData} xAxis="month"></CustomLineChart>

      <CustomPieChart width={width} height={1000} data={productSales} activeIndex={activeIndex} onPieEnter={handlePieEnter} dataKey="value"></CustomPieChart>

      <CustomBarChartInfo name="Product Sales" width={width} height={300} data={productSales} xAxis="product" dataKey="value"></CustomBarChartInfo>
    </div>
  );
}

export default App;

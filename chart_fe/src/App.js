import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { useEffect, useState } from "react";
// import Data from "./data";
import PieChart from "./component/PieChart";
import BarChart from "./component/BarChart";
import LineChart from "./component/LineChart";
import listAll from "./service/AppService";

Chart.register(CategoryScale);
 
export default function App() {

  // const [chartData, setChartData] = useState({
  //   labels: Data.map((data) => data.year), 
  //   datasets: [
  //     {
  //       label: "Users Gained ",
  //       data: Data.map((datas) => datas.userGain),
  //       backgroundColor: [
  //         "rgba(75,192,192,1)",
  //         "#ecf0f1",
  //         "#50AF95",
  //         "#f3ba2f",
  //         "#2a71d0"
  //       ],
  //       borderColor: "black",
  //       borderWidth: 2
  //     }
  //   ]
  // });
  const [data, setChartData] = useState([]);
  const getAppList = async () => {
    const appData = await listAll();
    setChartData(appData.data);
    console.log(appData.data);
  };

  const chartData = {
    labels: data.map((data) => data.year), 
    datasets: [
      {
        label: "Users Gained ",
        data: data.map((data) => data.userGain),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0"
        ],
        borderColor: "black",
        borderWidth: 2
      }
    ]
  }
  useEffect(() => {
    getAppList();
  },[])
 
  return (
    <div className="App">
      <div className="App">
      <PieChart chartData={chartData} />
      <BarChart chartData={chartData} />
      <LineChart chartData={chartData} />
    </div>
    </div>
  );
}

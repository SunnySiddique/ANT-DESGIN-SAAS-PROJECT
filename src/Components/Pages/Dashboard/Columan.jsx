import { useState } from "react";
import ReactApexChart from "react-apexcharts";

const ColumanCharts = () => {
  const [state, setState] = useState({
    series: [
      {
        name: "sales",
        data: [
          { x: 'Jan', y: 400 },
          { x: 'Fab', y: 430 },
          { x: 'Mar', y: 448 },
          { x: 'Apr', y: 470 },
          { x: 'May', y: 540 },
          { x: 'Jun', y: 580 },
          { x: 'Aug', y: 690 },
          { x: 'Sep', y: 690 },
        ],
      },
    ],
    options: {
      chart: {
        type: 'bar',
        height: 380,
      },
      plotOptions: {
        bar: {
          columnWidth: '50%', 
        },
        line: {
          show: false,
        },
      },
      xaxis: {
        type: 'category',
        labels: {
            style: {
                fontSize: '12px', // You can set your desired font size
                fontWeight: 700, // You can set your desired font weight
                colors: "rgb(148, 164, 196)",
                fontFamily: "Poppins",
              },
        },
        tooltip: {
          enabled: false,
        },
        title: {
          text: '',
        },
        
        group: {
          style: {
            fontSize: '10px',
            fontWeight: 700,
          },
        },
      },
      yaxis: {
        labels: {
          show: false,
        },
      },
      title: {
        text: '',
      },
      plotOptions: {
        bar: {
          borderRadiusBotom: "0px", // Set your desired border-radius value
          borderRadiusTop: "10px", // Set your desired border-radius value
        },
      },
    },
  });

  return (
    <div>
      <ReactApexChart options={state.options} series={state.series} type="bar" height={380} />
    </div>
  );
};

export default ColumanCharts;

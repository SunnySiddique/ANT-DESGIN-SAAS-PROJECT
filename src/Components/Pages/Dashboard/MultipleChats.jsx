import { useState } from "react";
import ReactApexChart from "react-apexcharts";

const MultipleChats = () => {
  const [state, setState] = useState({
    series: [44, 55, 67, 83],
    options: {
      chart: {
        height: 350,
        type: 'radialBar',
      },
      plotOptions: {
        radialBar: {
          dataLabels: {
            name: {
              fontSize: '22px',
            },
            value: {
              fontSize: '16px',
            },
          },
        },
      },
      labels: ['Apples', 'Oranges', 'Bananas', 'Berries'],
      colors: ["#1ab7ea", "#0084ff", "#39539E", "#0077B5"],
      borderRadius: "20px",
      dataLabels: {
        style: {
          display: 'none', // Hide data labels
        },
      },
      tooltip: {
        enabled: false, // Disable tooltips
      },
    },
  });

  return (
    <div>
      <ReactApexChart options={state.options} series={state.series} type="radialBar" height={300} />
    </div>
  );
};

export default MultipleChats;

import React from "react";
import ApexCharts from "apexcharts";
import "../css/style.css";

function Graphic({ data }) {
  let dashboardData = data[0] ? data[0] : {};
  let graphicValues = dashboardData.graficoValores;
  let graphicDataComAporte = graphicValues ? graphicValues.comAporte : {};
  let graphicDataSemAporte = graphicValues ? graphicValues.semAporte : {};

  const element = document.getElementById("graphic");
  

  let options = {
    series: [
      {
        name: "Sem Aporte",
        data: [
          // 1000, 1003.27, 1006.56, 1009.85, 1013.16, 1016.48, 1019.8, 1023.14,
          // 1026.49, 1029.85, 1033.22,
          graphicDataSemAporte[0],
          graphicDataSemAporte[1],
          graphicDataSemAporte[2],
          graphicDataSemAporte[3],
          graphicDataSemAporte[4],
          graphicDataSemAporte[5],
          graphicDataSemAporte[6],
          graphicDataSemAporte[7],
          graphicDataSemAporte[8],
          graphicDataSemAporte[9],
          graphicDataSemAporte[10],
        ],
      },
      {
        name: "Com Aporte",
        data: [
          // 1000, 1103.27, 1206.89, 1310.84, 1415.13, 1519.76, 1624.74, 1730.05,
          // 1835.72, 1941.73, 2048.08,
          graphicDataComAporte[0],
          graphicDataComAporte[1],
          graphicDataComAporte[2],
          graphicDataComAporte[3],
          graphicDataComAporte[4],
          graphicDataComAporte[5],
          graphicDataComAporte[6],
          graphicDataComAporte[7],
          graphicDataComAporte[8],
          graphicDataComAporte[9],
          graphicDataComAporte[10],
        ],
      },
    ],
    chart: {
      type: "bar",
      height: 250,
      stacked: true,
    },

    colors:["#000000", "#fd9b58"],

    dataLabels: {
      enabled: false,
    },

    yaxis: {
      show: true,
      labels: {
        show: false,
      },
      title: {
        text: "Valor (R$)",
        offsetX: 20,
      },
    },

    xaxis: {
      type: "numeric",
      title: {
        text: "Tempo (meses)",
      },
      categories: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    },
    stroke: {
      width: 3,
      colors: ["#EBEBEB"]
    },
  };
  let chart = new ApexCharts(element, options);

  if(element) {
    chart.render();
    chart.resetSeries();
  }

  return (
    <>
      <h3 id="dashboardH3">Projeção de Valores</h3>
      <div id="graphic"></div>
    </>
  );
}

export default Graphic;

import React from "react";
import ApexCharts from "apexcharts";
import "../css/style.css";

function Graphic({ data }) {
  let dashboardData = data ? data : {};
  let graphicValues = dashboardData.graficoValores;
  let graphicDataComAporte = graphicValues ? Object.values(graphicValues.comAporte) : {};
  let graphicDataSemAporte = graphicValues ? Object.values(graphicValues.semAporte) : {};

  const element = document.getElementById("graphic");
  

  let options = {
    series: [
      {
        name: "Sem Aporte",
        data: graphicDataSemAporte,
      },
      {
        name: "Com Aporte",
        data: graphicDataComAporte,
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

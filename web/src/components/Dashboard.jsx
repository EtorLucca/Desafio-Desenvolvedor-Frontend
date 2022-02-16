import React from "react";

function Dashboard({ data }) {
  let dashboardData = data ? data : {};

  return (
    <>
      <h2>Resultado da Simulação</h2>
      <div className="results">
        <div className="card">
          <h3>Valor Final Bruto</h3>
          <span>R$ {dashboardData.valorFinalBruto}</span>
        </div>
        <div className="card">
          <h3>Alíquota do IR</h3>
          <span>{dashboardData.aliquotaIR}%</span>
        </div>
        <div className="card">
          <h3>Valor Pago em IR</h3>
          <span>R$ {dashboardData.valorPagoIR}</span>
        </div>
        <div className="card">
          <h3>Valor Final Líquido</h3>
          <span className="green">R$ {dashboardData.valorFinalLiquido}</span>
        </div>
        <div className="card">
          <h3>Valor Total Investido</h3>
          <span>R$ {dashboardData.valorTotalInvestido}</span>
        </div>
        <div className="card">
          <h3>Ganho Líquido</h3>
          <span className="green">R$ {dashboardData.ganhoLiquido}</span>
        </div>
      </div>
    </>
  );
}
// }

export default Dashboard;

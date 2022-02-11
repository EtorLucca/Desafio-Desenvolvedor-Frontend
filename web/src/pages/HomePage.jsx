import React, { useEffect, useState } from "react";
import YieldToggleButton from "../components/YeldToggleButton";
import IndexToggleButton from "../components/IndexToggleButton";
import { getIndicadores, getSimulacoes } from "../services/api";
import MaskedInput from "../components/MaskedInput";
import Dashboard from "../components/Dashboard";
import { Button } from "@mui/material";
import info from "../img/info.svg";
import "../css/style.css";
import "../css/responsivel.css";
import Graphic from "../components/Graphic";

function HomePage() {
  const [listaSimulacao, setListaSimulacao] = useState("");
  const [aportes, setAportes] = useState({
    inicial: "",
    mensal: "",
    prazo: "",
    rentabilidade: "",
  });
  const [cdi, setCDI] = useState("");
  const [ipca, setIPCA] = useState("");
  const [disabled, setDisabled] = useState(true);
  const inputs = document.querySelectorAll("input");
  const [yType, setYType] = useState("bruto");
  const [iType, setIType] = useState("pos");
  const [dashboardData, setDashboardData] = useState([]);

  //---------------------------Carrega dos dados ------------------------------
  const loadData = async () => {
    try {
      const responseIndicador = await getIndicadores();
      const responseSimulacao = await getSimulacoes();
      setCDI(responseIndicador.data[0]);
      setIPCA(responseIndicador.data[1]);
      setListaSimulacao(responseSimulacao.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    (async () => await loadData())();
  }, []);

  //---------------------------Ativa e desativa botão submit-------------------

  inputs.forEach((input) => {
    input.addEventListener("keyup", () => {
      if (checkInputs(inputs)) {
        setDisabled(false);
      } else {
        setDisabled(true);
      }
    });
  });

  function checkInputs(inputs) {
    let filled = true;

    inputs.forEach((input) => {
      if (input.value === "") {
        filled = false;
      }
    });

    return filled;
  }

  //---------------------------funções diversas -------------------------------

  function loadFilter() {
    return listaSimulacao.filter((lista) => {
      if (lista.tipoRendimento === yType && lista.tipoIndexacao === iType) {
        return lista;
      }
    });
  }

  //---------------------------handleFunctions---------------------------------

  function handleChange(e) {
    setAportes({
      ...aportes,
      [e.target.name]: e.target.value,
    });
  }

  function handleYType(type) {
    setYType(type);
  }

  function handleIType(type) {
    setIType(type);
  }

  function handleClear() {
    setAportes({
      inicial: "",
      mensal: "",
      prazo: "",
      rentabilidade: "",
    });
    setDisabled(true);
    document.getElementById("dashboard").style.display = "none";
  }

  function handleSubmit(e) {
    e.preventDefault();

    setDashboardData(loadFilter());

    document.getElementById("dashboard").style.display = "block";
  }
  //---------------------------------------------------------------------------

  return (
    <>
      <div className="container">
        <h1 className="title">Simulador de Investimentos</h1>
        <div className="align">
          <div id="calculator">
            <h2>Simulador</h2>
            <form className="simulator">
              <div className="col1">
                <h4>
                  Rendimento
                  <img className="info" src={info} alt="aporte info" />
                </h4>
                <YieldToggleButton onChange={handleYType} />
                <label className="label" htmlFor="aporte">
                  Aporte Inicial
                </label>
                <MaskedInput
                  name="inicial"
                  id="aporteInicial"
                  mask="R$ 9.999,99"
                  value={aportes.inicial}
                  onChange={handleChange}
                />

                <label className="label" htmlFor="prazo">
                  Prazo em Meses
                </label>
                <MaskedInput
                  name="prazo"
                  id="prazo"
                  mask=""
                  value={aportes.prazo}
                  onChange={handleChange}
                />

                <label className="label" htmlFor="ipca">
                  IPCA (ao ano)
                </label>
                <input
                  id="ipca"
                  value={`${ipca.valor} %`}
                  className="textField"
                  readOnly
                />

                <Button
                  id="btn-clear"
                  variant="outlined"
                  color="inherit"
                  onClick={handleClear}
                >
                  Limpar
                </Button>
              </div>
              <div className="col2">
                <h4>
                  Tipos de indexação
                  <img className="info" src={info} alt="aporte info" />
                </h4>
                <IndexToggleButton id="index" onChange={handleIType} />
                <label className="label" htmlFor="aporte">
                  Aporte Mensal
                </label>
                <MaskedInput
                  name="mensal"
                  id="aporteMensal"
                  mask="R$ 9.999,99"
                  value={aportes.mensal}
                  onChange={handleChange}
                />

                <label className="label" htmlFor="prazo">
                  Rentabilidade
                </label>
                <MaskedInput
                  name="rentabilidade"
                  id="rentabilidade"
                  mask="99 %"
                  value={aportes.rentabilidade}
                  onChange={handleChange}
                />

                <label className="label" htmlFor="cdi">
                  CDI (ao ano)
                </label>
                <input
                  id="cdi"
                  value={`${cdi.valor} %`}
                  className="textField"
                  readOnly
                />

                <Button
                  type="submit"
                  id="btn-submit"
                  variant="contained"
                  color="warning"
                  disabled={disabled}
                  onClick={handleSubmit}
                >
                  Simular
                </Button>
              </div>
            </form>
          </div>

          <div  id="dashboard">
            <Dashboard prop={dashboardData} />
            <Graphic prop={dashboardData} />
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;

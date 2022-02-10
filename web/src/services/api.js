import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:5000",
});

export const getIndicadores = async () => {
  return api.get("/indicadores");
};

export const getSimulacoes = async () => {
  return api.get("/simulacoes");
};

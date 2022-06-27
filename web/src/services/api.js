import axios from "axios";

export const api = axios.create({
  baseURL: "",
});

export const getIndicadores = async () => {
  return await api.get("https://apisimuladorderendimentos.glitch.me/indicadores");
};

export const getSimulacoes = async () => {
  return await api.get("https://apisimuladorderendimentos.glitch.me/simulacoes");
};

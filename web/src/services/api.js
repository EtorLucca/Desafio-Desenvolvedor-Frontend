import axios from "axios";

export const api = axios.create({
  baseURL: "https://apisimuladordeinvestimentos.glitch.me",
});

export const getIndicadores = async () => {
  return api.get("/indicadores");
};

export const getSimulacoes = async () => {
  return api.get("/simulacoes");
};

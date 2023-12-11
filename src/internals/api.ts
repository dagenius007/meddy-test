import axios from "axios";
import { config } from "./env.config";

const request = axios.create({
  baseURL: config.baseURL as string,
  headers: {
    "Content-Type": "application/json",
  },
});

// handleError;

// request.interceptors.response.use(function (config) {
//   const token = localStorage.getItem("merchant_token");
//   config.headers.Authorization = token ? `Bearer ${token}` : "";
//   return config;
// });

export default request;

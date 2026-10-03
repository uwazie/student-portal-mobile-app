import axios from "axios";

const api = axios.create({
  baseURL: "http://192.168.137.1:8000/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
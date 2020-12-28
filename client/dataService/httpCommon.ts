import axios from "axios";

const backendUrl = process.env.BACKEND_URL || "localhost";
const backendPort = process.env.BACKEND_PORT || "3000";
export default axios.create({
  baseURL: `http://${backendUrl}:${backendPort}`,
  headers: {
    "Content-type": "application/json",
  },
  withCredentials: true
});
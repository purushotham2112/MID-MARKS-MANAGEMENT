import axios from "axios";
import config from "../config/config";

// Create Axios instance with dynamic base URL
const API = axios.create({
  baseURL: config.API_URL
});

// Attach token automatically
API.interceptors.request.use((req) => {
  const user = JSON.parse(localStorage.getItem("user"));

  if (user?.token) {
    req.headers.Authorization = `Bearer ${user.token}`;
  }

  return req;
});

export default API;
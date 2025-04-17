import axios, { AxiosInstance } from "axios";

const axiosInstances: AxiosInstance = axios.create({
  baseURL: import.meta.env.BACKEND_URL,
  timeout: 10000,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

axiosInstances.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token"); // or from a cookie
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

axiosInstances.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
    }
    return Promise.reject(error);
  }
);

export default axiosInstances;

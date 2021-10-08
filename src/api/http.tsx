import axios,{ AxiosInstance, AxiosRequestConfig } from "axios";
import router from "../route/route";

interface Interceptors {
  hook(instance: AxiosInstance): void;
}

type IConfig={
  baseURL:string;
  headers:null;
  interceptors: Interceptors | null;
  timeout: number
}

// create an axios instance
const service = axios.create({
  baseURL: process.env.REACT_APP_BASE_API,
  headers: {
    // "Content-Type": "application/json"
  },
  timeout: 60000 // request timeout
});

service.interceptors.request.use(
  function(config) {
    return config;
  },
  function(error) {
    return Promise.reject(error);
  }
);

service.interceptors.response.use(
  function(response) {
    return response;
  },
  function(error) {
    const {status} = error.response
    if(status === 403 || status === 401)
      // window.history.go(router[0].path)

    return Promise.reject(error);
  }
);

export default service;

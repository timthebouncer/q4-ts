import axios from "axios";
import router from "../route/route";


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

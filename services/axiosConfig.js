import axios from "axios";

var axiosInstance = axios.create();

axiosInstance.interceptors.request.use(
  async function (config) {
    let access_token = "Bearer b2168bae3a2c67509eb6b97572f521c2";

    config.baseURL = "https://api.themoviedb.org/3/";

    config.headers = {
      "Content-Type": "application/json",
      Authorization: access_token,
    };
  
    return config;
  },
  function (error) {
    return promise.reject(error);
  }
);

export default axiosInstance;

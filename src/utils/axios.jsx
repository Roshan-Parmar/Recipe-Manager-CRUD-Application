import axios from "axios";

const instance = axios.create({
    baseURL : "https://fakestoreapi.com",
    timeout: 10000, // Optional: Set a timeout for requests     
});

instance.interceptors.request.use(function (config) {
    console.log("Request made with:", config);
    return config;
  }, function (error) {
    return Promise.reject(error);
});

instance.interceptors.response.use(function (response) {
    console.log("Response received:", response);
    return response;
  }, function (error) {
    return Promise.reject(error);
  });

export default instance;
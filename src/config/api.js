import axios, {interceptors} from "axios";
import Constants from "expo-constants";
// import {getToken, removeToken} from "../utils/token";

const {manifest} = Constants;

const axiosInstance = axios.create({
    baseURL: `http://${manifest.debuggerHost.split(':').shift()}:3002/api`,
    headers: {
        "Content-type": "application/json"
    }
})
//
// axiosInstance.interceptors.request.use(
//     async (config) => {
//         const token = await getToken();
//         if (token) {
//             config.headers["Authorization"] = `Bearer ${token}`
//         }
//         return config;
//     },
//     (error) => Promise.reject(error)
// )
//
// axiosInstance.interceptors.request.use(
//     (config) => config,
//     async (error) => {
//         const responceError = error?.response?.data;
//         if (responceError.code === "X06") {
//             await removeToken();
//         }
//         return Promise.reject(error);
//     }
// )


export default axiosInstance;
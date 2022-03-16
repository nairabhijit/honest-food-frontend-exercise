import axios, { AxiosInstance } from "axios";
let axiosInstance: AxiosInstance | null = null;
export const getAxiosInstance = () => {
  if (!axiosInstance) {
    const baseURL = process.env.REACT_APP_API_BASEURL;
    axiosInstance = axios.create({
      baseURL,
    });
  }
  return axiosInstance;
};

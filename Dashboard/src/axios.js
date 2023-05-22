import axios from "axios";

export const makeRequest = axios.create({
  baseURL:
    process.env.REACT_APP_PROD === "YES"
      ? "https://api.hotelgreenlandbd.com/api"
      : "http://localhost:5000/api",
  withCredentials: true,
});

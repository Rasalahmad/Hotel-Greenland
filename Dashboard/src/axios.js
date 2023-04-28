import axios from "axios";

export const makeRequest = axios.create({
  baseURL:
    process.env.PROD === "YES"
      ? "http://api.hotelgreenlandbd.com/api"
      : "http://localhost:5000/api",
  withCredentials: true,
});

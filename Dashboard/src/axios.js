import axios from "axios";

export const makeRequest = axios.create({
  baseURL: "https://api.hotelgreenlandbd.com/api",
  withCredentials: true,
});

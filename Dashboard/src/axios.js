import axios from "axios";

export const makeRequest = axios.create({
  baseURL: "http://api.hotelgreenlandbd.com/api",
  withCredentials: true,
});

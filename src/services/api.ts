import axios from "axios";

export const API_KEY = `66b202b6cec02183a78be3c94746b3b2`;
export const BASE_URL = `https://api.themoviedb.org/`;

export default axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY,
  },
});

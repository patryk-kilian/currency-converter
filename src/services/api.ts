import axios from 'axios';

const API_KEY = import.meta.env.VITE_CURRENCY_API_KEY;
const BASE_URL = import.meta.env.VITE_CURRENCY_API_BASE_URL;

export const api = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY,
  },
});

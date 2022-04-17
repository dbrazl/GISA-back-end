import axios from 'axios';

const SGPS_URL: string = 'http://localhost:5001';

export const sgpsAPI = axios.create({
  baseURL: SGPS_URL,
});
import axios from 'axios';

// const BASE_URL = "https://bullharvest-server.vercel.app";
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export default axios.create({
  baseURL: BASE_URL,
});

export const axiosPrivate = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

// https://bullharvest-server.vercel.app/users/getallusers

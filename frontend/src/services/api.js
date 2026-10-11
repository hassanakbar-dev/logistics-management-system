import axios from 'axios';

// Backend server URL (jo port 5000 par chal raha hai)
const API = axios.create({
  baseURL: 'http://localhost:5000/api',
});

// sessionStorage se token read karne ke liye request interceptor
API.interceptors.request.use((req) => {
  const token = sessionStorage.getItem('token');
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
}, (error) => {
  return Promise.reject(error);
});

export default API;
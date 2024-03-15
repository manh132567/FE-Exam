import axios from 'axios';

const api = axios.create({
  baseURL: 'https://frontend-exam.digitalfortress.dev', // Your API base URL
  timeout: 5000, // Timeout in milliseconds
  headers: {
    'Content-Type': 'application/json',
    // Add any other headers you need
  },
});


// Add interceptor to include token in request headers
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('access_token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
});

export default api;
// src/axiosConfig.js

import axios from 'axios';

axios.defaults.baseURL = 'http://yourbackendapi.com'; // Update with your backend URL

axios.interceptors.request.use(
  config => {
    const token = localStorage.getItem('access_token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  error => Promise.reject(error)
);

axios.interceptors.response.use(
  response => response,
  async error => {
    const originalRequest = error.config;

    if (error.response.status === 401 && error.response.data.code === 'token_not_valid') {
      const refreshToken = localStorage.getItem('refresh_token');

      if (refreshToken) {
        try {
          const response = await axios.post('/api/token/refresh/', { refresh: refreshToken });
          localStorage.setItem('access_token', response.data.access);
          axios.defaults.headers['Authorization'] = `Bearer ${response.data.access}`;
          originalRequest.headers['Authorization'] = `Bearer ${response.data.access}`;
          return axios(originalRequest);
        } catch (err) {
          console.error('Refresh token is invalid', err);
          window.location.href = '/'; // Redirect to home page on refresh token error
        }
      }
    }

    return Promise.reject(error);
  }
);

export default axios;

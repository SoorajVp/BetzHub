import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:4000/', // Set your API base URL here
});

// Request interceptor to add headers
axiosInstance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('betzhubToken');
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default axiosInstance;